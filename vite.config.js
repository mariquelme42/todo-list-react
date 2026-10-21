import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" genera rutas relativas, así el build funciona
// tanto en GitHub Pages (subcarpeta) como en Vercel o Netlify.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
