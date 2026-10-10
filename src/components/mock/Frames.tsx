"use client";
import { useEffect, useRef, useState } from "react";

/** Renders children at real size (w×h) and scales them to fit the container width. Re-fits when a hidden tab opens. */
export function Scaled({ w, h, children, className = "", style }: { w: number; h: number; children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const box = useRef<HTMLDivElement>(null);
  const [s, setS] = useState(0);
  useEffect(() => {
    const el = box.current; if (!el) return;
    const fit = () => { const cw = el.clientWidth; if (cw) setS(cw / w); };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, [w]);
  return (
    <div ref={box} className={`scaled ${className}`} style={{ aspectRatio: `${w} / ${h}`, ...style }} data-nosnippet aria-hidden>
      <div className="scaled-in" style={{ width: w, height: h, transform: `scale(${s || 0.3})`, opacity: s ? 1 : 0 }}>{children}</div>
    </div>
  );
}

export function Browser({ url, w = 1280, h = 800, children, className = "", dark = false }: { url: string; w?: number; h?: number; children: React.ReactNode; className?: string; dark?: boolean }) {
  return (
    <div className={`browser ${dark ? "bdark" : ""} ${className}`} data-nosnippet>
      <div className="browser-bar"><i /><i /><i /><span className="browser-url">{url}</span></div>
      <Scaled w={w} h={h}>{children}</Scaled>
    </div>
  );
}

/** iPhone frame. The screen is always 390×844 scaled to the frame width. */
export function Phone({ children, className = "", style, tilt = 0 }: { children: React.ReactNode; className?: string; style?: React.CSSProperties; tilt?: number }) {
  return (
    <div className={`phone ${className}`} style={{ ...style, transform: tilt ? `rotate(${tilt}deg)` : undefined }} data-nosnippet>
      <div className="phone-screen"><Scaled w={390} h={844}>{children}</Scaled></div>
      <span className="phone-island" />
    </div>
  );
}
