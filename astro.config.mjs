import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import rehypePrettyCode from 'rehype-pretty-code';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://USpiri.github.io',
  base: '/',
  integrations: [tailwind(), sitemap(), mdx()],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      [rehypePrettyCode,
        {
          theme: 'material-theme-darker',
          keepBackground: false,
        }
      ],
    ]
  }
});