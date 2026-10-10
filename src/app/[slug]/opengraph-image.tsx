import { ogImage, OG_SIZE } from "@/lib/og";
import { PAGES, pageBySlug } from "@content/v3/pages";
export const dynamic = "force-static"; export const dynamicParams = false;
export const size = OG_SIZE; export const contentType = "image/png"; export const alt = "Service";
export const generateStaticParams = () => PAGES.map((p) => ({ slug: p.slug }));
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const p = pageBySlug(slug)!;
  return ogImage({ kicker: p.kicker, title: `${p.h1[0]} ${p.h1[1]}` });
}
