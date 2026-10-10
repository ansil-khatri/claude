"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Sets --foot-h so the fixed footer can be revealed under the page. */
export function FooterFit() {
  useEffect(() => {
    const f = document.getElementById("footer");
    if (!f) return;
    const set = () => document.documentElement.style.setProperty("--foot-h", f.offsetHeight + "px");
    set();
    const ro = new ResizeObserver(set);
    ro.observe(f);
    return () => ro.disconnect();
  }, []);
  return null;
}

export function RootEffects() {
  const path = usePathname();

  // Reveal on view (content is visible by default; .rv-on is added only once JS is live)
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.classList.add("rv-on");
    const els = Array.from(document.querySelectorAll<HTMLElement>(".rv:not(.in)"));
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add("in"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    els.forEach((el) => io.observe(el));
    // fallback: never leave content hidden
    const t = window.setTimeout(() => document.querySelectorAll(".rv:not(.in)").forEach((el) => el.classList.add("in")), reduce ? 0 : 2500);
    return () => { io.disconnect(); clearTimeout(t); };
  }, [path]);

  // Lenis smooth scroll (desktop, motion allowed)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let raf = 0, lenis: import("lenis").default | undefined, dead = false;
    import("lenis").then(({ default: Lenis }) => {
      if (dead) return;
      lenis = new Lenis({ duration: 1.15, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      const loop = (time: number) => { lenis!.raf(time); raf = requestAnimationFrame(loop); };
      raf = requestAnimationFrame(loop);
      (window as unknown as { __lenis?: unknown }).__lenis = lenis;
    });
    return () => { dead = true; cancelAnimationFrame(raf); lenis?.destroy(); };
  }, []);

  // Cursor + magnetic buttons (fine pointers only)
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    root.classList.add("cur-on");
    const dot = document.getElementById("cur-dot")!, ring = document.getElementById("cur-ring")!;
    let x = 0, y = 0, rx = 0, ry = 0, raf = 0;
    const move = (e: MouseEvent) => { root.classList.add("cur-live"); x = e.clientX; y = e.clientY; dot.style.transform = `translate(${x}px,${y}px)`; };
    const loop = () => { rx += (x - rx) * 0.16; ry += (y - ry) * 0.16; ring.style.transform = `translate(${rx}px,${ry}px)`; raf = requestAnimationFrame(loop); };
    const over = (e: MouseEvent) => {
      const t = (e.target as HTMLElement).closest<HTMLElement>("[data-cursor],a,button");
      ring.classList.remove("big", "lab"); ring.textContent = "";
      if (!t) return;
      const lab = t.getAttribute("data-cursor");
      if (lab) { ring.classList.add("lab"); ring.textContent = lab; } else ring.classList.add("big");
    };
    const mag = (e: MouseEvent) => {
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((b) => {
        const r = b.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        const dx = e.clientX - cx, dy = e.clientY - cy;
        if (Math.hypot(dx, dy) < 90) b.style.transform = `translate(${dx * 0.18}px,${dy * 0.22}px)`;
        else if (b.style.transform) b.style.transform = "";
      });
    };
    window.addEventListener("mousemove", move); window.addEventListener("mousemove", mag, { passive: true }); document.addEventListener("mouseover", over);
    raf = requestAnimationFrame(loop);
    return () => { root.classList.remove("cur-on"); cancelAnimationFrame(raf); window.removeEventListener("mousemove", move); window.removeEventListener("mousemove", mag); document.removeEventListener("mouseover", over); };
  }, []);

  // scroll to top on route change
  useEffect(() => { window.scrollTo(0, 0); }, [path]);
  return null;
}
