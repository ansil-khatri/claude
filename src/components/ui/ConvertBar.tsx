"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { waLink } from "@/config/site";
import { WaIcon } from "./icons";

const HIDE = ["/contact", "/free-website-audit", "/legal"];

/** Appears after the reader has scrolled a screen: fixed-quote link plus WhatsApp with the page name in the message. Hidden on the pages that already are the form. */
export function ConvertBar() {
  const path = usePathname();
  const [on, setOn] = useState(false);
  useEffect(() => {
    const f = () => setOn(window.scrollY > 700);
    f(); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f);
  }, [path]);
  if (path === "/" || HIDE.some((h) => path.startsWith(h))) return null;
  const label = path.replace(/^\//, "").replace(/-/g, " ").replace(/\//g, " · ") || "home";
  return (
    <div className={`cbar ${on ? "on" : ""}`} role="region" aria-label="Get in touch">
      <p><b>Fixed quote in AED, in writing.</b> <span>Reply within one working day.</span></p>
      <Link className="btn btn-p btn-sm" href="/contact" data-magnetic>Get a fixed quote</Link>
      <a className="btn btn-o btn-sm btn-wa" href={waLink(`Hi, I'm reading the page "${label}" and have a question`)} target="_blank" rel="noopener" data-wa="1"><WaIcon />WhatsApp</a>
    </div>
  );
}
