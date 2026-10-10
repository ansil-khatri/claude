import Link from "next/link";
import { MONEY, CLUSTERS, MAIN_NAV } from "@content/v3/nav";
import { INDUSTRIES } from "@content/v3/industries";
import { site, waLink, footerLine } from "@/config/site";
import { Logo } from "./Nav";
import { FooterFit } from "./Motion";

const COLS = ["commerce", "web", "automation"] as const;
export function Footer() {
  return (
    <footer className="footer themed t-dark" id="footer">
      <FooterFit />
      <div className="w footer-in">
        <div className="foot-top">
          <div className="foot-cta">
            <span className="label">Start a project</span>
            <p className="display h3">Tell us what you sell. We&apos;ll tell you how we&apos;d build it.</p>
            <div className="foot-btns"><Link className="btn btn-p" href="/contact" data-magnetic>Book a call <i className="arr">→</i></Link><a className="btn btn-o btn-wa" href={waLink("Hi, I'd like to talk about a project")} target="_blank" rel="noopener" data-wa="1">WhatsApp us</a></div>
          </div>
          <div className="foot-grid">
            {COLS.map((c) => (
              <div key={c}><h5>{CLUSTERS[c].title}</h5><ul>{MONEY.filter((m) => m.cluster === c).map((m) => <li key={m.slug}><Link href={`/${m.slug}`}>{m.short}</Link></li>)}</ul></div>
            ))}
            <div><h5>Industries</h5><ul>{INDUSTRIES.slice(0, 8).map((i) => <li key={i.slug}><Link href={`/industries/${i.slug}`}>{i.name}</Link></li>)}</ul></div>
            <div><h5>Company</h5><ul>{MAIN_NAV.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}<li><Link href="/process">How we work</Link></li><li><Link href="/contact">Contact</Link></li><li><Link href="/free-website-audit">Free website audit</Link></li><li><Link href="/tools/shopify-store-cost-calculator">Store cost calculator</Link></li><li><Link href="/tools/website-cost-calculator">Website cost calculator</Link></li><li><a href="/llms.txt">llms.txt</a></li></ul></div>
          </div>
        </div>
        <p className="foot-line">{footerLine}</p>
        <div className="foot-mark" aria-hidden><span>{site.brand}</span></div>
        <div className="foot-legal"><span>© {new Date().getFullYear()} {site.brand}. Prices exclude 5% VAT. Concept builds are labelled and are not client work.</span><span><Link href="/legal/privacy">Privacy</Link><Link href="/legal/terms">Terms</Link><Link href="/legal/cookies">Cookies</Link><a href="/feed.xml">RSS</a></span></div>
      </div>
    </footer>
  );
}
