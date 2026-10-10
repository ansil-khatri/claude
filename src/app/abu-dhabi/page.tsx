import { JsonLd } from "@/components/ui/JsonLd";
import Link from "next/link";
import { AD_HUB, CITY } from "@content/abudhabi";
import { HubHero } from "@/components/sections/Simple";
import { Plain, Head, FaqSection, CtaSection } from "@/components/sections/Blocks";
import { meta, breadcrumbLd } from "@/lib/seo";

export const metadata = meta({ title: AD_HUB.seo.title, desc: AD_HUB.seo.desc, path: "/abu-dhabi" });
export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbLd([["Home", "/"], ["Abu Dhabi", "/abu-dhabi"]])} />
      <HubHero kicker="Abu Dhabi" h1="Software for Abu Dhabi businesses," em="from a team an hour away." sub="Apps, websites and Shopify stores for Abu Dhabi, with meetings at your office on request." wa="Hi, I'm on your Abu Dhabi page" />
      <Plain text={AD_HUB.plain} facts={AD_HUB.facts} />
      <section className="sec"><div className="w"><Head eyebrow="Abu Dhabi" title="What's different in Abu Dhabi." />
        <div className="card-grid">{AD_HUB.local.map((l) => <div key={l.h} className="g-card rv"><span className="cat">Local</span><h3>{l.h}</h3><p>{l.p}</p></div>)}</div></div></section>
      <section className="sec-tight"><div className="w"><Head eyebrow="Services" title="Our Abu Dhabi pages." />
        <div className="card-grid">{CITY.map((c) => <Link key={c.slug} href={`/abu-dhabi/${c.slug}`} className="g-card"><span className="cat">{c.kicker}</span><h3>{c.h1a} {c.h1b}</h3><p>From {c.tiers[0][1]}</p></Link>)}</div></div></section>
      <FaqSection eyebrow="FAQ" head="Working with us from Abu Dhabi." items={AD_HUB.faq} />
      <CtaSection h="Based in Abu Dhabi? 30 minutes, by video or at your office." lead="Tell us about the business." steps={["Pick a time that works for you", "Tell us about the business", "Get a plan and fixed price within 48 hours"]} wa="Hi, I'm in Abu Dhabi and I'd like to talk" />
    </>
  );
}
