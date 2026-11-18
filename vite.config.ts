import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import { defineConfig, type Plugin } from "vite";

// The dev server injects <style> tags and opens an HMR websocket, both blocked by the CSP.
const stripCspInDev: Plugin = {
  name: "strip-csp-in-dev",
  apply: "serve",
  transformIndexHtml: (html) =>
    html.replace(/<meta\s+http-equiv="Content-Security-Policy"[^>]*>\s*/, ""),
};

export default defineConfig({
  base: "/",
  plugins: [vue(), tailwindcss(), stripCspInDev],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 3100,
    host: true,
  },
  build: {
    outDir: "./dist",
    sourcemap: false,
    minify: "esbuild",
  },
});
