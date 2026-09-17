"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { m as motion, useScroll, useSpring, useTransform } from "motion/react";
import { motionTokens, springs } from "@/app/lib/motion";
import { useMotionSettings } from "./MotionProvider";

export default function PortraitScene() {
  const ref = useRef<HTMLDivElement>(null);
  const { pointerEffects } = useMotionSettings();
  const [hovered, setHovered] = useState(false);
  const rotateX = useSpring(0, springs.gentle);
  const rotateY = useSpring(0, springs.gentle);
  const lightX = useSpring(0, springs.gentle);
  const lightY = useSpring(0, springs.gentle);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const drift = useTransform(
    scrollYProgress,
    [0, 1],
    [-motionTokens.distance.parallax, motionTokens.distance.parallax],
  );

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

  return (
    <div
      className="hero-visual"
      ref={ref}
      onPointerMove={(event) => {
        if (!pointerEffects || event.pointerType !== "mouse") return;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        rotateX.set((0.5 - y / rect.height) * motionTokens.tilt.portrait);
        rotateY.set((x / rect.width - 0.5) * motionTokens.tilt.portrait);
        lightX.set(x - motionTokens.spotlightSize / 2);
        lightY.set(y - motionTokens.spotlightSize / 2);
        setHovered(true);
      }}
      onPointerLeave={reset}
      onPointerCancel={reset}
    >
      <motion.div
        className="portrait-parallax"
        style={{ y: pointerEffects ? drift : 0 }}
      >
        <motion.div
          className="portrait-scene"
          style={{
            rotateX,
            rotateY,
            transformPerspective: motionTokens.tilt.perspective,
          }}
        >
          <div className="portrait-depth" aria-hidden="true" />
          <div className="portrait-stage">
            <div className="portrait-grid" aria-hidden="true" />
            <div className="portrait-circle" aria-hidden="true" />
            <div className="portrait-orbit" aria-hidden="true" />
            <span className="portrait-coordinate" aria-hidden="true">
              YS — 01
            </span>
            <span className="portrait-plus" aria-hidden="true">
              +
            </span>
            <Image
              className="hero-portrait"
              src="/images/photo-profil.png"
              alt="Yacine Salah, ingénieur Cloud et DevOps"
              width={299}
              height={358}
              sizes="(max-width: 760px) 90vw, 40vw"
              priority
            />
            <motion.span
              className="surface-light portrait-light"
              aria-hidden="true"
              style={{ x: lightX, y: lightY }}
              animate={{ opacity: hovered && pointerEffects ? 1 : 0 }}
              transition={{ duration: motionTokens.duration.normal }}
            />
          </div>
          <div className="portrait-label">
            <span>LA TECHNIQUE AU SERVICE</span>
            <span>DE VOS AMBITIONS.</span>
          </div>
        </motion.div>
      </motion.div>
      <div className="visual-caption">
        <span>
          <span className="status-dot" /> CONCEVOIR. AUTOMATISER. FIABILISER.
        </span>
        <span aria-hidden="true">[ YS ]</span>
      </div>
    </div>
  );
}
