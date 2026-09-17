"use client";

import { type ReactNode } from "react";
import { AnimatePresence, m as motion } from "motion/react";
import { motionTokens } from "@/app/lib/motion";
import { useMotionSettings } from "./MotionProvider";

export default function PageTransition({
  children,
  pageKey,
}: {
  children: ReactNode;
  pageKey: string;
}) {
  const { enabled } = useMotionSettings();
  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={pageKey}
        className="page-transition"
        initial={{
          opacity: enabled ? 0 : 1,
          y: enabled ? motionTokens.distance.small : 0,
        }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: enabled ? 0 : 1 }}
        transition={{
          duration: enabled ? motionTokens.duration.normal : 0,
          ease: motionTokens.easing.smooth,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
