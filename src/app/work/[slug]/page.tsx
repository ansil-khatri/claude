import { url } from "@/config/site";
import { notFound } from "next/navigation";
import Link from "next/link";
import { INDUSTRY_PAGES } from "@content/industries";
import { BRANDS } from "@content/brands";
import { HubHero } from "@/components/sections/Simple";
import { CaseStudy, CtaSection, Head } from "@/components/sections/Blocks";
import { meta, breadcrumbLd } from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";
import { SERVICES } from "@content/catalog";

export const dynamicParams = false;
const find = (slug: string) => INDUSTRY_PAGES.find((p) => p.caseStudy.brand === slug);
export const generateStaticParams = () => INDUSTRY_PAGES.map((p) => ({ slug: p.caseStudy.brand }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const p = find(slug);
  return p ? meta({ title: `${BRANDS[slug].name}: Example Project`, desc: `${p.caseStudy.h} ${p.caseStudy.problem} ${p.caseStudy.built}`, path: `/work/${slug}` }) : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const p = find(slug); if (!p) notFound();
  const c = p.caseStudy, b = BRANDS[slug];
  return (
    <>
      <HubHero kicker={`Example project · ${p.name}`} h1={c.h} sub={`${b.name} · ${b.area}. ${c.problem}`} wa={`Hi, I'm on your ${b.name} example page`} />
      <section className="sec-tight"><div className="w"><div className="card-grid">
        {[["Client", `${b.name} (concept)`], ["Industry", p.name], ["Location", b.area], ["Services", "Website · app · payments · WhatsApp"], ["Timeline", "About 12 weeks"], ["Budget", "From AED 49,000"]].map(([k, v]) => <div key={k} className="g-card" style={{ minHeight: 0 }}><span className="cat">{k}</span><h3 style={{ fontSize: 20 }}>{v}</h3></div>)}
      </div></div></section>
      <CaseStudy c={c} />
      <section className="sec"><div className="w"><Head eyebrow="What's next" title="Related" />
        <div className="chips">{SERVICES.slice(0, 6).map((s) => <Link key={s.slug} className="chip" href={`/services/${s.slug}`}>{s.name}</Link>)}<Link className="chip" href={`/industries/${p.slug}`}>{p.name}</Link></div></div></section>
      <CtaSection h="Want results like these? 30 minutes and you'll know what it takes." lead="Tell us about the business." steps={["Pick a time that works for you", "Tell us about the business", "Get a plan and fixed price within 48 hours"]} wa="Hi, I'd like results like your example project" />
      <JsonLd data={[breadcrumbLd([["Home", "/"], ["Work", "/work"], [c.h, `/work/${slug}`]]), { "@context": "https://schema.org", "@type": "Article", headline: c.h, inLanguage: "en-AE", url: url(`/work/${slug}`), about: "Example project (illustrative numbers)", author: { "@id": url("/#org") }, publisher: { "@id": url("/#org") }, datePublished: "2026-10-10", dateModified: "2026-10-10" }]} />
    </>
  );
}
