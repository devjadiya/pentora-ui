import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ClientsMarquee from "@/components/landing/ClientsMarquee";
import WhatWeDo from "@/components/landing/WhatWeDo";
import OffensiveSecurity from "@/components/landing/OffensiveSecurity";
import DefensiveSecurity from "@/components/landing/DefensiveSecurity";
import OurApproach from "@/components/landing/OurApproach";
import DashboardPreview from "@/components/landing/DashboardPreview";
import AdvisoryServices from "@/components/landing/AdvisoryServices";
import TeamSection from "@/components/landing/TeamSection";
import WorldMapDynamic from "@/components/landing/WorldMapDynamic";
import RiskSection from "@/components/landing/RiskSection";
import Testimonials from "@/components/landing/Testimonials";
import Faq from "@/components/landing/Faq";
import AiContentEnhancer from "@/components/landing/AiContentEnhancer";
import CtaSection from "@/components/landing/CtaSection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Header />
      <Hero />
      <ClientsMarquee />
      <WhatWeDo />
      <OffensiveSecurity />
      <DefensiveSecurity />
      <OurApproach />
      <DashboardPreview />
      <AdvisoryServices />
      <TeamSection />
      <WorldMapDynamic />
      <RiskSection />
      <Testimonials />
      <Faq />
      <AiContentEnhancer />
      <CtaSection />
      <Footer />
    </main>
  );
}
