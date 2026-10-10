import Link from "next/link";
import { notFound } from "next/navigation";
import { CASES, caseBySlug } from "@content/v3/cases";
import { postBySlug } from "@content/v3/posts";
import { money } from "@content/v3/nav";
import { meta } from "@/lib/seo";
import { caseLd, breadcrumbLd } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { Visual } from "@/components/mock/Visual";
import { Crumbs, CtaBand, SecHead } from "@/components/sections/Blocks";

export const dynamicParams = false;
export const generateStaticParams = () => CASES.map((c) => ({ slug: c.slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const c = caseBySlug(slug);
  return c ? meta({ title: `${c.name}: ${c.sector} Concept Build`, desc: c.summary, path: `/work/${c.slug}` }) : {};
}

export default async function Case({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const c = caseBySlug(slug); if (!c) notFound();
  const services = c.services.map(money).filter((x): x is NonNullable<typeof x> => !!x);
  const posts = c.posts.map(postBySlug).filter((x): x is NonNullable<typeof x> => !!x);
  const next = CASES[(CASES.findIndex((x) => x.slug === c.slug) + 1) % CASES.length];
  return (
    <>
      <JsonLd data={caseLd(c)} /><JsonLd data={breadcrumbLd([["Home", "/"], ["Work", "/work"], [c.name, `/work/${c.slug}`]])} />
      <header className="ph-hero themed t-dark"><div className="w" style={{ position: "relative", zIndex: 2 }}>
        <Crumbs trail={[["Home", "/"], ["Work", "/work"], [c.name]]} />
        <div style={{ display: "flex", gap: 12, marginTop: 34, flexWrap: "wrap" }} data-intro><span className="concept">Concept build, not a client</span><span className="tag">{c.sector}</span><span className="tag">{c.platform}</span></div>
        <h1 className="display" data-intro data-split="lines" style={{ fontSize: "clamp(40px, 6.6vw, 120px)" }}>{c.h}</h1>
        <p className="lead" data-intro>{c.summary}</p>
        <div className="facts"><div><span>Platform</span><b>{c.platform}</b></div><div><span>Timeline</span><b>{c.timeline}</b></div><div><span>Scope</span><b>{c.scope.slice(0, 2).join(", ")}</b></div><div><span>Status</span><b>Concept build</b></div></div>
      </div></header>
      <section className="sec-s themed t-dark"><div className="w"><div className="vis" data-reveal="clip"><Visual id={c.visuals[0]} brand={c.brand} /></div></div></section>
      <section className="sec themed t-paper"><div className="w two">
        <div><span className="label">The brief</span><p className="statement" style={{ marginTop: 22, fontSize: "clamp(26px,3vw,46px)" }} data-reveal>{c.brief}</p></div>
        <div><span className="label">What we built</span><p className="lead" style={{ marginTop: 22, color: "var(--fg)" }} data-reveal>{c.built}</p></div>
      </div></section>
      {c.visuals.slice(1).map((v, i) => (
        <section key={v + i} className={`sec-s themed ${i % 2 ? "t-coal" : "t-dark"}`}><div className="w"><div className="vis" data-reveal="clip"><Visual id={v} brand={c.brand} /></div></div></section>
      ))}
      <section className="sec themed t-dark"><div className="w">
        <SecHead eyebrow="Decisions" h="Choices we made, and why." />
        <ol className="steps" data-stagger>{c.decisions.map((d, i) => <li key={d.t} className="step"><span className="wk">{String(i + 1).padStart(2, "0")}</span><h3>{d.t}</h3><p>{d.p}</p></li>)}</ol>
        <div className="tech" style={{ marginTop: 50 }}>{c.stack.map((s) => <span key={s}>{s}</span>)}</div>
        <p className="fine">This is a concept build designed and engineered by us. It is not a client project and shows no client results.</p>
      </div></section>
      <section className="sec-s themed t-coal"><div className="w two">
        <div><div className="cl-h">Services behind this build</div><div className="rel">{services.map((s) => <Link key={s.slug} href={`/${s.slug}`}><span>{s.label}</span><span>→</span></Link>)}</div></div>
        <div><div className="cl-h">Read more</div><div className="rel">{posts.map((p) => <Link key={p.slug} href={`/blog/${p.slug}`}><span>{p.title}</span><span>→</span></Link>)}<Link href={`/work/${next.slug}`}><span>Next build: {next.name}</span><span>→</span></Link></div></div>
      </div></section>
      <CtaBand h="Your brand, built to this standard." lead="Tell us what you sell and when you want to launch." wa={`Hi, I liked the ${c.name} concept and want something similar`} />
    </>
  );
}
