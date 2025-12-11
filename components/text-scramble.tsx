"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface TextScrambleProps {
  text: string
  className?: string
  speed?: number
  triggerOnScroll?: boolean
}

const chars = "!<>-_\\/[]{}—=+*^?#_______"

export function TextScramble({ text, className, speed = 30, triggerOnScroll = true }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState("")
  const [isVisible, setIsVisible] = useState(!triggerOnScroll)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!triggerOnScroll) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [triggerOnScroll])

  useEffect(() => {
    if (!isVisible) return

    let iteration = 0
    const finalText = text

    const interval = setInterval(() => {
      setDisplayText(
        finalText
          .split("")
          .map((char, index) => {
            if (index < iteration) return char
            if (char === " ") return " "
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join(""),
      )

      if (iteration >= finalText.length) {
        clearInterval(interval)
      }

      iteration += 1 / 3
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, isVisible])

  return (
    <span ref={ref} className={cn("font-mono", className)}>
      {displayText || text.replace(/./g, "_")}
    </span>
  )
}
