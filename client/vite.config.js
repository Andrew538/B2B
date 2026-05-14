import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [
    react(),
  
  ],
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        loadPaths: ["src/styles"],
        additionalData: `@use "variable" as *; @use "mixin" as *;`,
      
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // 1. Если это общий компонент (Header, Button и т.д.), НЕ кладем в админку
          if (id.includes("src/components/")) {
            return "vendor"; // 
          }
          // 2. Только страницы из папки админки кладем в чанк
          if (id.includes("src/pages/pagesAdmin/")) {
            return "admin-panel";
          }
        },
      },
    },
    sourcemap: false, 
  },
  esbuild: {
    // Удаляем console.log и console.debug только в продакшене
    drop: ['console', 'debugger'],
    legalComments: 'none'
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "react-router-dom": "react-router-dom",
      "@mui/material": path.resolve(__dirname, "./node_modules/@mui/material"),
      "@emotion/react": path.resolve(
        __dirname,
        "./node_modules/@emotion/react",
      ),
    },
  },
});
