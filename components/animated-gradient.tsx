"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface AnimatedGradientProps {
  className?: string
  children?: React.ReactNode
}

export function AnimatedGradient({ className, children }: AnimatedGradientProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="animate-gradient-shift absolute inset-0 bg-gradient-to-r from-accent via-orange-500 to-amber-500 bg-[length:200%_100%]" />
      {children}
    </div>
  )
}

export function AnimatedGradientText({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        "animate-gradient-shift bg-gradient-to-r from-accent via-orange-400 to-amber-500 bg-[length:200%_100%] bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </span>
  )
}
