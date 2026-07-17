import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    allowedHosts: [".loca.lt", ".trycloudflare.com"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          mui: [
            "@mui/material",
            "@mui/icons-material",
            "@emotion/react",
            "@emotion/styled",
          ],
          animation: ["framer-motion", "react-type-animation"],
          router: ["react-router-dom"],
        },
      },
    },
  },
});
