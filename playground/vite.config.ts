import { env } from "node:process";
import type { UserConfig } from "vite";
import { defineConfig } from "vite";
import Inspect from "vite-plugin-inspect";
import Unplugin from "../src/vite";

const target = env.TARGET ?? "missingno";

const config: Record<string, UserConfig> = {
  client: {
    plugins: [
      Inspect(),
      Unplugin(),
    ],
    root: "./client",
  },

  worker: {
    plugins: [
      Unplugin({
        eta: {
          autoTrim: false,
        },
      }),
    ],
    root: "./worker",
    build: {
      outDir: "../dist",
      lib: {
        entry: "index.ts",
        fileName: "worker",
        name: "worker",
        formats: ["es"],
      },
    },
  },
};

export default defineConfig(config[target]);
