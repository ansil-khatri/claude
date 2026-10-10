import type { Visual as V } from "@content/v3/types";
import { Browser, AppWindow, Phone } from "./Frames";
import { StoreHome, StoreCollection, StorePDP, StoreCart, MobileHome, MobileCheckout } from "./Store";
import { ThemeEditor, ThemeCode, WpEditor, WpSite, SpeedReport, SerpSchema, MigrationMap, AnalyticsChart, ErpDash, ErpInvoice, WaInbox, AiWidget } from "./Tools";

/** Resolves a visual id from the content layer to a mockup. `brand` picks the concept brand for store visuals. */
export function Visual({ id, brand }: { id: V; brand?: string }) {
  const k = brand ?? "maisonverre";
  switch (id) {
    case "store-home": return <Browser url={`${k}.ae`} dark={k === "oudatelier" || k === "chronogulf"}><StoreHome k={k} /></Browser>;
    case "store-collection": return <Browser url={`${k}.ae/collections/all`} dark={k === "oudatelier" || k === "chronogulf"}><StoreCollection k={k} /></Browser>;
    case "store-pdp": return <Browser url={`${k}.ae/products/${k === "chronogulf" ? "meridian-40" : "soraya-tote"}`} dark={k === "oudatelier" || k === "chronogulf"}><StorePDP k={k} /></Browser>;
    case "store-cart": return <Browser url={`${k}.ae/cart`}><StoreCart k={k} /></Browser>;
    case "store-mobile": return (
      <div className="vis-phones"><div><Phone><MobileHome k={k} /></Phone></div><div><Phone><MobileCheckout k={k} /></Phone></div></div>
    );
    case "store-rtl": return <Browser url="oudatelier.ae/ar" dark><StoreHome k="oudatelier" rtl /></Browser>;
    case "shopify-admin": return <AppWindow title="Theme editor · Draft theme"><ThemeEditor /></AppWindow>;
    case "theme-code": return <AppWindow title="featured-collection.liquid"><ThemeCode /></AppWindow>;
    case "wp-editor": return <AppWindow title="Edit page · Company setup"><WpEditor /></AppWindow>;
    case "wp-site": return <Browser url="northbridge.ae"><WpSite /></Browser>;
    case "speed-report": return <AppWindow title="Performance report"><SpeedReport /></AppWindow>;
    case "serp": return <AppWindow title="Search and structured data"><SerpSchema /></AppWindow>;
    case "migration-map": return <AppWindow title="Redirect map"><MigrationMap /></AppWindow>;
    case "analytics": return <AppWindow title="Search performance"><AnalyticsChart /></AppWindow>;
    case "erp-dash": return <AppWindow title="OpsDesk · Overview"><ErpDash /></AppWindow>;
    case "erp-invoice": return <AppWindow title="OpsDesk · Invoice"><ErpInvoice /></AppWindow>;
    case "wa-inbox": return <AppWindow title="OpsDesk · WhatsApp"><WaInbox /></AppWindow>;
    case "ai-widget": return <Browser url="maisonverre.ae"><AiWidget /></Browser>;
  }
}

/** Default concept brand per visual, used when a section does not name one. */
export const BRAND_FOR: Partial<Record<V, string>> = { "store-rtl": "oudatelier" };
