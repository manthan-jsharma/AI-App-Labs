"use client"

import { Quote } from "lucide-react"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { TiltCard } from "@/components/tilt-card"
import { AnimatedGradientText } from "@/components/animated-gradient"
import { cn } from "@/lib/utils"
import { useState, useRef } from "react"

const testimonials = [
  {
    id: 1,
    quote:
      "Working with Creme was a game changer. Incredible speed paired with exceptional design delivered a product that impressed our entire team.",
    name: "Campbell Baron",
    title: "CEO @ Montra",
    gradient: "from-accent to-orange-500",
  },
  {
    id: 2,
    quote:
      "We replaced an entire internal team thanks to the app Creme built. Our strategists now generate reports in minutes.",
    name: "Eva Chan",
    title: "CEO @ Launchpop",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    id: 3,
    quote: "Speed, quality, and cost — Creme delivered all three. We received countless compliments on our MVP.",
    name: "Kanwar Gill",
    title: "CEO @ Ratio",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: 4,
    quote: "They built our MVP fast, beautifully, and efficiently. We raised our seed round shortly after launch.",
    name: "Kate Ward",
    title: "COO @ CreatorNow",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 5,
    quote: "Clear direction from day one. They pushed us when needed and helped bring our product to life.",
    name: "Marie Bigham",
    title: "CEO @ AEI",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 6,
    quote: "Creme and Bubble were perfect for our early launch phase. Low-code helped us ship quickly.",
    name: "David Kreiger",
    title: "Co-Founder @ Onder",
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    id: 7,
    quote: "Great team, world-class UI/UX. They've helped us launch three different products.",
    name: "Zachary Laberge",
    title: "Founder @ Frenter",
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    id: 8,
    quote: "They're prepared, on point, and truly collaborative. Working with them is a pleasure.",
    name: "John Gwin",
    title: "Founder @ The Auctus Group",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 9,
    quote:
      "They were committed to getting it right. Together we built a tool that helps companies manage change better.",
    name: "Tabetha Sheaver",
    title: "Founder @ PlusDelta",
    gradient: "from-green-500 to-emerald-500",
  },
]

function TestimonialCard({ testimonial, index }: { testimonial: (typeof testimonials)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <TiltCard maxTilt={6}>
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
          {/* Animated gradient background */}
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500",
              testimonial.gradient,
              isHovered && "opacity-5",
            )}
          />

          {/* Corner glow */}
          <div
            className={cn(
              "absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl transition-all duration-500",
              `bg-gradient-to-br ${testimonial.gradient}`,
              isHovered ? "opacity-30 scale-125" : "opacity-0 scale-100",
            )}
          />

          <div className="relative z-10">
            {/* Quote icon */}
            <div
              className={cn(
                "p-3 rounded-xl bg-gradient-to-br w-fit mb-6 transition-all duration-300",
                testimonial.gradient,
                isHovered && "scale-110 rotate-6",
              )}
            >
              <Quote className="w-5 h-5 text-white" />
            </div>

            {/* Quote text */}
            <p className="text-foreground text-lg leading-relaxed mb-8">"{testimonial.quote}"</p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div
                className={cn(
                  "w-12 h-12 rounded-full bg-gradient-to-br flex items-center justify-center text-white font-bold",
                  testimonial.gradient,
                )}
              >
                {testimonial.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TiltCard>
  )
}

function InfiniteTestimonialMarquee({
  testimonials,
  direction = "left",
}: { testimonials: (typeof testimonials)[]; direction?: "left" | "right" }) {
  const marqueeRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative overflow-hidden py-4">
      <div
        ref={marqueeRef}
        className={cn("flex gap-6", direction === "left" ? "animate-marquee" : "animate-marquee-reverse")}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div key={index} className="flex-shrink-0 w-[400px]">
            <TestimonialCard testimonial={testimonial} index={index} />
          </div>
        ))}
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const row1 = testimonials.slice(0, 5)
  const row2 = testimonials.slice(4, 9)

  return (
    <section id="testimonials" className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <RevealOnScroll direction="down">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full border border-border/50 text-sm text-muted-foreground mb-6 backdrop-blur-sm">
              TESTIMONIALS
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              WHAT <AnimatedGradientText>FOUNDERS</AnimatedGradientText> SAY
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it — hear from the founders we've helped launch.
            </p>
          </div>
        </RevealOnScroll>

        {/* Marquee rows */}
        <div className="space-y-6 -mx-6">
          <InfiniteTestimonialMarquee testimonials={row1} direction="left" />
          <InfiniteTestimonialMarquee testimonials={row2} direction="right" />
        </div>
      </div>
    </section>
  )
}
