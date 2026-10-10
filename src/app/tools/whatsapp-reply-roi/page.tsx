import { meta } from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";
import { webPageLd, breadcrumbLd, appLd } from "@/lib/schema";
import { ReplyRoiCalc } from "@/components/sections/ToolCalcs";
import { PageHero, CtaBand } from "@/components/sections/Blocks";
import { Faq } from "@/components/ui/Faq";

const FAQ = [
  { q: "How does the calculator work out time saved?", a: "Messages per day, times the share that are repeat questions, times the share an assistant can fully answer, times minutes per reply, over 22 working days. You can change every number." },
  { q: "What does a WhatsApp assistant cost?", a: "Our assistants start from AED 2,900 and typically reach AED 12,000 with catalogue, order and hand-off logic, excluding 5% VAT. Meta message fees and the platform subscription are extra and depend on volume." },
  { q: "What should never be automated?", a: "Complaints, refunds, sensitive or medical questions and first contact with important customers. The assistant should hand these to a person with the conversation attached." },
];
export const metadata = meta({ title: "WhatsApp Auto-Reply ROI Calculator (AED)", desc: "How many hours and how much money could a WhatsApp auto-reply assistant save your Dubai business each month? Change the numbers and see the payback in AED.", path: "/tools/whatsapp-reply-roi" });
export default function Page() {
  return (<>
    <JsonLd data={webPageLd("WhatsApp reply ROI calculator", "/tools/whatsapp-reply-roi", "Time and money saved by WhatsApp automation")} /><JsonLd data={appLd("WhatsApp reply ROI calculator", "/tools/whatsapp-reply-roi", "Estimate time and money saved by WhatsApp auto-reply, in AED.")} />
    <JsonLd data={breadcrumbLd([["Home", "/"], ["Tools", "/tools"], ["WhatsApp reply ROI", "/tools/whatsapp-reply-roi"]])} />
    <PageHero trail={[["Home", "/"], ["Tools", "/tools"], ["WhatsApp reply ROI"]]} kicker="Free tool · AED" h="What is answering WhatsApp costing you?" sub="Put in your message volume and see the hours and dirhams an auto-reply assistant could give back." />
    <section className="sec-s themed t-dark"><div className="w"><ReplyRoiCalc /></div></section>
    <section className="sec themed t-paper"><div className="w two"><div><span className="label">About the estimate</span><h2 className="display h3" style={{ margin: "20px 0" }}>Honest limits.</h2></div><Faq items={FAQ} /></div></section>
    <CtaBand h="See it working on your messages." lead="Send us ten real questions customers ask and we will show you what an assistant would reply." wa="Hi, I used your WhatsApp ROI calculator" />
  </>);
}
