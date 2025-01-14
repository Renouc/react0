import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
export default defineConfig({
  resolve: {
    alias: {
      "@": "src",
      react: path.posix.resolve("src/react"),
      "react-dom": path.posix.resolve("src/react-dom"),
      "react-reconciler": path.posix.resolve("src/react-reconciler"),
      scheduler: path.posix.resolve("src/scheduler"),
      shared: path.posix.resolve("src/shared"),
    },
  },
  plugins: [react()],
});
