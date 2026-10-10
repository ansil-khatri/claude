import Link from "next/link";
import { notFound } from "next/navigation";
import { PAGES, pageBySlug } from "@content/v3/pages";
import { POSTS, postBySlug, CLUSTER_LABEL } from "@content/v3/posts";
import { CASES, caseBySlug } from "@content/v3/cases";
import { money, CLUSTERS } from "@content/v3/nav";
import { meta } from "@/lib/seo";
import { breadcrumbLd, serviceLd, webPageLd } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { Faq } from "@/components/ui/Faq";
import { BookBtn, WaBtn } from "@/components/ui/Buttons";
import { Visual } from "@/components/mock/Visual";
import { Crumbs, CtaBand, SectionView, SecHead } from "@/components/sections/Blocks";
import { GlowCanvas } from "@/components/scenes/GlowCanvas";

export const dynamicParams = false;
export const generateStaticParams = () => PAGES.map((p) => ({ slug: p.slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const p = pageBySlug(slug);
  return p ? meta({ title: p.title, desc: p.desc, path: `/${p.slug}` }) : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const p = pageBySlug(slug); if (!p) notFound();
  const cluster = CLUSTERS[p.cluster];
  const posts = p.posts.map(postBySlug).filter((x): x is NonNullable<typeof x> => !!x);
  const cases = p.cases.map(caseBySlug).filter((x): x is NonNullable<typeof x> => !!x);
  const related = p.related.map(money).filter((x): x is NonNullable<typeof x> => !!x);
  const brand = p.cluster === "automation" ? "opsdesk" : p.slug.includes("wordpress") || p.slug.includes("website") ? "northbridge" : undefined;
  return (
    <>
      <JsonLd data={serviceLd(p)} /><JsonLd data={webPageLd(p.title, `/${p.slug}`, p.desc)} />
      <JsonLd data={breadcrumbLd([["Home", "/"], [p.kicker, `/${p.slug}`]])} />
      <header className="ph-hero themed t-dark">
        <GlowCanvas />
        <div className="w" style={{ position: "relative", zIndex: 2 }}>
          <Crumbs trail={[["Home", "/"], [cluster.title], [p.kicker]]} />
          <div className="ph-grid">
            <div>
              <h1 className="display" data-intro data-split="lines">{p.h1[0]} <span className="dim">{p.h1[1]}</span></h1>
              <p className="lead" data-intro>{p.sub}</p>
              <div className="cta-row" style={{ marginTop: 34 }} data-intro><BookBtn /><WaBtn text={`Hi, I'm looking at ${p.keyword}`} /></div>
            </div>
            <div className="dev" data-intro>{p.hero.map((v) => <Visual key={v} id={v} brand={brand} />)}</div>
          </div>
          <div className="facts" data-stagger>{p.facts.map(([a, b]) => <div key={a}><span>{a}</span><b>{b}</b></div>)}</div>
        </div>
      </header>
      <section className="sec-s themed t-dark"><div className="w"><p className="answer-box" data-reveal>{p.answer}</p></div></section>
      {p.sections.map((s, i) => <SectionView key={i} s={s} i={i} brand={brand} />)}
      {cases.length > 0 && (
        <section className="sec themed t-dark"><div className="w">
          <SecHead eyebrow="Concept builds" h="Work that shows how we think." lead="These are concept builds we designed and engineered ourselves. They are labelled that way because they are not client projects." />
          <div className="posts" data-stagger>{cases.map((c) => (
            <Link key={c.slug} href={`/work/${c.slug}`} className="pc"><div className="meta"><span>{c.sector}</span><span>Concept build</span></div><div><h3>{c.name}</h3><p>{c.summary}</p></div><span className="tlink">View build →</span></Link>
          ))}</div>
        </div></section>
      )}
      <section className="sec themed t-paper"><div className="w two">
        <div><span className="label">Questions</span><h2 className="display h3" style={{ margin: "20px 0" }} data-split="lines">Answers before you call.</h2><p className="lead">Prices are in AED and exclude 5% VAT.</p></div>
        <Faq items={p.faq} />
      </div></section>
      {(posts.length > 0 || related.length > 0) && (
        <section className="sec-s themed t-dark"><div className="w two">
          {posts.length > 0 && <div><div className="cl-h">Read next</div><div className="rel">{posts.map((x) => <Link key={x.slug} href={`/blog/${x.slug}`}><span>{x.title}</span><span>→</span></Link>)}</div></div>}
          {related.length > 0 && <div><div className="cl-h">Related services</div><div className="rel">{related.map((x) => <Link key={x.slug} href={`/${x.slug}`}><span>{x.label}</span><span>→</span></Link>)}</div></div>}
        </div></section>
      )}
      <CtaBand {...p.cta} />
    </>
  );
}
