"use client";
import { useEffect, useRef, useState } from "react";

/** Renders children at real size (w×h) and scales them to fit the container width. Re-fits when a hidden panel opens. */
export function Scaled({ w, h, children, className = "", style }: { w: number; h: number; children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const box = useRef<HTMLDivElement>(null);
  const [s, setS] = useState(0);
  useEffect(() => {
    const el = box.current; if (!el) return;
    const fit = () => { const cw = el.clientWidth; if (cw) setS(cw / w); };
    fit(); const ro = new ResizeObserver(fit); ro.observe(el); return () => ro.disconnect();
  }, [w]);
  return (
    <div ref={box} className={`scaled ${className}`} style={{ aspectRatio: `${w} / ${h}`, ...style }} data-nosnippet aria-hidden>
      <div className="scaled-in" style={{ width: w, height: h, transform: `scale(${s || 0.3})`, opacity: s ? 1 : 0 }}>{children}</div>
    </div>
  );
}

export function Browser({ url, w = 1440, h = 900, children, dark = false, className = "" }: { url: string; w?: number; h?: number; children: React.ReactNode; dark?: boolean; className?: string }) {
  return (
    <div className={`bw ${dark ? "bw-d" : ""} ${className}`} data-nosnippet>
      <div className="bw-bar"><i /><i /><i /><span>{url}</span></div>
      <Scaled w={w} h={h}>{children}</Scaled>
    </div>
  );
}

/** A native-looking app window (admin tools, editors). Title bar with traffic lights and a tab. */
export function AppWindow({ title, w = 1280, h = 800, children, className = "" }: { title: string; w?: number; h?: number; children: React.ReactNode; className?: string }) {
  return (
    <div className={`aw ${className}`} data-nosnippet>
      <div className="aw-bar"><i /><i /><i /><span>{title}</span></div>
      <Scaled w={w} h={h}>{children}</Scaled>
    </div>
  );
}

/** iPhone frame. Screen is always 390×844. */
export function Phone({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`ph ${className}`} data-nosnippet>
      <div className="ph-in"><Scaled w={390} h={844}>{children}</Scaled></div>
      <span className="ph-island" />
    </div>
  );
}
