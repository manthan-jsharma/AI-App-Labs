"use client";

import { Palette, Unlock } from "lucide-react";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { TiltCard } from "@/components/tilt-card";
import { AnimatedGradientText } from "@/components/animated-gradient";
import { cn } from "@/lib/utils";
import { useState } from "react";

const features = [
  {
    id: 1,
    title: "Design matters",
    description:
      "In a world filled with AI clones, user experience is what stands out. We obsess over design that feels human.",
    icon: Palette,
    gradient: "from-orange-700 to-orange-300",
  },
  {
    id: 2,
    title: "Operate with freedom",
    description:
      "No rigid contracts, no micromanagement, no endless meetings. Just an open, flexible process built around how you work.",
    icon: Unlock,
    gradient: "from-zinc-900 to-zinc-300",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: typeof features[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = feature.icon;

  return (
    <TiltCard maxTilt={6}>
      <div
        className="group relative h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={cn(
            "relative h-full p-10 md:p-12 rounded-3xl bg-gradient-to-br from-card via-card to-background border border-border/50 overflow-hidden transition-all duration-500",
            isHovered && "border-accent/30"
          )}
        >
          {/* Animated gradient background */}
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500",
              feature.gradient,
              isHovered && "opacity-5"
            )}
          />

          {/* Corner glow */}
          <div
            className={cn(
              "absolute -top-32 -right-32 w-64 h-64 rounded-full blur-3xl transition-all duration-500",
              `bg-gradient-to-br ${feature.gradient}`,
              isHovered ? "opacity-40 scale-125" : "opacity-0 scale-100"
            )}
          />

          <div className="relative z-10">
            {/* Icon */}
            <div
              className={cn(
                "p-5 rounded-2xl bg-gradient-to-br w-fit mb-8 transition-all duration-300",
                feature.gradient,
                isHovered && "scale-110 rotate-6"
              )}
            >
              <Icon className="w-8 h-8 text-white" />
            </div>

            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              {feature.title}
            </h3>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}

export function FeaturesSection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <RevealOnScroll direction="down">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 rounded-full border border-border/50 text-sm text-muted-foreground mb-6 backdrop-blur-sm">
              WHY CHOOSE US
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              OUR <AnimatedGradientText>VALUES</AnimatedGradientText>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <RevealOnScroll
              key={feature.id}
              delay={index * 150}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <FeatureCard feature={feature} index={index} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
