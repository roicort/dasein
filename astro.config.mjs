// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // If you host the site under a subdirectory (example.com/dasein),
  // set both `site` (full public URL) and `base` (path prefix).
  site: "http://localhost",
  base: "/dasein/",
  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
