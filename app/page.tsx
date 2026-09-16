import Hero from "@/components/sections/Hero";
import TheOpportunity from "@/components/sections/TheOpportunity";
import BrandStatement from "@/components/sections/BrandStatement";
import StrategicPartnershipsSection from "@/components/sections/StrategicPartnershipsSection";
import ServiceNavigator from "@/components/sections/ServiceNavigator";
import JourneyNarrative from "@/components/sections/JourneyNarrative";
import EcosystemSection from "@/components/sections/EcosystemSection";
import RealEstateSection from "@/components/sections/RealEstateSection";
import WhyAatiqSection from "@/components/sections/WhyAatiqSection";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <main className="bg-slate-50 dark:bg-[#0A0D0C] text-slate-900 dark:text-white transition-colors duration-400 overflow-x-hidden min-h-screen">
      <Hero />
      <TheOpportunity />
      <BrandStatement />
      <StrategicPartnershipsSection />
      <ServiceNavigator />
      <JourneyNarrative />
      <EcosystemSection />
      <RealEstateSection />
      <WhyAatiqSection />
      <FinalCTA />
    </main>
  );
}

