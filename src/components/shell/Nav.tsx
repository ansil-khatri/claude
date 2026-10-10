"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { GROUPS, INDUSTRIES, SERVICES, NAV_MAIN, type Group } from "@content/catalog";
import { site, waLink } from "@/config/site";
import { WaIcon } from "@/components/ui/icons";

export function Nav() {
  const [hide, setHide] = useState(false);
  const [open, setOpen] = useState(false);
  const last = useRef(0);
  const acc = useRef(0);
  const path = usePathname();

  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    const on = () => {
      const y = window.scrollY, d = y - last.current;
      last.current = y;
      acc.current = Math.sign(d) === Math.sign(acc.current) ? acc.current + d : d;
      if (y < 120) setHide(false);
      else if (acc.current > 80) setHide(true);
      else if (acc.current < -80) setHide(false);
    };
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => { document.documentElement.style.overflow = open ? "hidden" : ""; }, [open]);

  const wa = waLink("Hi, I'm on your website");
  return (
    <>
      <div className={`nav-wrap ${hide && !open ? "hide" : ""}`}>
        <nav className="nav" aria-label="Main">
          <Link href="/" className="logo" aria-label={`${site.brand} home`}><span className="logo-mark" />{site.brand}</Link>
          <ul className="nav-links">
            <li className="has-mega">
              <button aria-haspopup="true">Services ▾</button>
              <div className="mega">
                {(Object.keys(GROUPS) as Group[]).map((g) => (
                  <div key={g}>
                    <h5>{GROUPS[g].title}</h5>
                    {SERVICES.filter((s) => s.group === g).map((s) => (
                      <Link key={s.slug} href={`/services/${s.slug}`}>{s.name}<small>{s.from}</small></Link>
                    ))}
                  </div>
                ))}
                <div className="mega-ind">
                  <h5 style={{ gridColumn: "1/-1", margin: "0 0 4px" }}>Industries</h5>
                  {INDUSTRIES.map((i) => <Link key={i.slug} href={`/industries/${i.slug}`}>{i.name}</Link>)}
                </div>
              </div>
            </li>
            <li><Link href="/industries">Industries</Link></li>
            {NAV_MAIN.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
          </ul>
          <div className="nav-r">
            <a className="nav-wa" href={wa} target="_blank" rel="noopener" aria-label="WhatsApp us"><WaIcon /></a>
            <Link href="/contact" className="btn btn-lime btn-sm keep">Book a free call</Link>
            <button className="burger" aria-label="Menu" onClick={() => setOpen(true)}><span /></button>
          </div>
        </nav>
      </div>
      <div className={`drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <button className="x" onClick={() => setOpen(false)} aria-label="Close menu">×</button>
        <small>Services</small>
        {SERVICES.map((s) => <Link key={s.slug} href={`/services/${s.slug}`}>{s.name}</Link>)}
        <small>Industries</small>
        {INDUSTRIES.map((s) => <Link key={s.slug} href={`/industries/${s.slug}`}>{s.name}</Link>)}
        <small>Company</small>
        {[...NAV_MAIN, { href: "/about", label: "About" }, { href: "/contact", label: "Contact" }].map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
      </div>
    </>
  );
}
