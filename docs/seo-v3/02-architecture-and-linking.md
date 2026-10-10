# 02 · Architecture, hubs and internal linking

## URL map
Flat, exact-match money pages at `/<slug>` (already built). Everything else sits under a folder that names its type, so the structure explains itself to people and to crawlers.

```
/                                   Home (brand + all three hubs)
├─ COMMERCE HUB   /shopify-agency-dubai
│    /shopify-plus-agency-dubai  /custom-shopify-theme-development-dubai
│    /shopify-migration-dubai    /luxury-ecommerce-website-design-dubai
│    /ecommerce-website-development-dubai
│    NEW /shopify-store-setup-dubai   NEW /online-store-for-small-business-uae
├─ WEB HUB        /wordpress-agency-dubai
│    /custom-wordpress-theme-development-dubai  /woocommerce-development-dubai
│    /website-design-dubai
│    NEW /website-for-small-business-dubai  NEW /website-redesign-dubai
│    NEW /wordpress-maintenance-dubai
├─ SOFTWARE HUB   /business-automation-dubai
│    /erp-software-dubai  /whatsapp-automation-dubai  /ai-assistant-for-business-dubai
│    NEW /e-invoicing-software-uae  NEW /inventory-management-software-dubai
├─ NEW /industries           hub, then 10 children (see below)
├─ /work  /work/<case>       6 concept builds (label stays until real clients exist)
├─ /blog  /blog/<post>       journal: 15 now, 36 planned
├─ NEW /tools                hub: cost calculators (Shopify exists)
│    /tools/shopify-store-cost-calculator
│    NEW /tools/website-cost-calculator  NEW /tools/whatsapp-reply-roi  NEW /tools/erp-vs-excel-checker
├─ NEW /free-website-audit   conversion page (lead magnet)
├─ /pricing  /process  /about  /contact  /legal/*
└─ PHASE 3  /abu-dhabi  /sharjah (only with real local content), /us/* (see 06)
```

Hub pages are the three money pages that already carry the most breadth. Do **not** create separate "hub" pages that duplicate them; add a "Related services" strip and a link grid to the hub page instead.

### Industry pages (NEW, `/industries/<slug>`)
| Page | Services it links to | Concept case | Primary phrase |
|---|---|---|---|
| perfume-and-oud-brands | shopify-agency, luxury, custom-theme | oud-atelier | shopify store for perfume brand uae |
| fashion-and-abaya-brands | shopify-agency, luxury, shopify-migration | haya-modest | abaya online store shopify |
| jewellery-and-watch-brands | luxury, shopify-plus | chrono-gulf | watch / jewellery ecommerce dubai |
| beauty-and-skincare-brands | shopify-agency, whatsapp | maison-verre | skincare brand shopify uae |
| restaurants-and-cafes | whatsapp, ecommerce, erp | opsdesk | restaurant ordering website uae |
| real-estate-agencies | wordpress, whatsapp, ai-assistant | northbridge | real estate website whatsapp dubai |
| clinics-and-dental | wordpress, whatsapp, ai-assistant | northbridge | clinic website booking dubai |
| trading-and-wholesale | erp, business-automation, woocommerce | opsdesk | b2b ordering website trading company uae |
| professional-services | wordpress, website-design, ai-assistant | northbridge | consultancy website dubai |
| car-rental-and-dealers (P3) | wordpress, whatsapp | n/a | car rental website dubai |

Each industry page: situation in the owner's words, three typical problems with a mockup each, what we build, an AED price band, a mini process, 5 FAQ, link to the matching concept case, CTA. 800 to 1,100 words. Not a template swap: the problems and proof must differ.

## Internal linking rules
1. **Every page has 3 to 8 contextual body links** to other pages, plus nav/footer.
2. **Money page → down:** 3 posts, 2 cases or an industry page, 2 sibling money pages, 1 tool. Anchors: descriptive, partial match ("Shopify migration"), exact match once.
3. **Post → up and across:** exactly **one** link to its parent money page with the target phrase as anchor, in the first 40% of the text; 2 to 3 sibling posts; 1 case or industry page; end-of-post CTA to the matching action (quote, audit, calculator).
4. **Industry → down:** to 2 or 3 money pages; to the concept case; to the posts that answer its questions.
5. **Case → up:** to the money pages it demonstrates (`services` array) and 2 posts.
6. **Tools → up:** to the money page of the same intent and to the related post. Tools get linked **from** every cost post.
7. **Home → hubs only** (commerce, web, software), the three best case studies, pricing, tools. Never link 40 pages from the home page.
8. **No orphan:** every URL is linked from at least one hub and one post or industry page. The links audit (`npm run links`) already fails on broken links; extend it to fail on pages with 0 inbound links (backlog item).
9. **Breadcrumbs everywhere** with BreadcrumbList schema.
10. **Cannibalisation guard:** one phrase, one URL. Where two pages could answer the same query (e.g. "shopify developer dubai"), the money page owns it and the post targets the *question* ("how to choose..."), not the phrase.

## Link matrix (who links to whom, the minimum)
| From ↓ / To → | Commerce hub | Web hub | Software hub | Industry | Case | Tool | Audit/Contact |
|---|---|---|---|---|---|---|---|
| Home | ● | ● | ● | hub | 3 | ● | ● |
| Money (commerce) | self | 1 | WhatsApp | 2 | 2 | ● | ● |
| Money (web) | 1 | self | AI/WhatsApp | 2 | 2 | ● | ● |
| Money (software) | 1 | 1 | self | 2 | 1 | ● | ● |
| Industry | 1 to 2 | 0 to 1 | 1 to 2 | 2 siblings | 1 | 1 | ● |
| Post (commerce) | ● | 0 | 0 to 1 | 1 | 1 | ● | ● |
| Post (web) | 0 | ● | 0 to 1 | 1 | 1 | ● | ● |
| Post (automation) | 0 | 0 | ● | 1 | 1 | ● | ● |

## Anchor text bank (rotate, never repeat the same anchor twice on a page)
- Shopify: "Shopify agency in Dubai", "a Shopify store built for the UAE", "Shopify Plus partner", "custom Shopify theme", "move to Shopify safely".
- WordPress: "WordPress agency in Dubai", "bilingual WordPress website", "custom WordPress theme".
- Software: "ERP for UAE businesses", "WhatsApp auto-reply", "AI assistant for your business", "replace Excel".
- Cost: "what a website costs in Dubai", "Shopify store cost in AED", "see our prices".

## City pages (phase 3 rules)
Abu Dhabi, Sharjah, Ajman, Al Ain: one page each **only if** it has (a) a local example or client, (b) local delivery/licence/free-zone facts, (c) a local WhatsApp or meeting option. Otherwise cover them as a line on the money page ("we work with brands across all seven emirates"). Dubai is the only place with `LocalBusiness` schema until a real address exists.

## Maintenance
Monthly: crawl for broken links and orphans, add 2 links from new posts to old money pages, refresh anchor bank, re-check the cannibalisation sheet (query → page) in Search Console.
