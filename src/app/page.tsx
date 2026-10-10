import { HOME } from "@content/home";
import { meta } from "@/lib/seo";
import { HomeHero, Trust, StartingPoints, Statement, How, Work, Dives, ResultsSection, PricingHome, ReadNext, HomeFaq, HomeCta, Plain } from "@/components/home/Home";

export const metadata = meta({ title: HOME.seo.title, desc: HOME.seo.desc, path: "/" });

export default function Home() {
  return (
    <>
      <HomeHero />
      <Plain text={HOME.plain} facts={HOME.facts} />
      <Trust />
      <StartingPoints />
      <Statement />
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
