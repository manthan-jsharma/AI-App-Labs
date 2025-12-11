"use client"

import { ArrowRight, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { MagneticButton } from "@/components/magnetic-button"
import { AnimatedGradientText } from "@/components/animated-gradient"
import { FloatingElement } from "@/components/floating-elements"
import { useMousePosition } from "@/hooks/use-mouse-position"

const benefits = [{ icon: Rocket, text: "Start Your Project" }]

export function CTASection() {
  const mousePosition = useMousePosition()

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Moving gradient orbs */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-accent/10 blur-[150px] transition-transform duration-1000 ease-out"
          style={{
            left: `calc(20% + ${mousePosition.x * 0.02}px)`,
            top: `calc(30% + ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full bg-orange-500/10 blur-[120px] transition-transform duration-1000 ease-out"
          style={{
            right: `calc(20% + ${mousePosition.x * -0.015}px)`,
            bottom: `calc(20% + ${mousePosition.y * -0.015}px)`,
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Floating badge */}
          <RevealOnScroll delay={0} direction="down">
            <FloatingElement amplitude={8} frequency={1.5}>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent/20 to-orange-500/20 border border-accent/30 mb-10 backdrop-blur-sm">
                <Rocket className="w-4 h-4 text-accent" />
                <span className="text-sm font-bold text-accent tracking-wider">START YOUR PROJECT</span>
              </div>
            </FloatingElement>
          </RevealOnScroll>

          {/* Main heading */}
          <RevealOnScroll delay={100} direction="up">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight leading-[1.1]">
              Start your project <AnimatedGradientText>today.</AnimatedGradientText>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={200} direction="up">
            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
              Build and launch with the <span className="text-foreground font-bold">#1 AI product studio</span> for
              founders.
            </p>
          </RevealOnScroll>

          {/* Benefits */}
          <RevealOnScroll delay={300} direction="up">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50 backdrop-blur-sm"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <benefit.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">{benefit.text}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* CTA Buttons */}
          <RevealOnScroll delay={400} direction="up">
            <div className="flex justify-center">
              <MagneticButton strength={30}>
                <Button
                  size="lg"
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-accent via-orange-500 to-amber-500 px-12 py-8 text-xl font-bold text-accent-foreground shadow-2xl shadow-accent/30 transition-all duration-300 hover:shadow-3xl hover:shadow-accent/40 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Start a Project
                    <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                  </span>
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Button>
              </MagneticButton>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
