import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { WorkShowcaseSection } from "@/components/work-showcase-section";
import { HowWeWorkSection } from "@/components/how-we-work-section";
import { FeaturesSection } from "@/components/features-section";
import { PricingSection } from "@/components/pricing-section";
import { TechStackSection } from "@/components/tech-stack-section";
import { BonusSection } from "@/components/bonus-section";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { CursorGlow } from "@/components/cursor-glow";
import { ParticleField } from "@/components/particle-field";
import { MouseTrail } from "@/components/mouse-trail";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <CursorGlow />
      <ParticleField />
      <MouseTrail />
      <Header />
      <HeroSection />
      <WorkShowcaseSection />
      <HowWeWorkSection />
      <FeaturesSection />
      <TechStackSection />
      <PricingSection />
      <StatsSection />
      <BonusSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
