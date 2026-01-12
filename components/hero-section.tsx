"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/magnetic-button";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { FloatingElement, ParallaxLayer } from "@/components/floating-elements";
import { SplitText } from "@/components/split-text";
import { GradientBlob } from "@/components/gradient-blob";
import { MorphingText } from "@/components/morphing-text";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const bg = backgroundRef.current;
    if (!hero) return;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (!hero) return;
      const rect = hero.getBoundingClientRect();

      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 40;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 40;
      hero.style.setProperty("--mouse-x", `${x}`);
      hero.style.setProperty("--mouse-y", `${y}`);
    };

    const handleScroll = () => {
      if (!bg) return;
      bg.style.transform = `translateY(${window.scrollY * 0.2}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden"
      style={
        {
          "--mouse-x": "0",
          "--mouse-y": "0",
        } as React.CSSProperties
      }
    >
      <GradientBlob
        className="top-20 left-[5%] w-[800px] h-[800px] opacity-40 animate-pulse"
        colors={["rgba(249,115,22,0.15)", "transparent", "transparent"]}
        speed={5000}
      />
      <GradientBlob
        className="bottom-20 right-[5%] w-[700px] h-[700px] opacity-30 animate-pulse"
        colors={["rgba(59,130,246,0.15)", "transparent", "transparent"]}
        speed={7000}
      />
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] will-change-transform"
      />

      <ParallaxLayer
        speed={-0.15}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute top-40 left-[10%] w-24 h-24 border border-accent/20 rounded-full blur-[1px] transition-transform duration-100 ease-out"
          style={{
            transform: `translate(calc(var(--mouse-x) * 1.5px), calc(var(--mouse-y) * 1.5px))`,
          }}
        />
        <div
          className="absolute bottom-40 right-[10%] w-32 h-32 border border-blue-500/20 rotate-45 blur-[1px] transition-transform duration-100 ease-out"
          style={{
            transform: `translate(calc(var(--mouse-x) * -1.2px), calc(var(--mouse-y) * -1.2px))`,
          }}
        />
      </ParallaxLayer>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <RevealOnScroll delay={0} direction="down">
          <FloatingElement
            amplitude={6}
            frequency={2}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/40 bg-accent/5 backdrop-blur-md shadow-[0_0_20px_-5px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.5)] transition-shadow duration-500 cursor-default">
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-xs md:text-sm font-bold text-accent tracking-wide uppercase">
                Now accepting clients for December cohort
              </span>
            </div>
          </FloatingElement>
        </RevealOnScroll>

        {/* Headlines */}
        <div className="mb-8">
          <RevealOnScroll delay={100} direction="up">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 leading-[1.1] md:leading-[0.9]">
              <span className="inline-block whitespace-nowrap">
                <SplitText
                  text="We don’t just"
                  className="inline-block"
                  animation="fadeUp"
                  stagger={30}
                />
              </span>
              <br />

              <span className="text-muted-foreground inline-block whitespace-nowrap">
                <SplitText
                  text="ship code."
                  className="inline-block"
                  animation="elastic"
                  delay={500}
                  stagger={40}
                />
              </span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={300} direction="up">
            <h2 className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.2] md:leading-[0.9] mt-4 md:mt-0">
              We build{" "}
              <span className="text-accent inline-block transition-transform hover:scale-105 duration-300">
                $3M+ AI SaaS Assets
              </span>
              <br className="block md:hidden" />
              <br className="hidden md:block" />
              <span className="inline-block mt-2 md:mt-0">
                in{" "}
                <MorphingText
                  texts={[
                    "14 Days.",
                    "336 Hours.",
                    "Record Time.",
                    "Savage Speed.",
                    "Zero Bloat.",
                  ]}
                  className="text-foreground underline decoration-accent/50 underline-offset-4 md:underline-offset-8"
                  interval={1500}
                />
              </span>
            </h2>
          </RevealOnScroll>
        </div>

        {/* Subheadline */}
        <RevealOnScroll delay={400} direction="up">
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            The only studio that combines{" "}
            <strong className="text-foreground font-bold">
              Founder-Level Engineering
            </strong>{" "}
            with a{" "}
            <strong className="text-foreground font-bold">
              Guaranteed Distribution Engine
            </strong>
            . Get a production-ready AI MVP, daily signups, and a clear path to
            $30k MRR.
          </p>
        </RevealOnScroll>

        {/* Magnetic CTA */}
        <RevealOnScroll delay={500} direction="up">
          <div className="flex justify-center">
            <MagneticButton strength={40}>
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-accent via-orange-500 to-amber-500 px-12 py-8 text-xl font-black text-accent-foreground shadow-[0_0_40px_-10px_rgba(249,115,22,0.4)] hover:shadow-[0_0_60px_-10px_rgba(249,115,22,0.6)] hover:scale-105 transition-all duration-300"
              >
                <Link href="https://cal.com/aiapps.dev/30min" target="_blank">
                  <span className="relative z-10 flex items-center gap-3">
                    BUILD MY ASSET
                    <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                </Link>
              </Button>
            </MagneticButton>
          </div>
        </RevealOnScroll>

        {/* Social Proof */}
        <RevealOnScroll delay={700} direction="fade">
          <div className="mt-20 pt-10 border-t border-border/20">
            <p className="text-xs md:text-sm text-muted-foreground mb-8 uppercase tracking-[0.2em] font-bold">
              Trusted by Founders backed by
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {[
                "Y Combinator",
                "Sequoia",
                "Andreessen Horowitz",
                "Techstars",
              ].map((name, i) => (
                <span
                  key={i}
                  className="text-xl md:text-2xl font-bold font-serif opacity-40 hover:opacity-100 hover:text-accent transition-all duration-500 cursor-default hover:scale-110 transform"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
