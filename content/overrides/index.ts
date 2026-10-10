import type { Page } from "../types";
import { PATCH as shopify } from "./shopify-development";
import { PATCH as website } from "./website-design";
import { PATCH as payments } from "./payment-integration";
import { PATCH as ai } from "./ai-whatsapp-automation";
import { PATCH as automation } from "./business-automation";
import { PATCH as seo } from "./seo";
import { PATCH as rescue } from "./vibe-code-rescue";
import { PATCH as agencies } from "./agencies";
import { PATCH as webapp } from "./web-app-development";
import { PATCH as saas } from "./saas-development";
import { PATCH as landing } from "./landing-pages";

/** Spec-accurate replacements for whole fields, applied last (after showcases.ts and cases). Keyed by page slug. */
export const PATCHES: Record<string, Partial<Page>> = {
  "shopify-development": shopify, "website-design": website, "payment-integration": payments, "ai-whatsapp-automation": ai,
  "business-automation": automation, seo, "vibe-code-rescue": rescue, agencies,
  "web-app-development": webapp, "saas-development": saas, "landing-pages": landing,
};
