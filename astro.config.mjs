import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.versaovegana.net.br',
  output: 'static',
  trailingSlash: 'never',
  integrations: [react(), sitemap()],
  build: {
    format: 'file',
  },
});
