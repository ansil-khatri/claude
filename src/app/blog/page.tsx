import Link from "next/link";
import { meta } from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";
import { webPageLd, itemListLd, breadcrumbLd } from "@/lib/schema";
import { POSTS, CLUSTER_LABEL } from "@content/v3/posts";
import { PageHero, CtaBand } from "@/components/sections/Blocks";

export const metadata = meta({ title: "Journal: Shopify, WordPress and Automation in Dubai", desc: "Plain answers on Shopify and WordPress costs, themes, migrations, Arabic stores, ERP and WhatsApp automation for UAE businesses.", path: "/blog" });
const order = ["shopify", "web", "luxury", "automation"] as const;

export default function Blog() {
  const pillar = POSTS.find((p) => p.pillar) ?? POSTS[0];
  return (
    <>
      <JsonLd data={webPageLd("Journal", "/blog", "Guides for UAE businesses", "CollectionPage")} />
      <JsonLd data={itemListLd("Journal", POSTS.map((p) => ({ name: p.title, path: `/blog/${p.slug}` })))} />
      <JsonLd data={breadcrumbLd([["Home", "/"], ["Journal", "/blog"]])} />
      <PageHero trail={[["Home", "/"], ["Journal"]]} kicker="Journal" h="Straight answers" dim="for people about to spend money on a website." sub="Costs, choices and trade-offs, written down. Updated when things change." />
      <section className="sec-s themed t-dark"><div className="w">
        <Link href={`/blog/${pillar.slug}`} className="pc big" data-reveal><div className="meta"><span>Start here</span><span>{pillar.read} min read</span></div><h3>{pillar.title}</h3><p>{pillar.desc}</p><span className="tlink">Read the guide →</span></Link>
      </div></section>
      <section className="sec themed t-dark"><div className="w">
        {order.map((c) => { const items = POSTS.filter((p) => p.cluster === c && p.slug !== pillar.slug); if (!items.length) return null; return (
          <div key={c}><div className="cl-h">{CLUSTER_LABEL[c]}</div>
            <div className="posts" data-stagger>{items.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="pc"><div className="meta"><span>{p.read} min</span><span>Updated {p.updated}</span></div><div><h3>{p.title}</h3><p>{p.desc}</p></div><span className="tlink">Read →</span></Link>
            ))}</div></div>
        ); })}
      </div></section>
      <CtaBand h="Rather talk it through?" lead="Thirty minutes, no deck. Tell us what you sell and we will tell you what we would build." wa="Hi, I read your journal and have a question" />
    </>
  );
}
