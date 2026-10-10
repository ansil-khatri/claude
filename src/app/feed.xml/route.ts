import { POSTS } from "@content/v3/posts";
import { site, url } from "@/config/site";
export const dynamic = "force-static";
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
export const GET = () => new Response(`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel>
<title>${esc(site.brand)} Journal</title><link>${url("/blog")}</link><description>Shopify, WordPress, e-commerce and automation guides for Dubai and the UAE.</description><language>en-AE</language>
<atom:link href="${url("/feed.xml")}" rel="self" type="application/rss+xml"/>
${POSTS.map((p) => `<item><title>${esc(p.title)}</title><link>${url("/blog/" + p.slug)}</link><guid>${url("/blog/" + p.slug)}</guid><pubDate>${new Date(p.date).toUTCString()}</pubDate><description>${esc(p.desc)}</description></item>`).join("\n")}
</channel></rss>`, { headers: { "content-type": "application/rss+xml; charset=utf-8" } });
