import "@fontsource/ibm-plex-sans-arabic/500.css";
import "@fontsource/ibm-plex-sans-arabic/700.css";
import type { Metadata } from "next";

// Prototype only: noindex, no hreflang until a native Arabic writer approves the copy (docs/seo-uae/03 §4).
export const metadata: Metadata = { robots: { index: false, follow: false }, title: "الصفحة الرئيسية (نموذج أولي)" };
export default function ArLayout({ children }: { children: React.ReactNode }) {
  return <div className="ar" dir="rtl" lang="ar-AE">{children}</div>;
}
