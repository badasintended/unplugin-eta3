# unplugin-eta3

[![NPM version](https://img.shields.io/npm/v/unplugin-eta3?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-eta3)

Plugin to precompile Eta functions, making it possible to be used in serverless context like Cloudflare Workers.

## Install

```bash
npm i --save-dev unplugin-eta3
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import eta from "unplugin-eta3/vite";

export default defineConfig({
  plugins: [
    eta({ /* options */ }),
  ],
});
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import eta from "unplugin-eta3/rollup";

export default {
  plugins: [
    eta({ /* options */ }),
  ],
};
```

<br></details>


<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require("unplugin-eta3/webpack")({ /* options */ })
  ]
};
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default defineNuxtConfig({
  modules: [
    ["unplugin-eta3/nuxt", { /* options */ }],
  ],
});
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require("unplugin-eta3/webpack")({ /* options */ }),
    ],
  },
};
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from "esbuild";
import eta from "unplugin-eta3/esbuild";

build({
  plugins: [eta()],
});
```

<br></details>

## TypeScript Types
Declare the module
```typescript
declare module "*.eta" {
  import type { TemplateFunction } from "eta/dist/types/compile";

  const template: TemplateFunction;
  export default template;
}
```

## Usage
```eta
Hello <%= it.hello %>!
```

```typescript
import { Eta } from "eta";
import template from "./template.eta";

const eta = new Eta();
const output = eta.render(template, { hello: "World" });

console.log(output);
```