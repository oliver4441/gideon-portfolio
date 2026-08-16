const canvas = document.querySelector('#gpu-space');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

if (canvas && !reduce) {
  const fallback = () => document.documentElement.classList.add('gpu-space-fallback');
  const init = async () => {
    if (!('gpu' in navigator)) return fallback();
    try {
      const adapter = await navigator.gpu.requestAdapter({ powerPreference: 'low-power' });
      if (!adapter) return fallback();
      const device = await adapter.requestDevice();
      const context = canvas.getContext('webgpu');
      if (!context) return fallback();
      const format = navigator.gpu.getPreferredCanvasFormat();
      context.configure({ device, format, alphaMode: 'premultiplied' });

      const count = Math.min(1800, Math.max(700, Math.floor(innerWidth * innerHeight / 1100)));
      const stars = new Float32Array(count * 4);
      for (let i = 0; i < count; i++) {
        const j = i * 4;
        stars[j] = Math.random() * 2 - 1;
        stars[j + 1] = Math.random() * 2 - 1;
        stars[j + 2] = Math.random();
        stars[j + 3] = 0.35 + Math.random() * 0.65;
      }
      const buffer = device.createBuffer({ size: stars.byteLength, usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST });
      device.queue.writeBuffer(buffer, 0, stars);

      const shader = device.createShaderModule({ code: `
        struct U { time:f32, scroll:f32, aspect:f32, pad:f32 };
        @group(0) @binding(0) var<uniform> u:U;
        struct V { @location(0) p:vec2<f32>, @location(1) z:f32, @location(2) a:f32 };
        struct O { @builtin(position) pos:vec4<f32>, @location(0) a:f32, @location(1) z:f32 };
        @vertex fn vs(v:V)->O { var o:O; let depth=.22 + v.z*.78; let drift=u.scroll*.000055*(1.0+v.z*2.2); let x=fract((v.p.x+1.0)*.5 + drift)-.5; let y=fract((v.p.y+1.0)*.5 + drift*.65)-.5; o.pos=vec4<f32>(x*2.0, y*2.0*u.aspect, 0.0, 1.0); o.pos.xy *= depth; o.a=v.a*(.45+.55*v.z); o.z=v.z; return o; }
        @fragment fn fs(o:O)->@location(0) vec4<f32> { let glow=.75+.25*sin(u.time*.0015+o.z*9.0); return vec4<f32>(.78+.22*o.z,.84+.16*o.z,1.0,o.a*glow); }
      ` });
      const pipeline = device.createRenderPipeline({ layout:'auto', vertex:{module:shader, entryPoint:'vs', buffers:[{arrayStride:16, attributes:[{shaderLocation:0,offset:0,format:'float32x2'},{shaderLocation:1,offset:8,format:'float32'},{shaderLocation:2,offset:12,format:'float32'}]}]}, fragment:{module:shader,entryPoint:'fs',targets:[{format,blend:{color:{srcFactor:'src-alpha',dstFactor:'one-minus-src-alpha'},alpha:{srcFactor:'one',dstFactor:'one-minus-src-alpha'}}}]}, primitive:{topology:'point-list'} });
      const uniform = device.createBuffer({ size:16, usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST });
      const bind = device.createBindGroup({ layout:pipeline.getBindGroupLayout(0), entries:[{binding:0,resource:{buffer:uniform}}] });
      const resize=()=>{const d=Math.min(device.limits.maxTextureDimension2D,devicePixelRatio||1);canvas.width=innerWidth*d;canvas.height=innerHeight*d;canvas.style.width='100%';canvas.style.height='100%'};addEventListener('resize',resize,{passive:true});resize();
      const frame=(time)=>{const data=new Float32Array([time,scrollY,canvas.width/canvas.height,0]);device.queue.writeBuffer(uniform,0,data);const encoder=device.createCommandEncoder();const pass=encoder.beginRenderPass({colorAttachments:[{view:context.getCurrentTexture().createView(),clearValue:{r:.008,g:.012,b:.03,a:.72},loadOp:'clear',storeOp:'store'}]});pass.setPipeline(pipeline);pass.setBindGroup(0,bind);pass.setVertexBuffer(0,buffer);pass.draw(count);pass.end();device.queue.submit([encoder.finish()]);requestAnimationFrame(frame)};canvas.classList.add('is-ready');requestAnimationFrame(frame);
    } catch { fallback(); }
  };
  init();
}

// Outside-the-code gallery: the supplied outdoors and gaming images crossfade over one another.
const setupOutsideGallery = () => {
  const gallery = document.querySelector('.life-images');
  if (!gallery) return;
  const slides = [...gallery.querySelectorAll('figure')].filter((figure) => {
    const image = figure.querySelector('img');
    return image && /gideon-(outdoors|gaming)\.webp$/i.test(image.getAttribute('src') || '');
  });
  if (slides.length < 2) return;

  const workspace = [...gallery.querySelectorAll('figure')].find((figure) => {
    const image = figure.querySelector('img');
    return image && /gideon-workspace\.webp$/i.test(image.getAttribute('src') || '');
  });
  workspace?.remove();

  gallery.classList.add('lifestyle-slideshow');
  gallery.setAttribute('role', 'region');
  gallery.setAttribute('aria-label', 'Outside the code photo gallery');
  gallery.setAttribute('aria-roledescription', 'carousel');

  const style = document.createElement('style');
  style.textContent = `
    .life-images.lifestyle-slideshow{display:block;position:relative;width:100%;max-width:760px;aspect-ratio:4/3;min-height:280px;isolation:isolate}
    .lifestyle-slideshow figure{position:absolute!important;inset:0;width:100%;height:100%;margin:0;opacity:0;visibility:hidden;transform:translate3d(0,0,0)!important;transition:opacity 900ms cubic-bezier(.2,.7,.2,1),visibility 0s linear 900ms}
    .lifestyle-slideshow figure.is-active{opacity:1;visibility:visible;transition:opacity 900ms cubic-bezier(.2,.7,.2,1),visibility 0s linear 0s}
    .lifestyle-slideshow figure img{width:100%;height:100%;object-fit:cover;object-position:center;border-radius:2px;filter:saturate(.9);box-shadow:0 22px 55px rgba(0,0,0,.16)}
    .lifestyle-slideshow .slide-meta{position:absolute;z-index:3;left:18px;bottom:18px;padding:8px 11px;background:rgba(243,240,233,.9);backdrop-filter:blur(8px);font:600 10px/1 'DM Sans',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#171713}
    .lifestyle-slideshow .slide-dots{position:absolute;z-index:4;right:18px;bottom:18px;display:flex;gap:7px}
    .lifestyle-slideshow .slide-dot{width:7px;height:7px;border:0;border-radius:50%;padding:0;background:rgba(243,240,233,.48);cursor:pointer;transition:transform .25s,background .25s}
    .lifestyle-slideshow .slide-dot.is-active{background:#f3f0e9;transform:scale(1.35)}
    @media(max-width:900px){.life-images.lifestyle-slideshow{width:100%;aspect-ratio:4/3;min-height:0}.lifestyle-slideshow figure img{box-shadow:0 14px 30px rgba(0,0,0,.13)}.lifestyle-slideshow .slide-meta{left:12px;bottom:12px}.lifestyle-slideshow .slide-dots{right:12px;bottom:12px}}
    @media(prefers-reduced-motion:reduce){.lifestyle-slideshow figure{transition:none}}
  `;
  document.head.appendChild(style);

  const labels = ['Outside · outdoors', 'Outside · gaming'];
  const dots = document.createElement('div');
  dots.className = 'slide-dots';
  dots.setAttribute('aria-label', 'Gallery slides');
  const meta = document.createElement('div');
  meta.className = 'slide-meta';
  gallery.append(meta, dots);

  let active = 0;
  let timer;
  const show = (index, manual = false) => {
    active = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const selected = i === active;
      slide.classList.toggle('is-active', selected);
      slide.setAttribute('aria-hidden', selected ? 'false' : 'true');
      dots.children[i]?.classList.toggle('is-active', selected);
    });
    meta.textContent = labels[active];
    if (manual) restart();
  };
  const restart = () => {
    clearInterval(timer);
    if (reduce || document.hidden) return;
    timer = setInterval(() => show(active + 1), 5000);
  };

  slides.forEach((slide, index) => {
    slide.classList.toggle('is-active', index === 0);
    slide.setAttribute('aria-hidden', index === 0 ? 'false' : 'true');
    const dot = document.createElement('button');
    dot.className = 'slide-dot';
    dot.type = 'button';
    dot.setAttribute('aria-label', `Show ${labels[index]}`);
    dot.addEventListener('click', () => show(index, true));
    dots.appendChild(dot);
  });
  document.addEventListener('visibilitychange', restart);
  show(0);
  restart();
};

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setupOutsideGallery, { once:true });
else setupOutsideGallery();
