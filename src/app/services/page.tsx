import Link from "next/link";
import { GROUPS, SERVICES, type Group } from "@content/catalog";
import { servicePage } from "@content/services";
import { Faq } from "@/components/ui/Faq";
import { HubHero } from "@/components/sections/Simple";
import { Plain, Head, CtaSection, FaqSection } from "@/components/sections/Blocks";
import { JsonLd } from "@/components/ui/JsonLd";
import { meta } from "@/lib/seo";
import { url } from "@/config/site";
import { Viz } from "@/components/mock/Viz";

export const metadata = meta({ title: "Software Development Services in Dubai & UAE", desc: "Shopify stores, websites, apps, WhatsApp assistants, payments, e-invoicing and automation for UAE businesses. Fixed AED prices. Start with your problem.", path: "/services" });

const FINDER: [string, string][] = [
  ["Talabat and Deliveroo take too much", "/industries/restaurants/online-ordering"],
  ["We're drowning in WhatsApp messages", "/services/ai-whatsapp-automation"],
  ["I need e-invoicing before 2027", "/services/e-invoicing-integration"],
  ["I want to sell online in the UAE", "/services/shopify-development"],
  ["My website is old, English-only or slow", "/services/website-design"],
  ["Customers want to pay with Tabby or Tamara", "/services/payment-integration"],
  ["Everything lives in Excel and WhatsApp groups", "/services/business-automation"],
  ["Customers ask if we have an app", "/services/mobile-app-development"],
  ["I built something with AI and it's breaking", "/services/vibe-code-rescue"],
  ["I'm an agency and need developers", "/agencies"],
];
const FAQ = [
  { q: "Which service do I need?", a: "Start with your problem, not the technology. Use the list above, or book a 30-minute call and we'll tell you honestly, even if the answer is a cheaper option." },
  { q: "Can you do several services together?", a: "Yes, and most projects do. A typical store is Shopify plus payments plus SEO; a typical restaurant project is ordering, WhatsApp and Foodics sync." },
  { q: "Are prices fixed?", a: "Yes. You get a written fixed price in AED within 48 hours of our call. Prices exclude 5% VAT." },
  { q: "Do you work outside Dubai?", a: "Yes, across all emirates. We're based in Dubai and meet in Abu Dhabi, Sharjah and elsewhere on request." },
];

export default function Page() {
  return (
    <>
      <HubHero kicker="Services" h1="What we build, and" em="what it costs." sub="Twelve services, one team, fixed prices in AED. Not sure which you need? Start with your problem below." wa="Hi, I'm on your services page" />
      <Plain text="We build software for UAE businesses in three groups: selling online (Shopify, websites, payments, landing pages), building products (mobile apps, web apps, SaaS) and running the business (WhatsApp & AI, automation, e-invoicing, SEO, fixing AI-built apps). Every service has a fixed AED price agreed before we start." facts={[["From", "AED 2,900"], ["Services", "12"], ["Languages", "English + Arabic"], ["Based in", "Dubai"]]} />
      <section className="sec"><div className="w">
        <Head eyebrow="Start here" title="My problem is…" lead="Pick the sentence that sounds like your week." />
        <nav className="finder" aria-label="Problem finder">{FINDER.map(([t, h]) => <Link key={h + t} href={h}><span>{t}</span><span className="go">→</span></Link>)}</nav>
      </div></section>
      <section className="sec-tight"><div className="w groups">
        {(Object.keys(GROUPS) as Group[]).map((g) => (
          <div key={g}>
            <div className="group-h rv"><h3>{GROUPS[g].title}</h3><p>{GROUPS[g].blurb}</p></div>
            <div className="sgrid">
              {SERVICES.filter((s) => s.group === g).map((s) => {
                const p = servicePage(s.slug);
                return (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="svc-card rv" data-cursor="Open">
                    {p && <div className="thumb" aria-hidden><div style={{ width: "100%" }}><Viz spec={p.stage.main.t === "phone" ? { t: "dash", title: s.name, sub: "", kpis: [["From", s.from]] } : p.stage.main} /></div></div>}
                    <h3>{s.name}</h3><p>{s.problem}</p>
                    <div className="from"><small>from</small>{s.from}{s.fromUnit}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
        <span className="ex-chip" style={{ background: "var(--soft)", color: "var(--mute)", justifySelf: "start" }}>Screens show example projects</span>
      </div></section>
      <section className="sec-tight"><div className="panel"><div className="w sec" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
        <div><span className="eyebrow on-dark"><i />For agencies</span><h2 className="h2" style={{ color: "#fff" }}>You sell it. We build it, under your name.</h2></div>
        <Link href="/agencies" className="btn btn-lime">White-label development <span className="arrow">→</span></Link>
      </div></div></section>
      <FaqSection eyebrow="FAQ" head="Choosing a service." items={FAQ} />
      <CtaSection h="Not sure which one you need? 30 minutes and we'll tell you honestly." lead="Tell us what's going on in the business. We'll point you to the right service, or tell you you don't need us." steps={["Pick a time that works for you", "Tell us what's going on", "Get a plan and fixed price within 48 hours"]} wa="Hi, I'm not sure which service I need" />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "ItemList", itemListElement: SERVICES.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.name, url: url(`/services/${s.slug}`) })) }} />
    </>
  );
}
