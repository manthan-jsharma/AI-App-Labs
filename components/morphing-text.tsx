"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface MorphingTextProps {
  texts: string[]
  className?: string
  interval?: number
}

export function MorphingText({ texts, className, interval = 3000 }: MorphingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [displayText, setDisplayText] = useState(texts[0])

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true)

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length)
        setDisplayText(texts[(currentIndex + 1) % texts.length])
      }, 400)

      setTimeout(() => {
        setIsAnimating(false)
      }, 800)
    }, interval)

    return () => clearInterval(timer)
  }, [texts, interval, currentIndex])

  return (
    <span className={cn("relative inline-block", className)}>
      {/* Blur layer */}
      <span
        className={cn(
          "absolute inset-0 transition-all duration-400",
          isAnimating ? "blur-lg opacity-0 scale-110" : "blur-0 opacity-100 scale-100",
        )}
        aria-hidden
      >
        {displayText}
      </span>
      {/* Main text */}
      <span
        className={cn(
          "relative inline-block transition-all duration-500",
          isAnimating ? "opacity-0 translate-y-4 blur-sm scale-95" : "opacity-100 translate-y-0 blur-0 scale-100",
        )}
      >
        {displayText}
      </span>
    </span>
  )
}
