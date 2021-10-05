import { defineConfig } from "vite";
import { ManifestOptions, VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";
import babel from "@rollup/plugin-babel";

const manifest: Partial<ManifestOptions> = {
  short_name: "App Template",
  name: "Generic App Template",
  icons: [
    {
      src: "/icons/icon-144x144.png",
      type: "image/png",
      sizes: "144x144",
    },
  ],
  start_url: "/?source=pwa",
  background_color: "#3367D6",
  display: "standalone",
  scope: "/",
  theme_color: "#3367D6",
  shortcuts: [
    {
      name: "Mission",
      short_name: "Mission",
      description: "Our mission",
      url: "/about?source=pwa",
      icons: [{ src: "/icons/maskable-480x480.svg" }],
    },
    {
      name: "Contact",
      short_name: "Contact",
      description: "Send inquiries",
      url: "/contact?source=pwa",
      icons: [{ src: "/icons/maskable-480x480.svg" }],
    },
  ],
  description: "Generic App Description",
  screenshots: [
    {
      src: "/images/screenshot-390x590.png",
      type: "image/png",
      sizes: "390x590",
    },
  ],
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: manifest,
    }),
  ],
  build: {
    minify: false,
    rollupOptions: {
      plugins: [],
    },
  },
});
