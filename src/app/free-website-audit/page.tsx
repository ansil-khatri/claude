import { meta } from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";
import { webPageLd, breadcrumbLd } from "@/lib/schema";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { Faq } from "@/components/ui/Faq";
import { Trust } from "@/components/ui/Trust";
import { PageHero } from "@/components/sections/Blocks";

const FAQ = [
  { q: "What do I get from the free website audit?", a: "Five specific findings about your site or store, such as speed on mobile, indexing, checkout friction, missing basics for search and the biggest fixable problem, sent within one working day." },
  { q: "Is it really free?", a: "Yes. There is no charge and no obligation. If you want us to fix what we find, we send a fixed price in AED. If you prefer to fix it yourself or with someone else, keep the findings." },
  { q: "Who looks at my site?", a: "A senior developer or designer from our team, not an automated report." },
  { q: "Do you need access to my site?", a: "No. We only review what a visitor or Google can see. We never ask for passwords." },
  { q: "Can you audit a Shopify store that is not selling?", a: "Yes. We look at the product pages, cart and checkout, speed on mobile, trust signals and payment options such as Tabby and Tamara." },
];
export const metadata = meta({ title: "Free Website Audit for UAE Businesses", desc: "Send your website address and get five specific findings on speed, search visibility and conversion within one working day. Free, no obligation, from a senior team.", path: "/free-website-audit" });
export default function Page() {
  return (<>
    <JsonLd data={webPageLd("Free website audit", "/free-website-audit", "Five findings in one working day")} /><JsonLd data={breadcrumbLd([["Home", "/"], ["Free website audit", "/free-website-audit"]])} />
    <PageHero trail={[["Home", "/"], ["Free website audit"]]} kicker="Free · One working day" h="Is your website losing you customers?" sub="Send your address. We send back five specific things to fix, in plain words." />
    <section className="sec-s themed t-dark"><div className="w two">
      <div><ol className="steps" style={{ marginBottom: 30 }}>
        {["Speed on a real phone, and what slows it down", "Whether Google can find and understand your pages", "Where visitors drop off before they contact you or buy", "Trust and basics a customer looks for in the UAE", "The one fix we would do first, and what it costs"].map((t, n) => <li key={t} className="step" style={{ gridTemplateColumns: "50px 1fr" }}><span className="wk">0{n + 1}</span><p style={{ color: "var(--fg)" }}>{t}</p></li>)}
      </ol></div>
      <QuoteForm kind="audit" title="Audit my website" lead="Your address, your name and a WhatsApp number. That is all we need." />
    </div></section>
    <section className="sec-s themed t-dark"><div className="w"><Trust /></div></section>
    <section className="sec themed t-paper"><div className="w two"><div><span className="label">Questions</span><h2 className="display h3" style={{ margin: "20px 0" }}>About the audit.</h2></div><Faq items={FAQ} /></div></section>
  </>);
}
