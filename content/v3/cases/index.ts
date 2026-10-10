import type { Case } from "../types";
import { caseStudy as chrono_gulf } from "./chrono-gulf";
import { caseStudy as haya_modest } from "./haya-modest";
import { caseStudy as maison_verre } from "./maison-verre";
import { caseStudy as northbridge_corporate } from "./northbridge-corporate";
import { caseStudy as opsdesk_erp } from "./opsdesk-erp";
import { caseStudy as oud_atelier } from "./oud-atelier";

export const CASES: Case[] = [chrono_gulf, haya_modest, maison_verre, northbridge_corporate, opsdesk_erp, oud_atelier];
export const caseBySlug = (s: string) => CASES.find((c) => c.slug === s);
