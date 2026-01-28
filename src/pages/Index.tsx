import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { PromotionsSection } from "@/components/home/PromotionsSection";
import { WhyFlySection } from "@/components/home/WhyFlySection";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { TravelInfoSection } from "@/components/home/TravelInfoSection";
import { TrustSection } from "@/components/home/TrustSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <PromotionsSection />
      <WhyFlySection />
      <DestinationsSection />
      <TravelInfoSection />
      <TrustSection />
    </Layout>
  );
};

export default Index;
