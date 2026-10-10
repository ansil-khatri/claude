import { site, url } from "@/config/site";
import { PAGES, pageBySlug } from "@content/v3/pages";
import { POSTS, postBySlug } from "@content/v3/posts";
import { CASES, caseBySlug } from "@content/v3/cases";
import { PRICING_ROWS, ABOUT } from "@content/v3/site";
import type { Section, MoneyPage } from "@content/v3/types";
import type { Block } from "@content/guides";

const table = (head: string[], rows: string[][]) => [`| ${head.join(" | ")} |`, `| ${head.map(() => "---").join(" | ")} |`, ...rows.map((r) => `| ${r.join(" | ")} |`)].join("\n");
const sectionMd = (s: Section): string => {
  switch (s.k) {
    case "split": return [`## ${s.h}`, s.p, ...(s.bullets ?? []).map((b) => `- ${b}`), ...(s.fine ? [`> ${s.fine}`] : [])].join("\n\n");
    case "bento": return [`## ${s.h}`, ...(s.lead ? [s.lead] : []), ...s.tiles.map((t) => `### ${t.t}\n${t.p}`)].join("\n\n");
    case "process": return [`## ${s.h}`, ...(s.lead ? [s.lead] : []), ...s.steps.map((x, i) => `${i + 1}. **${x.t}** (${x.wk}): ${x.p}`)].join("\n\n");
    case "compare": return [`## ${s.h}`, ...(s.lead ? [s.lead] : []), table(s.head, s.rows), ...(s.note ? [s.note] : [])].join("\n\n");
    case "stack": return [`## ${s.h}`, ...(s.lead ? [s.lead] : []), ...s.groups.map((g) => `**${g.name}:** ${g.items.join(", ")}`)].join("\n\n");
    case "numbers": return s.items.map((i) => `- ${i.prefix ?? ""}${i.n}${i.suffix ?? ""} ${i.label}`).join("\n");
    case "pricing": return [`## ${s.h}`, ...(s.lead ? [s.lead] : []), ...s.tiers.map((t) => `### ${t.name}: from ${t.amt}${t.unit ?? ""}\n${t.desc}\n${t.items.map((x) => `- ${x}`).join("\n")}`), ...(s.note ? [s.note] : [])].join("\n\n");
  }
};
const faqMd = (f: { q: string; a: string }[]) => ["## Frequently asked questions", ...f.map((x) => `### ${x.q}\n${x.a}`)].join("\n\n");
const pageMd = (p: MoneyPage) => [`# ${p.h1[0]} ${p.h1[1]}`, `**Answer:** ${p.answer}`, p.sub, p.facts.map(([k, v]) => `- **${k}:** ${v}`).join("\n"), ...p.sections.map(sectionMd), faqMd(p.faq),
  `## Related\n${p.related.map((r) => `- ${url("/" + r)}`).join("\n")}`, `Canonical: ${url("/" + p.slug)}\nPrices exclude 5% VAT.`].join("\n\n");
const blockMd = (b: Block): string => ("h2" in b ? `## ${b.h2}` : "h3" in b ? `### ${b.h3}` : "p" in b ? b.p : "ul" in b ? b.ul.map((x) => `- ${x}`).join("\n") : "ol" in b ? b.ol.map((x, i) => `${i + 1}. ${x}`).join("\n")
  : "check" in b ? `> Check: ${b.check}` : "tip" in b ? `> Tip: ${b.tip}` : "table" in b ? table(b.table.head, b.table.rows) : "figure" in b ? `${b.figure.title}\n${b.figure.rows.map(([d, t]) => `- ${d}: ${t}`).join("\n")}` : "");

export function markdownFor(parts: string[]): string | null {
  const path = "/" + parts.join("/");
  if (parts.length === 1) { const p = pageBySlug(parts[0]); if (p) return pageMd(p); }
  if (parts[0] === "blog" && parts[1]) { const p = postBySlug(parts[1]); if (!p) return null;
    return [`# ${p.title}`, `**Answer:** ${p.answer}`, p.opening, ...p.body.map(blockMd), faqMd(p.faq), `Canonical: ${url(path)}\nPublished ${p.date}, updated ${p.updated}.`].join("\n\n"); }
  if (parts[0] === "work" && parts[1]) { const c = caseBySlug(parts[1]); if (!c) return null;
    return [`# ${c.name} (concept build, not a client)`, c.summary, `## The brief\n${c.brief}`, `## What we built\n${c.built}`, `## Decisions\n${c.decisions.map((d) => `- **${d.t}:** ${d.p}`).join("\n")}`, `Stack: ${c.stack.join(", ")}\nTimeline: ${c.timeline}`, `Canonical: ${url(path)}`].join("\n\n"); }
  if (path === "/pricing") return ["# Prices in AED (excl. 5% VAT)", ...PRICING_ROWS.flatMap((g) => [`## ${g.group}`, table(["Service", "From", "Time", "Typical"], g.rows.map((r) => [r.service, r.from, r.time, r.typical]))])].join("\n\n");
  if (path === "/about") return ["# About", ...ABOUT.story].join("\n\n");
  if (path === "/blog") return ["# Journal", ...POSTS.map((p) => `- [${p.title}](${url("/blog/" + p.slug)}): ${p.desc}`)].join("\n");
  if (path === "/work") return ["# Work (concept builds)", ...CASES.map((c) => `- [${c.name}](${url("/work/" + c.slug)}): ${c.summary}`)].join("\n");
  if (path === "/" || path === "") return llmsTxt();
  return null;
}

export function llmsTxt(): string {
  return [
    `# ${site.brand}`, "",
    `> ${site.brand} is a Dubai agency that builds Shopify, Shopify Plus, WordPress and WooCommerce stores and custom themes for ambitious brands, and software that removes manual work: an ERP, WhatsApp auto-reply and AI assistants. Fixed prices in AED (excluding 5% VAT), in English and Arabic. Concept builds on this site are labelled and are not client work.`, "",
    "## Services", ...PAGES.map((p) => `- [${p.title}](${url("/" + p.slug)}.md): ${p.desc}`), "",
    "## Work", ...CASES.map((c) => `- [${c.name}, concept build](${url("/work/" + c.slug)}.md): ${c.summary}`), "",
    "## Journal", ...POSTS.map((p) => `- [${p.title}](${url("/blog/" + p.slug)}.md): ${p.desc}`), "",
    "## Key pages", `- [Pricing in AED](${url("/pricing")}.md)`, `- [About](${url("/about")}.md)`, `- [Contact](${url("/contact")})`, `- [Full summary for AI systems](${url("/llms-full.txt")})`, "",
  ].join("\n");
}
export function llmsFull(): string {
  return [llmsTxt(), "", "---", "", "# Full content", "", ...PAGES.map((p) => pageMd(p) + "\n\n---\n"), ...POSTS.map((p) => markdownFor(["blog", p.slug]) + "\n\n---\n")].join("\n");
}
