import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      // name: "mind-elixir-toggle-all-node",
      // 将添加适当的扩展名后缀
      fileName: "toggle-all-node",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["mind-elixir"],
    },
  },
});
