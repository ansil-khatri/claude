import { SOLUTIONS, solution } from "@content/solutions";
import { ogCard, ogSize } from "@/lib/og";
export const size = ogSize; export const contentType = "image/png"; export const dynamic = "force-static";
export const generateStaticParams = () => SOLUTIONS.map((s) => ({ slug: s.ind, solution: s.slug }));
export default async function Image({ params }: { params: Promise<{ slug: string; solution: string }> }) {
  const { slug, solution: sl } = await params; const s = solution(slug, sl)!;
  return ogCard({ kicker: s.kicker, title: `${s.h1a} ${s.h1b}`, from: s.cost.rows[0][1] });
}
