import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

const navigationUpgrade = {
  name: 'navigation-upgrade-styles',
  transform(code, id) {
    if (id.endsWith('/src/styles/global.css')) {
      return `@import url('/navigation-upgrade.css');\n${code}\n
/* Final text pass: white text everywhere, with dark surfaces where needed for contrast. */
:root {
  --ink: #ffffff;
  --muted: #ffffff;
  --line: rgba(255,255,255,.30);
  --accent: #d69a4b;
}
html, body { color: #ffffff; }
.space-scene:before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(2,4,11,.42);
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
.omix-panel .eyebrow,
.site-footer,
.site-footer * {
  color: #ffffff !important;
}
h1,h2,h3,h4,
.hero-lede,
.text-link,
.work-content a,
.nav-links a,
.nav-company,
.wordmark,
.wordmark span,
.section-rail .rail-label,
.section-rail .rail-link,
.section-rail .rail-link span,
.section-rail .rail-link strong,
.mobile-index-toggle,
.mobile-index,
.mobile-index * {
  color: #ffffff !important;
}
*::before, *::after { border-color: rgba(255,255,255,.30); }
h1,h2,h3,h4 {
  font-weight: 600;
  text-shadow: 0 1px 18px rgba(0,0,0,.34);
}
.text-link,
.work-content a,
.site-footer a {
  color: #ffffff !important;
  border-color: #ffffff !important;
}
.button.dark,
.button.light {
  background: #ffffff;
  color: #0b0d14 !important;
  border-color: #ffffff;
}
.button.outline {
  color: #ffffff !important;
  border-color: #ffffff !important;
}
.progress { background: #ffffff; }
.section-rail .rail-link:hover,
.section-rail .rail-link.is-active {
  color: #ffffff !important;
  background: rgba(2,4,11,.88);
}
.section-rail .rail-progress { background: rgba(255,255,255,.24); }
.section-rail .rail-progress i { background: #ffffff; }
.site-nav {
  background: rgba(2,4,11,.86);
  border-bottom-color: rgba(255,255,255,.22);
}
.site-nav .wordmark,
.site-nav .nav-links a,
.site-nav .nav-company,
.site-nav .wordmark span,
.site-nav .wordmark span span {
  color: #ffffff !important;
}
.mobile-index-toggle,
.mobile-index {
  color: #ffffff !important;
  background: rgba(2,4,11,.94);
  border-color: rgba(255,255,255,.24);
}
.mobile-index-links a,
.mobile-index-links a span,
.mobile-index-head,
.mobile-index-head button {
  color: #ffffff !important;
}
.hero-photo,
.life-images,
.wordmark>img { display: initial !important; }
.life-images { display: grid !important; }
.hero-photo { display: block !important; }
.wordmark>img { display: block !important; }
.omix-panel { color: #ffffff; }
.omix-panel .button.light { color: #0b0d14 !important; }
@media(max-width:900px) {
  .mobile-index-links a,
  .mobile-index-links a span { color: #ffffff !important; }
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
