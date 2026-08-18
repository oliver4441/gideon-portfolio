import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

const navigationUpgrade = {
  name: 'navigation-upgrade-styles',
  transformIndexHtml(html) {
    return {
      html,
      tags: [{
        tag: 'link',
        attrs: { rel: 'stylesheet', href: '/navigation-upgrade.css' },
        injectTo: 'head'
      }]
    };
  }
};

export default defineConfig({
  adapter: vercel(),
  site: 'https://admin.omixsystems.store',
  output: 'server',
  compressHTML: true,
  vite: { plugins: [navigationUpgrade] },
});
