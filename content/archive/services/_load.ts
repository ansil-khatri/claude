import raw from "../data/extracted.json";
import type { Page, Related, Tab } from "../types";
import type { VizSpec } from "@/components/mock/Viz";

type Raw = (typeof raw)[keyof typeof raw];
const R = raw as Record<string, Raw>;

const HREF: [RegExp, string][] = [
  [/payment/i, "/services/payment-integration"], [/shopify/i, "/services/shopify-development"], [/seo/i, "/services/seo"],
  [/automation|erp/i, "/services/business-automation"], [/white/i, "/agencies"], [/mobile|^apps?$/i, "/services/mobile-app-development"],
  [/\bai\b|assistant/i, "/services/ai-whatsapp-automation"], [/web app/i, "/services/web-app-development"], [/saas/i, "/services/saas-development"],
  [/rescue|vibe/i, "/services/vibe-code-rescue"], [/wordpress|website/i, "/services/website-design"], [/landing/i, "/services/landing-pages"],
];
const hrefOf = (s: string) => HREF.find(([r]) => r.test(s))?.[1] ?? "/services";

/** Section data lifted from the approved mockups (docs/superpowers/mockups/*.html). Viz specs are attached separately. */
export function fromMockup(key: string, vizzes: VizSpec[]) {
  const d = R[key];
  const tabs: Tab[] = d.dd.map((t, i) => ({ ...t, viz: vizzes[i] ?? vizzes[0] }));
  const related: Related[] = d.related.map(([k, name, p]) => ({ k, name, p, href: hrefOf(`${k} ${name}`) }));
  return {
    crumb: d.crumb, kicker: d.kicker, h1a: d.h1a, h1b: d.h1b, sub: d.sub, tech: d.tech, plain: d.plain,
    facts: d.facts as [string, string][],
    painsHead: d.painsHead, pains: d.pains.map(([q, cost, fix]) => ({ q, cost, fix })),
    ddHead: d.ddHead, tabs,
    techHead: d.techHead, techRows: d.techRows ?? [],
    procHead: d.procHead, proc: d.proc.map(([step, when, title, p]) => ({ wk: step, when, title, p })),
    priceH2: d.priceH2 ?? "Fixed price. Agreed before we start.", priceLead: d.priceLead ?? "",
    tiers: d.pricing.map((t) => splitAmt(t)),
    affects: d.affects, faq: d.qa.map(([q, a]) => ({ q, a })),
    related, indRow: d.indRow, ctaH: d.ctaH, ctaLead: d.ctaLead, ctaSteps: d.ctaSteps,
  } satisfies Partial<Page>;
}

function splitAmt(t: { k: string; name: string; desc: string; amt: string; hot: boolean; items: string[] }) {
  const m = t.amt.match(/^(from\s+)?(.*?)(\s*\/\s*mo)?$/i);
  return { k: t.k, name: t.name, desc: t.desc, amt: (m?.[2] ?? t.amt).trim(), unit: m?.[3] ? "/month" : undefined, hot: t.hot, items: t.items };
}
