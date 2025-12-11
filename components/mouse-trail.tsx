"use client"

import { useEffect, useRef } from "react"

export function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const trail: { x: number; y: number; age: number }[] = []
    const maxAge = 50
    const maxLength = 30

    const handleMouseMove = (e: MouseEvent) => {
      trail.push({ x: e.clientX, y: e.clientY, age: 0 })
      if (trail.length > maxLength) trail.shift()
    }
    window.addEventListener("mousemove", handleMouseMove)

    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      trail.forEach((point, i) => {
        point.age++
        if (point.age > maxAge) return

        const opacity = 1 - point.age / maxAge
        const size = (1 - point.age / maxAge) * 8

        ctx.beginPath()
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(249, 115, 22, ${opacity * 0.4})`
        ctx.fill()

        // Connect points
        if (i > 0 && trail[i - 1].age < maxAge) {
          ctx.beginPath()
          ctx.moveTo(trail[i - 1].x, trail[i - 1].y)
          ctx.lineTo(point.x, point.y)
          ctx.strokeStyle = `rgba(249, 115, 22, ${opacity * 0.2})`
          ctx.lineWidth = size * 0.5
          ctx.stroke()
        }
      })

      // Remove old points
      while (trail.length > 0 && trail[0].age > maxAge) {
        trail.shift()
      }

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50" />
}
