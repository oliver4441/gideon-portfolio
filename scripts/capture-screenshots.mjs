// Captures desktop screenshots of the live products featured on the site.
// Run manually (needs network access + a headless browser):
//   npm i playwright sharp && npx playwright install --with-deps chromium
//   node scripts/capture-screenshots.mjs
// Images land in public/images/projects/ as .webp

import { chromium } from 'playwright';
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT_DIR = new URL('../public/images/projects/', import.meta.url).pathname;

const targets = [
  { name: 'veyra', url: 'https://web-jade-one-82.vercel.app/?type=series' },
  { name: 'decimal', url: 'https://decimal.omixsystems.store/' },
  { name: 'omix-marketplace', url: 'https://market.omixsystems.store/' },
  { name: 'omix-systems', url: 'https://omixsystems.store/' },
];

mkdirSync(OUT_DIR, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});

for (const t of targets) {
  console.log(`Capturing ${t.name} → ${t.url}`);
  try {
    await page.goto(t.url, { timeout: 60000, waitUntil: 'networkidle' });
  } catch {
    // Fall back to whatever loaded — SPAs sometimes keep connections open.
    try {
      await page.goto(t.url, { timeout: 60000, waitUntil: 'domcontentloaded' });
    } catch (e) {
      console.error(`  failed to load ${t.url}: ${e.message}`);
      continue;
    }
  }
  // Give client-rendered apps a beat to settle animations/data.
  await page.waitForTimeout(5000);

  const png = await page.screenshot({ clip: { x: 0, y: 0, width: 1440, height: 900 } });
  const out = `${OUT_DIR}${t.name}.webp`;
  await sharp(png).webp({ quality: 82 }).toFile(out);
  console.log(`  saved ${out}`);
}

await browser.close();
console.log('Done.');
