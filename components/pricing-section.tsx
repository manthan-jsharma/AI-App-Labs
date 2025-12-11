"use client";

import { Check, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link"; // Added import
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { TiltCard } from "@/components/tilt-card";
import { MagneticButton } from "@/components/magnetic-button";
import { AnimatedGradientText } from "@/components/animated-gradient";
import { cn } from "@/lib/utils";
import { useState } from "react";

const pricingPlans = [
  {
    id: 1,
    name: "2-Week Sprints",
    description:
      "For teams who want to move fast — strategy, design & development delivered in 14 days.",
    price: "$4,500",
    period: "Bi-Weekly",
    features: [
      "Pause or cancel anytime",
      "AI developer team",
      "Unlimited revisions",
      "Product strategy & roadmap",
      "API integrations",
      "Slack communication",
      "Weekly progress updates",
    ],
    cta: "Book a Call",
    href: "https://cal.com/aiapps.dev/30min", // Added specific URL
    gradient: "from-violet-500 to-purple-500",
    popular: false,
  },
  {
    id: 2,
    name: "MVP Development",
    subtitle: "2 Weeks",
    description: "Launch a fully functional product in just 14 days.",
    price: "$9,500",
    period: "One-time",
    features: [
      "Full MVP built with Lovable",
      "Database + API integrations (Supabase, OpenAI, etc)",
      "Auth + onboarding flow",
      "Product design components",
      "Slack communication",
      "Weekly progress updates",
    ],
    cta: "Get Started Today",
    href: "#", // Placeholder
    gradient: "from-accent to-orange-500",
    popular: true,
  },
];

function PricingCard({
  plan,
  index,
}: {
  plan: typeof pricingPlans[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TiltCard maxTilt={5}>
      <div
        className="group relative h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={cn(
            "relative h-full p-8 md:p-10 rounded-3xl bg-gradient-to-br from-card via-card to-background border border-border/50 overflow-hidden transition-all duration-500",
            isHovered && "border-accent/30",
            plan.popular && "border-accent/50"
          )}
        >
          {/* Popular badge */}
          {plan.popular && (
            <div className="absolute top-6 right-6">
              <div
                className={cn(
                  "px-4 py-1.5 rounded-full bg-gradient-to-r text-white text-xs font-bold flex items-center gap-1",
                  plan.gradient
                )}
              >
                <Sparkles className="w-3 h-3" />
                MOST POPULAR
              </div>
            </div>
          )}

          {/* Animated gradient background */}
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500",
              plan.gradient,
              isHovered && "opacity-5"
            )}
          />

          {/* Corner glow */}
          <div
            className={cn(
              "absolute -top-32 -right-32 w-64 h-64 rounded-full blur-3xl transition-all duration-500",
              `bg-gradient-to-br ${plan.gradient}`,
              isHovered || plan.popular
                ? "opacity-30 scale-125"
                : "opacity-0 scale-100"
            )}
          />

          <div className="relative z-10">
            {/* Plan name */}
            <h3 className="text-2xl font-black text-foreground mb-1">
              {plan.name}
            </h3>
            {plan.subtitle && (
              <span
                className={cn(
                  "text-sm font-semibold bg-gradient-to-r bg-clip-text text-transparent",
                  plan.gradient
                )}
              >
                {plan.subtitle}
              </span>
            )}

            <p className="text-muted-foreground mt-3 mb-6">
              {plan.description}
            </p>

            {/* Price */}
            <div className="mb-8">
              <span className="text-5xl md:text-6xl font-black">
                <AnimatedGradientText>{plan.price}</AnimatedGradientText>
              </span>
              <span className="text-muted-foreground ml-2">
                / {plan.period}
              </span>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-10">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-muted-foreground"
                  style={{
                    opacity: isHovered ? 1 : 0.8,
                    transform: isHovered ? "translateX(4px)" : "translateX(0)",
                    transition: `all 0.3s ease ${i * 30}ms`,
                  }}
                >
                  <div
                    className={cn(
                      "p-1 rounded-full bg-gradient-to-br mt-0.5",
                      plan.gradient
                    )}
                  >
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <MagneticButton strength={20} className="w-full">
              {/* FIX: Wrap with Link if href exists, using asChild on Button */}
              <Button
                asChild
                className={cn(
                  "w-full rounded-xl py-7 font-bold text-lg transition-all duration-300 group/btn overflow-hidden relative",
                  plan.popular
                    ? `bg-gradient-to-r ${plan.gradient} text-white hover:shadow-lg hover:shadow-accent/25`
                    : "bg-background border border-border/50 text-foreground hover:border-accent/50"
                )}
              >
                <Link
                  href={plan.href}
                  target={plan.href.startsWith("http") ? "_blank" : undefined}
                >
                  {!plan.popular && (
                    <span
                      className={cn(
                        "absolute inset-0 bg-gradient-to-r opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300",
                        plan.gradient
                      )}
                    />
                  )}
                  <span
                    className={cn(
                      "relative z-10 flex items-center justify-center gap-2",
                      !plan.popular &&
                        "group-hover/btn:text-white transition-colors"
                    )}
                  >
                    {plan.cta}
                    <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                  </span>
                </Link>
              </Button>
            </MagneticButton>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-32 bg-card border-y border-border/50 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-accent/3 blur-[200px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <RevealOnScroll direction="down">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 rounded-full border border-border/50 text-sm text-muted-foreground mb-6 backdrop-blur-sm">
              PRICING
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              SIMPLE, <AnimatedGradientText>TRANSPARENT</AnimatedGradientText>{" "}
              PRICING
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that works best for your stage and needs. No
              hidden fees, no surprises.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <RevealOnScroll key={plan.id} delay={index * 150} direction="up">
              <PricingCard plan={plan} index={index} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
