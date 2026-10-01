import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  adapter: vercel(),
  site: 'https://admin.omixsystems.store',
  output: 'static',
  compressHTML: true,
  vite: {
    server: {
      allowedHosts: ['.e2b.app'],
    },
  },
});
