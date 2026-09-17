"use client";

import { useEffect, useState, type PointerEvent, type ReactNode } from "react";
import { m as motion, useSpring } from "motion/react";
import { motionTokens, springs } from "@/app/lib/motion";
import { useMotionSettings } from "./MotionProvider";

export default function DepthSurface({
  children,
  className = "",
  as = "div",
  href,
  target,
  rel,
  "aria-label": label,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "a";
  href?: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}) {
  const { pointerEffects } = useMotionSettings();
  const [hovered, setHovered] = useState(false);
  const rotateX = useSpring(0, springs.gentle);
  const rotateY = useSpring(0, springs.gentle);
  const lightX = useSpring(0, springs.snappy);
  const lightY = useSpring(0, springs.snappy);

  useEffect(() => {
    if (!pointerEffects) {
      rotateX.jump(0);
      rotateY.jump(0);
    }
  }, [pointerEffects, rotateX, rotateY]);

  const reset = () => {
    setHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };
  const move = (event: PointerEvent<HTMLElement>) => {
    if (!pointerEffects || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    rotateX.set((0.5 - y / rect.height) * motionTokens.tilt.card);
    rotateY.set((x / rect.width - 0.5) * motionTokens.tilt.card);
    lightX.set(x - motionTokens.spotlightSize / 2);
    lightY.set(y - motionTokens.spotlightSize / 2);
    setHovered(true);
  };
  const Surface =
    as === "a" ? motion.a : as === "article" ? motion.article : motion.div;

  return (
    <Surface
      className={`depth-surface ${className}`}
      href={href}
      target={target}
      rel={rel}
      aria-label={label}
      onPointerMove={move}
      onPointerLeave={reset}
      onPointerCancel={reset}
      style={{
        rotateX,
        rotateY,
        transformPerspective: motionTokens.tilt.perspective,
      }}
    >
      {children}
      <motion.span
        className="surface-light"
        aria-hidden="true"
        style={{ x: lightX, y: lightY }}
        animate={{ opacity: hovered && pointerEffects ? 1 : 0 }}
        transition={{ duration: motionTokens.duration.fast }}
      />
    </Surface>
  );
}
