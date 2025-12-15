"use client";
import Link from "next/link";
import { Clock, CheckCircle, ArrowRight, Zap } from "lucide-react";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { Card3D } from "@/components/3d-card";
import { MagneticButton } from "@/components/magnetic-button";
import { Button } from "@/components/ui/button";

export function BonusSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[100px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <RevealOnScroll direction="up">
          <div className="max-w-5xl mx-auto">
            <Card3D intensity={20}>
              <div className="relative rounded-3xl p-1 bg-gradient-to-r from-accent via-orange-500 to-accent animate-gradient-x">
                <div className="bg-background rounded-[22px] p-8 md:p-12 relative overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2" />

                  <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 justify-between">
                    {/* Left: Copy */}
                    <div className="flex-1 text-left">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold uppercase tracking-wider mb-6 border border-orange-500/20">
                        <Zap className="w-3 h-3 fill-current animate-pulse" />
                        Urgency Reward
                      </div>

                      <h2 className="text-3xl md:text-5xl font-black mb-6">
                        Efficiency Reward
                      </h2>
                      <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                        We reward decisive founders. Sign up the{" "}
                        <span className="text-foreground font-bold underline decoration-accent decoration-4 underline-offset-4">
                          same day
                        </span>{" "}
                        you receive your proposal to unlock:
                      </p>

                      <ul className="space-y-5">
                        {[
                          {
                            text: "$1,000 Discount",
                            sub: "(Pay $14k for MVP Tier)",
                            highlight: true,
                          },
                          {
                            text: "+30 Extra Short-Form Posts",
                            sub: "Scheduled for you",
                          },
                          {
                            text: "2 Niche Landing Pages",
                            sub: "For A/B testing",
                          },
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-4">
                            <CheckCircle
                              className={`w-6 h-6 shrink-0 mt-0.5 ${
                                item.highlight
                                  ? "text-orange-500"
                                  : "text-accent"
                              }`}
                            />
                            <div>
                              <div
                                className={`font-bold text-lg ${
                                  item.highlight
                                    ? "text-orange-500"
                                    : "text-foreground"
                                }`}
                              >
                                {item.text}
                              </div>
                              <div className="text-muted-foreground text-sm font-medium">
                                {item.sub}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: Visual Trigger */}
                    <div className="flex-shrink-0 w-full lg:w-auto flex flex-col items-center justify-center p-8 rounded-2xl bg-secondary/20 border border-border/50">
                      <div className="w-32 h-32 rounded-full border-4 border-accent/20 flex items-center justify-center relative mb-8">
                        {/* Spinning Ring */}
                        <div className="absolute inset-0 rounded-full border-t-4 border-accent animate-[spin_2s_linear_infinite]" />
                        <div className="text-center">
                          <Clock className="w-8 h-8 text-accent mx-auto mb-1" />
                          <span className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">
                            Expires
                          </span>
                          <div className="text-2xl font-black">24h</div>
                        </div>
                      </div>

                      <MagneticButton strength={30}>
                        <Button
                          asChild
                          size="lg"
                          className="w-full rounded-full bg-foreground text-background hover:bg-accent hover:text-white font-black px-10 py-6 text-lg shadow-xl hover:scale-105 transition-all"
                        >
                          <Link
                            href="https://cal.com/aiapps.dev/30min"
                            target="_blank"
                          >
                            Claim Reward <ArrowRight className="w-5 h-5 ml-2" />
                          </Link>
                        </Button>
                      </MagneticButton>
                      <p className="text-xs text-muted-foreground mt-4 text-center max-w-[200px]">
                        Offer valid for 24 hours after proposal receipt.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card3D>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
