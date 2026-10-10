import { ogImage, OG_SIZE } from "@/lib/og";
import { POSTS, postBySlug, CLUSTER_LABEL } from "@content/v3/posts";
export const dynamic = "force-static"; export const dynamicParams = false;
export const size = OG_SIZE; export const contentType = "image/png"; export const alt = "Journal article";
export const generateStaticParams = () => POSTS.map((p) => ({ slug: p.slug }));
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const p = postBySlug(slug)!;
  return ogImage({ kicker: `Journal · ${CLUSTER_LABEL[p.cluster]}`, title: p.title });
}
