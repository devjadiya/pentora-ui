import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NewcomerEssentials from "@/components/NewcomerEssentials";
import BrowseByCategory from "@/components/BrowseByCategory";
import TrendingTemplates from "@/components/TrendingTemplates";
import FeaturedTemplates from "@/components/FeaturedTemplates";
import RecentlyAdded from "@/components/RecentlyAdded";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#1a0c2e] text-white font-sans">
      <Header />
      <main>
        <HeroSection />
        <NewcomerEssentials />
        <BrowseByCategory />
        <TrendingTemplates />
        <FeaturedTemplates />
        <RecentlyAdded />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}