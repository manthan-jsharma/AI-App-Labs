"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { AnimatedGradientText } from "@/components/animated-gradient"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What is Creme Digital?",
    answer:
      "An AI product studio that designs, builds, and launches apps using Lovable — the world's leading AI development platform.",
  },
  {
    question: "How are you different from other agencies?",
    answer:
      "We combine AI-accelerated development with senior-level product strategy, fast sprints, and flexible, async collaboration.",
  },
  {
    question: "Who do you work with?",
    answer: "Founders, early-stage startups, and teams that want to ship fast without hiring full-time engineers.",
  },
  {
    question: "How many products have you built?",
    answer: "Over 200+ products across dozens of industries.",
  },
  {
    question: "What services do you offer?",
    answer: "Design, product strategy, rapid sprints, AI app development, API integrations, and full MVP builds.",
  },
  {
    question: "What is Lovable?",
    answer: "A powerful AI development platform that enables automated, fast, scalable app building.",
  },
  {
    question: "Can you validate my app idea?",
    answer: "Yes — we help validate concepts through quick MVPs, prototypes, and sprint-based iterations.",
  },
  {
    question: "How much does it cost to build an AI app?",
    answer:
      "It depends on complexity. Most founders use either our 2-week sprint ($4,500) or 2-week MVP package ($9,500).",
  },
  {
    question: "How long does it take to build?",
    answer: "2 weeks for a working MVP. Bi-weekly for ongoing sprints.",
  },
  {
    question: "Do you support after launch?",
    answer: "Yes — you can continue sprints, pause anytime, or re-activate as needed.",
  },
]

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0]
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className={cn("group border-b border-border/50 transition-all duration-300", isOpen && "border-accent/30")}>
      <button onClick={onToggle} className="w-full py-6 flex items-center justify-between text-left">
        <span
          className={cn(
            "text-lg font-semibold transition-colors",
            isOpen ? "text-accent" : "text-foreground group-hover:text-accent",
          )}
        >
          {faq.question}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-muted-foreground transition-all duration-300",
            isOpen && "rotate-180 text-accent",
          )}
        />
      </button>
      <div className={cn("overflow-hidden transition-all duration-500", isOpen ? "max-h-40 pb-6" : "max-h-0")}>
        <p className="text-muted-foreground leading-relaxed pr-8">{faq.answer}</p>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-32 bg-card border-y border-border/50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/3 blur-[200px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <RevealOnScroll direction="down">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full border border-border/50 text-sm text-muted-foreground mb-6 backdrop-blur-sm">
              FAQs
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              COMMON <AnimatedGradientText>QUESTIONS</AnimatedGradientText>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <RevealOnScroll key={index} delay={index * 50} direction="up">
              <FAQItem
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
