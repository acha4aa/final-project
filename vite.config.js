import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
  },
  server: {
    host: true,
    allowedHosts: [".ngrok-free.app"],
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        display: "standalone",
        name: "m0viEZze",
        short_name: "m0viEZze",
        description:
          "Movie collection finder application that uses the TMDB API.",
        theme_color: "#821103",
        icons: [
          {
            src: "/cat.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/cat.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
