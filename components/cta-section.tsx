"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { MagneticButton } from "@/components/magnetic-button";
import { AnimatedGradientText } from "@/components/animated-gradient";
import { SplitText } from "@/components/split-text";
import { conceptExamples, clientProofs } from "@/lib/data";

export function CTASection() {
  return (
    <section
      id="testimonials"
      className="py-32 bg-background relative overflow-hidden text-center"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <RevealOnScroll direction="down">
          <div className="mb-24 max-w-5xl mx-auto">
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-8">
              examples of AI SaaS products we can create for you
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {conceptExamples.map((example, i) => (
                <Link
                  key={i}
                  href={example.link}
                  target="_blank"
                  className="group p-5 rounded-xl border border-border/50 bg-card/30 hover:bg-accent/10 hover:border-accent/30 transition-all text-left relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-foreground group-hover:text-accent transition-colors">
                        {example.name}
                      </h4>
                      <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-accent opacity-50 group-hover:opacity-100 transition-all" />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {example.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* SECTION: PROOF OF CLIENT DELIVERY */}
        <RevealOnScroll direction="down" delay={100}>
          <div className="mb-24 max-w-4xl mx-auto border-y border-border/30 py-12 bg-card/10 backdrop-blur-sm rounded-3xl">
            <p className="text-sm font-bold text-accent uppercase tracking-[0.2em] mb-8">
              Proof of Client Delivery 👍
            </p>
            <div className="grid md:grid-cols-3 gap-8 px-4">
              {clientProofs.map((client, i) => (
                <div key={i} className="flex flex-col items-center group">
                  {/* Avatar / Initial */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-xl font-bold border border-border/50 mb-4 shadow-lg group-hover:border-accent/50 transition-colors">
                    {client.name.charAt(0)}
                  </div>

                  <div className="font-bold text-base mb-1">{client.name}</div>
                  <div className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
                    {client.productName}
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href={client.instagram}
                      target="_blank"
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 hover:bg-orange-500 hover:text-white transition-all text-xs font-medium border border-border/30"
                    >
                      <Instagram className="w-3 h-3" />
                      <span>Instagram</span>
                    </Link>
                    <Link
                      href={client.productLink}
                      target="_blank"
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 hover:bg-accent hover:text-white transition-all text-xs font-medium border border-border/30"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Product</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* SECTION: FINAL HEADLINE & CTA */}
        <RevealOnScroll direction="up">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-12 leading-[1.1] tracking-tighter">
            If you want a website, <br />
            <span className="text-muted-foreground text-3xl md:text-5xl lg:text-6xl">
              hire an agency.
            </span>{" "}
            <br /> <br />
            If you want a{" "}
            <AnimatedGradientText>$3M Asset,</AnimatedGradientText> <br />
            <SplitText text="hire Founders." animation="elastic" delay={500} />
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={200} direction="up">
          <div className="flex justify-center mt-12">
            <MagneticButton strength={50}>
              <Button
                asChild
                size="lg"
                className="h-auto py-6 px-10 text-xl md:text-3xl font-black rounded-full bg-foreground text-background hover:bg-accent hover:text-white hover:scale-105 transition-all shadow-[0_0_60px_-15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_80px_-10px_rgba(249,115,22,0.5)]"
              >
                <Link href="https://cal.com/aiapps.dev/30min" target="_blank">
                  <span className="flex items-center gap-3">
                    BOOK YOUR SAAS
                    <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
                  </span>
                </Link>
              </Button>
            </MagneticButton>
          </div>

          <div className="mt-20 pt-8 border-t border-border/20">
            <p className="text-xs md:text-sm text-muted-foreground tracking-widest uppercase font-semibold opacity-60">
              © 2025 AI App Labs by cgramm.org. All rights reserved.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
