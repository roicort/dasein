// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "static",
  // If you host the site under a subdirectory (example.com/dasein),
  // set both `site` (full public URL) and `base` (path prefix).
  site: "http://roicort.github.io",
  base: "/dasein",
  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
