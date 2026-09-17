"use client";

import { useEffect, type ReactNode } from "react";
import { m as motion, useSpring } from "motion/react";
import { motionTokens, springs } from "@/app/lib/motion";
import { useMotionSettings } from "./MotionProvider";

export default function MagneticLink({
  children,
  href,
  className,
  label,
}: {
  children: ReactNode;
  href: string;
  className?: string;
  label?: string;
}) {
  const { pointerEffects } = useMotionSettings();
  const x = useSpring(0, springs.snappy);
  const y = useSpring(0, springs.snappy);
  useEffect(() => {
    if (!pointerEffects) {
      x.jump(0);
      y.jump(0);
    }
  }, [pointerEffects, x, y]);
  const reset = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.a
      href={href}
      className={className}
      aria-label={label}
      style={{ x, y }}
      onPointerMove={(event) => {
        if (!pointerEffects || event.pointerType !== "mouse") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        x.set(
          ((event.clientX - bounds.left - bounds.width / 2) / bounds.width) *
            motionTokens.distance.magnetic,
        );
        y.set(
          ((event.clientY - bounds.top - bounds.height / 2) / bounds.height) *
            motionTokens.distance.magnetic,
        );
      }}
      onPointerLeave={reset}
      onPointerCancel={reset}
      onBlur={reset}
    >
      {children}
    </motion.a>
  );
}
