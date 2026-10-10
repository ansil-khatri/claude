import { HubHero } from "@/components/sections/Simple";
import { FaqSection, Head, CtaSection } from "@/components/sections/Blocks";
import { AppCalc } from "@/components/sections/ToolsClient";
import { JsonLd } from "@/components/ui/JsonLd";
import { meta, breadcrumbLd } from "@/lib/seo";
import { url } from "@/config/site";

export const metadata = meta({ title: 'App Cost Calculator Dubai · Estimate in AED', desc: 'Estimate what your app costs in AED: pick the type, platforms and features. Fixed price after a 30-minute call.', path: "/tools/app-cost-calculator" });
const FAQ = [
  { q: "Is this a quote?", a: "No. It's an estimate from our price tiers. You get a fixed price in writing within 48 hours of a call." },
  { q: "Why a range?", a: "Scope varies. The low end is a tight scope; the high end allows for extras." },
  { q: "Does it include VAT?", a: "No. 5% VAT is added on the invoice." },
  { q: "What about running costs?", a: "Apple's developer account is about AED 365 a year; hosting AED 75–550 a month." },
];
export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbLd([["Home", "/"], ["Tools", "/tools"], ["App cost calculator", "/tools/app-cost-calculator"]])} />
      <HubHero kicker='Free tool' h1='How much would your app cost?' sub='Pick the type of app, the platforms and the features. You get an AED range and a time estimate.' wa="Hi, I used your app cost calculator" />
      <section className="sec"><div className="w"><AppCalc /></div></section>
      <section className="sec-tight"><div className="w two-col"><div><Head eyebrow="How we calculate it" title="Method and assumptions." /></div><div className="prose"><p>{'Method: a base price per app type (booking AED 35,000, ordering 45,000, delivery 60,000, loyalty 35,000, marketplace 105,000, internal tool 29,000), plus features, with adjustments for one platform (−15%) and custom design (+15%). The high end is 1.6× the low end. This is an estimate; your fixed price comes after a call.'}</p></div></div></section>
      <FaqSection eyebrow="FAQ" head="About this tool." items={FAQ} />
      <CtaSection h="Want help with the result? 30 minutes, free." lead="We'll go through your numbers and tell you what to do first." steps={["Pick a time that works for you", "Walk us through your numbers", "Get a plan and fixed price within 48 hours"]} wa="Hi, I used your calculator" />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebApplication", name: 'App Cost Calculator Dubai · Estimate in AED', applicationCategory: "BusinessApplication", operatingSystem: "Any", url: url("/tools/app-cost-calculator"), offers: { "@type": "Offer", price: "0", priceCurrency: "AED" } }} />
    </>
  );
}
