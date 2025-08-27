import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ClientsMarquee from "@/components/landing/ClientsMarquee";
import ServicesGrid from "@/components/landing/ServicesGrid";
import FeaturesList from "@/components/landing/FeaturesList";
import DashboardPreview from "@/components/landing/DashboardPreview";
import AiContentEnhancer from "@/components/landing/AiContentEnhancer";
import Testimonials from "@/components/landing/Testimonials";
import Faq from "@/components/landing/Faq";
import CtaSection from "@/components/landing/CtaSection";
import Footer from "@/components/landing/Footer";
import WorldMapDynamic from "@/components/landing/WorldMapDynamic";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Header />
      <Hero />
      <ClientsMarquee />
      <ServicesGrid />
      <FeaturesList />
      <DashboardPreview />
      <WorldMapDynamic />
      <AiContentEnhancer />
      <Testimonials />
      <Faq />
      <CtaSection />
      <Footer />
    </main>
  );
}
