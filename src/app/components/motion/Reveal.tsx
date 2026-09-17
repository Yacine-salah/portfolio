"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { m as motion, useAnimationControls, useInView } from "motion/react";
import { motionTokens } from "@/app/lib/motion";
import { useMotionSettings } from "./MotionProvider";

/** Visible on the server; progressively enhanced once, with no scroll lock. */
export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const revealed = useRef(false);
  const inView = useInView(ref, { once: true, margin: "0px 0px -24px 0px" });
  const controls = useAnimationControls();
  const { enabled } = useMotionSettings();

  useEffect(() => {
    if (!enabled) {
      controls.set({ opacity: 1, y: 0 });
      return;
    }
    if (revealed.current) return;
    if (!inView) {
      controls.set({ opacity: 0, y: motionTokens.distance.reveal });
      return;
    }
    revealed.current = true;
    void controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: motionTokens.duration.slow,
        ease: motionTokens.easing.smooth,
        delay: delay * motionTokens.stagger,
      },
    });
  }, [controls, delay, enabled, inView]);

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={controls}
      className={className}
      data-reveal=""
      onFocusCapture={() => {
        revealed.current = true;
        controls.stop();
        controls.set({ opacity: 1, y: 0 });
      }}
    >
      {children}
    </motion.div>
  );
}
