import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ClientsMarquee from "@/components/landing/ClientsMarquee";
import WhatWeDo from "@/components/landing/WhatWeDo";
import StickyScrollSection from "@/components/landing/StickyScrollSection";
import ServicesGrid from "@/components/landing/ServicesGrid";
import DashboardPreview from "@/components/landing/DashboardPreview";
import WorldMapDynamic from "@/components/landing/WorldMapDynamic";
import AiContentEnhancer from "@/components/landing/AiContentEnhancer";
import Testimonials from "@/components/landing/Testimonials";
import Faq from "@/components/landing/Faq";
import CtaSection from "@/components/landing/CtaSection";
import Footer from "@/components/landing/Footer";
import AdvisoryServices from "@/components/landing/AdvisoryServices";
import RiskSection from "@/components/landing/RiskSection";
import OffensiveSecurity from "@/components/landing/OffensiveSecurity";
import DefensiveSecurity from "@/components/landing/DefensiveSecurity";
import OurApproach from "@/components/landing/OurApproach";
import TeamSection from "@/components/landing/TeamSection";


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
