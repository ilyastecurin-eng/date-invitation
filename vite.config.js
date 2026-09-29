import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" — относительные пути к файлам.
// Благодаря этому сайт работает на GitHub Pages по адресу
// https://<логин>.github.io/<любое-имя-репозитория>/ без дополнительной настройки.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
