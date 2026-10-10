import Link from "next/link";
import { PACKAGES, PRICE_ROWS, CARE, PRICE_DRIVERS, COMPARE, TERMS } from "@content/prices";
import { HubHero } from "@/components/sections/Simple";
import { Plain, Head, FaqSection, CtaSection } from "@/components/sections/Blocks";
import { JsonLd } from "@/components/ui/JsonLd";
import { meta } from "@/lib/seo";

export const metadata = meta({ title: "Prices in AED: Websites, Shopify, Apps, WhatsApp AI", desc: "Every price before you call: websites from AED 7,900, Shopify from AED 9,900, apps from AED 35,000, WhatsApp assistants from AED 2,900. Fixed price, +5% VAT.", path: "/pricing" });

const FAQ = [
  { q: "Why fixed price?", a: "Because you shouldn't have to guess what the invoice will be. We agree scope and price in writing before work starts. If the scope changes, we price the change before doing it." },
  { q: "Do you work hourly?", a: "Fixed price for projects; monthly plans for care, SEO and dedicated teams; hour blocks at AED 220 an hour for agencies and small changes." },
  { q: "Is VAT included?", a: "No. All prices exclude 5% VAT, which appears on the invoice." },
  { q: "What's not included?", a: "Third-party costs: Shopify plans, hosting, WhatsApp and AI usage, gateway fees, Apple and Google developer accounts. We tell you the numbers up front, and the accounts are in your name." },
  { q: "Can I pay in instalments?", a: "Yes. Under AED 20,000: 50% to start, 50% at launch. Above that: 30% / 40% / 30% at start, design approval and launch." },
  { q: "What if the scope changes?", a: "We write the change down, price it, and only start after you say yes. No surprise invoices." },
];

export default function Page() {
  return (
    <>
      <HubHero kicker="Pricing" h1="Every price," em="before you call us." sub="Fixed in AED, agreed in writing before we start. Prices exclude 5% VAT." wa="Hi, I'm on your pricing page" />
      <Plain text="Most UAE businesses start with one of four packages: an add-on from AED 2,900, a website from AED 7,900, a website and app from AED 49,000, or a monthly care plan from AED 790. Every service below lists its starting price, what most projects really cost, and what changes the price." facts={[["Add-on", "AED 2,900"], ["Website", "AED 7,900"], ["Build", "AED 49,000"], ["Care", "AED 790/mo"]]} />
      <section className="sec-tight"><div className="panel"><div className="w sec">
        <Head dark eyebrow="Four packages" title="Where most projects start." />
        <div className="pgrid four">
          {PACKAGES.map((p) => (
            <div key={p.name} className={`pr ${p.hot ? "hot" : ""}`}><span className="k">{p.k}</span><h4>{p.name}</h4><p>{p.blurb}</p>
              <div className="amt"><small>from</small>{p.amt}{p.unit && <small>{p.unit}</small>}</div>
              <ul>{p.items.map((x) => <li key={x}>{x}</li>)}</ul><Link className="btn btn-ink" href={p.href}>{p.time}</Link></div>
          ))}
        </div>
        <p className="note">Prices exclude 5% VAT · checked October 2026.</p>
      </div></div></section>
      <section className="sec"><div className="w">
        <Head eyebrow="Every service" title="What each service costs." lead="Three tiers per service, what most projects really land at, and the time it takes." />
        <div className="pz-wrap">
          {PRICE_ROWS.map((g, gi) => (
            <details key={g.group} open={gi === 0} className="pz-grp">
              <summary>{g.group}<span>+</span></summary>
              <div className="tt"><table>
                <thead><tr><th>Service</th><th>Tier</th><th>From</th><th>Time</th><th>Most projects land at</th></tr></thead>
                <tbody>{g.rows.map((r) => r.tiers.map((t, ti) => (
                  <tr key={r.service + ti}>
                    {ti === 0 ? <td rowSpan={3} style={{ fontWeight: 800, fontFamily: "var(--font-sans)", textTransform: "none", fontSize: 15, letterSpacing: 0, color: "var(--ink)", width: 200 }}>{r.slug !== "industries" ? <Link href={r.slug === "agencies" ? "/agencies" : `/services/${r.slug}`} style={{ textDecoration: "underline" }}>{r.service}</Link> : r.service}</td> : null}
                    <td>{t[0]}</td><td><b>{t[1]}</b></td><td>{t[2]}</td>{ti === 0 ? <td rowSpan={3}>{r.land}</td> : null}
                  </tr>
                )))}</tbody>
              </table></div>
            </details>
          ))}
        </div>
        <span className="note">Prices exclude 5% VAT · checked October 2026 · exact price in writing within 48 hours.</span>
      </div></section>
      <section className="sec-tight" id="care"><div className="w">
        <Head eyebrow="After launch" title="Care plans." lead="Hosting, updates, backups and changes, month to month." />
        <div className="pgrid">{CARE.map((c, i) => <div key={c.name} className={`pr ${i === 1 ? "hot" : ""}`}><span className="k">PLAN</span><h4>{c.name}</h4><div className="amt"><small>from</small>{c.amt}<small>/month</small></div><p style={{ minHeight: 0 }}>{c.items}</p></div>)}</div>
        <div className="aff"><b>What changes the price:</b>{PRICE_DRIVERS.map((d) => <span key={d}>{d}</span>)}</div>
      </div></section>
      <section className="sec-tight"><div className="panel"><div className="w sec">
        <Head dark eyebrow="How you pay" title="Simple terms, no lock-in." />
        <ul className="terms">{TERMS.map((t) => <li key={t}>{t}</li>)}</ul>
      </div></div></section>
      <section className="sec"><div className="w">
        <Head eyebrow="Compare us" title="Freelancer, big agency, or us." />
        <div className="tt"><table>
          <thead><tr><th></th>{COMPARE.cols.map((c, i) => <th key={c} className={i === 2 ? "rec" : ""}>{c}</th>)}</tr></thead>
          <tbody>{COMPARE.rows.map((r) => <tr key={r[0]}>{r.map((c, i) => <td key={i} className={i === 3 ? "rec" : ""}>{c}</td>)}</tr>)}</tbody>
        </table></div>
        <span className="ex-chip" style={{ background: "var(--soft)", color: "var(--mute)", marginTop: 16 }}>Typical market ranges, illustrative</span>
      </div></section>
      <FaqSection eyebrow="Pricing FAQ" head="Questions about price." items={FAQ} />
      <CtaSection h="Want an exact price? 30 minutes and you'll have one in writing within 48 hours." lead="Tell us what you need. We'll give you a fixed price in AED." steps={["Pick a time that works for you", "Tell us what you need", "Get a fixed price within 48 hours"]} wa="Hi, I'd like a price" />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "OfferCatalog", name: "Prices in AED", itemListElement: PRICE_ROWS.flatMap((g) => g.rows).map((r) => ({ "@type": "Offer", name: r.service, priceCurrency: "AED", price: r.tiers[0][1].replace(/[^\d]/g, "") || "0", itemOffered: { "@type": "Service", name: r.service } })) }} />
    </>
  );
}
