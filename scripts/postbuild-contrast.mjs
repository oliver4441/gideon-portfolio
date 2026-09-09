import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const roots = [join(process.cwd(), 'dist', 'client', '_astro'), join(process.cwd(), 'dist', '_astro')];
const css = `

/* Final production contrast override. */
:root{--ink:#fff;--muted:rgba(255,255,255,.88);--line:rgba(255,255,255,.30);--accent:#d69a4b}
html,body{color:#fff!important}
body{background:transparent!important}
.top-bar{background:rgba(2,4,11,.84)!important;border-color:rgba(255,255,255,.22)!important}
.mobile-menu{background:rgba(2,4,11,.96)!important}
.side-links a{color:#fff!important}
.side-links a:hover,.side-links a.is-active{color:var(--accent)!important}
.eyebrow,.section-label,.section-subhead,.xp-range,.capability>span,.note-row>span,.hero-eyebrow,.site-footer small,.mobile-menu-email{color:rgba(255,255,255,.92)!important}
h1,h2,h3,h4,.hero-tag,.hero-lede,.text-link,.xp-link,.project-link,.site-footer a,.wordmark,.menu-btn,.mobile-menu-links a,.mobile-menu-links a span{color:#fff!important}
h1,h2,h3,h4{text-shadow:0 1px 18px rgba(0,0,0,.45)}
.hero-intro,.prose,.xp-body p,.project-content>p,.projects-intro,.about-personal p,.contact-inner>p{color:#fff!important}
.text-link,.xp-link,.project-link,.site-footer a{border-color:#fff!important}
.text-link:hover,.xp-link:hover,.project-link:hover{color:var(--accent)!important;border-color:var(--accent)!important}
.button.dark,.button.light{background:#fff!important;color:#0b0d14!important;border-color:#fff!important}
.button.outline{color:#fff!important;border-color:#fff!important}
.button.outline:hover{color:var(--accent)!important;border-color:var(--accent)!important}
.progress{background:var(--accent)!important}
.more-card{background:rgba(2,4,11,.55)!important}
.project-shot{background:#0b0d14!important}
.site-backdrop:before{filter:brightness(.32) contrast(1.05) saturate(.75)!important}
.site-backdrop:after{background:linear-gradient(180deg,rgba(2,4,11,.84) 0%,rgba(2,4,11,.76) 35%,rgba(2,4,11,.84) 70%,rgba(2,4,11,.90) 100%),radial-gradient(circle at 50% 40%,rgba(2,4,11,.30) 0%,rgba(1,2,7,.80) 100%)!important}
`;

for (const root of roots) {
  try {
    const files = await readdir(root);
    for (const file of files) {
      if (!file.endsWith('.css')) continue;
      const path = join(root, file);
      const current = await readFile(path, 'utf8');
      if (!current.includes('Final production contrast override')) {
        await writeFile(path, current + css, 'utf8');
        console.log(`Contrast override appended to ${path}`);
      }
    }
  } catch (error) {
    if (error?.code !== 'ENOENT') throw error;
  }
}
