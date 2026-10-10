import { meta } from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";
import { webPageLd, breadcrumbLd, appLd } from "@/lib/schema";
import { ErpChecker } from "@/components/sections/ToolCalcs";
import { PageHero, CtaBand } from "@/components/sections/Blocks";
import { Faq } from "@/components/ui/Faq";

const FAQ = [
  { q: "When should a UAE business move from Excel to an ERP?", a: "When several people edit the same data, stock or cash disagree between files, or month-end close takes days. Two or three of the eight signs usually mean automate first; six or more usually mean an ERP." },
  { q: "Do I need a custom ERP?", a: "Not always. Off-the-shelf tools like Zoho Books or Odoo suit standard processes. Custom suits unusual ones. Verify any vendor's UAE VAT and e-invoicing readiness with the FTA before you buy." },
  { q: "What does an operations system cost?", a: "Our operations systems start from AED 59,000 and typically run to AED 150,000, excluding 5% VAT. Smaller automation projects start from AED 7,900." },
];
export const metadata = meta({ title: "ERP vs Excel Checker: Have You Outgrown Excel?", desc: "Eight yes or no questions tell a UAE business whether Excel is still fine, whether to automate the painful parts, or whether it is time for an ERP.", path: "/tools/erp-vs-excel-checker" });
export default function Page() {
  return (<>
    <JsonLd data={webPageLd("ERP vs Excel checker", "/tools/erp-vs-excel-checker", "Have you outgrown Excel?")} /><JsonLd data={appLd("ERP vs Excel checker", "/tools/erp-vs-excel-checker", "Eight questions to decide whether a UAE business needs an ERP.")} />
    <JsonLd data={breadcrumbLd([["Home", "/"], ["Tools", "/tools"], ["ERP vs Excel checker", "/tools/erp-vs-excel-checker"]])} />
    <PageHero trail={[["Home", "/"], ["Tools", "/tools"], ["ERP vs Excel checker"]]} kicker="Free tool" h="Have you outgrown Excel?" sub="Tick what is true for your business. Get a plain answer, not a sales pitch." />
    <section className="sec-s themed t-dark"><div className="w"><ErpChecker /></div></section>
    <section className="sec themed t-paper"><div className="w two"><div><span className="label">Good to know</span><h2 className="display h3" style={{ margin: "20px 0" }}>Before you decide.</h2></div><Faq items={FAQ} /></div></section>
    <CtaBand h="Not sure? Talk it through." lead="Thirty minutes. We will say honestly whether you need us at all." wa="Hi, I used your ERP vs Excel checker" />
  </>);
}
