"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Cards pin one on top of another; each previous card eases back (scale/dim) as the next one slides over it. */
export function StackCards({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 960px) and (prefers-reduced-motion: no-preference)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(el.children);
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        gsap.to(card, { scale: 0.9, filter: "brightness(.45)", ease: "none", scrollTrigger: { trigger: cards[i + 1], start: "top 95%", end: "top 12%", scrub: true } });
      });
      return () => { gsap.set(cards, { clearProps: "all" }); };
    });
    return () => mm.revert();
  }, []);
  return <div ref={ref} className="stk">{children}</div>;
}
