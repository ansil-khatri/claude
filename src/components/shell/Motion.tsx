"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, SplitText);

/**
 * One motion engine for the whole site. Pages stay server-rendered and only describe intent with data attributes:
 *   data-split="lines|chars|scrub"   masked line/char reveal, or words that light up as you scroll
 *   data-reveal="up|fade|scale|left|right|clip"  data-delay="0.2"   one-time reveal on enter
 *   data-stagger="up"                reveals direct children one after another
 *   data-parallax="12"               vertical drift (percent) tied to scroll
 *   data-count="3.2" data-prefix data-suffix data-dec   count-up numbers
 *   data-marquee data-dir="-1"       text/logo marquee that speeds up with scroll velocity
 *   data-hscroll                     pinned horizontal track (desktop), swipeable row (mobile)
 *   data-magnetic, data-tilt         pointer effects
 *   data-intro                       runs after the loader instead of on scroll
 * Content is always in the HTML. The html.m-pre class (set by an inline script) only hides what this file is about to animate,
 * and a timeout removes it if anything goes wrong.
 */

let lenis: Lenis | null = null;
export const getLenis = () => lenis;

const REDUCED = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const FINE = () => window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const DESKTOP = () => window.matchMedia("(min-width: 960px)").matches;

let introDone: Promise<void> = Promise.resolve();
const root = () => document.documentElement;

/** Footer is fixed under the page and revealed as the page scrolls away: needs its height. */
export function FooterFit() {
  useEffect(() => {
    const f = document.getElementById("footer");
    if (!f) return;
    const set = () => { root().style.setProperty("--foot-h", f.offsetHeight + "px"); ScrollTrigger.refresh(); };
    root().style.setProperty("--foot-h", f.offsetHeight + "px");
    const ro = new ResizeObserver(() => root().style.setProperty("--foot-h", f.offsetHeight + "px"));
    ro.observe(f);
    window.addEventListener("load", set);
    return () => { ro.disconnect(); window.removeEventListener("load", set); };
  }, []);
  return null;
}

/** Page curtain: hidden by default (visibility), slides up over the page, then up and away on the new page. */
function curtainIn(done: () => void) {
  const c = document.getElementById("curtain"); if (!c) { done(); return; }
  gsap.killTweensOf(c);
  gsap.set(c, { visibility: "visible", yPercent: 100 });
  root().classList.add("m-leave");
  gsap.to(c, { yPercent: 0, duration: 0.7, ease: "expo.inOut", onComplete: done });
}
function curtainOut(delay = 0.1) {
  const c = document.getElementById("curtain"); if (!c) return;
  root().classList.remove("m-leave");
  gsap.killTweensOf(c);
  gsap.to(c, { yPercent: -100, duration: 0.8, ease: "expo.inOut", delay, onComplete: () => { gsap.set(c, { visibility: "hidden", yPercent: 100 }); } });
}

function startLenis() {
  if (lenis || REDUCED()) return;
  lenis = new Lenis({ duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true, wheelMultiplier: 0.95 });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((t) => lenis?.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  root().classList.add("m-lenis");
}

function runLoader(): Promise<void> {
  const el = document.getElementById("loader");
  if (!el || !root().classList.contains("m-load")) return Promise.resolve();
  return new Promise((resolve) => {
    const num = el.querySelector<HTMLElement>("[data-load-n]");
    const bar = el.querySelector<HTMLElement>("[data-load-bar]");
    const word = el.querySelector<HTMLElement>("[data-load-word]");
    const o = { v: 0 };
    const tl = gsap.timeline({ onComplete: () => { el.style.display = "none"; root().classList.remove("m-load"); resolve(); } });
    if (word) tl.from(word, { yPercent: 110, duration: 0.8, ease: "expo.out" }, 0);
    tl.to(o, { v: 100, duration: 1.15, ease: "power2.inOut", onUpdate: () => { const n = Math.round(o.v); if (num) num.textContent = String(n).padStart(2, "0"); if (bar) bar.style.transform = `scaleX(${o.v / 100})`; } }, 0);
    tl.to(el, { yPercent: -100, duration: 0.95, ease: "expo.inOut" }, "+=.1");
    window.setTimeout(() => { el.style.display = "none"; root().classList.remove("m-load"); resolve(); }, 4200);
  });
}

function build(): () => void {
  const reduced = REDUCED();
  const desktop = DESKTOP();
  const cleanups: Array<() => void> = [];
  const ctx = gsap.context(() => {
    const q = <T extends HTMLElement = HTMLElement>(s: string) => Array.from(document.querySelectorAll<T>(s));
    let introIndex = 0;
    const when = (el: HTMLElement, vars: gsap.TweenVars = {}) => {
      if (el.hasAttribute("data-intro")) {
        const d = introIndex++ * 0.09;
        return { paused: true, play: (tw: gsap.core.Tween) => { introDone.then(() => tw.delay(d).play()); } };
      }
      return { paused: false, st: { trigger: el, start: (vars as { start?: string }).start ?? "top 90%", once: true } };
    };

    // ---- headings: masked lines / chars / scroll-scrubbed words
    q("[data-split]").forEach((el) => {
      const mode = el.dataset.split || "lines";
      el.style.visibility = "visible";
      if (mode === "scrub") {
        SplitText.create(el, { type: "words", autoSplit: true, onSplit: (self) => gsap.fromTo(self.words, { opacity: 0.16 }, { opacity: 1, ease: "none", stagger: 0.12, scrollTrigger: { trigger: el, start: "top 78%", end: "bottom 42%", scrub: 0.6 } }) });
        return;
      }
      const w = when(el);
      SplitText.create(el, {
        type: mode === "chars" ? "lines,chars" : "lines", mask: "lines", autoSplit: true, linesClass: "ln",
        onSplit: (self) => {
          const tw = gsap.from(mode === "chars" ? self.chars : self.lines, {
            yPercent: 115, rotate: mode === "chars" ? 4 : 0, duration: mode === "chars" ? 1 : 1.25, ease: "expo.out", stagger: mode === "chars" ? 0.018 : 0.1,
            paused: w.paused, scrollTrigger: w.paused ? undefined : w.st,
          });
          if (w.paused) w.play!(tw);
          return tw;
        },
      });
    });

    // ---- one-time reveals
    const FROM: Record<string, gsap.TweenVars> = {
      up: { y: 44 }, fade: {}, scale: { scale: 0.92, y: 24 }, left: { x: -50 }, right: { x: 50 }, clip: { clipPath: "inset(14% 6% 14% 6% round 28px)", scale: 1.04 },
    };
    const reveal = (el: HTMLElement, kind: string, delay = 0) => {
      const w = when(el);
      const tw = gsap.fromTo(el, { opacity: 0, ...(FROM[kind] ?? FROM.up) }, {
        opacity: 1, x: 0, y: 0, scale: 1, clipPath: kind === "clip" ? "inset(0% 0% 0% 0% round 28px)" : undefined, duration: 1.25, ease: "expo.out", delay,
        paused: w.paused, scrollTrigger: w.paused ? undefined : w.st, clearProps: kind === "clip" ? "clipPath" : "transform,opacity",
      });
      if (w.paused) w.play!(tw);
    };
    q("[data-reveal]").forEach((el) => reveal(el, el.dataset.reveal || "up", Number(el.dataset.delay || 0)));
    q("[data-stagger]").forEach((el) => {
      const kind = el.dataset.stagger || "up";
      const kids = Array.from(el.children) as HTMLElement[];
      gsap.fromTo(kids, { opacity: 0, ...(FROM[kind] ?? FROM.up) }, { opacity: 1, x: 0, y: 0, scale: 1, duration: 1.1, ease: "expo.out", stagger: 0.09, clearProps: "transform,opacity", scrollTrigger: { trigger: el, start: "top 88%", once: true } });
    });

    // ---- parallax, counters, marquee
    if (!reduced) q("[data-parallax]").forEach((el) => {
      const v = Number(el.dataset.parallax || 10) * (desktop ? 1 : 0.5);
      gsap.fromTo(el, { yPercent: -v }, { yPercent: v, ease: "none", scrollTrigger: { trigger: el.parentElement || el, start: "top bottom", end: "bottom top", scrub: true } });
    });
    q("[data-count]").forEach((el) => {
      const to = Number(el.dataset.count), dec = Number(el.dataset.dec || 0), pre = el.dataset.prefix || "", suf = el.dataset.suffix || "";
      const o = { v: 0 };
      const fmt = (n: number) => pre + n.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suf;
      el.textContent = fmt(0);
      gsap.to(o, { v: to, duration: 2, ease: "power3.out", onUpdate: () => { el.textContent = fmt(o.v); }, scrollTrigger: { trigger: el, start: "top 90%", once: true } });
    });
    q("[data-marquee]").forEach((el) => {
      const inner = el.firstElementChild as HTMLElement | null; if (!inner) return;
      inner.innerHTML = inner.innerHTML + inner.innerHTML;
      let x = 0; const dir = Number(el.dataset.dir || -1);
      const base = Number(el.dataset.speed || 60);
      const tick = () => {
        const half = inner.scrollWidth / 2; if (!half) return;
        const boost = reduced ? 0 : Math.min(8, Math.abs(lenis?.velocity ?? 0) * 0.25);
        x += dir * (base * (1 + boost)) * (gsap.ticker.deltaRatio() / 60);
        if (x <= -half) x += half; if (x > 0) x -= half;
        inner.style.transform = `translate3d(${x}px,0,0)`;
      };
      gsap.ticker.add(tick);
      cleanups.push(() => gsap.ticker.remove(tick));
    });

    // ---- pinned horizontal tracks (desktop only)
    const mm = gsap.matchMedia();
    mm.add("(min-width: 960px) and (prefers-reduced-motion: no-preference)", () => {
      q("[data-hscroll]").forEach((el) => {
        const track = el.querySelector<HTMLElement>("[data-hscroll-track]"); if (!track) return;
        const dist = () => Math.max(0, track.scrollWidth - window.innerWidth + 80);
        const bar = el.querySelector<HTMLElement>("[data-hscroll-bar]");
        gsap.to(track, { x: () => -dist(), ease: "none", scrollTrigger: { trigger: el, pin: true, start: "top top", end: () => "+=" + dist(), scrub: 0.8, invalidateOnRefresh: true, anticipatePin: 1, onUpdate: (s) => { if (bar) bar.style.transform = `scaleX(${s.progress})`; } } });
        el.querySelectorAll<HTMLElement>("[data-hs-par]").forEach((p) => gsap.fromTo(p, { x: 60 }, { x: -60, ease: "none", scrollTrigger: { trigger: el, start: "top top", end: () => "+=" + dist(), scrub: true } }));
      });
    });

    // ---- scroll state for nav + progress
    ScrollTrigger.create({ start: 0, end: "max", onUpdate: (s) => {
      const r = root(); const y = s.scroll();
      r.dataset.dir = s.direction === 1 && y > 160 ? "down" : "up"; r.dataset.top = y < 40 ? "1" : "0";
      const bar = document.getElementById("pbar"); if (bar) bar.style.transform = `scaleX(${s.progress})`;
    } });

    // ---- pointer effects
    if (FINE() && !reduced) {
      q("[data-magnetic], .btn").forEach((el) => {
        const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3" }), yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3" });
        const move = (e: PointerEvent) => { const r = el.getBoundingClientRect(); xTo((e.clientX - (r.left + r.width / 2)) * 0.22); yTo((e.clientY - (r.top + r.height / 2)) * 0.28); };
        const leave = () => { xTo(0); yTo(0); };
        el.addEventListener("pointermove", move); el.addEventListener("pointerleave", leave);
        cleanups.push(() => { el.removeEventListener("pointermove", move); el.removeEventListener("pointerleave", leave); });
      });
      q("[data-tilt]").forEach((el) => {
        const rx = gsap.quickTo(el, "rotationX", { duration: 0.7, ease: "power3" }), ry = gsap.quickTo(el, "rotationY", { duration: 0.7, ease: "power3" });
        gsap.set(el, { transformPerspective: 1100 });
        const move = (e: PointerEvent) => { const r = el.getBoundingClientRect(); ry(((e.clientX - r.left) / r.width - 0.5) * 9); rx(-((e.clientY - r.top) / r.height - 0.5) * 9); };
        const leave = () => { rx(0); ry(0); };
        el.addEventListener("pointermove", move); el.addEventListener("pointerleave", leave);
        cleanups.push(() => { el.removeEventListener("pointermove", move); el.removeEventListener("pointerleave", leave); });
      });
    }
  });
  return () => { cleanups.forEach((f) => f()); ctx.revert(); };
}

export function Motion() {
  const path = usePathname();
  const router = useRouter();

  // one-time: smooth scroll, cursor, link transitions
  useEffect(() => {
    const reduced = REDUCED();
    startLenis();
    introDone = runLoader();

    // custom cursor
    let stopCursor = () => {};
    if (FINE() && !reduced) {
      const dot = document.getElementById("cur-dot")!, ring = document.getElementById("cur-ring")!;
      root().classList.add("cur-on");
      const dx = gsap.quickTo(dot, "x", { duration: 0.08, ease: "none" }), dy = gsap.quickTo(dot, "y", { duration: 0.08, ease: "none" });
      const rx = gsap.quickTo(ring, "x", { duration: 0.5, ease: "power3" }), ry = gsap.quickTo(ring, "y", { duration: 0.5, ease: "power3" });
      const move = (e: PointerEvent) => { root().classList.add("cur-live"); dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY); };
      const over = (e: PointerEvent) => {
        const t = e.target as HTMLElement; const lab = t.closest<HTMLElement>("[data-cursor]");
        ring.classList.toggle("lab", !!lab); ring.textContent = lab?.dataset.cursor ?? "";
        ring.classList.toggle("big", !lab && !!t.closest("a,button,summary,[role=tab]"));
      };
      window.addEventListener("pointermove", move, { passive: true }); document.addEventListener("pointerover", over);
      stopCursor = () => { window.removeEventListener("pointermove", move); document.removeEventListener("pointerover", over); };
    }

    // page transitions + smooth anchors
    const curtain = document.getElementById("curtain");
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[href]");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const u = new URL(a.href, location.href);
      if (u.origin !== location.origin) return;
      if (u.pathname === location.pathname && u.hash) {
        const t = document.querySelector(u.hash);
        if (t) { e.preventDefault(); if (lenis) lenis.scrollTo(t as HTMLElement, { offset: -90, duration: 1.4 }); else t.scrollIntoView({ behavior: "smooth" }); history.replaceState(null, "", u.hash); }
        return;
      }
      if (u.pathname === location.pathname || /\.(md|txt|xml)$/.test(u.pathname)) return;
      if (!curtain || reduced) return;
      e.preventDefault();
      const go = () => router.push(u.pathname + u.search + u.hash);
      curtainIn(go);
      window.setTimeout(() => { if (root().classList.contains("m-leave")) curtainOut(0); }, 3200); // failsafe if navigation stalls
    };
    document.addEventListener("click", onClick, true);
    return () => { stopCursor(); document.removeEventListener("click", onClick, true); };
  }, [router]);

  // per page: build all scroll effects after the new page has mounted
  useEffect(() => {
    const reduced = REDUCED();
    const r = root();
    let revert = () => {};
    let cancelled = false;
    const finish = () => { r.classList.remove("m-pre"); };
    window.scrollTo(0, 0); lenis?.scrollTo(0, { immediate: true, force: true });
    if (reduced) { finish(); return; }
    const t = window.setTimeout(finish, 3200); // failsafe
    (document.fonts?.ready ?? Promise.resolve()).then(() => {
      if (cancelled) return;
      try { revert = build(); ScrollTrigger.sort(); ScrollTrigger.refresh(); } catch (e) { console.error(e); }
      finish();
      if (r.classList.contains("m-leave")) curtainOut(0.12);
    });
    const late = window.setTimeout(() => ScrollTrigger.refresh(), 1200);
    return () => { cancelled = true; clearTimeout(t); clearTimeout(late); revert(); };
  }, [path]);

  return null;
}
