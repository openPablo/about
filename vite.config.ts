import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import { enhancedImages } from '@sveltejs/enhanced-img';

// https://vite.dev/config/
export default defineConfig({
  plugins: [enhancedImages(),tailwindcss(), svelte()],
});
