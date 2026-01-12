"use client";

import dynamic from "next/dynamic";

const ParticleField = dynamic(
  () => import("@/components/particle-field").then((mod) => mod.ParticleField),
  { ssr: false }
);

const MouseTrail = dynamic(
  () => import("@/components/mouse-trail").then((mod) => mod.MouseTrail),
  { ssr: false }
);

const CursorGlow = dynamic(
  () => import("@/components/cursor-glow").then((mod) => mod.CursorGlow),
  { ssr: false }
);

const ScrollProgress = dynamic(
  () =>
    import("@/components/scroll-progress").then((mod) => mod.ScrollProgress),
  { ssr: false }
);

export function BackgroundEffects() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <ParticleField />
      <MouseTrail />
    </>
  );
}
