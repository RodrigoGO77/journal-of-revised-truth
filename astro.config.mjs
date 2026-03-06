import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://journalofrevisedtruth.netlify.app',
  integrations: [sitemap()],
});
