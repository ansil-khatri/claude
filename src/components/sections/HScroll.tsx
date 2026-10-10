"use client";
import { useEffect, useRef } from "react";

/** Desktop: pins the section and slides the cards sideways while scrolling down.
 *  Under 1024px or with reduced motion: a normal swipeable row. Content is always in the HTML. */
export function HScroll({ children }: { children: React.ReactNode }) {
  const outer = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLOListElement>(null);
  useEffect(() => {
    const o = outer.current, t = track.current;
    if (!o || !t) return;
    const mq = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
    let raf = 0;
    const apply = () => {
      if (!mq.matches) { o.style.height = ""; t.style.transform = ""; o.classList.remove("hs-on"); return; }
      const dist = Math.max(0, t.scrollWidth - window.innerWidth + 56);
      o.style.height = `${window.innerHeight + dist}px`;
      o.classList.add("hs-on");
      const y = -o.getBoundingClientRect().top;
      const p = Math.min(1, Math.max(0, y / (o.offsetHeight - window.innerHeight || 1)));
      t.style.transform = `translate3d(${-dist * p}px,0,0)`;
    };
    const tick = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(apply); };
    apply();
    window.addEventListener("scroll", tick, { passive: true });
    window.addEventListener("resize", tick);
    mq.addEventListener("change", tick);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", tick); window.removeEventListener("resize", tick); mq.removeEventListener("change", tick); };
  }, []);
  return <div ref={outer} className="hs"><div className="hs-pin"><ol ref={track} className="proc-track hs-track">{children}</ol></div></div>;
}
