"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { SplitText } from "@/components/split-text";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Can you really ship a working AI CRM/SaaS in 14 days?",
    answer:
      "Yes. We cut the bloat. We define the 'Pay-First' features that solve the immediate problem, and we execute with pre-built, proprietary modules. Speed is our primary metric.",
  },
  {
    question: "Do you take equity?",
    answer:
      "No. You keep 100%. We are a high-leverage build partner, not a VC. You own the code, the IP, and the revenue.",
  },
  {
    question: "Why is this better than the 'Fractional Team' model?",
    answer:
      "Subscriptions incentivize agencies to move slowly to keep you paying monthly. We are incentivized by Speed of Completion. You get an asset, not a payroll liability.",
  },
  {
    question: "What about updates?",
    answer:
      "You get a prototype Day 1. You get a code update every day at EOD via Loom. You launch Day 14. Radical transparency, no black boxes.",
  },
  {
    question: "Do you handle the designs?",
    answer:
      "We don't just 'handle' them. We prototype the core concept on Day 1 so you have a clickable model before the sun goes down.",
  },
];

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: typeof faqs[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={cn(
        "border-b border-border/50 transition-all duration-500",
        isOpen ? "border-accent/50 pb-6" : "pb-0"
      )}
    >
      <button
        onClick={onToggle}
        className="w-full py-8 flex items-center justify-between text-left focus:outline-none group"
      >
        <span
          className={cn(
            "text-lg md:text-xl font-bold transition-colors duration-300",
            isOpen
              ? "text-accent"
              : "text-foreground group-hover:text-accent/80"
          )}
        >
          {faq.question}
        </span>
        <div
          className={cn(
            "w-8 h-8 rounded-full border border-border/50 flex items-center justify-center transition-all duration-300",
            isOpen
              ? "bg-accent border-accent rotate-180"
              : "group-hover:border-accent"
          )}
        >
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-colors",
              isOpen
                ? "text-white"
                : "text-muted-foreground group-hover:text-accent"
            )}
          />
        </div>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 ease-in-out",
          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-muted-foreground leading-relaxed text-lg pr-12 pb-4">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-card border-t border-border/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <RevealOnScroll direction="down">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-center mb-20 tracking-tighter">
            <span className="inline-block">
              <SplitText text="FAQ &" animation="fadeUp" stagger={60} />
            </span>

            <br className="block sm:hidden" />
            <span className="hidden sm:inline-block">&nbsp;</span>

            <span className="inline-block text-accent">
              <SplitText
                text="OBJECTIONS"
                animation="fadeUp"
                stagger={60}
                delay={200}
              />
            </span>
          </h2>
        </RevealOnScroll>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <RevealOnScroll key={index} delay={index * 100} direction="up">
              <FAQItem
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
