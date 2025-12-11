"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/magnetic-button";
import { Menu, X, LogIn, PaintBucket, Hexagon } from "lucide-react";
import { WhiteLabelModal } from "@/components/white-label-modal";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#work", label: "Work" },
  { href: "#white-label", label: "White Label" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQs" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWhiteLabelOpen, setIsWhiteLabelOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = [
        "work",
        "white-label",
        "pricing",
        "testimonials",
        "faq",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="group flex items-center gap-2">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-orange-500 text-white shadow-lg group-hover:scale-110 transition-transform">
                <Hexagon className="w-6 h-6 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-foreground tracking-tighter leading-none group-hover:text-accent transition-colors">
                  NEXUS
                </span>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] leading-none group-hover:text-foreground transition-colors">
                  AI ASSETS
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm transition-all duration-300 font-medium",
                    activeSection === item.href.replace("#", "")
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => setIsWhiteLabelOpen(true)}
                className="relative px-4 py-2 text-sm text-muted-foreground hover:text-accent transition-all duration-300 flex items-center gap-2 font-medium"
              >
                <PaintBucket className="w-3 h-3" />
                White Label
              </button>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/login"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                Client Login
              </Link>

              <MagneticButton strength={20}>
                <Button
                  asChild
                  className="relative overflow-hidden rounded-full border-0 bg-gradient-to-r from-accent to-orange-500 px-6 py-5 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
                >
                  <Link href="https://cal.com/aiapps.dev/30min" target="_blank">
                    <span className="relative z-10">Book a Call</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-accent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  </Link>
                </Button>
              </MagneticButton>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border transition-all duration-300 overflow-hidden",
            isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-left text-lg text-muted-foreground hover:text-accent transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsWhiteLabelOpen(true);
              }}
              className="text-left text-lg text-muted-foreground hover:text-accent transition-colors flex items-center gap-2"
            >
              <PaintBucket className="w-5 h-5" /> White Label Demo
            </button>
            <Link
              href="/login"
              className="text-left text-lg text-muted-foreground hover:text-accent transition-colors flex items-center gap-2"
            >
              <LogIn className="w-5 h-5" /> Client Login
            </Link>
            <Button
              asChild
              className="mt-4 rounded-full bg-accent text-accent-foreground"
            >
              <Link href="https://cal.com/aiapps.dev/30min" target="_blank">
                Book a Call
              </Link>
            </Button>
          </nav>
        </div>
      </header>
      <WhiteLabelModal
        isOpen={isWhiteLabelOpen}
        onClose={() => setIsWhiteLabelOpen(false)}
      />
    </>
  );
}
