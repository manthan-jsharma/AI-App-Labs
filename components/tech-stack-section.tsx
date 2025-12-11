"use client";

import {
  Code2,
  Database,
  Lock,
  Unlock,
  FileCode,
  GitBranch,
  Terminal,
  ShieldCheck,
  Key,
} from "lucide-react";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { Card3D } from "@/components/3d-card";
import { SplitText } from "@/components/split-text";
import { AnimatedGradientText } from "@/components/animated-gradient";
import { FloatingElement } from "@/components/floating-elements";
import { GradientBlob } from "@/components/gradient-blob";
import { cn } from "@/lib/utils";

// Tech Stack Icons/Data
const features = [
  {
    title: "The Stack",
    description: "Next.js / TypeScript / Python / Supabase / Stripe.",
    icon: Code2,
    gradient: "from-zinc-500 to-orange-500",
  },
  {
    title: "The Asset",
    description: "Clean repo. Full documentation. No platform lock-in.",
    icon: GitBranch,
    gradient: "from-orange-500 to-zinc-500",
  },
  {
    title: "The AI",
    description: "Integration with OpenAI, Anthropic, and open-source LLMs.",
    icon: Terminal,
    gradient: "from-orange-500 to-zinc-500",
  },
];

export function TechStackSection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <GradientBlob
        className="top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] opacity-10"
        colors={["rgba(16, 185, 129, 0.2)", "transparent"]}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Copy */}
          <RevealOnScroll direction="left">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-500/30 bg-green-500/5 text-sm text-orange-400 mb-8">
                <Unlock className="w-4 h-4" />
                <span className="font-bold tracking-widest uppercase">
                  Anti-Lock-in Guarantee
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                <SplitText
                  text="Own Everything."
                  className="block"
                  animation="fadeUp"
                  stagger={30}
                />
                <div className="mt-2">
                  <AnimatedGradientText className="text-3xl md:text-5xl from-orange-900 to-zinc-900">
                    100% IP Transfer.
                  </AnimatedGradientText>
                </div>
              </h2>

              <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl">
                We don't rent you a team. We build your intellectual property.
                No monthly retainer for code access. It's yours.
              </p>

              <div className="space-y-8">
                {features.map((feature, i) => (
                  <RevealOnScroll key={i} delay={i * 150} direction="up">
                    <div className="flex gap-6 group cursor-default">
                      <div
                        className={cn(
                          "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-lg group-hover:scale-110",
                          "bg-gradient-to-br border border-white/10",
                          feature.gradient
                        )}
                      >
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-muted-foreground text-lg">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* RIGHT: Visual - The "Code Vault" */}
          <RevealOnScroll direction="right" delay={200}>
            <div className="relative">
              {/* Floating Badge */}
              <FloatingElement
                delay={0}
                amplitude={15}
                frequency={1.5}
                className="absolute -top-8 -right-8 z-20 hidden md:block"
              >
                <div className="px-6 py-3 rounded-2xl bg-card border border-orange-500/30 shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)] backdrop-blur-xl flex items-center gap-3">
                  <div className="p-2 bg-zinc-500/20 rounded-lg">
                    <Key className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase font-bold">
                      Access Level
                    </div>
                    <div className="text-sm font-bold text-orange-400">
                      ADMIN / OWNER
                    </div>
                  </div>
                </div>
              </FloatingElement>

              <Card3D intensity={20}>
                <div className="relative rounded-3xl overflow-hidden border border-border/50 bg-[#0a0a0a] backdrop-blur-xl p-8 md:p-10 shadow-2xl group">
                  {/* Glow behind card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent opacity-50" />

                  {/* Code Editor Header */}
                  <div className="absolute top-0 left-0 right-0 h-12 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="ml-4 flex items-center gap-2 text-xs font-mono text-muted-foreground opacity-70">
                      <ShieldCheck className="w-3 h-3" />
                      ownership_transfer.ts
                    </div>
                  </div>

                  {/* Code Content */}
                  <div className="mt-8 space-y-2 font-mono text-sm md:text-base leading-relaxed">
                    <div className="text-muted-foreground">
                      <span className="text-zinc-400">const</span>{" "}
                      <span className="text-orange-400">newAsset</span> ={" "}
                      <span className="text-orange-400">{"{"}</span>
                    </div>

                    <div className="pl-6 group-hover:pl-8 transition-all duration-300">
                      <span className="text-zinc-400">repo</span>:{" "}
                      <span className="text-orange-400">
                        "github.com/you/repo"
                      </span>
                      ,
                    </div>
                    <div className="pl-6 group-hover:pl-8 transition-all duration-300 delay-75">
                      <span className="text-zinc-400">database</span>:{" "}
                      <span className="text-orange-400">"Supabase PRO"</span>,
                    </div>
                    <div className="pl-6 group-hover:pl-8 transition-all duration-300 delay-150">
                      <span className="text-zinc-400">payments</span>:{" "}
                      <span className="text-orange-400">"Stripe Connect"</span>,
                    </div>
                    <div className="pl-6 group-hover:pl-8 transition-all duration-300 delay-200">
                      <span className="text-zinc-400">license</span>:{" "}
                      <span className="text-orange-400">
                        "MIT / PROPRIETARY"
                      </span>
                    </div>

                    <div className="text-orange-400">{"}"}</div>
                    <div className="h-4"></div>

                    <div className="text-muted-foreground">
                      <span className="text-zinc-400">await</span>{" "}
                      <span className="text-orange-400">transferRights</span>
                      (newAsset);
                    </div>

                    {/* Animated Cursor Output */}
                    <div className="pt-4 flex items-center gap-2">
                      <span className="text-orange-500 font-bold">➜</span>
                      <span className="text-orange-400 font-bold typing-cursor">
                        Transfer Complete.
                      </span>
                    </div>
                    <div className="text-zinc-400/70 text-xs pl-6">
                      Owner: YOU
                    </div>
                  </div>

                  {/* Decorative Lock Icon Background */}
                  <Unlock className="absolute bottom-4 right-4 w-32 h-32 text-white/5 rotate-[-15deg] pointer-events-none" />
                </div>
              </Card3D>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
