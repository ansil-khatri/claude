import { notFound } from "next/navigation";
import Link from "next/link";
import { published, guide, CHECKED, type Block } from "@content/guides";
import { Faq } from "@/components/ui/Faq";
import { Plain, CtaSection, Head } from "@/components/sections/Blocks";
import { WaBtn } from "@/components/ui/Buttons";
import { ArticleProgress } from "@/components/sections/ArticleClient";
import { JsonLd } from "@/components/ui/JsonLd";
import { meta, breadcrumbLd } from "@/lib/seo";
import { site, url } from "@/config/site";

export const dynamicParams = false;
export const generateStaticParams = () => published().map((g) => ({ slug: g.slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const g = guide(slug);
  return g?.body ? meta({ title: g.seoTitle, desc: g.answer ?? g.title, path: `/guides/${slug}` }) : {};
}

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function renderBlock(b: Block, i: number) {
  if ("h2" in b) return <h2 key={i} id={b.id ?? slugify(b.h2)}>{b.h2}</h2>;
  if ("h3" in b) return <h3 key={i}>{b.h3}</h3>;
  if ("p" in b) return <p key={i}>{b.p}</p>;
  if ("ul" in b) return <ul key={i}>{b.ul.map((x) => <li key={x}>{x}</li>)}</ul>;
  if ("ol" in b) return <ol key={i}>{b.ol.map((x) => <li key={x}>{x}</li>)}</ol>;
  if ("check" in b) return <div key={i} className="callout">⚠ <b>Check the official source.</b> {b.check}</div>;
  return <div key={i} style={{ overflowX: "auto" }}><table><thead><tr>{b.table.head.map((h) => <th key={h}>{h}</th>)}</tr></thead><tbody>{b.table.rows.map((r, j) => <tr key={j}>{r.map((c, k) => <td key={k}>{c}</td>)}</tr>)}</tbody></table></div>;
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const g = guide(slug);
  if (!g?.body) notFound();
  const toc = g.body.filter((b): b is { h2: string; id?: string } => "h2" in b).map((b) => ({ id: b.id ?? slugify(b.h2), t: b.h2 }));
  const related = published().filter((x) => x.slug !== slug).slice(0, 3);
  return (
    <>
      <ArticleProgress />
      <section className="panel hub-hero" style={{ marginTop: 14 }}>
        <div className="w" style={{ position: "relative", zIndex: 2 }}>
          <div className="crumb"><Link href="/guides">Guides</Link> / <b>{g.cat}</b></div>
          <h1 style={{ fontSize: "clamp(34px,4.4vw,62px)" }}><span className="h1-kicker">{g.cat}</span>{g.title}</h1>
          <div className="meta-row"><span>By <b style={{ color: "#fff" }}>[Author name]</b>, [role]</span><span>Reviewed by [Reviewer]</span><span>Updated {CHECKED}</span><span>{g.read} min read</span></div>
        </div>
      </section>
      <section className="sec"><div className="w art-grid">
        <aside className="toc" aria-label="Table of contents"><b>On this page</b>{toc.map((t) => <a key={t.id} href={`#${t.id}`}>{t.t}</a>)}</aside>
        <article>
          {g.opening && <p className="lead" style={{ marginTop: 0, marginBottom: 26, fontStyle: "italic" }}>{g.opening}</p>}
          <div className="answer">{g.answer}</div>
          <div className="prose">{g.body.map(renderBlock)}</div>
          <div className="panel" style={{ margin: "48px 0", padding: 30, borderRadius: 28 }}>
            <b style={{ color: "var(--lime)", font: "600 11px var(--font-mono)", letterSpacing: ".08em" }}>WHAT WE&apos;D DO</b>
            <p style={{ margin: "10px 0 16px", color: "#d6d6da" }}>Tell us how your business runs today and we&apos;ll tell you honestly what to do first, even if the answer is a cheaper option.</p>
            <div className="chips">{g.links?.slice(0, 2).map((l) => <Link key={l.href} className="chip" href={l.href}>{l.label} →</Link>)}<WaBtn text={`Hi, I read your guide: ${g.title}`} /></div>
          </div>
          {g.faq && <><h2 style={{ font: "800 30px var(--font-sans)", letterSpacing: "-.04em", margin: "40px 0 10px" }}>FAQ</h2><Faq items={g.faq} /></>}
          <div className="callout" style={{ background: "var(--card)", marginTop: 40 }}><b>Sources.</b> Official publications and provider pages named in the text (for tax and e-invoicing: the Ministry of Finance and Federal Tax Authority). Facts marked ⚠ were last checked in {CHECKED}. We&apos;re not a law or tax firm; confirm decisions with an advisor.</div>
          <div className="team-card" style={{ display: "flex", gap: 18, alignItems: "center", marginTop: 26 }}><div className="team-av" style={{ margin: 0, flex: "none" }}>?</div><div><b>[Author name]</b><p style={{ color: "var(--mute)", fontSize: 14 }}>Photo, bio and LinkedIn go here. Named, real authors only.</p></div></div>
        </article>
      </div></section>
      <section className="sec-tight"><div className="w"><Head eyebrow="Related" title="Related guides." />
        <div className="card-grid">{related.map((r) => <Link key={r.slug} href={`/guides/${r.slug}`} className="g-card"><span className="cat">{r.cat}</span><h3>{r.title}</h3><span style={{ fontWeight: 700 }}>Read →</span></Link>)}</div></div></section>
      <CtaSection h="Want us to look at yours? 30 minutes, free." lead="WhatsApp us or book a call." steps={["Pick a time that works for you", "Tell us where you are", "Get a plan and fixed price within 48 hours"]} wa={`Hi, I read your guide: ${g.title}`} />
      <JsonLd data={[
        breadcrumbLd([["Home", "/"], ["Guides", "/guides"], [g.title, `/guides/${slug}`]]),
        { "@context": "https://schema.org", "@type": "Article", headline: g.title, inLanguage: "en-AE", url: url(`/guides/${slug}`), author: { "@type": "Person", name: "[Author name]" }, publisher: { "@id": url("/#org") }, datePublished: "2026-10-09", dateModified: "2026-10-09", about: site.brand },
      ]} />
    </>
  );
}
