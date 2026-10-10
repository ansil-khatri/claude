import type { Page } from "@content/types";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbLd, serviceLd } from "@/lib/seo";
import { Hero } from "./Hero";
import { Plain, Pains, Showcase, Journey, DeepDive, Compare, Process, Pricing, GuidesBlock, FaqSection, Related, CaseStudy, CtaSection } from "./Blocks";

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
      <CtaSection h={p.ctaH} lead={p.ctaLead} steps={p.ctaSteps} wa={p.waText} />
      <JsonLd data={[breadcrumbLd([["Home", "/"], [parent.label, parent.href], [p.name, path]]), serviceLd(p, path, from)]} />
    </>
  );
}
