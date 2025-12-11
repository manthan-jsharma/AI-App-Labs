"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar, Layers, Zap, Code2, Users, TrendingUp, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/magnetic-button"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { SplitText } from "@/components/split-text"
import { Card3D } from "@/components/3d-card"
import { AnimatedCounter } from "@/components/animated-counter"
import { GradientBlob } from "@/components/gradient-blob"
import { TextScramble } from "@/components/text-scramble"
import { ParallaxLayer } from "@/components/floating-elements"
import { projects } from "@/components/work-showcase-section"
import { cn } from "@/lib/utils"

interface ProjectPageClientProps {
  project: (typeof projects)[0]
}

export function ProjectPageClient({ project }: ProjectPageClientProps) {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Get next and previous projects
  const currentIndex = projects.findIndex((p) => p.id === project.id)
  const nextProject = projects[(currentIndex + 1) % projects.length]
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length]

  // Parse stats for counter animation
  const parseStatValue = (value: string) => {
    const num = Number.parseFloat(value.replace(/[^0-9.]/g, ""))
    return isNaN(num) ? 0 : num
  }

  const getStatSuffix = (value: string) => {
    if (value.includes("K")) return "K+"
    if (value.includes("M")) return "M+"
    if (value.includes("%")) return "%"
    if (value.includes("+")) return "+"
    return ""
  }

  // Generate features based on project
  const features = [
    { icon: Zap, title: "Lightning Fast", description: "Optimized for performance with sub-second load times" },
    { icon: Layers, title: "Scalable Architecture", description: "Built to handle millions of users effortlessly" },
    { icon: Users, title: "User-Centric Design", description: "Intuitive interfaces backed by extensive research" },
    { icon: TrendingUp, title: "Growth Focused", description: "Features designed to drive engagement and retention" },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div ref={heroRef} className="relative min-h-screen overflow-hidden">
        {/* Animated background */}
        <GradientBlob
          className="top-0 left-[10%] w-[800px] h-[800px] opacity-50"
          colors={["rgba(249,115,22,0.2)", "rgba(251,146,60,0.1)", "transparent"]}
        />
        <GradientBlob
          className="bottom-0 right-[5%] w-[600px] h-[600px] opacity-30"
          colors={["rgba(251,146,60,0.15)", "transparent"]}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
          }}
        />

        {/* Navigation */}
        <div className="relative z-20 px-6 py-8">
          <div className="container mx-auto flex items-center justify-between">
            <Link href="/#work">
              <MagneticButton strength={20}>
                <Button variant="ghost" className="group gap-2 text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                  Back to Work
                </Button>
              </MagneticButton>
            </Link>

            <div className="flex items-center gap-4">
              <Link href={`/work/${prevProject.id}`}>
                <MagneticButton strength={15}>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-border/50 hover:border-accent/50 bg-transparent"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                </MagneticButton>
              </Link>
              <Link href={`/work/${nextProject.id}`}>
                <MagneticButton strength={15}>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-border/50 hover:border-accent/50 bg-transparent"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </MagneticButton>
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 pt-12 pb-32">
          <div className="max-w-6xl mx-auto">
            {/* Category & Year */}
            <RevealOnScroll delay={0} direction="down">
              <div className="flex items-center gap-4 mb-8">
                <div
                  className={cn(
                    "px-5 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r",
                    project.gradient,
                  )}
                >
                  {project.category}
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-mono text-muted-foreground">{project.year}</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Title */}
            <RevealOnScroll delay={100} direction="up">
              <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-black tracking-tighter mb-8 leading-[0.85]">
                <SplitText text={project.name} animation="elastic" stagger={50} duration={800} />
              </h1>
            </RevealOnScroll>

            {/* Description */}
            <RevealOnScroll delay={200} direction="up">
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12 leading-relaxed">
                {project.fullDescription}
              </p>
            </RevealOnScroll>

            {/* Stats Grid */}
            <RevealOnScroll delay={300} direction="up">
              <div className="grid grid-cols-3 gap-6 max-w-2xl mb-16">
                {Object.entries(project.stats).map(([key, value], i) => (
                  <Card3D key={key} intensity={8}>
                    <div className="p-6 rounded-2xl bg-card/50 border border-border/30 backdrop-blur-sm text-center">
                      <div className="text-3xl md:text-4xl font-black text-accent mb-2">
                        <AnimatedCounter value={parseStatValue(value)} suffix={getStatSuffix(value)} duration={2500} />
                      </div>
                      <div className="text-sm text-muted-foreground capitalize font-medium">{key}</div>
                    </div>
                  </Card3D>
                ))}
              </div>
            </RevealOnScroll>

            {/* Hero Image */}
            <RevealOnScroll delay={400} direction="scale">
              <Card3D intensity={6} containerClassName="max-w-5xl mx-auto">
                <div
                  className="relative rounded-3xl overflow-hidden border border-border/30"
                  style={{
                    boxShadow: "0 50px 100px -20px rgba(0,0,0,0.5), 0 0 60px rgba(249,115,22,0.15)",
                  }}
                >
                  {/* Animated gradient border */}
                  <div
                    className="absolute inset-0 rounded-3xl p-px"
                    style={{
                      background: `linear-gradient(135deg, ${project.gradient.includes("violet") ? "rgba(139,92,246,0.5)" : "rgba(249,115,22,0.5)"}, transparent 50%, ${project.gradient.includes("purple") ? "rgba(168,85,247,0.4)" : "rgba(251,146,60,0.4)"})`,
                    }}
                  />

                  <div className="aspect-video relative bg-card overflow-hidden">
                    <ParallaxLayer speed={-0.05}>
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        className="w-full h-full object-cover"
                        style={{
                          transform: `scale(1.1) translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
                          transition: "transform 0.3s ease-out",
                        }}
                      />
                    </ParallaxLayer>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20" />

                    {/* Scanlines */}
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.02)_2px,rgba(255,255,255,0.02)_4px)] pointer-events-none" />
                  </div>
                </div>
              </Card3D>
            </RevealOnScroll>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-32 bg-card/30 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <RevealOnScroll direction="down">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black mb-6">
                <TextScramble text="Key Features" speed={40} />
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Built with cutting-edge technology and best practices
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, i) => (
              <RevealOnScroll key={i} delay={i * 100} direction="up">
                <Card3D intensity={12}>
                  <div className="p-8 rounded-2xl bg-card border border-border/30 h-full group hover:border-accent/30 transition-colors">
                    <div
                      className={cn(
                        "w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6 transition-transform group-hover:scale-110",
                        project.gradient,
                      )}
                    >
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </Card3D>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll direction="left">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-sm text-accent mb-8">
                  <Code2 className="w-4 h-4" />
                  <span className="font-semibold">TECH STACK</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black mb-6">
                  <SplitText text="Built with" animation="fadeUp" stagger={40} className="block" />
                  <span className="text-accent">
                    <SplitText text="Modern Tech" animation="elastic" stagger={50} delay={200} />
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We carefully selected the best technologies to ensure {project.name} is fast, scalable, and
                  maintainable for years to come.
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, i) => (
                    <RevealOnScroll key={tech} delay={300 + i * 50} direction="up">
                      <div className="group px-5 py-3 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/50 hover:bg-accent/5 transition-all cursor-default">
                        <span className="font-medium text-muted-foreground group-hover:text-accent transition-colors">
                          {tech}
                        </span>
                      </div>
                    </RevealOnScroll>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right" delay={200}>
              <Card3D intensity={10}>
                <div className="p-8 rounded-3xl bg-card border border-border/30">
                  <h3 className="text-xl font-bold mb-6">Project Highlights</h3>
                  <div className="space-y-4">
                    {[
                      "Custom design system with 50+ components",
                      "Real-time data synchronization",
                      "End-to-end type safety",
                      "Automated testing pipeline",
                      "99.9% uptime SLA",
                      "Mobile-first responsive design",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <div
                          className={cn(
                            "w-6 h-6 rounded-full bg-gradient-to-br flex items-center justify-center flex-shrink-0 mt-0.5",
                            project.gradient,
                          )}
                        >
                          <Check className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card3D>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <GradientBlob className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-30" />

        <div className="container mx-auto px-6 relative z-10">
          <RevealOnScroll direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6">
                <SplitText text="Ready to build" animation="fadeUp" stagger={40} className="block" />
                <span className="text-accent">
                  <SplitText text="something amazing?" animation="elastic" stagger={50} delay={200} />
                </span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Let's create a product that your users will love. Book a call with our team today.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <MagneticButton strength={30}>
                  <Button
                    size="lg"
                    className="group relative overflow-hidden rounded-full bg-gradient-to-r from-accent via-orange-500 to-amber-500 px-12 py-8 text-xl font-black text-accent-foreground shadow-2xl shadow-accent/30 hover:shadow-accent/50 transition-all"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Start Your Project
                      <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </Button>
                </MagneticButton>

                <Link href="/#work">
                  <MagneticButton strength={25}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full border-2 border-border/50 bg-transparent px-12 py-8 text-xl font-bold hover:border-accent/50 hover:bg-accent/10 transition-all"
                    >
                      View More Work
                    </Button>
                  </MagneticButton>
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Next/Prev Navigation */}
      <section className="py-16 border-t border-border/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <Link href={`/work/${prevProject.id}`} className="group">
              <RevealOnScroll direction="left">
                <Card3D intensity={8}>
                  <div className="p-6 rounded-2xl bg-card/50 border border-border/30 hover:border-accent/30 transition-all">
                    <div className="flex items-center gap-2 text-muted-foreground mb-3">
                      <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                      <span className="text-sm font-medium">Previous Project</span>
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{prevProject.name}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{prevProject.category}</p>
                  </div>
                </Card3D>
              </RevealOnScroll>
            </Link>

            <Link href={`/work/${nextProject.id}`} className="group text-right">
              <RevealOnScroll direction="right">
                <Card3D intensity={8}>
                  <div className="p-6 rounded-2xl bg-card/50 border border-border/30 hover:border-accent/30 transition-all">
                    <div className="flex items-center justify-end gap-2 text-muted-foreground mb-3">
                      <span className="text-sm font-medium">Next Project</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{nextProject.name}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{nextProject.category}</p>
                  </div>
                </Card3D>
              </RevealOnScroll>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
