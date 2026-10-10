"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MONEY, CLUSTERS, MAIN_NAV } from "@content/v3/nav";
import { site, waLink } from "@/config/site";
import { WaIcon } from "@/components/ui/icons";

export function Logo({ className = "" }: { className?: string }) {
  return <Link href="/" className={`logo ${className}`} aria-label={`${site.brand} home`}><span className="logo-mark" aria-hidden /><span>{site.brand}</span></Link>;
}

export function Nav() {
  const [mega, setMega] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => { setMega(false); setOpen(false); }, [path]);
  useEffect(() => { document.documentElement.classList.toggle("menu-open", open); }, [open]);
  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") { setMega(false); setOpen(false); } };
    window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k);
  }, []);
  return (
    <>
      <header className="nav-wrap" onMouseLeave={() => setMega(false)}>
        <nav className="nav w" aria-label="Main">
          <Logo />
          <ul className="nav-links">
            <li><button type="button" className="nav-trig" aria-expanded={mega} aria-controls="mega" onMouseEnter={() => setMega(true)} onClick={() => setMega((v) => !v)}>Services<i aria-hidden /></button></li>
            {MAIN_NAV.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
          </ul>
          <div className="nav-r">
            <a className="nav-wa" href={waLink("Hi, I found you on your website")} target="_blank" rel="noopener" aria-label="WhatsApp us" data-wa="1"><WaIcon /></a>
            <Link href="/contact" className="btn btn-p btn-sm nav-cta" data-magnetic>Start a project</Link>
            <button type="button" className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(true)}><span /><span /></button>
          </div>
        </nav>
        <div id="mega" className={`mega ${mega ? "on" : ""}`} aria-hidden={!mega}>
          <div className="w mega-in">
            {(Object.keys(CLUSTERS) as (keyof typeof CLUSTERS)[]).map((c) => (
              <div key={c} className="mega-col">
                <span className="label">{CLUSTERS[c].title}<em>{CLUSTERS[c].blurb}</em></span>
                <ul>{MONEY.filter((m) => m.cluster === c).map((m) => (
                  <li key={m.slug}><Link href={`/${m.slug}`} tabIndex={mega ? 0 : -1}><b>{m.short}</b><small>{m.blurb}</small></Link></li>
                ))}</ul>
              </div>
            ))}
            <Link href="/work" className="mega-feat" tabIndex={mega ? 0 : -1}><span className="label">Selected work</span><b>Six concept builds, from a luxury leather store to an ERP.</b><span className="tlink">See the work <i className="arr">→</i></span></Link>
          </div>
        </div>
      </header>
      <div className={`drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="drawer-top w"><Logo /><button type="button" className="x" onClick={() => setOpen(false)} aria-label="Close menu">Close</button></div>
        <div className="w drawer-in">
          {(Object.keys(CLUSTERS) as (keyof typeof CLUSTERS)[]).map((c) => (
            <div key={c}><span className="label">{CLUSTERS[c].title}</span>
              {MONEY.filter((m) => m.cluster === c).map((m) => <Link key={m.slug} href={`/${m.slug}`} tabIndex={open ? 0 : -1}>{m.short}</Link>)}</div>
          ))}
          <div><span className="label">Company</span>{MAIN_NAV.map((l) => <Link key={l.href} href={l.href} tabIndex={open ? 0 : -1}>{l.label}</Link>)}<Link href="/contact" tabIndex={open ? 0 : -1}>Contact</Link></div>
        </div>
      </div>
    </>
  );
}
