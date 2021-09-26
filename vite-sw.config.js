import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import workbox from "rollup-plugin-workbox-inject";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  ssr: {
    target: "webworker",
    noExternal: true,
  },
  build: {
    rollupOptions: {
      plugins: [
        workbox({
          globDirectory: "./dist/client",
          globPatterns: ["assets/**/*.css", "assets/**/*.js"],
        }),
      ],
    },
  },
});
