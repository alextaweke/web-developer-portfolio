// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/alextaweke", // <-- Change this to match your GitHub repo name
  plugins: [react()],
});
