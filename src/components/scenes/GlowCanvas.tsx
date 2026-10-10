"use client";
import { useEffect, useRef } from "react";

const VS = "attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}";
const FS = `precision mediump float;
uniform vec2 r;uniform float t;uniform vec2 m;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1.,0.)),f.x),mix(h(i+vec2(0.,1.)),h(i+vec2(1.,1.)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*n(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return v;}
void main(){
  vec2 uv=gl_FragCoord.xy/r;vec2 p=uv*vec2(r.x/r.y,1.);
  vec2 mo=(m-.5)*.35;
  vec2 q=vec2(fbm(p*1.5+vec2(0.,t*.045)),fbm(p*1.5+vec2(5.2,1.3)-t*.035));
  float f=fbm(p*1.25+2.1*q+mo);
  float mask=smoothstep(.15,1.05,uv.x*.85+(1.-uv.y)*.55);
  vec3 base=vec3(.043,.043,.047);
  vec3 ember=vec3(1.,.34,.1);
  vec3 hot=vec3(1.,.74,.5);
  float g=smoothstep(.42,.92,f)*mask;
  vec3 col=base+ember*g*.62+hot*pow(smoothstep(.62,1.,f),2.)*mask*.5;
  float vig=smoothstep(1.25,.25,length(uv-vec2(.5,.45)));
  col*=.55+.45*vig;
  col+=(h(gl_FragCoord.xy+t)-.5)*.018;
  gl_FragColor=vec4(col,1.);
}`;

/** Slow warm light field behind the hero. Renders at reduced resolution, pauses when off-screen, falls back to CSS. */
export function GlowCanvas({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const gl = c.getContext("webgl", { antialias: false, powerPreference: "low-power" }); if (!gl) return;
    const sh = (type: number, src: string) => { const s = gl.createShader(type)!; gl.shaderSource(s, src); gl.compileShader(s); return s; };
    const pr = gl.createProgram()!; gl.attachShader(pr, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(pr);
    if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) return;
    gl.useProgram(pr);
    const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(pr, "p"); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const uR = gl.getUniformLocation(pr, "r"), uT = gl.getUniformLocation(pr, "t"), uM = gl.getUniformLocation(pr, "m");
    const scale = Math.min(window.devicePixelRatio || 1, 1.5) * 0.42;
    const fit = () => { c.width = Math.max(2, Math.floor(c.clientWidth * scale)); c.height = Math.max(2, Math.floor(c.clientHeight * scale)); gl.viewport(0, 0, c.width, c.height); };
    fit(); const ro = new ResizeObserver(fit); ro.observe(c);
    let mx = 0.5, my = 0.5, tx = 0.5, ty = 0.5, raf = 0, vis = true, last = 0;
    const move = (e: PointerEvent) => { const b = c.getBoundingClientRect(); tx = (e.clientX - b.left) / b.width; ty = 1 - (e.clientY - b.top) / b.height; };
    window.addEventListener("pointermove", move, { passive: true });
    const io = new IntersectionObserver(([e]) => { vis = e.isIntersecting; }, { threshold: 0 }); io.observe(c);
    const t0 = performance.now();
    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (!vis || now - last < 32) return; last = now;
      mx += (tx - mx) * 0.04; my += (ty - my) * 0.04;
      gl.uniform2f(uR, c.width, c.height); gl.uniform1f(uT, (now - t0) / 1000); gl.uniform2f(uM, mx, my);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    raf = requestAnimationFrame(frame);
    c.dataset.live = "1";
    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); window.removeEventListener("pointermove", move); gl.getExtension("WEBGL_lose_context")?.loseContext(); };
  }, []);
  return <canvas ref={ref} className={`glow-canvas ${className}`} aria-hidden />;
}
