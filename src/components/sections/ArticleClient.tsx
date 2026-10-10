"use client";
import { useEffect, useRef } from "react";

/** Reading-progress bar (transform only) + highlights the current TOC link. */
export function ArticleProgress() {
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${h > 0 ? Math.min(1, window.scrollY / h) : 0})`;
    };
    on(); window.addEventListener("scroll", on, { passive: true });
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".toc a"));
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) links.forEach((l) => l.classList.toggle("on", l.hash === "#" + e.target.id)); }), { rootMargin: "-20% 0px -70% 0px" });
    document.querySelectorAll(".prose h2").forEach((h) => io.observe(h));
    return () => { window.removeEventListener("scroll", on); io.disconnect(); };
  }, []);
  return <div ref={bar} className="progress" aria-hidden />;
}
