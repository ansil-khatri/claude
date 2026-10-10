import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, postBySlug, CLUSTER_LABEL } from "@content/v3/posts";
import { meta } from "@/lib/seo";
import { articleLd, breadcrumbLd } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { Faq } from "@/components/ui/Faq";
import { Crumbs, CtaBand, Prose, slugify } from "@/components/sections/Blocks";

export const dynamicParams = false;
export const generateStaticParams = () => POSTS.map((p) => ({ slug: p.slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const p = postBySlug(slug);
  return p ? meta({ title: p.seoTitle, desc: p.desc, path: `/blog/${p.slug}`, type: "article", published: p.date, modified: p.updated }) : {};
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const p = postBySlug(slug); if (!p) notFound();
  const toc = p.body.flatMap((b) => ("h2" in b ? [{ id: b.id ?? slugify(b.h2), t: b.h2 }] : []));
  const more = POSTS.filter((x) => x.slug !== p.slug && x.cluster === p.cluster).slice(0, 3);
  return (
    <>
      <JsonLd data={articleLd(p)} /><JsonLd data={breadcrumbLd([["Home", "/"], ["Journal", "/blog"], [p.title, `/blog/${p.slug}`]])} />
      <header className="ph-hero themed t-dark"><div className="w" style={{ position: "relative", zIndex: 2 }}>
        <Crumbs trail={[["Home", "/"], ["Journal", "/blog"], [CLUSTER_LABEL[p.cluster]]]} />
        <h1 className="display" style={{ marginTop: 34, fontSize: "clamp(38px, 5.6vw, 96px)" }} data-intro data-split="lines">{p.title}</h1>
        <div className="art-meta" data-intro><span>{CLUSTER_LABEL[p.cluster]}</span><span>{p.read} min read</span><span>Published {p.date}</span><span>Updated {p.updated}</span></div>
      </div></header>
      <section className="sec-s themed t-dark"><div className="w art-grid">
        <aside className="toc" aria-label="On this page"><b>On this page</b>{toc.map((t) => <a key={t.id} href={`#${t.id}`}>{t.t}</a>)}<a href="#faq">Questions</a></aside>
        <article>
          <p className="answer-box">{p.answer}</p>
          <p className="lead" style={{ margin: "34px 0 10px" }}>{p.opening}</p>
          <Prose body={p.body} />
          <div id="faq" style={{ marginTop: 80, scrollMarginTop: 110 }}><h2 className="display h3" style={{ marginBottom: 28 }}>Questions</h2><Faq items={p.faq} /></div>
          <div className="rel"><div className="cl-h" style={{ margin: "26px 0 0" }}>Keep reading</div>
            {p.links.map((l) => <Link key={l.href} href={l.href}><span>{l.label}</span><span>→</span></Link>)}
            {more.map((m) => <Link key={m.slug} href={`/blog/${m.slug}`}><span>{m.title}</span><span>→</span></Link>)}</div>
        </article>
      </div></section>
      <CtaBand h="Want this done for you?" lead="Send a short brief. You get a fixed quote in AED within three working days of the call." wa={`Hi, I read "${p.title}" and have a question`} />
    </>
  );
}
