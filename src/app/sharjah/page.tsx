import Link from "next/link";
import { HubHero } from "@/components/sections/Simple";
import { Plain, Head, FaqSection, CtaSection } from "@/components/sections/Blocks";
import { JsonLd } from "@/components/ui/JsonLd";
import { meta, breadcrumbLd } from "@/lib/seo";
import { url } from "@/config/site";

export const metadata = meta({ title: "Software for Sharjah Businesses", desc: "Apps, websites and Shopify stores for Sharjah businesses, from a Dubai team 20 to 40 minutes away. Arabic + English, Tabby and Tamara, fixed AED prices from AED 7,900.", path: "/sharjah" });

const LOCAL = [
  { h: "Sharjah licences are separate from Dubai's", p: "Sharjah companies are licensed by the Sharjah Economic Development Department or one of its free zones, not by Dubai. We check what your licence activity allows you to sell online before we build the store." },
  { h: "Many Sharjah businesses sell across the border", p: "A shop in Sharjah often delivers to Dubai and Ajman the same day. Delivery zones, cut-off times and a WhatsApp address pin matter more than a fancy homepage, so we build those first." },
  { h: "Free zones and parks", p: "Sharjah has several free zones and innovation parks with their own onboarding and perks. We build to the same standard whether you are on the mainland or in a zone, and tell you what we need from your licence." },
  { h: "Arabic first for neighbourhood customers", p: "Customers of local shops, clinics and workshops search and message in Arabic. Every site and app we build runs in Arabic and English, including right-to-left layouts." },
];
const FAQ = [
  { q: "Do you have an office in Sharjah?", a: "We are based in Dubai, usually 20 to 40 minutes from Sharjah depending on traffic, and meet in Sharjah on request. Most work is done by video and WhatsApp." },
  { q: "Are prices different in Sharjah?", a: "No. Prices are the same fixed AED prices as in Dubai and exclude 5% VAT." },
  { q: "Can you build for a Sharjah free-zone company?", a: "Yes. Tell us the zone and licence activity on the call so we can check what you can sell and which payment providers accept you." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbLd([["Home", "/"], ["Sharjah", "/sharjah"]])} />
      <HubHero kicker="Software for businesses in Sharjah" h1="Apps and websites for Sharjah," em="built next door." sub="Shopify stores, websites, apps and WhatsApp assistants for Sharjah retailers, clinics, workshops and service companies, in Arabic and English." wa="Hi, I'm on your Sharjah page" />
      <Plain text="We build stores, websites, apps and WhatsApp assistants for Sharjah businesses. We are based in Dubai, 20 to 40 minutes away, and meet in Sharjah on request. Everything runs in Arabic and English, prices are fixed in AED before we start, and you own the code." facts={[["From", "AED 7,900"], ["Meet", "Sharjah on request"], ["Languages", "English + Arabic"], ["Licence", "Sharjah-aware"]]} />
      <section className="sec"><div className="w"><Head eyebrow="In Sharjah" title="What's specific to Sharjah." />
        <div className="card-grid">{LOCAL.map((l) => <div key={l.h} className="g-card rv"><span className="cat">Local</span><h3>{l.h}</h3><p>{l.p}</p></div>)}</div></div></section>
      <section className="sec-tight"><div className="w"><Head eyebrow="Services" title="Where most Sharjah projects start." />
        <div className="chips">{[["/services/shopify-development", "Shopify from AED 9,900"], ["/services/website-design", "Websites from AED 7,900"], ["/services/ai-whatsapp-automation", "WhatsApp assistant from AED 2,900"], ["/services/seo", "Local SEO from AED 3,500/mo"], ["/pricing", "All prices"]].map(([h, t]) => <Link key={h} className="chip" href={h}>{t}</Link>)}</div>
        <p className="note" style={{ marginTop: 18 }}>Our example Peak Cooling serves Dubai and Sharjah. It is an <span className="ex-chip" style={{ background: "var(--soft)", color: "var(--mute)" }}>Example project · illustrative numbers</span></p></div></section>
      <FaqSection eyebrow="FAQ" head="Questions from Sharjah." items={FAQ} />
      <CtaSection h="Based in Sharjah? 30 minutes, by video or at your office." lead="Tell us about the business." steps={["Pick a time that works for you", "Tell us about the business", "Get a plan and fixed price within 48 hours"]} wa="Hi, I'm in Sharjah" />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: "Software development for Sharjah businesses", url: url("/sharjah"), areaServed: { "@type": "City", name: "Sharjah" }, provider: { "@id": url("/#org") } }} />
    </>
  );
}
