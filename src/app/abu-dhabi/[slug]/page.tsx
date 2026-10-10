import { notFound } from "next/navigation";
import Link from "next/link";
import { CITY, city } from "@content/abudhabi";
import { BRANDS } from "@content/brands";
import { HubHero } from "@/components/sections/Simple";
import { Plain, Head, FaqSection, CtaSection } from "@/components/sections/Blocks";
import { SiteInBrowser } from "@/components/mock/BrandMocks";
import { JsonLd } from "@/components/ui/JsonLd";
import { meta, breadcrumbLd } from "@/lib/seo";
import { url } from "@/config/site";

export const dynamicParams = false;
export const generateStaticParams = () => CITY.map((c) => ({ slug: c.slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const c = city(slug);
  return c ? meta({ title: c.seo.title, desc: c.seo.desc, path: `/abu-dhabi/${slug}` }) : {};
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const c = city(slug); if (!c) notFound();
  const path = `/abu-dhabi/${slug}`;
  return (
    <>
      <HubHero kicker={c.kicker} h1={c.h1a} em={c.h1b} sub={c.sub} wa={c.wa} />
      <Plain text={c.plain} facts={c.facts} />
      <section className="sec"><div className="w"><Head eyebrow="In Abu Dhabi" title="What's specific to Abu Dhabi." />
        <div className="card-grid">{c.local.map((l) => <div key={l.h} className="g-card rv"><span className="cat">Local</span><h3>{l.h}</h3><p>{l.p}</p></div>)}</div></div></section>
      <section className="sec-tight"><div className="w two-col"><div><Head eyebrow="Example" title="A local example." lead={c.example.text} /><span className="ex-chip" style={{ background: "var(--soft)", color: "var(--mute)" }}>Example project · illustrative numbers</span></div><div data-nosnippet><SiteInBrowser k={c.example.brand} /></div></div></section>
      <section className="sec-tight"><div className="w"><Head eyebrow="Pricing" title={`What ${c.name.toLowerCase()} costs.`} lead="Same fixed AED prices as in Dubai. Prices exclude 5% VAT." />
        <div className="tt"><table><thead><tr><th>Package</th><th>From</th><th>Time</th></tr></thead><tbody>{c.tiers.map(([a, b, t]) => <tr key={a}><td style={{ fontFamily: "var(--font-sans)", textTransform: "none", fontSize: 16, color: "var(--ink)", fontWeight: 700, letterSpacing: 0, width: "auto" }}>{a}</td><td><b>{b}</b></td><td>{t}</td></tr>)}</tbody></table></div>
        <p style={{ marginTop: 16 }}><Link href={c.service} style={{ fontWeight: 700, textDecoration: "underline" }}>See the full {c.name.toLowerCase()} service →</Link></p></div></section>
      <FaqSection eyebrow="FAQ" head="Questions from Abu Dhabi." items={c.faq} />
      <CtaSection h="Based in Abu Dhabi? 30 minutes, by video or at your office." lead="Tell us about the business." steps={["Pick a time that works for you", "Tell us about the business", "Get a plan and fixed price within 48 hours"]} wa={c.wa} />
      <JsonLd data={[breadcrumbLd([["Home", "/"], ["Abu Dhabi", "/abu-dhabi"], [c.name, path]]), { "@context": "https://schema.org", "@type": "Service", name: c.kicker, url: url(path), provider: { "@id": url("/#org") }, areaServed: { "@type": "City", name: "Abu Dhabi" } }]} />
    </>
  );
}
