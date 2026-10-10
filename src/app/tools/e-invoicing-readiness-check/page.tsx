import { HubHero } from "@/components/sections/Simple";
import { FaqSection, Head, CtaSection } from "@/components/sections/Blocks";
import { Readiness } from "@/components/sections/ToolsClient";
import { JsonLd } from "@/components/ui/JsonLd";
import { meta, breadcrumbLd } from "@/lib/seo";
import { url } from "@/config/site";

export const metadata = meta({ title: 'UAE E-Invoicing Readiness Check · 10 Questions', desc: 'Is your business ready for UAE e-invoicing? Ten questions give you your deadline, a readiness score and a personal checklist.', path: "/tools/e-invoicing-readiness-check" });
const FAQ = [
  { q: "Is this legal advice?", a: "No. It's guidance. Confirm with the Ministry of Finance or your tax advisor." },
  { q: "Do you store my answers?", a: "No. Nothing is stored unless a future version asks for your permission." },
  { q: "What if I'm in a free zone?", a: "Check the official guidance; treatment depends on VAT registration and supply type." },
  { q: "Are you an ASP?", a: "No. We connect your system to the ASP you choose." },
];
export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbLd([["Home", "/"], ["Tools", "/tools"], ["E-invoicing readiness check", "/tools/e-invoicing-readiness-check"]])} />
      <HubHero kicker='Free tool' h1='Is your business ready for UAE e-invoicing?' sub='Ten questions, two minutes. You get your deadline, a score out of 100 and a checklist.' wa="Hi, I used your e invoicing readiness check" />
      <section className="sec"><div className="w"><Readiness /></div></section>
      <section className="sec-tight"><div className="w two-col"><div><Head eyebrow="How we calculate it" title="Method and assumptions." /></div><div className="prose"><p>{"How it works: your revenue band sets your deadline (AED 50 million or more: go live 1 January 2027; under: appoint an ASP by 31 March 2027 and go live 1 July 2027). Six answers feed the score. This is guidance, not legal advice. We're an integration partner, not an ASP. Dates per Ministry of Finance guidance, last checked October 2026."}</p></div></div></section>
      <FaqSection eyebrow="FAQ" head="About this tool." items={FAQ} />
      <CtaSection h="Want help with the result? 30 minutes, free." lead="We'll go through your numbers and tell you what to do first." steps={["Pick a time that works for you", "Walk us through your numbers", "Get a plan and fixed price within 48 hours"]} wa="Hi, I used your calculator" />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebApplication", name: 'UAE E-Invoicing Readiness Check · 10 Questions', applicationCategory: "BusinessApplication", operatingSystem: "Any", url: url("/tools/e-invoicing-readiness-check"), offers: { "@type": "Offer", price: "0", priceCurrency: "AED" } }} />
    </>
  );
}
