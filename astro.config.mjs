import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://USpiri.github.io',
  base: '/',
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'material-theme-darker',
      langs: [],
      wrap: true,
    },
  },
});