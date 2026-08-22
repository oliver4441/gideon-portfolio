import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

const navigationUpgrade = {
  name: 'navigation-upgrade-styles',
  transform(code, id) {
    if (id.includes('/src/styles/global.css')) {
      return `@import url('/navigation-upgrade.css');\n${code}\n
/* Final production contrast pass: all portfolio text is white over the space background. */
:root {
  --ink: #ffffff;
  --muted: #ffffff;
  --line: rgba(255,255,255,.30);
  --accent: #d69a4b;
}
html, body { color: #ffffff !important; }
.space-scene:before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(2,4,11,.40);
  pointer-events: none;
}
.site-nav {
  background: rgba(2,4,11,.84) !important;
  border-bottom-color: rgba(255,255,255,.22) !important;
}
.eyebrow,
.section-label,
.work-index,
.capability span,
.capability p,
.note-row span,
.hero-photo figcaption,
.site-footer span,
.site-footer small,
.hero-intro,
.prose,
.current-copy,
.life-copy p,
.contact-section > p,
.work-content > p:not(.eyebrow),
.omix-description,
.omix-panel .eyebrow {
  color: #ffffff !important;
}
h1, h2, h3, h4,
.hero-lede,
.text-link,
.work-content a,
.site-footer a,
.site-nav .wordmark,
.site-nav .nav-links a,
.site-nav .nav-company,
.section-rail .rail-label,
.section-rail .rail-link,
.mobile-index-toggle,
.mobile-index,
.mobile-index-links a,
.mobile-index-links a span {
  color: #ffffff !important;
}
h1,h2,h3,h4 {
  font-weight: 600;
  text-shadow: 0 1px 18px rgba(0,0,0,.34);
}
.text-link,
.work-content a,
.site-footer a { border-color: #ffffff !important; }
.button.dark,
.button.light {
  background: #ffffff !important;
  color: #0b0d14 !important;
  border-color: #ffffff !important;
}
.button.outline {
  color: #ffffff !important;
  border-color: #ffffff !important;
}
.progress { background: #ffffff !important; }
.section-rail .rail-link:hover,
.section-rail .rail-link.is-active {
  color: #ffffff !important;
  background: rgba(2,4,11,.86) !important;
}
.section-rail .rail-progress { background: rgba(255,255,255,.24) !important; }
.section-rail .rail-progress i { background: #ffffff !important; }
.mobile-index-toggle,
.mobile-index {
  color: #ffffff !important;
  background: rgba(2,4,11,.94) !important;
  border-color: rgba(255,255,255,.24) !important;
}
.mobile-index-links a,
.mobile-index-links a span,
.mobile-index-head,
.mobile-index-head button {
  color: #ffffff !important;
}
.wordmark > img { display: block !important; }
.hero-photo,
.life-images { display: initial !important; }
.life-images { display: grid !important; }
.hero-photo { display: block !important; }
`;
    }
    return null;
  }
};

export default defineConfig({
  adapter: vercel(),
  site: 'https://admin.omixsystems.store',
  output: 'server',
  compressHTML: true,
  vite: { plugins: [navigationUpgrade] },
});
