import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

const navigationUpgrade = {
  name: 'navigation-upgrade-styles',
  transform(code, id) {
    if (id.endsWith('/src/styles/global.css')) {
      return `@import url('/navigation-upgrade.css');\n${code}\n
/* Contrast pass: keep the space background, switch the editorial content to a light-on-dark system, and restore portfolio imagery. */
:root {
  --ink: #f5f2ea;
  --muted: rgba(245,242,234,.76);
  --line: rgba(245,242,234,.24);
  --accent: #c98a3a;
}
body { color: var(--ink); }
.space-scene:before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(2,4,11,.24);
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
.section-label { color: rgba(245,242,234,.84); }
h1,h2,h3,h4 { color: var(--ink); font-weight: 600; }
.text-link,
.work-content a { color: var(--ink); border-color: var(--ink); }
.button.dark {
  background: #f5f2ea;
  color: #171713;
  border-color: #f5f2ea;
}
.button.outline {
  color: var(--ink);
  border-color: var(--ink);
}
.progress { background: var(--ink); }
.section-rail .rail-label,
.section-rail .rail-link { color: rgba(245,242,234,.78); }
.section-rail .rail-link:hover,
.section-rail .rail-link.is-active {
  color: var(--ink);
  background: rgba(3,6,17,.72);
}
.section-rail .rail-progress { background: rgba(245,242,234,.18); }
.section-rail .rail-progress i { background: var(--ink); }
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
