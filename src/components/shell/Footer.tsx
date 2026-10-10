import Link from "next/link";
import { INDUSTRIES, SERVICES } from "@content/catalog";
import { footerLine, site, waLink } from "@/config/site";
import { WaBtn } from "@/components/ui/Buttons";
import { FooterFit } from "./RootEffects";

export function Footer() {
  return (
    <footer className="footer" id="footer">
      <FooterFit />
      <div className="w footer-in">
        <div className="footer-grid">
          <div>
            <Link href="/" className="logo"><span className="logo-mark" />{site.brand}</Link>
            <p className="about">Apps, websites and software for businesses in Dubai &amp; UAE, and white-label development for agencies.</p>
            <WaBtn text="Hi, I'd like to talk about a project" />
            <p className="about" style={{ marginTop: 18 }}><a href={`mailto:${site.email}`}>{site.email}</a></p>
          </div>
          <div><h5>Start here</h5><ul>
            {[["/pricing", "Pricing in AED"], ["/process", "How we work"], ["/work", "Work"], ["/guides", "Guides"], ["/guides/uae-e-invoicing", "E-invoicing 2027"], ["/tools", "Free tools"], ["/about", "About"], ["/contact", "Contact"]].map(([h, l]) => <li key={h}><Link href={h}>{l}</Link></li>)}
          </ul></div>
          <div><h5>Services</h5><ul>
            {SERVICES.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.name}</Link></li>)}
            <li><Link href="/agencies">White-label for agencies</Link></li>
          </ul></div>
          <div><h5>Industries</h5><ul>
            {INDUSTRIES.map((s) => <li key={s.slug}><Link href={`/industries/${s.slug}`}>{s.name}</Link></li>)}
            <li><Link href="/abu-dhabi">Abu Dhabi</Link></li>
          </ul></div>
          <div><h5>Tools</h5><ul>
            {[["/tools/talabat-commission-calculator", "Talabat commission"], ["/tools/payment-gateway-fee-calculator", "Gateway fees"], ["/tools/e-invoicing-readiness-check", "E-invoicing check"], ["/tools/app-cost-calculator", "App cost"]].map(([h, l]) => <li key={h}><Link href={h}>{l}</Link></li>)}
          </ul></div>
        </div>
        <p className="about" style={{ maxWidth: "none", fontSize: 13, color: "#8f8f96" }}>{footerLine}</p>
        <div className="wm-clip"><div className="wordmark" aria-hidden>{site.brand}</div></div>
        <div className="legal">
          <span>© {new Date().getFullYear()} {site.brand}. Prices exclude 5% VAT.</span>
          <span><Link href="/legal/privacy">Privacy</Link><Link href="/legal/terms">Terms</Link><Link href="/legal/cookies">Cookies</Link><a href={waLink("Hi")} rel="noopener">WhatsApp</a></span>
        </div>
      </div>
    </footer>
  );
}
