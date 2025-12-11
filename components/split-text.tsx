"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  stagger?: number
  type?: "chars" | "words" | "lines"
  animation?: "fadeUp" | "fadeIn" | "slideUp" | "elastic" | "typewriter" | "glitch"
  triggerOnScroll?: boolean
}

export function SplitText({
  text,
  className,
  delay = 0,
  duration = 600,
  stagger = 30,
  type = "chars",
  animation = "fadeUp",
  triggerOnScroll = true,
}: SplitTextProps) {
  const [isVisible, setIsVisible] = useState(!triggerOnScroll)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!triggerOnScroll) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [triggerOnScroll])

  const elements = type === "chars" ? text.split("") : type === "words" ? text.split(" ") : text.split("\n")

  const getAnimationStyles = (index: number) => {
    const baseDelay = delay + index * stagger
    const isHovered = hoveredIndex === index

    if (!isVisible) {
      switch (animation) {
        case "fadeUp":
          return { opacity: 0, transform: "translateY(100%) rotateX(-90deg)", filter: "blur(10px)" }
        case "fadeIn":
          return { opacity: 0, transform: "scale(0.5)", filter: "blur(5px)" }
        case "slideUp":
          return { opacity: 0, transform: "translateY(150%)" }
        case "elastic":
          return { opacity: 0, transform: "scale(0) rotate(-180deg)" }
        case "typewriter":
          return { opacity: 0, transform: "translateX(-10px)" }
        case "glitch":
          return { opacity: 0, transform: "skewX(30deg) translateX(20px)" }
        default:
          return { opacity: 0 }
      }
    }

    const hoverTransform = isHovered ? "translateY(-5px) scale(1.1)" : ""

    return {
      opacity: 1,
      transform: hoverTransform || "translateY(0) rotateX(0deg) scale(1) skewX(0deg)",
      filter: "blur(0px)",
      transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${baseDelay}ms`,
      color: isHovered ? "var(--accent)" : undefined,
    }
  }

  return (
    <div ref={ref} className={cn("inline-flex flex-wrap", className)} style={{ perspective: "1000px" }}>
      {elements.map((element, index) => (
        <span
          key={index}
          style={getAnimationStyles(index)}
          className={cn(
            "inline-block origin-bottom cursor-default transition-colors",
            element === " " && "w-[0.3em]",
            type === "words" && "mr-[0.3em]",
          )}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {element === " " ? "\u00A0" : element}
        </span>
      ))}
    </div>
  )
}
