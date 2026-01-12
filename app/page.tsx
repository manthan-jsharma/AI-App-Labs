import dynamic from "next/dynamic";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { Footer } from "@/components/footer";
import { BackgroundEffects } from "@/components/background-effects";

const WorkShowcaseSection = dynamic(() =>
  import("@/components/work-showcase-section").then(
    (mod) => mod.WorkShowcaseSection
  )
);
const HowWeWorkSection = dynamic(() =>
  import("@/components/how-we-work-section").then((mod) => mod.HowWeWorkSection)
);
const FeaturesSection = dynamic(() =>
  import("@/components/features-section").then((mod) => mod.FeaturesSection)
);
const TechStackSection = dynamic(() =>
  import("@/components/tech-stack-section").then((mod) => mod.TechStackSection)
);
const PricingSection = dynamic(() =>
  import("@/components/pricing-section").then((mod) => mod.PricingSection)
);
const StatsSection = dynamic(() =>
  import("@/components/stats-section").then((mod) => mod.StatsSection)
);
const BonusSection = dynamic(() =>
  import("@/components/bonus-section").then((mod) => mod.BonusSection)
);
const FAQSection = dynamic(() =>
  import("@/components/faq-section").then((mod) => mod.FAQSection)
);
const CTASection = dynamic(() =>
  import("@/components/cta-section").then((mod) => mod.CTASection)
);

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <BackgroundEffects />

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
