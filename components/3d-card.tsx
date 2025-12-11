"use client"

import type React from "react"

import { useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface Card3DProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  glareEnabled?: boolean
  intensity?: number
}

export function Card3D({ children, className, containerClassName, glareEnabled = true, intensity = 15 }: Card3DProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY

    const rotateXValue = (mouseY / (rect.height / 2)) * -intensity
    const rotateYValue = (mouseX / (rect.width / 2)) * intensity

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)

    const glareX = ((e.clientX - rect.left) / rect.width) * 100
    const glareY = ((e.clientY - rect.top) / rect.height) * 100
    setGlarePos({ x: glareX, y: glareY })
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setGlarePos({ x: 50, y: 50 })
    setIsHovered(false)
  }

  return (
    <div className={cn("perspective-[1500px]", containerClassName)}>
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovered ? 1.02 : 1})`,
          transition: "transform 0.15s ease-out",
        }}
        className={cn("relative transform-gpu", className)}
      >
        {children}

        {/* Glare effect */}
        {glareEnabled && (
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.25) 0%, transparent 60%)`,
              opacity: isHovered ? 1 : 0,
            }}
          />
        )}

        {/* Colored border glow */}
        <div
          className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-500"
          style={{
            background: "linear-gradient(135deg, rgba(249,115,22,0.4), transparent 50%, rgba(251,146,60,0.3))",
            opacity: isHovered ? 1 : 0,
          }}
        />
      </div>
    </div>
  )
}
