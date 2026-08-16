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
