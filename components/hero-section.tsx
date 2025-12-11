"use client"

import { useState, useEffect, useRef } from "react"
import { Play, ArrowRight, Sparkles, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/magnetic-button"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { FloatingElement, ParallaxLayer } from "@/components/floating-elements"
import { SplitText } from "@/components/split-text"
import { MorphingText } from "@/components/morphing-text"
import { GradientBlob } from "@/components/gradient-blob"
import { Card3D } from "@/components/3d-card"

export function HeroSection() {
  const [isVideoHovered, setIsVideoHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 30,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 30,
      })
    }

    const handleScroll = () => setScrollY(window.scrollY)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Animated gradient blobs */}
      <GradientBlob
        className="top-20 left-[5%] w-[700px] h-[700px] opacity-60"
        colors={["rgba(249,115,22,0.25)", "rgba(251,146,60,0.15)", "transparent"]}
      />
      <GradientBlob
        className="top-40 right-[10%] w-[500px] h-[500px] opacity-40"
        colors={["rgba(251,146,60,0.2)", "rgba(253,186,116,0.1)", "transparent"]}
      />
      <GradientBlob
        className="bottom-20 left-[30%] w-[400px] h-[400px] opacity-30"
        colors={["rgba(249,115,22,0.15)", "transparent"]}
      />

      {/* Animated grid */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      {/* Floating geometric shapes */}
      <ParallaxLayer speed={-0.2} className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-32 left-[15%] w-20 h-20 border border-accent/20 rotate-45"
          style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) rotate(45deg)` }}
        />
        <div
          className="absolute top-60 right-[20%] w-16 h-16 rounded-full border border-orange-500/20"
          style={{ transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)` }}
        />
        <div
          className="absolute bottom-40 left-[25%] w-12 h-12 border border-amber-500/15 rotate-12"
          style={{ transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px) rotate(12deg)` }}
        />
      </ParallaxLayer>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <RevealOnScroll delay={0} direction="down">
            <FloatingElement amplitude={8} frequency={2} className="flex justify-center mb-10">
              <div className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-accent/40 bg-accent/10 backdrop-blur-md cursor-pointer transition-all hover:border-accent/60 hover:bg-accent/15">
                <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                <span className="text-sm font-semibold text-accent tracking-wide">#1 AI PRODUCT STUDIO</span>
                <ArrowRight className="w-4 h-4 text-accent transition-transform group-hover:translate-x-1" />
              </div>
            </FloatingElement>
          </RevealOnScroll>

          {/* Main headline with split text animation */}
          <RevealOnScroll delay={100} direction="up">
            <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-black tracking-tighter mb-8 leading-[0.85]">
              <SplitText
                text="Creme Digital"
                className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text"
                animation="elastic"
                stagger={40}
                duration={800}
              />
            </h1>
          </RevealOnScroll>

          {/* Subheadline with morphing text */}
          <RevealOnScroll delay={300} direction="up">
            <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground/80 mb-4 font-medium">
              The partner for founders building
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl mb-12">
              <span className="text-muted-foreground/80">products with </span>
              <MorphingText
                texts={["AI", "Vision", "Purpose", "Impact"]}
                className="text-accent font-bold"
                interval={2500}
              />
            </p>
          </RevealOnScroll>

          {/* 3D Video Card */}
          <RevealOnScroll delay={400} direction="scale">
            <Card3D containerClassName="max-w-4xl mx-auto my-16" className="rounded-3xl" intensity={8}>
              <div
                className="relative rounded-3xl overflow-hidden border border-border/30 bg-gradient-to-br from-card via-card to-background"
                onMouseEnter={() => setIsVideoHovered(true)}
                onMouseLeave={() => setIsVideoHovered(false)}
                style={{
                  boxShadow: isVideoHovered
                    ? "0 60px 120px -20px rgba(0,0,0,0.6), 0 0 80px rgba(249,115,22,0.25)"
                    : "0 30px 60px -15px rgba(0,0,0,0.3)",
                }}
              >
                {/* Animated border gradient */}
                <div
                  className="absolute inset-0 rounded-3xl p-px bg-gradient-to-r from-accent/50 via-transparent to-orange-500/50 opacity-0 transition-opacity duration-500"
                  style={{ opacity: isVideoHovered ? 1 : 0 }}
                />

                <div className="aspect-video relative bg-gradient-to-br from-card to-background overflow-hidden">
                  {/* Animated scanlines */}
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.03)_4px)] pointer-events-none" />

                  {/* Image with parallax */}
                  <img
                    src="/futuristic-ai-product-studio-dark-holographic-interface-neural-networks.jpg"
                    alt="Creme Digital Product Demo"
                    className="w-full h-full object-cover transition-all duration-700"
                    style={{
                      transform: isVideoHovered
                        ? `scale(1.1) translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
                        : "scale(1)",
                      filter: isVideoHovered ? "brightness(1.1) saturate(1.2)" : "brightness(0.9)",
                    }}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

                  {/* Play button with advanced effects */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MagneticButton strength={50}>
                      <div className="relative group cursor-pointer">
                        {/* Outer rings */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div
                            className="w-32 h-32 rounded-full border border-accent/30 animate-ping"
                            style={{ animationDuration: "2s" }}
                          />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-28 h-28 rounded-full border border-accent/20 animate-pulse" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div
                            className="w-24 h-24 rounded-full bg-accent/10 animate-pulse"
                            style={{ animationDelay: "0.5s" }}
                          />
                        </div>

                        {/* Main button */}
                        <button className="relative w-24 h-24 rounded-full bg-gradient-to-br from-accent via-orange-500 to-amber-500 flex items-center justify-center shadow-2xl shadow-accent/40 transition-all duration-500 group-hover:scale-110 group-hover:shadow-accent/60">
                          <Play
                            className="w-10 h-10 text-accent-foreground ml-1 transition-transform group-hover:scale-110"
                            fill="currentColor"
                          />

                          {/* Shine effect */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </button>
                      </div>
                    </MagneticButton>
                  </div>

                  {/* Browser chrome */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {[0, 150, 300].map((delay, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 rounded-full animate-pulse"
                        style={{
                          backgroundColor: ["#ef4444", "#eab308", "#22c55e"][i],
                          animationDelay: `${delay}ms`,
                          opacity: 0.8,
                        }}
                      />
                    ))}
                  </div>

                  {/* Live indicator */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full bg-background/90 backdrop-blur-md border border-border/50">
                    <div className="relative">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-500 animate-ping" />
                    </div>
                    <span className="text-xs font-bold text-foreground tracking-wider">WATCH DEMO</span>
                  </div>

                  {/* Bottom stats bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-center">
                    <div className="flex gap-6">
                      {[
                        { label: "Products Built", value: "200+" },
                        { label: "Client Funding", value: "$25M+" },
                      ].map((stat, i) => (
                        <div key={i} className="text-left">
                          <div className="text-lg font-black text-accent">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card3D>
          </RevealOnScroll>

          {/* CTA Buttons */}
          <RevealOnScroll delay={600} direction="up">
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <MagneticButton strength={30}>
                <Button
                  size="lg"
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-accent via-orange-500 to-amber-500 px-12 py-8 text-xl font-black text-accent-foreground shadow-2xl shadow-accent/30 transition-all duration-500 hover:shadow-accent/50 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Book a Call
                    <ArrowRight className="w-6 h-6 transition-all duration-300 group-hover:translate-x-2" />
                  </span>
                  {/* Animated shine */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Button>
              </MagneticButton>

              <MagneticButton strength={25}>
                <Button
                  size="lg"
                  variant="outline"
                  className="group rounded-full border-2 border-border/50 bg-transparent px-12 py-8 text-xl font-bold text-foreground backdrop-blur-sm transition-all duration-500 hover:border-accent/60 hover:bg-accent/10 hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    View Pricing
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  </span>
                </Button>
              </MagneticButton>
            </div>
          </RevealOnScroll>

          {/* Scroll indicator */}
          <RevealOnScroll delay={900} direction="fade">
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group">
              <span className="text-xs text-muted-foreground uppercase tracking-[0.3em] group-hover:text-accent transition-colors">
                Scroll to explore
              </span>
              <div className="relative">
                <div className="w-8 h-14 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-3 group-hover:border-accent/50 transition-colors">
                  <div className="w-1.5 h-4 rounded-full bg-accent animate-bounce" />
                </div>
                <ChevronDown
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-5 h-5 text-muted-foreground/50 animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
