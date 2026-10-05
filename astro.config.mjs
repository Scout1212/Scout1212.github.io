// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  // GitHub Pages user site. Change this if the site moves to a custom domain.
  site: 'https://scout1212.github.io',
  integrations: [mdx()],
});
