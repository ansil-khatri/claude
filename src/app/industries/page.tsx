import Link from "next/link";
import { meta } from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";
import { webPageLd, itemListLd, breadcrumbLd } from "@/lib/schema";
import { INDUSTRIES } from "@content/v3/industries";
import { PageHero, CtaBand } from "@/components/sections/Blocks";

export const metadata = meta({ title: "Websites and Software by UAE Industry", desc: "Online stores, websites and automation for perfume, fashion, jewellery, beauty, restaurants, real estate, clinics, trading and professional services in the UAE.", path: "/industries" });
export default function Industries() {
  return (<>
    <JsonLd data={webPageLd("Industries", "/industries", "Websites and software by industry", "CollectionPage")} /><JsonLd data={itemListLd("Industries", INDUSTRIES.map((i) => ({ name: i.name, path: `/industries/${i.slug}` })))} /><JsonLd data={breadcrumbLd([["Home", "/"], ["Industries", "/industries"]])} />
    <PageHero trail={[["Home", "/"], ["Industries"]]} kicker="Industries" h="Built for how your" dim="business actually sells." sub="Every sector has its own problems. Pick yours to see what we build, what it costs and what to watch for." />
    <section className="sec-s themed t-dark"><div className="w"><div className="svc-grid" data-stagger>{INDUSTRIES.map((i) => (
      <Link key={i.slug} href={`/industries/${i.slug}`} className="svc"><div><b>{i.name}</b></div><span>{i.sub}</span><span className="tlink">See what we build →</span></Link>
    ))}</div></div></section>
    <CtaBand h="Not on the list?" lead="We build for other sectors too. Tell us what you sell and we will say honestly if we are the right fit." wa="Hi, my industry is not on your list" />
  </>);
}
