import Hero from "@/components/sections/Hero";
import TheOpportunity from "@/components/sections/TheOpportunity";
import ServiceNavigator from "@/components/sections/ServiceNavigator";
import JourneyNarrative from "@/components/sections/JourneyNarrative";
import MarketEntryEstimator from "@/components/sections/MarketEntryEstimator";
import SaudiMap from "@/components/sections/SaudiMap";
import EcosystemSection from "@/components/sections/EcosystemSection";
import StrategicPartnershipsSection from "@/components/sections/StrategicPartnershipsSection";
import ProofSection from "@/components/sections/ProofSection";
import RealEstateSection from "@/components/sections/RealEstateSection";
import GuideDownload from "@/components/sections/GuideDownload";
import FinalCTA from "@/components/sections/FinalCTA";

// Story order: why now → what we do → try it → where → proof → act.
export default function HomePage() {
  return (
    // No <main> here — the root layout already provides the single main landmark.
    <div className="bg-[#0A0D0C] text-white overflow-x-hidden min-h-screen">
      <Hero />
      <TheOpportunity />
      <ServiceNavigator />
      <JourneyNarrative />
      <MarketEntryEstimator />
      <SaudiMap />
      <EcosystemSection />
      <StrategicPartnershipsSection />
      <ProofSection />
      <RealEstateSection />
      <GuideDownload />
      <FinalCTA />
    </div>
  );
}
