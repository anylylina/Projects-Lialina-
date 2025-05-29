import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  base: "Projects-Lialina-",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(
        path.dirname(new URL(import.meta.url).pathname),
        "./src",
      ),
    },
  },
});
