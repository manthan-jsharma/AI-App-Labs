"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useCounter } from "@/hooks/use-counter";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { TiltCard } from "@/components/tilt-card";
import { AnimatedGradientText } from "@/components/animated-gradient";
import { SplitText } from "@/components/split-text";
import { GradientBlob } from "@/components/gradient-blob";
import { Card3D } from "@/components/3d-card";
import { FloatingElement } from "@/components/floating-elements";
import { useRef, useState, useEffect } from "react";
import {
  CheckCircle,
  Crown,
  LayoutDashboard,
  Settings2,
  MousePointerClick,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { WhiteLabelModal } from "@/components/white-label-modal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const stats = [
  {
    value: 200,
    prefix: "",
    suffix: "+",
    label: "Products Built",
    subtext: "And Counting",
  },
  {
    value: 25,
    prefix: "$",
    suffix: "M+",
    label: "Client Funding",
    subtext: "Raised by Clients",
  },
  {
    value: 80,
    prefix: "",
    suffix: "+",
    label: "VC-Backed Clients",
    subtext: "Trusted Partners",
  },
];

const logos = [
  "Knimble",
  "HighPath",
  "Porta",
  "Loadtrends",
  "GetLannyAI",
  "MorpheusAI",
  "CloseWorks",
  "Fund2Grow",
];

const dashboardScreenshots = [
  {
    src: "/AI-Saas-Dashboard1.png",
    title: "Main Command Center",
    desc: "Real-time AI metrics",
  },
  {
    src: "/AI-Saas-Dashboard4.png",
    title: "Analytics Suite",
    desc: "Deep-dive data",
  },
  {
    src: "/AI-Saas-Dashboard3.png",
    title: "Revenue Engine",
    desc: "MRR forecasting",
  },
];

// --- CHANGE 1: Optimized StatContent for Mobile Stability ---
const StatContent = ({
  stat,
  count,
  hasPlayed,
}: {
  stat: typeof stats[0];
  count: number;
  hasPlayed: boolean;
}) => (
  <div
    className={cn(
      "relative h-full px-6 py-8 rounded-2xl bg-gradient-to-br from-card to-background border border-border/50 overflow-hidden",
      // Removed generic will-change, added specific backface-visibility
      "transform-gpu backface-hidden translate-z-0",
      "md:hover:border-accent/30 md:hover:shadow-[0_0_30px_-10px_rgba(249,115,22,0.3)]",
      hasPlayed ? "opacity-100" : "opacity-0"
    )}
    style={{
      // Changed from 'none' vs 'translateY' to 'translate3d' to keep GPU active
      transform: hasPlayed ? "translate3d(0,0,0)" : "translate3d(0,32px,0)",
      transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />

    <div className="relative text-center md:text-left">
      <div className="text-4xl md:text-5xl font-black mb-2">
        <AnimatedGradientText>
          {stat.prefix}
          {count}
          {stat.suffix}
        </AnimatedGradientText>
      </div>

      <div className="text-base font-semibold text-foreground mb-1">
        {stat.label}
      </div>
      <div className="text-sm text-muted-foreground">{stat.subtext}</div>
    </div>

    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-3xl" />
  </div>
);

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1, // Lowered threshold slightly for smoother mobile triggers
  });

  const [hasPlayed, setHasPlayed] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Latch logic: Once played, keep it played to prevent reverse-scroll flickering
    if (isVisible && !hasPlayed) {
      setHasPlayed(true);
    }
  }, [isVisible, hasPlayed]);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const count = useCounter(stat.value, 2000, 0, hasPlayed);

  return (
    <div
      ref={ref}
      className="w-full sm:w-auto min-w-[240px]"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {isDesktop ? (
        <TiltCard className="group h-full" maxTilt={8}>
          <StatContent stat={stat} count={count} hasPlayed={hasPlayed} />
        </TiltCard>
      ) : (
        // Mobile Wrapper: Ensure simple stacking context
        <div className="group h-full transform-gpu">
          <StatContent stat={stat} count={count} hasPlayed={hasPlayed} />
        </div>
      )}
    </div>
  );
}

function InfiniteLogoMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative overflow-hidden py-8 group">
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-card to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-card to-transparent z-10" />

      {/* Added transform-gpu to marquee container */}
      <div
        ref={marqueeRef}
        className="flex animate-marquee group-hover:[animation-play-state:paused] transform-gpu backface-hidden"
      >
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-4 md:mx-8 px-4 md:px-6 py-3 rounded-full border border-border/30 bg-background/50 backdrop-blur-sm hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 cursor-pointer group/logo"
          >
            <span className="text-xs md:text-sm font-semibold text-muted-foreground group-hover/logo:text-accent transition-colors whitespace-nowrap uppercase tracking-wider">
              {logo}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardShowcase() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isWhiteLabelOpen, setIsWhiteLabelOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const BrowserContent = (
    // --- CHANGE 2: Stabilized Browser Container ---
    <div className="relative w-full rounded-2xl md:rounded-3xl border border-white/10 bg-card/50 backdrop-blur-xl overflow-hidden shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] transform-gpu backface-hidden">
      <div className="h-10 md:h-12 border-b border-white/10 flex items-center px-4 gap-2 bg-black/20">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/20 border border-red-500/50" />
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/20 border border-green-500/50" />
        </div>
        <div className="ml-2 md:ml-4 px-3 py-1 rounded-md bg-white/5 border border-white/5 text-[8px] md:text-[10px] font-mono text-muted-foreground flex items-center gap-2 truncate max-w-[150px] md:max-w-none">
          <LayoutDashboard className="w-3 h-3 hidden md:block opacity-50" />
          <span className="opacity-50">app.your-saas.com/dashboard</span>
        </div>
      </div>

      <Carousel setApi={setApi} className="w-full bg-black/40">
        <CarouselContent>
          {dashboardScreenshots.map((shot, index) => (
            <CarouselItem key={index}>
              {/* --- CHANGE 3: Fixed Image Flicker on Swipe --- */}
              <div className="relative aspect-[16/10] overflow-hidden group/image backface-hidden transform-gpu">
                <img
                  src={shot.src}
                  alt={shot.title}
                  className="w-full h-full object-cover transform-gpu transition-transform duration-700 ease-out md:group-hover/image:scale-105"
                  // Added rendering hint for browsers
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 md:group-hover/image:opacity-0 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-8">
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-1">
                    {shot.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-300">
                    {shot.desc}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-black/50 border-white/10 hover:bg-accent hover:text-white hidden sm:flex backdrop-blur-md" />
        <CarouselNext className="right-4 bg-black/50 border-white/10 hover:bg-accent hover:text-white hidden sm:flex backdrop-blur-md" />
      </Carousel>
    </div>
  );

  return (
    <div className="relative w-full">
      <div className="relative md:absolute md:-top-12 md:-right-12 z-20 w-full md:w-auto mb-6 md:mb-0 flex justify-center md:block">
        <FloatingElement
          delay={500}
          amplitude={10}
          frequency={1.5}
          className="w-full max-w-xs"
        >
          <div
            onClick={() => setIsWhiteLabelOpen(true)}
            className="bg-card border border-accent/30 p-5 rounded-2xl shadow-2xl w-full backdrop-blur-xl cursor-pointer hover:scale-105 hover:border-accent transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Crown className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-bold text-foreground text-sm group-hover:text-accent transition-colors">
                  Resell As Your Own
                </h4>
              </div>
              <Settings2 className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors opacity-0 group-hover:opacity-100" />
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed mb-3 group-hover:text-foreground/80 transition-colors">
              Resell our development under your brand. You charge clients{" "}
              <span className="text-foreground font-bold">$20k–$100k</span>, and
              we build it.
            </p>

            <div className="flex items-center justify-between text-xs font-bold text-accent pt-2 border-t border-border/30">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3" /> License: $10k/yr
              </div>
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] uppercase tracking-wide">
                <MousePointerClick className="w-3 h-3" /> Try Demo
              </div>
            </div>
          </div>
        </FloatingElement>
      </div>

      {isDesktop ? (
        <Card3D intensity={15} className="w-full py-5">
          {BrowserContent}
        </Card3D>
      ) : (
        // --- CHANGE 4: Isolated Mobile Layer ---
        <div className="w-full transform-gpu isolate">{BrowserContent}</div>
      )}
      <div className="flex justify-center gap-2 mt-4 md:mt-6">
        {dashboardScreenshots.map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-1 rounded-full transition-all duration-300",
              current === i + 1 ? "w-6 md:w-8 bg-accent" : "w-2 bg-white/20"
            )}
          />
        ))}
      </div>

      <WhiteLabelModal
        isOpen={isWhiteLabelOpen}
        onClose={() => setIsWhiteLabelOpen(false)}
      />
    </div>
  );
}

export function StatsSection() {
  const { ref } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-card border-y border-border/50 relative overflow-hidden"
    >
      <GradientBlob
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] opacity-20"
        colors={["rgba(249,115,22,0.1)", "transparent"]}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <RevealOnScroll delay={100} direction="up">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-center mb-6 tracking-tighter leading-[0.9]">
            <span className="block md:inline-block">
              <SplitText
                text="TRUSTED BY"
                className="inline-block"
                animation="fadeUp"
                stagger={30}
              />
            </span>
            <br className="hidden md:block" />
            <span className="text-accent block md:inline-block mt-2 md:mt-0">
              <SplitText
                text="INDUSTRY LEADERS"
                animation="elastic"
                delay={300}
                stagger={40}
              />
            </span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={200} direction="up">
          <p className="text-center text-base md:text-xl text-muted-foreground mb-16 md:mb-20 max-w-2xl mx-auto px-2">
            We don't just build software. We engineer{" "}
            <span className="text-foreground font-bold">
              market-ready assets
            </span>{" "}
            for the world's most ambitious founders.
          </p>
        </RevealOnScroll>

        {/* Stats cards */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16 md:mb-24">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>

        <div id="white-label" className="scroll-mt-32">
          <RevealOnScroll delay={500} direction="scale">
            <div className="max-w-5xl mx-auto mb-16 md:mb-24">
              <div className="text-center mb-8 md:mb-12 px-4">
                <h3 className="text-2xl md:text-4xl font-black mb-4">
                  Launch Your Own AI Agency Instantly
                </h3>
                <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  We build the tech. You White-Label and brand it as your own,
                  resell access to your clients.
                  <span className="block mt-2 text-foreground font-bold">
                    Reseller License:{" "}
                    <span className="text-accent">$10,000 / year.</span>
                  </span>
                </p>
              </div>
              <DashboardShowcase />
            </div>
          </RevealOnScroll>
        </div>

        {/* Logo marquee */}
        <RevealOnScroll delay={700} direction="fade">
          <div className="text-center mb-6 md:mb-8">
            <span className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-bold">
              Our Clients & Partners
            </span>
          </div>
          <InfiniteLogoMarquee />
        </RevealOnScroll>
      </div>
    </section>
  );
}
