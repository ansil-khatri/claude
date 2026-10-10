import type { Page } from "@content/types";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbLd, serviceLd } from "@/lib/seo";
import { Hero } from "./Hero";
import { Plain, Pains, Showcase, Journey, DeepDive, Compare, Process, Pricing, GuidesBlock, FaqSection, Related, CaseStudy, CtaSection } from "./Blocks";

const BOOK_TITLE: Record<string, string> = {
  "shopify-development": "Book a free store review call", "website-design": "Book a free website review call", "mobile-app-development": "Book a free app planning call",
  "web-app-development": "Book a free systems review call", "saas-development": "Book a free SaaS planning call", "landing-pages": "Book a free landing page review call",
  "payment-integration": "Book a free payments review call", "ai-whatsapp-automation": "Book a free AI assistant call", "business-automation": "Book a free automation review call",
  "seo": "Book a free SEO review call", "vibe-code-rescue": "Book your free 48-hour app audit", "agencies": "Book a free partner call", "e-invoicing-integration": "Book a free e-invoicing readiness call",
};
export function PageTemplate({ p, kind, path, parent }: { p: Page; kind: "service" | "industry"; path: string; parent: { href: string; label: string } }) {
  const from = p.tiers[0]?.amt;
  return (
    <>
      <Hero p={p} parent={parent} priceLabel={kind === "industry" ? "See what we build" : undefined} priceHref={kind === "industry" ? "#journey" : "#pricing"} />
      <Plain text={p.plain} facts={p.facts} />
      <Pains head={p.painsHead} pains={p.pains} />
      {p.journey ? <Journey j={p.journey} /> : p.showcase ? <Showcase s={p.showcase} /> : null}
      <DeepDive eyebrow={p.ddEyebrow} head={p.ddHead} tabs={p.tabs} />
      <Compare eyebrow={p.techEyebrow} head={p.techHead} lead={p.techLead} rows={p.techRows} note={p.techNote} />
      <Process eyebrow={p.procEyebrow} head={p.procHead} steps={p.proc} />
      {p.caseStudy && <CaseStudy c={p.caseStudy} />}
      <Pricing p={p} />
      <GuidesBlock guides={p.guides} />
      <FaqSection eyebrow={p.faqEyebrow} head={p.faqHead} items={p.faq} />
      <Related eyebrow={p.relEyebrow} head={p.relHead} items={p.related} ind={p.indRow} />
      <CtaSection h={p.ctaH} lead={p.ctaLead} steps={p.ctaSteps} wa={p.waText} bookTitle={BOOK_TITLE[p.slug]} />
      <JsonLd data={[breadcrumbLd([["Home", "/"], [parent.label, parent.href], [p.name, path]]), serviceLd(p, path, from, parent.href === "/industries" ? p.name : undefined)]} />
    </>
  );
}
