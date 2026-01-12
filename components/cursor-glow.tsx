"use client";

import { useEffect, useRef, useState } from "react";

export function CursorGlow() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      // OPTIMIZATION: Update transform directly, NO React state update here
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;

      // Only set visible state if it wasn't visible before (avoids constant re-renders)
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]); // isVisible dependency ensures we don't re-bind unnecessarily

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-50 transition-opacity duration-300 will-change-transform"
      style={{
        opacity: isVisible ? 1 : 0,
        // Initial position off-screen
        transform: "translate3d(-100px, -100px, 0)",
      }}
    >
      <div className="relative -translate-x-1/2 -translate-y-1/2">
        <div className="absolute h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute h-32 w-32 translate-x-16 translate-y-16 rounded-full bg-accent/10 blur-2xl" />
      </div>
    </div>
  );
}
