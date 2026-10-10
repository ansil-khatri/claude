import { INDUSTRY_PAGES, industryPage } from "@content/industries";
import { ogCard, ogSize } from "@/lib/og";
export const size = ogSize; export const contentType = "image/png"; export const dynamic = "force-static";
export const generateStaticParams = () => INDUSTRY_PAGES.map((p) => ({ slug: p.slug }));
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const p = industryPage((await params).slug)!;
  return ogCard({ kicker: p.kicker, title: `${p.h1a} ${p.h1b}`, from: p.tiers[0].amt });
}
