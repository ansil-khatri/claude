import { markdownFor } from "@/lib/markdown";
import { allRoutes } from "@/lib/routes";

export const dynamicParams = false;
export const generateStaticParams = () => allRoutes().filter((r) => r !== "/").map((r) => ({ slug: r.slice(1).split("/") }));
export async function GET(_: Request, { params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const md = markdownFor(slug);
  return md ? new Response(md, { headers: { "content-type": "text/markdown; charset=utf-8" } }) : new Response("Not found", { status: 404 });
}
