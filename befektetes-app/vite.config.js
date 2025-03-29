import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    transformMode: {
      web: [/.[jt]sx?$/]
    },
    include: ["src/tests/**/*.test.{js,jsx,ts,tsx}"],
  },
});
