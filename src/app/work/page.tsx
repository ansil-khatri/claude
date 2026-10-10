import Link from "next/link";
import { meta } from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";
import { webPageLd, itemListLd, breadcrumbLd } from "@/lib/schema";
import { CASES } from "@content/v3/cases";
import { Visual } from "@/components/mock/Visual";
import { PageHero, CtaBand } from "@/components/sections/Blocks";

export const metadata = meta({ title: "Work: Concept Builds for Shopify, WordPress and ERP", desc: "Six concept builds we designed and engineered: luxury Shopify stores, a corporate WordPress site and an ERP. Labelled honestly as concept work, not client projects.", path: "/work" });

export default function Work() {
  return (
    <>
      <JsonLd data={webPageLd("Work", "/work", "Concept builds", "CollectionPage")} />
      <JsonLd data={itemListLd("Concept builds", CASES.map((c) => ({ name: c.name, path: `/work/${c.slug}` })))} />
      <JsonLd data={breadcrumbLd([["Home", "/"], ["Work", "/work"]])} />
      <PageHero trail={[["Home", "/"], ["Work"]]} kicker="Work · Concept builds" h="Six builds" dim="that show how we think." sub="These are concept builds we designed and engineered ourselves, so you can judge the craft before you hire us. They are not client projects, and we label them that way everywhere." />
      <section className="sec-s themed t-dark"><div className="w"><div className="wall" data-stagger>
        {CASES.map((c, i) => (
          <Link key={c.slug} href={`/work/${c.slug}`} className={i % 3 === 0 ? "w12" : "w6"} data-cursor="View">
            <div className="wall-v"><Visual id={c.visuals[0]} brand={c.brand} /></div>
            <div className="wall-t"><div><b>{c.name}</b><p style={{ color: "var(--mute)", fontSize: 15, marginTop: 6, maxWidth: "36em" }}>{c.summary}</p></div><span>{c.sector}<br />Concept build</span></div>
          </Link>
        ))}
      </div></div></section>
      <CtaBand h="Want one of these for your brand?" lead="Tell us what you sell. We will show you what we would build and what it costs." wa="Hi, I saw your work page and want a similar build" />
    </>
  );
}
