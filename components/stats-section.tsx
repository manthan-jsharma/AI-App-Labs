"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useCounter } from "@/hooks/use-counter"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { TiltCard } from "@/components/tilt-card"
import { AnimatedGradientText } from "@/components/animated-gradient"
import { useRef } from "react"
import { Play } from "lucide-react"
import { MagneticButton } from "@/components/magnetic-button"

const stats = [
  { value: 200, prefix: "", suffix: "+", label: "Products Built", subtext: "And Counting" },
  { value: 25, prefix: "$", suffix: "M+", label: "Client Funding", subtext: "Raised by Clients" },
  { value: 80, prefix: "", suffix: "+", label: "VC-Backed Clients", subtext: "Trusted Partners" },
]

const logos = ["Knimble", "HighPath", "Porta", "Loadtrends", "GetLannyAI", "MorpheusAI", "CloseWorks", "Fund2Grow"]

function StatCard({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 })
  const count = useCounter(stat.value, 2000, 0, isVisible)

  return (
    <div ref={ref}>
      <TiltCard className="group" maxTilt={8}>
        <div className="relative px-8 py-8 rounded-2xl bg-gradient-to-br from-card to-background border border-border/50 overflow-hidden transition-all duration-500 hover:border-accent/30">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Number with gradient */}
          <div className="relative">
            <div className="text-4xl md:text-5xl font-black mb-2">
              <AnimatedGradientText>
                {stat.prefix}
                {count}
                {stat.suffix}
              </AnimatedGradientText>
            </div>
            <div className="text-base font-semibold text-foreground mb-1">{stat.label}</div>
            <div className="text-sm text-muted-foreground">{stat.subtext}</div>
          </div>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-3xl" />
        </div>
      </TiltCard>
    </div>
  )
}

function InfiniteLogoMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative overflow-hidden py-8">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card to-transparent z-10" />

      <div ref={marqueeRef} className="flex animate-marquee">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-8 px-6 py-3 rounded-full border border-border/30 bg-background/50 backdrop-blur-sm hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 cursor-pointer group"
          >
            <span className="text-sm font-semibold text-muted-foreground group-hover:text-accent transition-colors whitespace-nowrap">
              {logo}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function StatsSection() {
  const { ref } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-24 bg-card border-y border-border/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[200px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <RevealOnScroll delay={100} direction="up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-6 tracking-tight">
            TRUSTED BY <AnimatedGradientText>INDUSTRY LEADERS</AnimatedGradientText>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={200} direction="up">
          <p className="text-center text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
            Trusted by industry leaders worldwide
          </p>
        </RevealOnScroll>

        {/* Stats cards */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {stats.map((stat, index) => (
            <RevealOnScroll key={index} delay={300 + index * 100} direction="up">
              <StatCard stat={stat} index={index} />
            </RevealOnScroll>
          ))}
        </div>

        {/* Video placeholder with animation */}
        <RevealOnScroll delay={600} direction="scale">
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative rounded-3xl overflow-hidden border border-border/50 bg-gradient-to-br from-card to-background aspect-video">
              <img
                src="/team-collaboration-product-development-office-mode.jpg"
                alt="Creme Digital Team"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <MagneticButton strength={30}>
                  <button className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-orange-500 flex items-center justify-center shadow-lg shadow-accent/30 transition-transform duration-300 hover:scale-110">
                    <Play className="w-8 h-8 text-accent-foreground ml-1" fill="currentColor" />
                  </button>
                </MagneticButton>
              </div>
              <div className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50">
                <span className="text-sm font-medium text-foreground">See how we work</span>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Logo marquee */}
        <RevealOnScroll delay={700} direction="fade">
          <div className="text-center mb-6">
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Our Clients & Partners</span>
          </div>
          <InfiniteLogoMarquee />
        </RevealOnScroll>
      </div>
    </section>
  )
}
