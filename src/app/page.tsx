import type { Metadata } from "next";
import HeroSlideshow from "@/components/home/HeroSlideshow";
import AboutOverview from "@/components/home/AboutOverview";
import CoreServices from "@/components/home/CoreServices";
import IndustriesSection from "@/components/home/IndustriesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview";
import InsightsSection from "@/components/home/InsightsSection";
import PeopleTeaser from "@/components/home/PeopleTeaser";
import CareersPreview from "@/components/home/CareersPreview";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Nharuvi Global | Trusted Growth & Advisory Partner",
  description:
    "A premier professional services firm offering accounting, tax advisory, audit, CFO advisory, business consulting, and digital transformation services to help businesses scale with confidence.",
};

export default function HomePage() {
  return (
    <>
      <HeroSlideshow />
      <AboutOverview />
      <CoreServices />
      <IndustriesSection />
      <WhyChooseUs />
      <CaseStudiesPreview />
      <InsightsSection />
      <PeopleTeaser />
      <CareersPreview />
      <ContactCTA />
    </>
  );
}
