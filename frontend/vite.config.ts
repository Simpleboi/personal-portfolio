import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tempo } from "tempo-devtools/dist/vite";
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [tempo(), react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src")
    },
  },
  server: {
    // @ts-ignore
    allowedHosts: process.env.TEMPO === "true" ? true : undefined,
  },
});
