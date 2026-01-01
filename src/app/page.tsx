import Header from "@/components/sections/header";
import HeroAuthSection from "@/components/sections/hero-auth";
import FeaturesAccordion from "@/components/sections/features-accordion";
import PricingPlans from "@/components/sections/pricing-plans";
import FAQ from "@/components/sections/faq";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroAuthSection />
      <FeaturesAccordion />
      <PricingPlans />
      <FAQ />
      <Footer />
    </main>
  );
}
