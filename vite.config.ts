import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Served from https://bailando.github.io/bailax_studios/ on GitHub Pages.
  base: "/bailax_studios/",
  plugins: [react()],
});
