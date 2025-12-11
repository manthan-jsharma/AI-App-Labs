"use client"

import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { AnimatedGradientText } from "@/components/animated-gradient"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useCounter } from "@/hooks/use-counter"
import { TiltCard } from "@/components/tilt-card"
import { ArrowUpRight, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

const caseStudies = [
  {
    name: "SolBlaze",
    description: "We overhauled the brand, app UI/UX, and landing page for a leading Solana staking protocol.",
    result:
      "The result: a modern identity, a cleaner, faster product experience, and a landing page built for clarity, speed, and trust.",
    metric: 250,
    metricPrefix: "$",
    metricSuffix: "M",
    metricLabel: "Total Value Locked",
    growth: "+340%",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    name: "VaultDeFi",
    description: "Complete rebrand and platform development for a DeFi yield aggregator entering the market.",
    result: "Launched with immediate traction, achieving significant TVL within first month.",
    metric: 45,
    metricPrefix: "$",
    metricSuffix: "M",
    metricLabel: "First Month TVL",
    growth: "+520%",
    gradient: "from-accent to-orange-500",
  },
  {
    name: "NexusAI",
    description: "Built a complete AI-powered analytics platform from the ground up for enterprise clients.",
    result: "Now serving Fortune 500 companies with mission-critical data insights.",
    metric: 12,
    metricPrefix: "",
    metricSuffix: "K+",
    metricLabel: "Enterprise Users",
    growth: "+180%",
    gradient: "from-cyan-500 to-blue-500",
  },
]

function AnimatedChart() {
  return (
    <svg className="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
      <defs>
        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Area fill */}
      <path
        d="M0,60 Q20,55 40,50 T80,35 T120,40 T160,25 T200,15 L200,80 L0,80 Z"
        fill="url(#areaGradient)"
        className="text-accent"
      />

      {/* Line */}
      <path
        d="M0,60 Q20,55 40,50 T80,35 T120,40 T160,25 T200,15"
        fill="none"
        stroke="url(#chartGradient)"
        className="text-accent"
        strokeWidth="2"
        strokeLinecap="round"
        style={{
          strokeDasharray: 300,
          strokeDashoffset: 300,
          animation: "drawChart 2s ease-out forwards",
        }}
      />

      {/* Data points */}
      {[
        { x: 0, y: 60 },
        { x: 40, y: 50 },
        { x: 80, y: 35 },
        { x: 120, y: 40 },
        { x: 160, y: 25 },
        { x: 200, y: 15 },
      ].map((point, i) => (
        <circle
          key={i}
          cx={point.x}
          cy={point.y}
          r="4"
          className="fill-accent"
          style={{
            opacity: 0,
            animation: `fadeIn 0.3s ease-out ${1 + i * 0.1}s forwards`,
          }}
        />
      ))}
    </svg>
  )
}

function CaseStudyCard({ study, index }: { study: (typeof caseStudies)[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 })
  const count = useCounter(study.metric, 2500, 0, isVisible)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div ref={ref}>
      <TiltCard maxTilt={5}>
        <div
          className={cn(
            "group relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-background via-background to-card border border-border/50 overflow-hidden transition-all duration-500",
            isHovered && "border-accent/30",
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated background */}
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500",
              study.gradient,
              isHovered && "opacity-5",
            )}
          />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className={cn("p-2 rounded-xl bg-gradient-to-br", study.gradient)}>
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-foreground tracking-tight">{study.name}</h3>
                <ArrowUpRight
                  className={cn(
                    "w-5 h-5 text-muted-foreground transition-all duration-300",
                    isHovered && "text-accent translate-x-1 -translate-y-1",
                  )}
                />
              </div>

              <p className="text-muted-foreground mb-3 leading-relaxed">{study.description}</p>
              <p className="text-sm text-muted-foreground/70">{study.result}</p>
            </div>

            {/* Metrics */}
            <div className="flex flex-col items-end gap-4">
              <div className="text-right">
                <div className="text-4xl md:text-5xl font-black">
                  <AnimatedGradientText>
                    {study.metricPrefix}
                    {count}
                    {study.metricSuffix}
                  </AnimatedGradientText>
                </div>
                <div className="text-sm text-muted-foreground">{study.metricLabel}</div>
              </div>

              <div
                className={cn("px-3 py-1.5 rounded-full bg-gradient-to-r text-white text-sm font-bold", study.gradient)}
              >
                {study.growth}
              </div>
            </div>
          </div>

          {/* Animated chart decoration */}
          <div className="absolute bottom-0 right-0 w-2/3 h-24 opacity-30 pointer-events-none">
            <AnimatedChart />
          </div>
        </div>
      </TiltCard>

      <style jsx>{`
        @keyframes drawChart {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-32 bg-card border-y border-border/50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-accent/3 blur-[200px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <RevealOnScroll direction="down">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 rounded-full border border-border/50 text-sm text-muted-foreground mb-6 backdrop-blur-sm">
              CASE STUDIES
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              OUR <AnimatedGradientText>SUCCESS</AnimatedGradientText> STORIES
            </h2>
          </div>
        </RevealOnScroll>

        <div className="space-y-8 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <RevealOnScroll key={index} delay={index * 150} direction="up">
              <CaseStudyCard study={study} index={index} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
