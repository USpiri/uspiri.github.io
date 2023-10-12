import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://USpiri.github.io',
  base: '/',
  integrations: [tailwind(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'material-theme-darker',
      langs: [],
      wrap: true
    }
  }
});