import { markdownFor } from "@/lib/markdown";

export async function GET(_: Request, { params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const md = markdownFor(slug);
  return md ? new Response(md, { headers: { "content-type": "text/markdown; charset=utf-8" } }) : new Response("Not found", { status: 404 });
}
