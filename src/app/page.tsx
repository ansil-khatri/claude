import { HOME } from "@content/home";
import { meta } from "@/lib/seo";
import { HomeHero, Marquee, Manifesto, Chapters, How, Work, Dives, ResultsSection, PricingHome, ReadNext, HomeFaq, HomeCta } from "@/components/home/Home";

export const metadata = meta({ title: HOME.seo.title, desc: HOME.seo.desc, path: "/" });

export default function Home() {
  return (
    <>
      <HomeHero />
      <Marquee />
      <Manifesto />
      <Chapters />
      <How />
      <Work />
      <Dives />
      <ResultsSection />
      <PricingHome />
      <ReadNext />
      <HomeFaq />
      <HomeCta />
    </>
  );
}
