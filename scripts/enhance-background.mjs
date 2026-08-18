import fs from 'node:fs';
import path from 'node:path';

const cssPath = path.resolve('src/styles/global.css');
const pagePath = path.resolve('src/pages/index.astro');
const marker = '/* Atmospheric shooting stars */';
const css = fs.readFileSync(cssPath, 'utf8');

if (!css.includes(marker)) {
  fs.writeFileSync(cssPath, `${css}\n${marker}\n.shooting-star-layer{position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:4;opacity:.62}.shooting-star-layer i{position:absolute;display:block;width:110px;height:1px;border-radius:999px;background:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.88));transform:rotate(-32deg);filter:drop-shadow(0 0 4px rgba(255,255,255,.38));animation:shooting-star 9s linear infinite}.shooting-star-layer i:nth-child(1){top:14%;left:8%;animation-delay:1.2s}.shooting-star-layer i:nth-child(2){top:29%;left:62%;width:85px;animation-delay:4.8s}.shooting-star-layer i:nth-child(3){top:51%;left:24%;width:95px;animation-delay:7s}.shooting-star-layer i:nth-child(4){top:72%;left:76%;width:70px;animation-delay:2.7s}@keyframes shooting-star{0%,84%{opacity:0;transform:translate3d(-40px,-20px,0) rotate(-32deg) scaleX(.35)}87%{opacity:.9}93%{opacity:0;transform:translate3d(230px,130px,0) rotate(-32deg) scaleX(1)}100%{opacity:0;transform:translate3d(230px,130px,0) rotate(-32deg) scaleX(1)}}@media(max-width:900px){.shooting-star-layer{opacity:.45}.shooting-star-layer i{width:72px;filter:drop-shadow(0 0 3px rgba(255,255,255,.3))}}@media(prefers-reduced-motion:reduce){.shooting-star-layer{display:none}}\n`);
}

let page = fs.readFileSync(pagePath, 'utf8');
const scene = '<div class="space-scene" aria-hidden="true"><canvas id="gpu-space"></canvas><div class="stars stars-a"></div><div class="stars stars-b"></div><div class="stars stars-c"></div><div class="nebula"></div></div>';
const enhancedScene = '<div class="space-scene" aria-hidden="true"><canvas id="gpu-space"></canvas><div class="stars stars-a"></div><div class="stars stars-b"></div><div class="stars stars-c"></div><div class="nebula"></div><div class="shooting-star-layer" aria-hidden="true"><i></i><i></i><i></i><i></i></div></div>';
if (page.includes(scene) && !page.includes('shooting-star-layer')) {
  page = page.replace(scene, enhancedScene);
  fs.writeFileSync(pagePath, page);
}
