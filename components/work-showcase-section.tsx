"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Layers, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { MagneticButton } from "@/components/magnetic-button";
import { Card3D } from "@/components/3d-card";
import { SplitText } from "@/components/split-text";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/data";

function ProjectCard({
  project,
  index,
}: {
  project: typeof projects[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

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
              isHovered && "border-accent/40"
            )}
          >
            {/* Animated border */}
            <div
              className="absolute inset-0 rounded-3xl p-px transition-opacity duration-500"
              style={{
                background: `linear-gradient(135deg, ${project.gradient
                  .split(" ")[0]
                  .replace("from-", "")}40, transparent, ${project.gradient
                  .split(" ")[1]
                  .replace("to-", "")}40)`,
                opacity: isHovered ? 1 : 0,
              }}
            />

            {/* Image container with advanced effects */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.name}
                className={cn(
                  "w-full h-full object-cover transition-all duration-1000",
                  isHovered && "scale-110"
                )}
                style={{
                  filter: isHovered
                    ? "brightness(1.1) saturate(1.2)"
                    : "brightness(0.8) saturate(0.9)",
                }}
              />

              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
              <div
                className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  `bg-gradient-to-br ${project.gradient}`
                )}
                style={{
                  opacity: isHovered ? 0.2 : 0,
                  mixBlendMode: "overlay",
                }}
              />

              {/* Floating category badge */}
              <div className="absolute top-4 left-4">
                <div
                  className={cn(
                    "px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r backdrop-blur-md border border-white/10 transition-all duration-500",
                    project.gradient,
                    isHovered && "scale-105"
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
                  isHovered ? "opacity-100" : "opacity-0"
                )}
              >
                <MagneticButton strength={25}>
                  <div
                    className={cn(
                      "flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r text-white font-bold shadow-2xl transition-all duration-500",
                      project.gradient,
                      isHovered
                        ? "scale-100 translate-y-0"
                        : "scale-90 translate-y-4"
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
                    isHovered && "text-accent"
                  )}
                >
                  {project.name}
                </h3>
                <ArrowUpRight
                  className={cn(
                    "w-6 h-6 text-muted-foreground transition-all duration-500",
                    isHovered &&
                      "text-accent translate-x-1 -translate-y-1 rotate-45"
                  )}
                />
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Mini stats */}
              <div
                className={cn(
                  "flex gap-4 pt-4 border-t border-border/30 transition-all duration-500",
                  isHovered
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                )}
              >
                {Object.entries(project.stats)
                  .slice(0, 2)
                  .map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-sm font-bold text-accent">
                        {value}
                      </div>
                      <div className="text-xs text-muted-foreground capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Card3D>
    </Link>
  );
}

export function WorkShowcaseSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

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
              <SplitText
                text="SHOWCASING"
                animation="fadeUp"
                stagger={50}
                className="block mb-2"
              />
              <span className="text-accent">
                <SplitText
                  text="SUCCESS"
                  animation="elastic"
                  stagger={60}
                  delay={300}
                />
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Over 200+ products built across dozens of industries. Here are
              some of our favorites.
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
                      showAll
                        ? "rotate-180"
                        : "group-hover:rotate-12 group-hover:text-accent"
                    )}
                  />
                </span>
              </Button>
            </MagneticButton>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
