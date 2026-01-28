import { HeroSection } from "@/components/home/HeroSection";
import { PromotionsSection } from "@/components/home/PromotionsSection";
import { WhyFlySection } from "@/components/home/WhyFlySection";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { TravelInfoSection } from "@/components/home/TravelInfoSection";
import { TrustSection } from "@/components/home/TrustSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Book flights with Air Peace, Nigeria's largest airline. Explore destinations across Nigeria, Africa, and beyond. Safe, comfortable, and reliable air travel.",
  openGraph: {
    title: "Air Peace - Nigeria's Largest Airline",
    description:
      "Book flights, manage bookings, and explore destinations across Nigeria, Africa, and beyond.",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PromotionsSection />
      <WhyFlySection />
      <DestinationsSection />
      <TravelInfoSection />
      <TrustSection />
    </>
  );
}
