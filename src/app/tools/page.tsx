import Link from "next/link";
import { meta } from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";
import { webPageLd, itemListLd, breadcrumbLd } from "@/lib/schema";
import { PageHero, CtaBand } from "@/components/sections/Blocks";

export const TOOLS = [
  { href: "/tools/shopify-store-cost-calculator", t: "Shopify store cost calculator", p: "Launch, custom theme or Plus, with Arabic, Tabby and Tamara, migration and markets." },
  { href: "/tools/website-cost-calculator", t: "Website cost calculator", p: "Business site, custom WordPress or shop, with pages, Arabic and integrations." },
  { href: "/tools/whatsapp-reply-roi", t: "WhatsApp reply ROI", p: "Hours and dirhams an auto-reply assistant could give back each month." },
  { href: "/tools/erp-vs-excel-checker", t: "ERP vs Excel checker", p: "Eight questions: is Excel still fine, or have you outgrown it?" },
];
export const metadata = meta({ title: "Free Tools for UAE Business Owners", desc: "Free calculators in AED: Shopify store cost, website cost, WhatsApp auto-reply ROI and an ERP vs Excel checker. No email needed.", path: "/tools" });
export default function Tools() {
  return (<>
    <JsonLd data={webPageLd("Tools", "/tools", "Free calculators", "CollectionPage")} /><JsonLd data={itemListLd("Tools", TOOLS.map((x) => ({ name: x.t, path: x.href })))} /><JsonLd data={breadcrumbLd([["Home", "/"], ["Tools", "/tools"]])} />
    <PageHero trail={[["Home", "/"], ["Tools"]]} kicker="Free tools" h="Do the maths" dim="before you call anyone." sub="Four calculators in AED. No email, no sign-up." />
    <section className="sec-s themed t-dark"><div className="w"><div className="posts" data-stagger>{TOOLS.map((x) => <Link key={x.href} href={x.href} className="pc"><div><h3>{x.t}</h3><p>{x.p}</p></div><span className="tlink">Open →</span></Link>)}</div></div></section>
    <CtaBand h="Want a number you can sign?" lead="A fixed quote in AED follows a free call." wa="Hi, I tried your tools and want a fixed quote" />
  </>);
}
