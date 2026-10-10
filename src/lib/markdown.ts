import { servicePage } from "@content/services";
import { industryPage } from "@content/industries";
import { guide } from "@content/guides";
import { PRICE_ROWS } from "@content/prices";
import { site } from "@/config/site";
import type { Page } from "@content/types";

const faqMd = (f: Page["faq"]) => f.map((x) => `### ${x.q}\n${x.a}`).join("\n\n");
function pageMd(p: Page, path: string) {
  return [`# ${p.h1a} ${p.h1b}`, `_${p.kicker}_`, "", p.sub, "", "## In plain English", p.plain, "", "## Pricing (AED, excl. 5% VAT)", ...p.tiers.map((t) => `- **${t.name}**: from ${t.amt}${t.unit ?? ""}. ${t.desc}`), "", "## FAQ", faqMd(p.faq), "", `Canonical: https://${site.domain}${path}`].join("\n");
}

/** Returns markdown for a route, or null. Cheap insurance for AI crawlers (docs/seo-uae/07 §5). */
export function markdownFor(parts: string[]): string | null {
  const path = "/" + parts.join("/");
  if (parts[0] === "services" && parts[1]) { const p = servicePage(parts[1]); return p ? pageMd(p, path) : null; }
  if (parts[0] === "agencies") { const p = servicePage("agencies"); return p ? pageMd(p, path) : null; }
  if (parts[0] === "industries" && parts[1] && !parts[2]) { const p = industryPage(parts[1]); return p ? pageMd(p, path) : null; }
  if (parts[0] === "guides" && parts[1]) {
    const g = guide(parts[1]); if (!g?.body) return null;
    const body = g.body.map((b) => ("h2" in b ? `\n## ${b.h2}` : "h3" in b ? `\n### ${b.h3}` : "p" in b ? b.p : "ul" in b ? b.ul.map((x) => `- ${x}`).join("\n") : "ol" in b ? b.ol.map((x, i) => `${i + 1}. ${x}`).join("\n") : "check" in b ? `> Check the official source: ${b.check}` : `${b.table.head.join(" | ")}\n${b.table.rows.map((r) => r.join(" | ")).join("\n")}`)).join("\n\n");
    return `# ${g.title}\n\n**Answer:** ${g.answer}\n\n${body}\n\nCanonical: https://${site.domain}${path}`;
  }
  if (parts[0] === "pricing") return ["# Prices in AED (excl. 5% VAT)", ...PRICE_ROWS.flatMap((g) => [`\n## ${g.group}`, ...g.rows.map((r) => `- **${r.service}**: ${r.tiers.map((t) => `${t[0]} ${t[1]}`).join(" · ")}. Most projects: ${r.land}`)])].join("\n");
  return null;
}
