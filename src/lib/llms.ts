import fs from "node:fs";
import path from "node:path";
import { site } from "@/config/site";

export function llms(file: "llms.txt" | "llms-full.txt") {
  const raw = fs.readFileSync(path.join(process.cwd(), "content/data", file), "utf8");
  return raw
    .replaceAll("[Brand]", site.brand).replaceAll("[domain]", site.domain).replaceAll("[+971 number]", site.phoneDisplay)
    .replaceAll("[email]", site.email).replaceAll("[free zone]", site.freeZone).replaceAll("licence no. [number]", `licence no. ${site.licence}`)
    .replaceAll("[number]", site.licence).replaceAll("[Sun–Fri / Mon–Fri]", "Mon–Fri");
}
