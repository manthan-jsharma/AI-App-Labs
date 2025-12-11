"use client"

import type React from "react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface RevealOnScrollProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade"
  duration?: number
}

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 700,
}: RevealOnScrollProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0) scale(1)"

    switch (direction) {
      case "up":
        return "translate3d(0, 60px, 0) scale(0.98)"
      case "down":
        return "translate3d(0, -60px, 0) scale(0.98)"
      case "left":
        return "translate3d(60px, 0, 0) scale(0.98)"
      case "right":
        return "translate3d(-60px, 0, 0) scale(0.98)"
      case "scale":
        return "translate3d(0, 0, 0) scale(0.8)"
      case "fade":
        return "translate3d(0, 0, 0) scale(1)"
    }
  }

  return (
    <div
      ref={ref}
      style={{
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? "blur(0px)" : "blur(8px)",
        transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
      className={cn(className)}
    >
      {children}
    </div>
  )
}
