"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getLenis } from "@/components/shell/Motion";

export type Chapter = { label: string; copy: React.ReactNode; visual: React.ReactNode };

/**
 * Apple-style product scene. On desktop the section pins and scrolling swaps chapters: the index on the left tracks progress,
 * copy and visual crossfade on the right. Below 960px (or with reduced motion) it is a plain vertical list.
 */
export function PinnedChapters({ items, head, dark = false, id }: { items: Chapter[]; head: React.ReactNode; dark?: boolean; id?: string }) {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = root.current; if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 960px) and (prefers-reduced-motion: no-preference)", () => {
      el.classList.add("is-on");
      const slides = gsap.utils.toArray<HTMLElement>(el.querySelectorAll(".chap-slide"));
      const n = slides.length;
      gsap.set(slides, { autoAlpha: 0 }); gsap.set(slides[0], { autoAlpha: 1 });
      const per = 1; // timeline units per chapter
      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
      slides.forEach((s, i) => {
        if (i === 0) return;
        const prev = slides[i - 1];
        tl.to(prev, { autoAlpha: 0, y: -50, duration: 0.35 }, i * per - 0.35)
          .fromTo(s, { autoAlpha: 0, y: 70 }, { autoAlpha: 1, y: 0, duration: 0.45 }, i * per - 0.2);
        const vis = s.querySelector(".chap-vis"); if (vis) tl.fromTo(vis, { scale: 0.93, rotateX: 8 }, { scale: 1, rotateX: 0, duration: 0.6 }, i * per - 0.2);
      });
      tl.set({}, {}, n * per - 0.2 + 0.3);
      const st = ScrollTrigger.create({
        trigger: el, start: "top top", end: () => "+=" + (n * window.innerHeight * 0.7), pin: true, scrub: 0.6, animation: tl, anticipatePin: 1, invalidateOnRefresh: true,
        onUpdate: (s) => setActive(Math.min(n - 1, Math.round(s.progress * (n - 1) * 1.0 + 0.0001))),
      });
      return () => { el.classList.remove("is-on"); st.kill(); tl.kill(); gsap.set(slides, { clearProps: "all" }); };
    });
    return () => mm.revert();
  }, [items.length]);

  const go = (i: number) => {
    const el = root.current; if (!el || !el.classList.contains("is-on")) return;
    const st = ScrollTrigger.getAll().find((s) => s.trigger === el && s.pin); if (!st) return;
    const y = st.start + ((st.end - st.start) * i) / Math.max(1, items.length - 1);
    const l = getLenis(); if (l) l.scrollTo(y, { duration: 1.4 }); else window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="pin-wrap"><section ref={root} id={id} className={`chap ${dark ? "chap-dark" : ""}`}>
      <div className="chap-pin">
        <div className="w chap-grid">
          <aside className="chap-nav">
            <div className="chap-head">{head}</div>
            <ol>{items.map((c, i) => (
              <li key={c.label} className={active === i ? "on" : ""}><button type="button" onClick={() => go(i)}><span>{String(i + 1).padStart(2, "0")}</span>{c.label}</button></li>
            ))}</ol>
          </aside>
          <div className="chap-stage">
            {items.map((c) => (
              <div className="chap-slide" key={c.label}>
                <div className="chap-copy">{c.copy}</div>
                <div className="chap-vis" data-nosnippet>{c.visual}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section></div>
  );
}
