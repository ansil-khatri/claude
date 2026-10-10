import type { Metadata, Viewport } from "next";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource/instrument-serif/400-italic.css";
import "@fontsource/instrument-serif/400.css";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { site, url } from "@/config/site";
import { Nav } from "@/components/shell/Nav";
import { Footer } from "@/components/shell/Footer";
import { RootEffects } from "@/components/shell/RootEffects";
import { WaFloat } from "@/components/shell/WaFloat";
import { Analytics } from "@/components/shell/Analytics";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(url()),
  title: { default: `App, Website & Software Company in Dubai & UAE · ${site.brand}`, template: `%s · ${site.brand}` },
  description: "We build the stores, apps, WhatsApp assistants and systems that run UAE businesses. Fixed AED prices, Arabic + English, based in Dubai.",
  openGraph: { siteName: site.brand, locale: "en_AE", type: "website" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#111113", width: "device-width", initialScale: 1 };

const org = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization", "@id": url("/#org"), name: site.brand, url: url(), email: site.email,
      areaServed: { "@type": "Country", name: "United Arab Emirates" },
      contactPoint: { "@type": "ContactPoint", telephone: site.phoneDisplay, contactType: "sales", availableLanguage: ["English", "Arabic"] },
    },
    { "@type": "WebSite", "@id": url("/#site"), url: url(), name: site.brand, inLanguage: "en-AE", publisher: { "@id": url("/#org") } },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AE" dir="ltr">
      <body>
        <a href="#main" className="sr-only">Skip to content</a>
        <Nav />
        <div className="page-body" id="page-body">
          <main id="main">{children}</main>
        </div>
        <Footer />
        <WaFloat />
        <RootEffects />
        <Analytics />
        <JsonLd data={org} />
        <div className="cur-dot" id="cur-dot" aria-hidden />
        <div className="cur-ring" id="cur-ring" aria-hidden />
      </body>
    </html>
  );
}
