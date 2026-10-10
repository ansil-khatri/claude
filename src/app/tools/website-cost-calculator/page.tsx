import { meta } from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";
import { webPageLd, breadcrumbLd, appLd } from "@/lib/schema";
import { WebsiteCostCalc } from "@/components/sections/ToolCalcs";
import { PageHero, CtaBand } from "@/components/sections/Blocks";
import { Faq } from "@/components/ui/Faq";

const FAQ = [
  { q: "How much does a website cost in Dubai?", a: "A small business WordPress site starts around AED 7,900, a custom site around AED 19,900 and a shop or booking site around AED 44,000, excluding 5% VAT. Pages, Arabic, and integrations move the total." },
  { q: "Is this a quote?", a: "No. It adds up our published starting prices and the usual extras, then shows a range 30% above the floor. A fixed quote follows a free call." },
  { q: "Why is Arabic included on some tiers and extra on others?", a: "Custom and shop builds include a full design phase where English and Arabic layouts are designed together. On the business tier Arabic extends a base design, so it is an add-on." },
];
export const metadata = meta({ title: "Website Cost Calculator Dubai (AED)", desc: "Estimate what a website costs in Dubai in AED: business site, custom WordPress or shop, with pages, Arabic, integrations and a monthly care plan.", path: "/tools/website-cost-calculator" });
export default function Page() {
  return (<>
    <JsonLd data={webPageLd("Website cost calculator", "/tools/website-cost-calculator", "Estimate a website in AED")} /><JsonLd data={appLd("Website cost calculator", "/tools/website-cost-calculator", "Estimate the cost of a website in Dubai, in AED.")} />
    <JsonLd data={breadcrumbLd([["Home", "/"], ["Tools", "/tools"], ["Website cost calculator", "/tools/website-cost-calculator"]])} />
    <PageHero trail={[["Home", "/"], ["Tools", "/tools"], ["Website cost calculator"]]} kicker="Free tool · AED" h="What will your website cost in Dubai?" sub="Pick what you need and see an honest range from our published prices." />
    <section className="sec-s themed t-dark"><div className="w"><WebsiteCostCalc /></div></section>
    <section className="sec themed t-paper"><div className="w two"><div><span className="label">About the estimate</span><h2 className="display h3" style={{ margin: "20px 0" }}>Read this first.</h2></div><Faq items={FAQ} /></div></section>
    <CtaBand h="Turn the estimate into a quote." lead="Send the result to us and we reply within one working day." wa="Hi, I used your website cost calculator" />
  </>);
}
