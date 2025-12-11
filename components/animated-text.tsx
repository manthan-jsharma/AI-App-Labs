"use client"

import { useEffect, useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  staggerDelay?: number
  animationType?: "fade" | "slide" | "scale" | "blur" | "gradient"
}

export function AnimatedText({
  text,
  className,
  delay = 0,
  staggerDelay = 30,
  animationType = "fade",
}: AnimatedTextProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })
  const [animatedChars, setAnimatedChars] = useState<boolean[]>([])

  useEffect(() => {
    if (isVisible) {
      const chars = text.split("")
      chars.forEach((_, index) => {
        setTimeout(
          () => {
            setAnimatedChars((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
          },
          delay + index * staggerDelay,
        )
      })
    }
  }, [isVisible, text, delay, staggerDelay])

  const getCharStyle = (index: number) => {
    const isAnimated = animatedChars[index]

    const baseStyles = {
      fade: {
        opacity: isAnimated ? 1 : 0,
        transform: isAnimated ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1)`,
      },
      slide: {
        opacity: isAnimated ? 1 : 0,
        transform: isAnimated ? "translateX(0)" : "translateX(-30px)",
        transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1)`,
      },
      scale: {
        opacity: isAnimated ? 1 : 0,
        transform: isAnimated ? "scale(1)" : "scale(0.5)",
        transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)`,
      },
      blur: {
        opacity: isAnimated ? 1 : 0,
        filter: isAnimated ? "blur(0px)" : "blur(10px)",
        transform: isAnimated ? "translateY(0)" : "translateY(10px)",
        transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1)`,
      },
      gradient: {
        opacity: isAnimated ? 1 : 0,
        backgroundPosition: isAnimated ? "0% 50%" : "100% 50%",
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1)`,
      },
    }

    return baseStyles[animationType]
  }

  return (
    <div ref={ref} className={cn("inline-flex flex-wrap", className)}>
      {text.split("").map((char, index) => (
        <span key={index} style={getCharStyle(index)} className={cn("inline-block", char === " " && "w-[0.3em]")}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  )
}

interface AnimatedWordsProps {
  words: string[]
  className?: string
  interval?: number
}

export function AnimatedWords({ words, className, interval = 3000 }: AnimatedWordsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length)
        setIsAnimating(false)
      }, 500)
    }, interval)

    return () => clearInterval(timer)
  }, [words.length, interval])

  return (
    <span className={cn("relative inline-block overflow-hidden", className)}>
      <span
        className={cn(
          "inline-block transition-all duration-500 ease-out",
          isAnimating ? "translate-y-full opacity-0 blur-sm" : "translate-y-0 opacity-100 blur-0",
        )}
      >
        {words[currentIndex]}
      </span>
    </span>
  )
}
