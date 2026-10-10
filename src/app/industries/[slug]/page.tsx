import Link from "next/link";
import { notFound } from "next/navigation";
import { INDUSTRIES, industryBySlug } from "@content/v3/industries";
import { postBySlug } from "@content/v3/posts";
import { caseBySlug } from "@content/v3/cases";
import { money } from "@content/v3/nav";
import { meta } from "@/lib/seo";
import { breadcrumbLd, webPageLd, industryLd } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { Faq } from "@/components/ui/Faq";
import { BookBtn, WaBtn } from "@/components/ui/Buttons";
import { Visual } from "@/components/mock/Visual";
import { Crumbs, CtaBand, SecHead } from "@/components/sections/Blocks";
import { Trust } from "@/components/ui/Trust";
import { GlowCanvas } from "@/components/scenes/GlowCanvas";

export const dynamicParams = false;
export const generateStaticParams = () => INDUSTRIES.map((i) => ({ slug: i.slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const i = industryBySlug(slug);
  return i ? meta({ title: i.title, desc: i.desc, path: `/industries/${i.slug}` }) : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const i = industryBySlug(slug); if (!i) notFound();
  const services = i.services.map(money).filter((x): x is NonNullable<typeof x> => !!x);
  const posts = i.posts.map(postBySlug).filter((x): x is NonNullable<typeof x> => !!x);
  const c = i.case ? caseBySlug(i.case) : undefined;
  const brand = c?.brand;
  return (<>
    <JsonLd data={industryLd(i)} /><JsonLd data={webPageLd(i.title, `/industries/${i.slug}`, i.desc)} /><JsonLd data={breadcrumbLd([["Home", "/"], ["Industries", "/industries"], [i.name, `/industries/${i.slug}`]])} />
    <header className="ph-hero themed t-dark"><GlowCanvas /><div className="w" style={{ position: "relative", zIndex: 2 }}>
      <Crumbs trail={[["Home", "/"], ["Industries", "/industries"], [i.name]]} />
      <span className="label" style={{ marginTop: 34, display: "flex" }} data-intro>{i.kicker}</span>
      <h1 className="display" data-intro data-split="lines" style={{ fontSize: "clamp(38px, 5.6vw, 100px)" }}>{i.h1[0]} <span className="dim">{i.h1[1]}</span></h1>
      <p className="lead" data-intro>{i.sub}</p>
      <div className="cta-row" style={{ marginTop: 34 }} data-intro><BookBtn label="Get a fixed quote" /><WaBtn text={`Hi, I run a ${i.name.toLowerCase()} business and want to talk`} /></div>
    </div></header>
    <section className="sec-s themed t-dark"><div className="w"><p className="answer-box" data-reveal>{i.answer}</p></div></section>
    <section className="sec themed t-paper"><div className="w two">
      <div><span className="label">Sound familiar?</span><h2 className="display h3" style={{ margin: "20px 0" }} data-split="lines">Your situation, in plain words.</h2></div>
      <div>{i.situation.map((p, n) => <p key={n} className="lead" style={{ color: "var(--fg)", marginBottom: 22 }} data-reveal>{p}</p>)}</div>
    </div></section>
    {i.problems.map((p, n) => (
      <section key={p.t} className={`sec themed ${n % 2 ? "t-coal" : "t-dark"}`}><div className={`w split ${n % 2 ? "flip" : ""}`}>
        <div><span className="label" data-reveal="fade">Problem {n + 1}</span><h2 className="display h3" data-split="lines">{p.t}</h2><p className="big" data-reveal>{p.p}</p></div>
        <div className="vis" data-reveal="clip"><Visual id={p.visual} brand={brand} /></div>
      </div></section>
    ))}
    <section className="sec themed t-dark"><div className="w">
      <SecHead eyebrow="What we build" h="The parts that matter in your sector." />
      <div className="bento" data-stagger>{i.build.map((b, n) => <article key={b.t} className="bt"><div><span className="bt-n">{String(n + 1).padStart(2, "0")}</span><h3 style={{ marginTop: 14 }}>{b.t}</h3><p>{b.p}</p></div></article>)}</div>
    </div></section>
    <section className="sec themed t-paper"><div className="w">
      <SecHead eyebrow="What it costs" h="Prices in AED, before you call." lead="Starting prices exclude 5% VAT. A fixed quote follows a free call." />
      <div className="tiers" data-stagger>{i.price.map((x, n) => <article key={x.label} className={`tier ${n === 1 ? "hot" : ""}`}><span className="k">{x.label}</span><div className="amt">{x.amt}</div><p>{x.note}</p></article>)}</div>
    </div></section>
    <section className="sec-s themed t-dark"><div className="w"><Trust /></div></section>
    {c && <section className="sec themed t-coal"><div className="w"><SecHead eyebrow="Concept build" h={c.name} lead={`${c.summary} This is a concept build we designed, not a client project.`} /><div className="vis" data-reveal="clip"><Visual id={c.visuals[0]} brand={c.brand} /></div><div style={{ marginTop: 30 }}><Link className="btn btn-o" href={`/work/${c.slug}`}>See how it was built <i className="arr">→</i></Link></div></div></section>}
    <section className="sec themed t-paper"><div className="w two"><div><span className="label">Questions</span><h2 className="display h3" style={{ margin: "20px 0" }}>Answers before you call.</h2></div><Faq items={i.faq} /></div></section>
    <section className="sec-s themed t-dark"><div className="w two">
      <div><div className="cl-h">Services for {i.name.toLowerCase()}</div><div className="rel">{services.map((s) => <Link key={s.slug} href={`/${s.slug}`}><span>{s.label}</span><span>→</span></Link>)}</div></div>
      <div><div className="cl-h">Read next</div><div className="rel">{posts.map((p) => <Link key={p.slug} href={`/blog/${p.slug}`}><span>{p.title}</span><span>→</span></Link>)}<Link href="/pricing"><span>Full pricing</span><span>→</span></Link></div></div>
    </div></section>
    <CtaBand {...i.cta} />
  </>);
}
