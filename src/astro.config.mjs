import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

const navigationUpgrade = {
  name: 'navigation-upgrade-styles',
  transform(code, id) {
    if (id.endsWith('/src/styles/global.css')) {
      return `@import url('/navigation-upgrade.css');\n${code}\n
/* Contrast pass: use white for all portfolio text while preserving the space background and imagery. */
:root {
  --ink: #ffffff;
  --muted: #ffffff;
  --line: rgba(255,255,255,.30);
  --accent: #d69a4b;
}
body { color: #ffffff; }
.space-scene:before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(2,4,11,.38);
  pointer-events: none;
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
.contact-section>p,
.work-content>p:not(.eyebrow),
.omix-description,
.omix-panel .eyebrow {
  color: #ffffff;
}
h1,h2,h3,h4,
.hero-lede,
.text-link,
.work-content a,
.site-footer a,
.nav-links a,
.nav-company,
.wordmark,
.section-rail .rail-label,
.section-rail .rail-link,
.mobile-index-toggle,
.mobile-index,
.mobile-index-links a,
.mobile-index-links a span {
  color: #ffffff;
}
h1,h2,h3,h4 {
  font-weight: 600;
  text-shadow: 0 1px 18px rgba(0,0,0,.32);
}
.text-link,
.work-content a,
.site-footer a { border-color: #ffffff; }
.button.dark {
  background: #ffffff;
  color: #0b0d14;
  border-color: #ffffff;
}
.button.light {
  background: #ffffff;
  color: #0b0d14;
  border-color: #ffffff;
}
.button.outline {
  color: #ffffff;
  border-color: #ffffff;
}
.progress { background: #ffffff; }
.section-rail .rail-label,
.section-rail .rail-link { color: #ffffff; }
.section-rail .rail-link:hover,
.section-rail .rail-link.is-active {
  color: #ffffff;
  background: rgba(2,4,11,.84);
}
.section-rail .rail-progress { background: rgba(255,255,255,.24); }
.section-rail .rail-progress i { background: #ffffff; }
.site-nav .wordmark,
.site-nav .nav-links a,
.site-nav .nav-company {
  color: #ffffff;
}
.site-nav {
  background: rgba(2,4,11,.76);
  border-bottom-color: rgba(255,255,255,.22);
}
.mobile-index-toggle,
.mobile-index {
  color: #ffffff;
  background: rgba(2,4,11,.92);
  border-color: rgba(255,255,255,.24);
}
.mobile-index-links a,
.mobile-index-links a span,
.mobile-index-head,
.mobile-index-head button {
  color: #ffffff;
}
.hero-photo,
.life-images,
.wordmark>img { display: initial !important; }
.life-images { display: grid !important; }
.hero-photo { display: block !important; }
.wordmark>img { display: block !important; }
.omix-panel { color: #ffffff; }
.omix-panel .button.light { color: #0b0d14; }
@media(max-width:900px) {
  .mobile-index-links a,
  .mobile-index-links a span { color: #ffffff; }
}
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
