import { Visual } from "@/components/mock/Visual";
import type { Visual as V } from "@content/v3/types";
const IDS: V[] = ["shopify-admin", "theme-code", "wp-editor", "wp-site", "speed-report", "serp", "migration-map", "analytics", "erp-dash", "erp-invoice", "wa-inbox", "ai-widget"];
export default function T() {
  return <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26, padding: 70, background: "#111" }}>{IDS.map((i) => <Visual key={i} id={i} />)}</div>;
}
