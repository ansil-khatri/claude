import { CITY, city } from "@content/abudhabi";
import { ogCard, ogSize } from "@/lib/og";
export const size = ogSize; export const contentType = "image/png"; export const dynamic = "force-static";
export const generateStaticParams = () => CITY.map((c) => ({ slug: c.slug }));
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const c = city((await params).slug)!;
  return ogCard({ kicker: c.kicker, title: `${c.h1a} ${c.h1b}`, from: c.tiers[0][1] });
}
