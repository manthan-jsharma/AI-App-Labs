"use client"

import { TrendingUp, Sparkles, Zap, Globe, ArrowUpRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { TiltCard } from "@/components/tilt-card"
import { MagneticButton } from "@/components/magnetic-button"
import { AnimatedGradientText } from "@/components/animated-gradient"
import { useState } from "react"
import { cn } from "@/lib/utils"

const platforms = [
  {
    id: 1,
    name: "ReelzGen",
    description:
      "AI UGC video creation and auto-posting engine. Built to go viral on TikTok, Instagram, and YouTube Shorts.",
    features: [
      "AI-generated UGC videos",
      "Auto-posting to all platforms",
      "Viral content strategy engine",
      "2× easier than n8n workflows",
    ],
    icon: TrendingUp,
    gradient: "from-emerald-500 to-teal-500",
    shadowColor: "shadow-emerald-500/20",
    metrics: { users: "12K+", growth: "+340%" },
  },
  {
    id: 2,
    name: "Cluely AI",
    description:
      "AI-powered voice dating platform. Matches users based on personality and authentic connection, not photos.",
    features: [
      "Voice-first matchmaking",
      "AI personality analysis",
      "Automated date scheduling",
      "No swipe, one match at a time",
    ],
    icon: Sparkles,
    gradient: "from-accent to-orange-500",
    shadowColor: "shadow-accent/20",
    metrics: { users: "8K+", growth: "+280%" },
  },
  {
    id: 3,
    name: "LazyLines AI",
    description:
      "AI voice agent platform for automated customer calls. Handle thousands of conversations simultaneously.",
    features: ["Natural voice AI agents", "Multi-language support", "CRM integrations", "Real-time analytics"],
    icon: Zap,
    gradient: "from-amber-500 to-yellow-500",
    shadowColor: "shadow-amber-500/20",
    metrics: { users: "25K+", growth: "+450%" },
  },
  {
    id: 4,
    name: "Limora AI",
    description:
      "AI-powered learning and knowledge management system. Transform content into interactive learning experiences.",
    features: ["AI course generation", "Interactive quizzes", "Progress tracking", "Team collaboration"],
    icon: Globe,
    gradient: "from-blue-500 to-cyan-500",
    shadowColor: "shadow-blue-500/20",
    metrics: { users: "15K+", growth: "+210%" },
  },
]

function PlatformCard({ platform, index }: { platform: (typeof platforms)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = platform.icon

  return (
    <TiltCard maxTilt={6} glareEnabled>
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
          {/* Animated gradient background on hover */}
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500",
              platform.gradient.replace("from-", "from-").replace("to-", "to-"),
              isHovered && "opacity-5",
            )}
          />

          {/* Animated corner glow */}
          <div
            className={cn(
              "absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl transition-all duration-500",
              `bg-gradient-to-br ${platform.gradient}`,
              isHovered ? "opacity-30 scale-150" : "opacity-0 scale-100",
            )}
          />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1.5 rounded-full bg-background/80 border border-border/50 text-xs font-bold text-muted-foreground tracking-wider">
                PLATFORM #{platform.id}
              </span>
              <div
                className={cn(
                  "p-3 rounded-2xl bg-gradient-to-br transition-all duration-300",
                  platform.gradient,
                  isHovered && "scale-110 rotate-6",
                )}
              >
                <Icon className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-black text-foreground mb-3 tracking-tight">{platform.name}</h3>

            <p className="text-muted-foreground mb-6 leading-relaxed">{platform.description}</p>

            {/* Metrics */}
            <div className="flex gap-4 mb-6">
              <div className="px-4 py-2 rounded-xl bg-background/80 border border-border/50">
                <div className="text-lg font-bold text-foreground">{platform.metrics.users}</div>
                <div className="text-xs text-muted-foreground">Active Users</div>
              </div>
              <div className="px-4 py-2 rounded-xl bg-background/80 border border-border/50">
                <div
                  className={cn("text-lg font-bold bg-gradient-to-r bg-clip-text text-transparent", platform.gradient)}
                >
                  {platform.metrics.growth}
                </div>
                <div className="text-xs text-muted-foreground">MoM Growth</div>
              </div>
            </div>

            {/* Features with staggered animation */}
            <ul className="space-y-3 mb-8">
              {platform.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                  style={{
                    opacity: isHovered ? 1 : 0.7,
                    transform: isHovered ? "translateX(8px)" : "translateX(0)",
                    transition: `all 0.3s ease ${i * 50}ms`,
                  }}
                >
                  <div className={cn("p-1 rounded-full bg-gradient-to-br", platform.gradient)}>
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <MagneticButton strength={15} className="w-full">
              <Button
                className={cn(
                  "w-full rounded-xl py-6 font-bold transition-all duration-300 group/btn overflow-hidden relative",
                  "bg-background border border-border/50 text-foreground",
                  "hover:border-transparent",
                )}
              >
                <span
                  className={cn(
                    "absolute inset-0 bg-gradient-to-r opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300",
                    platform.gradient,
                  )}
                />
                <span className="relative z-10 flex items-center justify-center gap-2 group-hover/btn:text-white transition-colors">
                  View Live Demo
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </span>
              </Button>
            </MagneticButton>
          </div>
        </div>
      </div>
    </TiltCard>
  )
}

export function PlatformsSection() {
  return (
    <section id="platforms" className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <RevealOnScroll direction="down">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 rounded-full border border-border/50 text-sm text-muted-foreground mb-6 backdrop-blur-sm">
              CASE STUDIES
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
              OUR <AnimatedGradientText>SUCCESS</AnimatedGradientText> PLATFORMS
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your platform or get both. Customize, rebrand, and start selling to clients immediately.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {platforms.map((platform, index) => (
            <RevealOnScroll key={platform.id} delay={index * 100} direction={index % 2 === 0 ? "left" : "right"}>
              <PlatformCard platform={platform} index={index} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
