"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface FloatingElementProps {
  children: React.ReactNode
  className?: string
  amplitude?: number
  frequency?: number
  delay?: number
}

export function FloatingElement({
  children,
  className,
  amplitude = 10,
  frequency = 3,
  delay = 0,
}: FloatingElementProps) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    let animationFrame: number
    let startTime: number | null = null

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = (timestamp - startTime) / 1000
      const newOffset = Math.sin((elapsed + delay) * frequency) * amplitude
      setOffset(newOffset)
      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [amplitude, frequency, delay])

  return (
    <div style={{ transform: `translateY(${offset}px)` }} className={cn("transition-transform", className)}>
      {children}
    </div>
  )
}

export function ParallaxLayer({
  children,
  className,
  speed = 0.5,
}: {
  children: React.ReactNode
  className?: string
  speed?: number
}) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div style={{ transform: `translateY(${offset}px)` }} className={cn(className)}>
      {children}
    </div>
  )
}
