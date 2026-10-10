import { published, guide } from "@content/guides";
import { ogCard, ogSize } from "@/lib/og";
export const size = ogSize; export const contentType = "image/png"; export const dynamic = "force-static";
export const generateStaticParams = () => published().map((g) => ({ slug: g.slug }));
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const g = guide((await params).slug)!;
  return ogCard({ kicker: `Guide · ${g.cat}`, title: g.title });
}
