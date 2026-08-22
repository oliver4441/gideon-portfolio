import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

const navigationUpgrade = {
  name: 'navigation-upgrade-styles',
  transform(code, id) {
    if (id.endsWith('/src/styles/global.css')) {
      return `@import url('/navigation-upgrade.css');\n${code}\n
/* Contrast pass: keep the space background, use crisp near-white editorial text, and restore portfolio imagery. */
:root {
  --ink: #ffffff;
  --muted: rgba(255,255,255,.88);
  --line: rgba(255,255,255,.28);
  --accent: #d69a4b;
}
body { color: var(--ink); }
.space-scene:before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(2,4,11,.34);
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
.work-content>p:not(.eyebrow) {
  color: var(--muted);
}
.eyebrow,
.section-label { color: #ffffff; }
h1,h2,h3,h4 { color: #ffffff; font-weight: 600; text-shadow: 0 1px 18px rgba(0,0,0,.28); }
.hero-lede { color: #ffffff; }
.text-link,
.work-content a { color: #ffffff; border-color: #ffffff; }
.button.dark {
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
.section-rail .rail-link { color: rgba(255,255,255,.9); }
.section-rail .rail-link:hover,
.section-rail .rail-link.is-active {
  color: #ffffff;
  background: rgba(2,4,11,.82);
}
.section-rail .rail-progress { background: rgba(255,255,255,.22); }
.section-rail .rail-progress i { background: #ffffff; }
.site-nav .wordmark,
.site-nav .nav-links a,
.site-nav .nav-company { color: #171713; }
.mobile-index-toggle,
.mobile-index { color: #171713; }
.hero-photo,
.life-images,
.wordmark>img { display: initial !important; }
.life-images { display: grid !important; }
.hero-photo { display: block !important; }
.wordmark>img { display: block !important; }
@media(max-width:900px) {
  .mobile-index-links a { color: #171713; }
  .mobile-index-links a span { color: #6c6a63; }
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
