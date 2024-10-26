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
    proxy: {
      // 如果后端开启了网关，只开启这个就行
      "/api": {
        target: "http://localhost:8085",
        changeOrigin: true,
      },
      // 如果后端没开启网关，需要分别配置
      // "/api/user": {
      //   target: "http://localhost:8081",
      //   changeOrigin: true,
      // },
      // "/api/application": {
      //   target: "http://localhost:8082",
      //   changeOrigin: true,
      // },
      // "/api/scoring": {
      //   target: "http://localhost:8083",
      //   changeOrigin: true,
      // },
      // "/api/answer-record": {
      //   target: "http://localhost:8084",
      //   changeOrigin: true,
      // },
    },
  },
});
