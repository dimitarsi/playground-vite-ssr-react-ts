import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import babel from "@rollup/plugin-babel";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: false,
    rollupOptions: {
      plugins: [
        babel({
          babelHelpers: "bundled",
          plugins: ["@loadable/babel-plugin"],
        }),
      ],
    },
  },
});
