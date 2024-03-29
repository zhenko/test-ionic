﻿import legacy from "@vitejs/plugin-legacy";
import vue from "@vitejs/plugin-vue";
import json from "@rollup/plugin-json";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy(),
    {
      ...json(),
      apply: "build",
    },
    VitePWA({ registerType: "autoUpdate" }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
