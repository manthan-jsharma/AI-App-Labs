"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface HorizontalScrollSectionProps {
  children: React.ReactNode
  className?: string
}

export function HorizontalScrollSection({ children, className }: HorizontalScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const rect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionTop = rect.top
      const sectionHeight = rect.height - windowHeight

      if (sectionTop <= 0 && sectionTop >= -sectionHeight) {
        const progress = Math.abs(sectionTop) / sectionHeight
        setScrollProgress(progress)
      } else if (sectionTop > 0) {
        setScrollProgress(0)
      } else {
        setScrollProgress(1)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={containerRef} className={cn("relative h-[300vh]", className)}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          className="flex h-full transition-transform duration-100 ease-out"
          style={{ transform: `translateX(-${scrollProgress * 66.66}%)` }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
