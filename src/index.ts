import { Eta } from "eta";
import type { UnpluginFactory } from "unplugin";
import { createUnplugin } from "unplugin";
import type { Options } from "./types";

export const unpluginFactory: UnpluginFactory<Options | undefined> = function (options) {
  const include = options?.include ?? [/\.eta$/];
  const eta = new Eta(options?.eta);

  return {
    name: "unplugin-eta3",
    transformInclude(id) {
      return include.some(regex => id.match(regex));
    },
    transform(template) {
      return `
        export default ${eta.compile(template)};
      `;
    },
  };
};

export const unplugin = createUnplugin(unpluginFactory);

export default unplugin;
