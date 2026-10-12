import { BuyerTracks } from "@/components/sections/buyer-tracks";
import { CatalogueIndex } from "@/components/sections/catalogue-index";
import { EnquiryBand } from "@/components/sections/enquiry-band";
import { HeritageBand } from "@/components/sections/heritage-band";
import { HomeHero } from "@/components/sections/home-hero";
import { ProcessSteps } from "@/components/sections/process-steps";

export default function Home() {
  return (
    <>
      <HomeHero />
      <div className="print-border" aria-hidden />
      <CatalogueIndex />
      <BuyerTracks />
      <HeritageBand />
      <ProcessSteps index="04" />
      <EnquiryBand />
    </>
  );
}
