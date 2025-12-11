"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, ExternalLink, Layers, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { MagneticButton } from "@/components/magnetic-button"
import { Card3D } from "@/components/3d-card"
import { SplitText } from "@/components/split-text"
import { cn } from "@/lib/utils"

export const projects = [
  {
    id: "knimble",
    name: "Knimble",
    category: "App UI",
    description: "A sleek, intuitive mobile app interface designed for seamless user experience and modern aesthetics.",
    fullDescription:
      "Knimble is a revolutionary mobile application that redefines how users interact with their daily tasks. Built with a focus on intuitive design and seamless user experience, this app showcases the perfect blend of form and function.",
    image: "/mobile-app-design-dark-sleek-interface-3d-mockup-floating-screens-neon-accents.jpg",
    gradient: "from-violet-500 to-purple-500",
    stats: { users: "50K+", rating: "4.9", downloads: "100K+" },
    technologies: ["React Native", "TypeScript", "Reanimated", "Zustand"],
    year: "2024",
  },
  {
    id: "highpath",
    name: "HighPath",
    category: "KPI Dashboard",
    description:
      "Executive-level KPI dashboard providing real-time insights and data visualization for decision makers.",
    fullDescription:
      "HighPath delivers powerful business intelligence through a beautifully crafted dashboard that transforms complex data into actionable insights. Designed for C-suite executives and team leads.",
    image: "/executive-kpi-dashboard-dark-theme-3d-charts-holographic-data-visualization.jpg",
    gradient: "from-accent to-orange-500",
    stats: { metrics: "200+", users: "5K", uptime: "99.9%" },
    technologies: ["Next.js", "D3.js", "PostgreSQL", "Redis"],
    year: "2024",
  },
  {
    id: "porta",
    name: "Porta",
    category: "Operations Dashboard",
    description: "Comprehensive operations management dashboard streamlining workflows and team productivity.",
    fullDescription:
      "Porta is an all-in-one operations platform that helps teams collaborate, track progress, and optimize their workflows. Built for scale with enterprise-grade security.",
    image: "/operations-dashboard-futuristic-dark-workflow-automation-3d-interface.jpg",
    gradient: "from-cyan-500 to-blue-500",
    stats: { tasks: "1M+", teams: "500+", efficiency: "+40%" },
    technologies: ["React", "Node.js", "MongoDB", "WebSockets"],
    year: "2024",
  },
  {
    id: "loadtrends",
    name: "Loadtrends",
    category: "Logistics Dashboard",
    description: "Logistics and supply chain dashboard with real-time tracking and predictive analytics.",
    fullDescription:
      "Loadtrends revolutionizes supply chain management with AI-powered predictions and real-time tracking. Monitor shipments, optimize routes, and reduce costs.",
    image: "/logistics-tracking-dashboard-dark-3d-map-visualization-supply-chain-analytics.jpg",
    gradient: "from-emerald-500 to-teal-500",
    stats: { shipments: "10K+", savings: "$2M", accuracy: "98%" },
    technologies: ["Vue.js", "Python", "TensorFlow", "AWS"],
    year: "2023",
  },
  {
    id: "event-app",
    name: "Event App",
    category: "Event Management UI",
    description: "Full-featured event management platform for organizing, promoting, and managing events at scale.",
    fullDescription:
      "A comprehensive event management solution that handles everything from ticketing to attendee engagement. Perfect for conferences, concerts, and corporate events.",
    image: "/event-management-app-dark-modern-calendar-3d-interface-animated-transitions.jpg",
    gradient: "from-pink-500 to-rose-500",
    stats: { events: "10K+", attendees: "1M+", revenue: "$50M+" },
    technologies: ["Next.js", "Stripe", "Supabase", "Tailwind"],
    year: "2023",
  },
  {
    id: "financial-dashboard",
    name: "Financial Dashboard",
    category: "Insights & Analytics",
    description: "Advanced financial analytics dashboard with AI-powered insights and forecasting capabilities.",
    fullDescription:
      "Transform financial data into strategic decisions with our AI-powered analytics platform. Real-time market analysis, portfolio tracking, and predictive modeling.",
    image: "/financial-analytics-dashboard-dark-3d-charts-ai-predictions-holographic-display.jpg",
    gradient: "from-amber-500 to-yellow-500",
    stats: { portfolios: "5K+", aum: "$500M", accuracy: "94%" },
    technologies: ["React", "Python", "PyTorch", "TimescaleDB"],
    year: "2023",
  },
  {
    id: "getlannyai",
    name: "GetLannyAI",
    category: "AI Content Tool",
    description:
      "AI-powered content creation platform for content creators, marketers, and founders to scale their output.",
    fullDescription:
      "GetLannyAI is an intelligent content creation assistant that helps you write, edit, and optimize content 10x faster. From blog posts to social media, we've got you covered.",
    image: "/ai-content-creation-tool-dark-neural-network-visualization-text-generation-interface.jpg",
    gradient: "from-indigo-500 to-violet-500",
    stats: { users: "25K+", content: "5M+", timeSaved: "10K hrs" },
    technologies: ["Next.js", "OpenAI", "Vercel AI SDK", "Prisma"],
    year: "2024",
  },
  {
    id: "morpheusbusinessai",
    name: "MorpheusBusinessAI",
    category: "AI Business Partner",
    description: "Intelligent AI business assistant that automates tasks, provides insights, and drives growth.",
    fullDescription:
      "MorpheusBusinessAI is your AI-powered business partner that handles everything from market research to competitor analysis. Make data-driven decisions faster.",
    image: "/ai-business-assistant-dark-futuristic-interface-holographic-ai-avatar.jpg",
    gradient: "from-blue-500 to-cyan-500",
    stats: { businesses: "2K+", automation: "80%", roi: "300%" },
    technologies: ["Python", "LangChain", "FastAPI", "Pinecone"],
    year: "2024",
  },
  {
    id: "closeworks",
    name: "CloseWorks",
    category: "Sales Coaching AI",
    description: "Real-time AI-powered sales call coaching that helps teams close more deals with actionable feedback.",
    fullDescription:
      "CloseWorks analyzes sales calls in real-time, providing instant feedback and coaching to help your team close more deals. Powered by advanced NLP and sentiment analysis.",
    image: "/sales-coaching-ai-dark-call-analytics-waveform-visualization-real-time-feedback.jpg",
    gradient: "from-green-500 to-emerald-500",
    stats: { calls: "500K+", closeRate: "+35%", teams: "300+" },
    technologies: ["React", "WebRTC", "Whisper AI", "GPT-4"],
    year: "2024",
  },
  {
    id: "ai-grant-writing",
    name: "AI Grant Writing System",
    category: "Grant Automation",
    description: "AI-powered grant writing, submission, and proposal system that streamlines funding applications.",
    fullDescription:
      "Automate your grant writing process with AI that understands funding requirements, writes compelling proposals, and tracks submissions. Increase your success rate dramatically.",
    image: "/grant-writing-ai-dark-document-automation-proposal-generation-interface.jpg",
    gradient: "from-orange-500 to-red-500",
    stats: { grants: "10K+", funded: "$100M+", successRate: "45%" },
    technologies: ["Next.js", "Claude AI", "PostgreSQL", "AWS S3"],
    year: "2023",
  },
  {
    id: "fund2grow",
    name: "Fund2Grow",
    category: "Funding Automation",
    description: "Fully automated funding platform that connects startups with investors and streamlines the process.",
    fullDescription:
      "Fund2Grow is a complete funding automation platform that matches startups with the right investors, handles due diligence, and streamlines the entire investment process.",
    image: "/funding-platform-dark-investor-matching-startup-dashboard-3d-network-visualization.jpg",
    gradient: "from-purple-500 to-pink-500",
    stats: { startups: "5K+", raised: "$250M+", investors: "1K+" },
    technologies: ["Next.js", "Supabase", "Stripe", "AI Matching"],
    year: "2024",
  },
]

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/work/${project.id}`}>
      <Card3D intensity={10} glareEnabled>
        <div
          className="group relative h-full cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={cn(
              "relative h-full rounded-3xl bg-gradient-to-br from-card via-card to-background border border-border/30 overflow-hidden transition-all duration-700",
              isHovered && "border-accent/40",
            )}
          >
            {/* Animated border */}
            <div
              className="absolute inset-0 rounded-3xl p-px transition-opacity duration-500"
              style={{
                background: `linear-gradient(135deg, ${project.gradient.split(" ")[0].replace("from-", "")}40, transparent, ${project.gradient.split(" ")[1].replace("to-", "")}40)`,
                opacity: isHovered ? 1 : 0,
              }}
            />

            {/* Image container with advanced effects */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.name}
                className={cn("w-full h-full object-cover transition-all duration-1000", isHovered && "scale-110")}
                style={{
                  filter: isHovered ? "brightness(1.1) saturate(1.2)" : "brightness(0.8) saturate(0.9)",
                }}
              />

              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
              <div
                className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  `bg-gradient-to-br ${project.gradient}`,
                )}
                style={{ opacity: isHovered ? 0.2 : 0, mixBlendMode: "overlay" }}
              />

              {/* Floating category badge */}
              <div className="absolute top-4 left-4">
                <div
                  className={cn(
                    "px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r backdrop-blur-md border border-white/10 transition-all duration-500",
                    project.gradient,
                    isHovered && "scale-105",
                  )}
                >
                  {project.category}
                </div>
              </div>

              {/* Year badge */}
              <div className="absolute top-4 right-4">
                <div className="px-3 py-1 rounded-full text-xs font-mono text-muted-foreground bg-background/80 backdrop-blur-md border border-border/50">
                  {project.year}
                </div>
              </div>

              {/* Hover CTA */}
              <div
                className={cn(
                  "absolute inset-0 flex items-center justify-center transition-all duration-500",
                  isHovered ? "opacity-100" : "opacity-0",
                )}
              >
                <MagneticButton strength={25}>
                  <div
                    className={cn(
                      "flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r text-white font-bold shadow-2xl transition-all duration-500",
                      project.gradient,
                      isHovered ? "scale-100 translate-y-0" : "scale-90 translate-y-4",
                    )}
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </MagneticButton>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h3
                  className={cn(
                    "text-2xl font-black text-foreground transition-colors duration-300",
                    isHovered && "text-accent",
                  )}
                >
                  {project.name}
                </h3>
                <ArrowUpRight
                  className={cn(
                    "w-6 h-6 text-muted-foreground transition-all duration-500",
                    isHovered && "text-accent translate-x-1 -translate-y-1 rotate-45",
                  )}
                />
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{project.description}</p>

              {/* Mini stats */}
              <div
                className={cn(
                  "flex gap-4 pt-4 border-t border-border/30 transition-all duration-500",
                  isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
                )}
              >
                {Object.entries(project.stats)
                  .slice(0, 2)
                  .map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-sm font-bold text-accent">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Card3D>
    </Link>
  )
}

export function WorkShowcaseSection() {
  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? projects : projects.slice(0, 6)

  return (
    <section id="work" className="py-32 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <RevealOnScroll direction="down">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-accent/30 bg-accent/5 text-sm text-accent mb-8 backdrop-blur-sm">
              <Layers className="w-4 h-4" />
              <span className="font-semibold tracking-wide">OUR WORK</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tight">
              <SplitText text="SHOWCASING" animation="fadeUp" stagger={50} className="block mb-2" />
              <span className="text-accent">
                <SplitText text="SUCCESS" animation="elastic" stagger={60} delay={300} />
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Over 200+ products built across dozens of industries. Here are some of our favorites.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {displayedProjects.map((project, index) => (
            <RevealOnScroll key={project.id} delay={index * 100} direction="up">
              <ProjectCard project={project} index={index} />
            </RevealOnScroll>
          ))}
        </div>

        {/* View all button */}
        <RevealOnScroll delay={500} direction="up">
          <div className="flex justify-center mt-16">
            <MagneticButton strength={25}>
              <Button
                onClick={() => setShowAll(!showAll)}
                className="group rounded-full border-2 border-border/50 bg-transparent px-10 py-7 text-lg font-bold text-foreground backdrop-blur-sm transition-all duration-500 hover:border-accent/50 hover:bg-accent/10"
                variant="outline"
              >
                <span className="flex items-center gap-3">
                  {showAll ? "Show Less" : "View All Work"}
                  <Zap
                    className={cn(
                      "w-5 h-5 transition-all duration-500",
                      showAll ? "rotate-180" : "group-hover:rotate-12 group-hover:text-accent",
                    )}
                  />
                </span>
              </Button>
            </MagneticButton>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
