import { HubHero } from "@/components/sections/Simple";
import { FaqSection, Head, CtaSection } from "@/components/sections/Blocks";
import { GatewayCalc } from "@/components/sections/ToolsClient";
import { JsonLd } from "@/components/ui/JsonLd";
import { meta, breadcrumbLd } from "@/lib/seo";
import { url } from "@/config/site";

export const metadata = meta({ title: 'Payment Gateway Fee Calculator for UAE Businesses', desc: 'Compare Stripe, Telr, Ziina and PayTabs fees on your real card volume in AED. Rates from public 2026 pages.', path: "/tools/payment-gateway-fee-calculator" });
const FAQ = [
  { q: "Are these rates guaranteed?", a: "No. They are public 2026 rates; providers can change them or quote you differently." },
  { q: "Where are Tabby and Tamara?", a: "Their merchant fees are agreed with each provider. Ask both for current rates." },
  { q: "Does Stripe work in the UAE?", a: "Yes, for UAE-registered businesses, with +1% on international cards." },
  { q: "Can you switch me without losing sales?", a: "Yes. We run the new setup alongside the old one and switch at a quiet time." },
];
export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbLd([["Home", "/"], ["Tools", "/tools"], ["Payment gateway fee calculator", "/tools/payment-gateway-fee-calculator"]])} />
      <HubHero kicker='Free tool' h1='Which payment gateway leaves you the most money?' sub='Enter your monthly card sales, payments and international share. We rank the gateways by what they cost you.' wa="Hi, I used your payment gateway fee calculator" />
      <section className="sec"><div className="w"><GatewayCalc /></div></section>
      <section className="sec-tight"><div className="w two-col"><div><Head eyebrow="How we calculate it" title="Method and assumptions." /></div><div className="prose"><p>{'Method: monthly fee = sales × percentage + payments × fixed fee + international share × surcharge + monthly plan. Rates come from public provider and comparison pages in 2026 and change often; always confirm with the provider. Network International and Checkout.com quote individually.'}</p></div></div></section>
      <FaqSection eyebrow="FAQ" head="About this tool." items={FAQ} />
      <CtaSection h="Want help with the result? 30 minutes, free." lead="We'll go through your numbers and tell you what to do first." steps={["Pick a time that works for you", "Walk us through your numbers", "Get a plan and fixed price within 48 hours"]} wa="Hi, I used your calculator" />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebApplication", name: 'Payment Gateway Fee Calculator for UAE Businesses', applicationCategory: "BusinessApplication", operatingSystem: "Any", url: url("/tools/payment-gateway-fee-calculator"), offers: { "@type": "Offer", price: "0", priceCurrency: "AED" } }} />
    </>
  );
}
