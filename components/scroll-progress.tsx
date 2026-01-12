"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!progressRef.current || !glowRef.current) return;

      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? scrollTop / docHeight : 0;

      const transformValue = `scaleX(${scrollProgress})`;

      progressRef.current.style.transform = transformValue;
      glowRef.current.style.transform = transformValue;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-transparent">
      <div
        ref={progressRef}
        className="h-full bg-gradient-to-r from-accent via-orange-400 to-amber-500 origin-left will-change-transform"
        style={{ transform: "scaleX(0)" }}
      />
      <div
        ref={glowRef}
        className="absolute top-0 h-full bg-accent/50 blur-sm origin-left will-change-transform"
        style={{ transform: "scaleX(0)", width: "100%" }}
      />
    </div>
  );
}
