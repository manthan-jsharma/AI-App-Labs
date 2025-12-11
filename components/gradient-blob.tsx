"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface GradientBlobProps {
  className?: string
  colors?: string[]
  speed?: number
}

export function GradientBlob({
  className,
  colors = ["rgba(249,115,22,0.3)", "rgba(251,146,60,0.2)", "rgba(253,186,116,0.15)"],
  speed = 4000,
}: GradientBlobProps) {
  const blobRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const blob = blobRef.current
    if (!blob) return

    let angle = 0
    let animationId: number

    const animate = () => {
      angle += 0.5
      const x = Math.sin((angle * Math.PI) / 180) * 30
      const y = Math.cos(((angle * Math.PI) / 180) * 0.7) * 20
      const scale = 1 + Math.sin(((angle * Math.PI) / 180) * 0.5) * 0.1

      blob.style.transform = `translate(${x}px, ${y}px) scale(${scale})`

      animationId = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div
      ref={blobRef}
      className={cn("absolute rounded-full blur-3xl transition-transform", className)}
      style={{
        background: `radial-gradient(circle, ${colors.join(", ")})`,
      }}
    />
  )
}
