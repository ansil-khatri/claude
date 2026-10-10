import { HOME } from "@content/home";
import { meta } from "@/lib/seo";
import { HomeHero, Marquee, Manifesto, Rebuilder, Chapters, How, Work, Dives, ResultsSection, PricingHome, Assurance, ReadNext, HomeFaq, HomeCta } from "@/components/home/Home";

export const metadata = meta({ title: HOME.seo.title, desc: HOME.seo.desc, path: "/" });

export default function Home() {
  return (
    <>
      <HomeHero />
      <Marquee />
      <Manifesto />
      <Rebuilder />
      <Chapters />
      <How />
      <Work />
      <Dives />
      <ResultsSection />
      <Assurance />
      <PricingHome />
      <ReadNext />
      <HomeFaq />
      <HomeCta />
    </>
  );
}
