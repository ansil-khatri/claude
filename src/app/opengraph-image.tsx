import { ogImage, OG_SIZE } from "@/lib/og";
export const dynamic = "force-static";
export const size = OG_SIZE; export const contentType = "image/png"; export const alt = "Shopify and WordPress agency in Dubai";
export default function Image() { return ogImage({ kicker: "Dubai · Commerce & software", title: "Shopify and WordPress agency in Dubai. Software that removes manual work." }); }
