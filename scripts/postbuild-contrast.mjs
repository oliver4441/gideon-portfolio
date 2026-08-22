import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const roots = [join(process.cwd(), 'dist', 'client', '_astro'), join(process.cwd(), 'dist', '_astro')];
const css = `\n\n/* Final production contrast override. */\n:root{--ink:#fff;--muted:#fff;--line:rgba(255,255,255,.30);--accent:#d69a4b}\nhtml,body{color:#fff!important}\nbody{background:transparent!important}\n.site-nav{background:rgba(2,4,11,.84)!important;border-color:rgba(255,255,255,.22)!important}\n.eyebrow,.section-label,.work-index,.capability span,.capability p,.note-row span,.hero-photo figcaption,.site-footer span,.site-footer small,.hero-intro,.prose,.current-copy,.life-copy p,.contact-section>p,.work-content>p:not(.eyebrow),.omix-description,.omix-panel .eyebrow{color:#fff!important}\nh1,h2,h3,h4,.hero-lede,.text-link,.work-content a,.site-footer a,.site-nav .wordmark,.site-nav .nav-links a,.site-nav .nav-company,.section-rail .rail-label,.section-rail .rail-link,.mobile-index-toggle,.mobile-index,.mobile-index-links a,.mobile-index-links a span{color:#fff!important}\nh1,h2,h3,h4{text-shadow:0 1px 18px rgba(0,0,0,.34)}\n.text-link,.work-content a,.site-footer a{border-color:#fff!important}\n.button.dark,.button.light{background:#fff!important;color:#0b0d14!important;border-color:#fff!important}\n.button.outline{color:#fff!important;border-color:#fff!important}\n.progress{background:#fff!important}\n.section-rail .rail-link:hover,.section-rail .rail-link.is-active{color:#fff!important;background:rgba(2,4,11,.86)!important}\n.section-rail .rail-progress{background:rgba(255,255,255,.24)!important}\n.section-rail .rail-progress i{background:#fff!important}\n.mobile-index-toggle,.mobile-index{color:#fff!important;background:rgba(2,4,11,.94)!important;border-color:rgba(255,255,255,.24)!important}\n.mobile-index-links a,.mobile-index-links a span,.mobile-index-head,.mobile-index-head button{color:#fff!important}\n.space-scene:before{content:'';position:absolute;inset:0;background:rgba(2,4,11,.40);pointer-events:none}\n`;

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
