import { HubHero } from "@/components/sections/Simple";
import { FaqSection, Head, CtaSection } from "@/components/sections/Blocks";
import { DeliveryCalc } from "@/components/sections/ToolsClient";
import { JsonLd } from "@/components/ui/JsonLd";
import { meta, breadcrumbLd } from "@/lib/seo";
import { url } from "@/config/site";

export const metadata = meta({ title: 'Talabat Commission Calculator for UAE Restaurants', desc: "Free calculator: see how much Talabat, Deliveroo and Careem commission costs your restaurant a year, and what you'd keep with your own ordering.", path: "/tools/talabat-commission-calculator" });
const FAQ = [
  { q: "Does this include delivery fees?", a: "No. It covers commission and the promotions you fund. Rider fees vary by contract." },
  { q: "Is 30% realistic?", a: "Many UAE restaurants report 15–30% depending on the plan. Use your own contract rate." },
  { q: "Why 2.9% card fees?", a: "That's roughly what a gateway like Stripe charges. Your own rate may differ." },
  { q: "Can I leave the apps?", a: "Usually not worth it. Keep them for discovery and move regulars to your own ordering." },
];
export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbLd([["Home", "/"], ["Tools", "/tools"], ["Talabat commission calculator", "/tools/talabat-commission-calculator"]])} />
      <HubHero kicker='Free tool' h1='How much do delivery apps really cost your restaurant?' sub="Enter your orders, average order and commission. We show what you paid delivery apps over 12 months and what you'd keep if some regulars ordered direct." wa="Hi, I used your talabat commission calculator" />
      <section className="sec"><div className="w"><DeliveryCalc /></div></section>
      <section className="sec-tight"><div className="w two-col"><div><Head eyebrow="How we calculate it" title="Method and assumptions." /></div><div className="prose"><p>{"Method: yearly app sales = orders × average order × 12. Commission = sales × your commission % + promo spend × 12. Kept = the share of sales moved direct × (commission % − card fees of about 2.9%). We don't store your numbers unless you opt in later. Commission rates are set by each platform's contract and change; ranges of 15–30% come from published 2026 reports."}</p></div></div></section>
      <FaqSection eyebrow="FAQ" head="About this tool." items={FAQ} />
      <CtaSection h="Want help with the result? 30 minutes, free." lead="We'll go through your numbers and tell you what to do first." steps={["Pick a time that works for you", "Walk us through your numbers", "Get a plan and fixed price within 48 hours"]} wa="Hi, I used your calculator" />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebApplication", name: 'Talabat Commission Calculator for UAE Restaurants', applicationCategory: "BusinessApplication", operatingSystem: "Any", url: url("/tools/talabat-commission-calculator"), offers: { "@type": "Offer", price: "0", priceCurrency: "AED" } }} />
    </>
  );
}
