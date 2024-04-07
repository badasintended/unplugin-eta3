import type { Options } from "tsup";

export default <Options>{
  entry: [
    "src/*.ts",
  ],
  clean: true,
  format: ["cjs", "esm"],
  dts: {
    entry: "",
  },
  onSuccess: "npm run build:fix",
};
