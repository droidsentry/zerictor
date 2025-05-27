import HeroSection from "@/lib/components/section/hero-section";
import ContactSection from "@/lib/components/section/contact-section";
import BusinessSection from "@/lib/components/section/business-section";
import WhatWeDoSection from "@/lib/components/section/what-we-do-section";
import NewsSection from "@/lib/components/section/news-section";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <BusinessSection />
      <ContactSection />
      <NewsSection />
      {/* <CareersSection /> */}
    </>
  );
}
