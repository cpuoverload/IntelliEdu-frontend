import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // 将 @ 映射到 /src 目录
    },
  },
  css: {
    modules: {
      generateScopedName: "[name]__[local]__[hash:base64:5]",
    },
  },
  server: {
    // 代理，解决开发环境跨域问题
    proxy: {
      "/api/user": {
        target: "http://localhost:8081",
        changeOrigin: true,
      },
      "/api/application": {
        target: "http://localhost:8082",
        changeOrigin: true,
      },
    },
  },
});
