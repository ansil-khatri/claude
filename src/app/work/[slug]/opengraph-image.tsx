import { ogImage, OG_SIZE } from "@/lib/og";
import { CASES, caseBySlug } from "@content/v3/cases";
export const dynamic = "force-static"; export const dynamicParams = false;
export const size = OG_SIZE; export const contentType = "image/png"; export const alt = "Concept build";
export const generateStaticParams = () => CASES.map((c) => ({ slug: c.slug }));
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const c = caseBySlug(slug)!;
  return ogImage({ kicker: `Concept build · ${c.sector}`, title: c.h });
}
