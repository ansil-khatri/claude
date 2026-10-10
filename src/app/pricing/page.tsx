import Link from "next/link";
import { meta } from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";
import { webPageLd, breadcrumbLd } from "@/lib/schema";
import { Faq } from "@/components/ui/Faq";
import { PRICING_ROWS, PRICING_FAQ } from "@content/v3/site";
import { PageHero, CtaBand } from "@/components/sections/Blocks";

export const metadata = meta({ title: "Pricing: Shopify, WordPress and Automation in AED", desc: "Published starting prices in AED for Shopify stores, custom themes, WordPress sites and WhatsApp, AI and ERP software in Dubai. Fixed quote after one call.", path: "/pricing" });

export default function Pricing() {
  return (
    <>
      <JsonLd data={webPageLd("Pricing", "/pricing", "Published starting prices in AED")} /><JsonLd data={breadcrumbLd([["Home", "/"], ["Pricing", "/pricing"]])} />
      <PageHero trail={[["Home", "/"], ["Pricing"]]} kicker="Pricing · AED, excl. 5% VAT" h="Prices you can read" dim="before you pick up the phone." sub="Starting prices for every service, the typical timeline and who each tier suits. A fixed quote follows a free call." />
      <section className="sec themed t-dark"><div className="w">
        {PRICING_ROWS.map((g) => (
          <div key={g.group}><div className="cl-h">{g.group}</div>
            <div className="ptbl" data-stagger>{g.rows.map((r) => (
              <Link key={r.service} href={r.href} className="prow"><b>{r.service}</b><span className="p">{r.from}</span><span>{r.time}</span><span>{r.typical}</span><span>→</span></Link>
            ))}</div></div>
        ))}
        <p className="sec-note">All prices are starting points in AED and exclude 5% VAT. Scope, languages, integrations and catalogue size move the final figure. Nothing here is a guarantee of a ranking or a sales result.</p>
      </div></section>
      <section className="sec themed t-paper"><div className="w two"><div><span className="label">Pricing questions</span><h2 className="display h3" style={{ margin: "20px 0" }}>How we quote.</h2></div><Faq items={PRICING_FAQ} /></div></section>
      <CtaBand h="Get your fixed quote." lead="One call, then a written scope and price in AED within three working days." wa="Hi, I'd like a fixed quote" />
    </>
  );
}
