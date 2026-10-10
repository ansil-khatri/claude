import { meta } from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";
import { webPageLd, breadcrumbLd, appLd } from "@/lib/schema";
import { CostCalc } from "@/components/sections/CostCalc";
import { PageHero, CtaBand } from "@/components/sections/Blocks";
import { Faq } from "@/components/ui/Faq";

const FAQ = [
  { q: "How accurate is the Shopify store cost calculator?", a: "It adds up our published starting prices and the usual add-ons, then shows a range 25% above the floor. It is an indicative budget, not a quote. A fixed price in AED follows a discovery call." },
  { q: "Does the price include VAT?", a: "No. All prices exclude 5% VAT. The floor including VAT is shown separately." },
  { q: "Why is Arabic free on custom and Plus builds?", a: "Those tiers include a full design phase where English and Arabic layouts are designed together. On a launch store Arabic is an add-on because it extends the base theme." },
];
export const metadata = meta({ title: "Shopify Store Cost Calculator for the UAE (AED)", desc: "Estimate what a Shopify store costs in Dubai in AED: launch, custom theme or Plus, with Arabic, Tabby and Tamara, migration, markets and integrations.", path: "/tools/shopify-store-cost-calculator" });

export default function Page() {
  return (
    <>
      <JsonLd data={webPageLd("Shopify store cost calculator", "/tools/shopify-store-cost-calculator", "Estimate a Shopify build in AED")} />
      <JsonLd data={appLd("Shopify store cost calculator", "/tools/shopify-store-cost-calculator", "Estimate the cost of a Shopify store in the UAE, in AED.")} />
      <JsonLd data={breadcrumbLd([["Home", "/"], ["Shopify store cost calculator", "/tools/shopify-store-cost-calculator"]])} />
      <PageHero trail={[["Home", "/"], ["Tools"], ["Cost calculator"]]} kicker="Free tool · AED" h="What will your Shopify store cost?" sub="Pick what you need. See an honest range from our published prices." />
      <section className="sec-s themed t-dark"><div className="w"><CostCalc /></div></section>
      <section className="sec themed t-paper"><div className="w two"><div><span className="label">About the estimate</span><h2 className="display h3" style={{ margin: "20px 0" }}>Read this first.</h2></div><Faq items={FAQ} /></div></section>
      <CtaBand h="Turn the estimate into a quote." lead="Send the result to us and we reply within one working day." wa="Hi, I used your Shopify cost calculator" />
    </>
  );
}
