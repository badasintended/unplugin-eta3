/// <reference types="vite/client" />

declare module "*.eta" {
  import type { TemplateFunction } from "eta/dist/types/compile";

  const template: TemplateFunction;
  export default template;
}
