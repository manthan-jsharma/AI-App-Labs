"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useCounter } from "@/hooks/use-counter";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { TiltCard } from "@/components/tilt-card";
import { AnimatedGradientText } from "@/components/animated-gradient";
import { SplitText } from "@/components/split-text";
import { GradientBlob } from "@/components/gradient-blob";
import { Card3D } from "@/components/3d-card";
// FIX: Added FloatingElement import
import { FloatingElement } from "@/components/floating-elements";
import { useRef, useState, useEffect } from "react";
import { CheckCircle, Crown, ArrowRight, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";
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

// Dashboard Screenshots
const dashboardScreenshots = [
  {
    src: "/AI-Saas-Dashboard1.png",
    title: "Main Command Center",
    desc: "Real-time AI metrics & user tracking",
  },
  {
    src: "/AI-Saas-Dashboard4.png",
    title: "Analytics Suite",
    desc: "Deep-dive data visualization",
  },
  {
    src: "/AI-Saas-Dashboard3.png",
    title: "Revenue Engine",
    desc: "AIintegration & MRR forecasting",
  },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.3,
  });
  const count = useCounter(stat.value, 2000, 0, isVisible);

  return (
    <div ref={ref}>
      <TiltCard className="group" maxTilt={8}>
        <div className="relative px-8 py-8 rounded-2xl bg-gradient-to-br from-card to-background border border-border/50 overflow-hidden transition-all duration-500 hover:border-accent/30 hover:shadow-[0_0_30px_-10px_rgba(249,115,22,0.3)]">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative">
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
      </TiltCard>
    </div>
  );
}

function InfiniteLogoMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative overflow-hidden py-8 group">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card to-transparent z-10" />

      <div
        ref={marqueeRef}
        className="flex animate-marquee group-hover:[animation-play-state:paused]"
      >
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-8 px-6 py-3 rounded-full border border-border/30 bg-background/50 backdrop-blur-sm hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 cursor-pointer group/logo"
          >
            <span className="text-sm font-semibold text-muted-foreground group-hover/logo:text-accent transition-colors whitespace-nowrap uppercase tracking-wider">
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

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative w-full">
      {/* Floating "White Label" Card */}
      <div className="absolute -top-12 right-4 md:-right-12 z-20 hidden md:block">
        <FloatingElement delay={500} amplitude={10} frequency={1.5}>
          <div className="bg-card border border-accent/30 p-5 rounded-2xl shadow-2xl max-w-xs backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Crown className="w-5 h-5 text-accent" />
              </div>
              <h4 className="font-bold text-foreground text-sm">
                Resell As Your Own
              </h4>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">
              Launch your own agency. We build the tech, you white-label it and
              charge clients $5k-$10k monthly.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-accent">
              <CheckCircle className="w-3 h-3" /> 100% IP Ownership
            </div>
          </div>
        </FloatingElement>
      </div>

      <Card3D intensity={15} className="w-full">
        <div className="rounded-3xl border border-border/50 bg-card/50 backdrop-blur-xl overflow-hidden shadow-2xl relative group/card">
          {/* Browser Toolbar */}
          <div className="h-12 border-b border-border/50 flex items-center px-4 gap-2 bg-background/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="ml-4 px-3 py-1 rounded-md bg-secondary/50 text-[10px] font-mono text-muted-foreground flex items-center gap-2">
              <LayoutDashboard className="w-3 h-3" />
              app.Nebula-saas.com/dashboard
            </div>
          </div>

          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {dashboardScreenshots.map((shot, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-[16/10] overflow-hidden group/image cursor-crosshair">
                    <img
                      src={shot.src}
                      alt={shot.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/image:scale-150 group-hover/image:rotate-1"
                      style={{ transformOrigin: "center center" }}
                    />

                    {/* Overlay on non-hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-100 group-hover/image:opacity-0 transition-opacity duration-300 flex flex-col justify-end p-8">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {shot.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {shot.desc}
                      </p>
                    </div>

                    {/* Magnifying Glass Hint */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold border border-white/10">
                        Hover to Inspect
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-background/20 backdrop-blur-md border-white/10 hover:bg-accent hover:text-white" />
            <CarouselNext className="right-4 bg-background/20 backdrop-blur-md border-white/10 hover:bg-accent hover:text-white" />
          </Carousel>
        </div>
      </Card3D>

      {/* Carousel Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {dashboardScreenshots.map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-1 rounded-full transition-all duration-300",
              current === i + 1 ? "w-8 bg-accent" : "w-2 bg-border"
            )}
          />
        ))}
      </div>
    </div>
  );
}

export function StatsSection() {
  const { ref } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="py-32 bg-card border-y border-border/50 relative overflow-hidden"
    >
      <GradientBlob
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20"
        colors={["rgba(249,115,22,0.1)", "transparent"]}
      />

      <div className="container mx-auto px-6 relative z-10">
        <RevealOnScroll delay={100} direction="up">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-center mb-6 tracking-tighter leading-[0.9]">
            <SplitText
              text="TRUSTED BY"
              className="inline-block"
              animation="fadeUp"
              stagger={30}
            />
            <br />
            <span className="text-accent inline-block">
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
          <p className="text-center text-lg md:text-xl text-muted-foreground mb-20 max-w-2xl mx-auto">
            We don't just build software. We engineer{" "}
            <span className="text-foreground font-bold">
              market-ready assets
            </span>{" "}
            for the world's most ambitious founders.
          </p>
        </RevealOnScroll>

        {/* Stats cards */}
        <div className="flex flex-wrap justify-center gap-6 mb-24">
          {stats.map((stat, index) => (
            <RevealOnScroll
              key={index}
              delay={300 + index * 100}
              direction="up"
            >
              <StatCard stat={stat} index={index} />
            </RevealOnScroll>
          ))}
        </div>

        {/* DASHBOARD CAROUSEL + WHITE LABEL PITCH */}
        <RevealOnScroll delay={500} direction="scale">
          <div id="white-label" className="max-w-5xl mx-auto mb-24">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-black mb-3">
                Your Future Command Center
              </h3>
              <p className="text-muted-foreground">
                Get your own branded dashboard to manage your empire.
              </p>
            </div>
            <DashboardShowcase />
          </div>
        </RevealOnScroll>

        {/* Logo marquee */}
        <RevealOnScroll delay={700} direction="fade">
          <div className="text-center mb-8">
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
