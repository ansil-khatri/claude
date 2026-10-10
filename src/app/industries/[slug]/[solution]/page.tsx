import { notFound } from "next/navigation";
import Link from "next/link";
import { SOLUTIONS, solution } from "@content/solutions";
import { industry } from "@content/catalog";
import { industryPage } from "@content/industries";
import { Stage } from "@/components/sections/Stage";
import { BookBtn, WaBtn, LineBtn } from "@/components/ui/Buttons";
import { Plain, Pains, DeepDive, FaqSection, Related, CtaSection, Head, CaseStudy } from "@/components/sections/Blocks";
import { JsonLd } from "@/components/ui/JsonLd";
import { meta, breadcrumbLd, serviceLd } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => SOLUTIONS.map((s) => ({ slug: s.ind, solution: s.slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string; solution: string }> }) {
  const { slug, solution: sl } = await params; const s = solution(slug, sl);
  return s ? meta({ title: s.seo.title, desc: s.seo.desc, path: `/industries/${slug}/${sl}` }) : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string; solution: string }> }) {
  const { slug, solution: sl } = await params; const s = solution(slug, sl); const ind = industry(slug); const ip = industryPage(slug);
  if (!s || !ind || !ip) notFound();
  const path = `/industries/${slug}/${sl}`;
  return (
    <>
      <section className="panel hero-panel" style={{ marginTop: 14 }}>
        <div className="hero-glow" />
        <div className="w hero-grid">
          <div className="hero-copy">
            <div className="crumb"><Link href="/industries">Industries</Link> / <Link href={`/industries/${slug}`}>{ind.name}</Link> / <b>{s.name}</b></div>
            <h1 className="hero-h1"><span className="h1-kicker">{s.kicker}</span>{s.h1a} <em>{s.h1b}</em></h1>
            <p className="hero-sub">{s.sub}</p>
            <div className="hero-ctas"><BookBtn /><WaBtn text={s.waText} /><LineBtn href="#cost">See the cost</LineBtn></div>
          </div>
          <Stage stage={s.stage} />
        </div>
      </section>
      <Plain text={s.plain} facts={s.facts} />
      <Pains head="Sound familiar?" pains={s.pains} />
      <DeepDive eyebrow="What you get" head="What you get." tabs={s.tabs} />
      <section className="sec" id="cost"><div className="w">
        <Head eyebrow="Cost & timeline" title={`What ${s.name.toLowerCase()} costs.`} lead={`Most projects land between ${s.cost.land}. Prices exclude 5% VAT.`} />
        <div className="tt rv"><table><thead><tr><th>Package</th><th>From</th><th>Time</th></tr></thead><tbody>{s.cost.rows.map(([a, b, c]) => <tr key={a}><td style={{ fontFamily: "var(--font-sans)", textTransform: "none", fontSize: 16, color: "var(--ink)", fontWeight: 700, letterSpacing: 0, width: "auto" }}>{a}</td><td><b>{b}</b></td><td>{c}</td></tr>)}</tbody></table></div>
        <span className="note">{s.caseNote.text} <span className="ex-chip" style={{ background: "var(--soft)", color: "var(--mute)" }}>Example project · illustrative numbers</span></span>
      </div></section>
      <FaqSection eyebrow="FAQ" head="Questions about this." items={s.faq} />
      <section className="sec-tight"><div className="w"><div className="chips"><b style={{ marginRight: 8 }}>Related:</b>{s.related.map((r) => <Link key={r.href} className="chip" href={r.href}>{r.name} →</Link>)}<Link className="chip" href={`/industries/${slug}`}>All {ind.name.toLowerCase()} →</Link></div></div></section>
      <CtaSection h="Want this for your business? 30 minutes and you'll know what it costs." lead="Tell us how you work today. We'll show you the closest example." steps={["Pick a time that works for you", "Walk us through how you work", "Get a plan and fixed price within 48 hours"]} wa={s.waText} />
      <JsonLd data={[breadcrumbLd([["Home", "/"], ["Industries", "/industries"], [ind.name, `/industries/${slug}`], [s.name, path]]), serviceLd({ name: s.name, seo: s.seo, slug: sl }, path, s.cost.rows[0][1])]} />
    </>
  );
}
