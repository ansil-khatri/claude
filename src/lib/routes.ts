import { SERVICES, INDUSTRIES } from "@content/catalog";
import { SOLUTIONS } from "@content/solutions";
import { CITY } from "@content/abudhabi";
import { published } from "@content/guides";
import { INDUSTRY_PAGES } from "@content/industries";

/** Every indexable route (single registry for the sitemap, llms.txt and .md versions). */
export function allRoutes(): string[] {
  return [
    "/", "/services", "/industries", "/pricing", "/about", "/process", "/contact", "/work", "/guides", "/tools", "/agencies", "/abu-dhabi",
    ...SERVICES.map((s) => `/services/${s.slug}`),
    ...INDUSTRIES.map((i) => `/industries/${i.slug}`),
    ...SOLUTIONS.map((s) => `/industries/${s.ind}/${s.slug}`),
    ...CITY.map((c) => `/abu-dhabi/${c.slug}`),
    ...published().map((g) => `/guides/${g.slug}`),
    ...INDUSTRY_PAGES.map((p) => `/work/${p.caseStudy.brand}`),
    "/tools/talabat-commission-calculator", "/tools/payment-gateway-fee-calculator", "/tools/e-invoicing-readiness-check", "/tools/app-cost-calculator",
    "/legal/privacy", "/legal/terms", "/legal/cookies",
  ];
}
