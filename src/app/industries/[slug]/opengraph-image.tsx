import { ogImage, OG_SIZE } from "@/lib/og";
import { INDUSTRIES, industryBySlug } from "@content/v3/industries";
export const dynamic = "force-static"; export const dynamicParams = false;
export const size = OG_SIZE; export const contentType = "image/png"; export const alt = "Industry";
export const generateStaticParams = () => INDUSTRIES.map((i) => ({ slug: i.slug }));
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const i = industryBySlug(slug)!;
  return ogImage({ kicker: i.kicker, title: `${i.h1[0]} ${i.h1[1]}` });
}
