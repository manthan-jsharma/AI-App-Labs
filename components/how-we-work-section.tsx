"use client"

import { Rocket, Target, Zap, Users } from "lucide-react"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { TiltCard } from "@/components/tilt-card"
import { AnimatedGradientText } from "@/components/animated-gradient"
import { cn } from "@/lib/utils"
import { useState } from "react"

const steps = [
  {
    id: 1,
    title: "Build",
    subtitle: "Build your MVP in 2 weeks",
    description:
      "We design and develop the core functionality fast so you can validate your concept before investing big.",
    icon: Rocket,
    gradient: "from-accent to-orange-500",
  },
  {
    id: 2,
    title: "Iterate",
    subtitle: "Set your roadmap & milestones",
    description:
      "Once live, we help you define goals and run bi-weekly sprints to ship features, improve UX, and scale smoothly.",
    icon: Target,
    gradient: "from-violet-500 to-purple-500",
  },
  {
    id: 3,
    title: "Grow",
    subtitle: "Move faster with AI-powered tools",
    description:
      "We leverage Lovable, Cursor, and Supabase to build at unmatched speed — combining AI automation with real engineering best practices.",
    icon: Zap,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: 4,
    title: "Collaborate",
    subtitle: "Flexible, async workflow",
    description:
      "Join weekly calls, stay connected asynchronously, and pause or cancel anytime. Total flexibility, zero contracts.",
    icon: Users,
    gradient: "from-emerald-500 to-teal-500",
  },
]

function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = step.icon

  return (
    <TiltCard maxTilt={8}>
      <div
        className="group relative h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={cn(
            "relative h-full p-8 rounded-3xl bg-gradient-to-br from-card via-card to-background border border-border/50 overflow-hidden transition-all duration-500",
            isHovered && "border-accent/30",
          )}
        >
          {/* Step number background */}
          <div className="absolute top-4 right-4 text-8xl font-black text-foreground/5 select-none">{step.id}</div>

          {/* Animated gradient background on hover */}
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500",
              step.gradient,
              isHovered && "opacity-5",
            )}
          />

          {/* Animated corner glow */}
          <div
            className={cn(
              "absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl transition-all duration-500",
              `bg-gradient-to-br ${step.gradient}`,
              isHovered ? "opacity-30 scale-150" : "opacity-0 scale-100",
            )}
          />

          <div className="relative z-10">
            {/* Icon */}
            <div
              className={cn(
                "p-4 rounded-2xl bg-gradient-to-br w-fit mb-6 transition-all duration-300",
                step.gradient,
                isHovered && "scale-110 rotate-3",
              )}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-black text-foreground mb-2">{step.title}</h3>
            <h4
              className={cn("text-lg font-semibold bg-gradient-to-r bg-clip-text text-transparent mb-4", step.gradient)}
            >
              {step.subtitle}
            </h4>

            <p className="text-muted-foreground leading-relaxed">{step.description}</p>

            {/* Progress line */}
            <div className="mt-8 flex items-center gap-2">
              <div
                className={cn(
                  "h-1 rounded-full bg-gradient-to-r flex-1 transition-all duration-500",
                  step.gradient,
                  isHovered ? "opacity-100" : "opacity-30",
                )}
              />
              <span className="text-xs font-bold text-muted-foreground">STEP {step.id}</span>
            </div>
          </div>
        </div>
      </div>
    </TiltCard>
  )
}

export function HowWeWorkSection() {
  return (
    <section className="py-32 bg-card border-y border-border/50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-accent/3 blur-[200px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <RevealOnScroll direction="down">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 rounded-full border border-border/50 text-sm text-muted-foreground mb-6 backdrop-blur-sm">
              OUR PROCESS
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              HOW WE <AnimatedGradientText>WORK</AnimatedGradientText>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <RevealOnScroll key={step.id} delay={index * 100} direction="up">
              <StepCard step={step} index={index} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
