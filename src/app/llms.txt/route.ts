import { llms } from "@/lib/llms";
export const dynamic = "force-static";
export const GET = () => new Response(llms("llms.txt"), { headers: { "content-type": "text/plain; charset=utf-8" } });
