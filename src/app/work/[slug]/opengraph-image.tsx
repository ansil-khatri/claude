import { INDUSTRY_PAGES } from "@content/industries";
import { BRANDS } from "@content/brands";
import { ogCard, ogSize } from "@/lib/og";
export const size = ogSize; export const contentType = "image/png"; export const dynamic = "force-static";
export const generateStaticParams = () => INDUSTRY_PAGES.map((p) => ({ slug: p.caseStudy.brand }));
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const p = INDUSTRY_PAGES.find((x) => x.caseStudy.brand === slug)!;
  return ogCard({ kicker: `Example project · ${BRANDS[slug].name}`, title: p.caseStudy.h });
}
