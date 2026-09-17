"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  LazyMotion,
  domAnimation,
  MotionConfig,
  useReducedMotion,
} from "motion/react";
import { Pause, Play } from "lucide-react";
import { shouldAnimate } from "@/app/lib/motion";

const MotionContext = createContext({
  enabled: false,
  pointerEffects: false,
  reduced: false,
  paused: false,
  toggle: () => {},
});

export function MotionProvider({ children }: { children: ReactNode }) {
  const initialReduced = useReducedMotion();
  const [liveReduced, setLiveReduced] = useState<boolean | null>(null);
  const reduced = liveReduced ?? initialReduced;
  const [ready, setReady] = useState(false);
  const [paused, setPaused] = useState(false);
  const [finePointer, setFinePointer] = useState(false);
  const [lowEnd, setLowEnd] = useState(false);

  useEffect(() => {
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePointer = () => setFinePointer(pointer.matches);
    const updatePreference = () => setLiveReduced(preference.matches);
    updatePointer();
    updatePreference();
    pointer.addEventListener("change", updatePointer);
    preference.addEventListener("change", updatePreference);
    setLowEnd(navigator.hardwareConcurrency <= 4);
    try {
      setPaused(localStorage.getItem("ys-motion-paused") === "true");
    } catch {
      // The portfolio also works when storage is unavailable.
    }
    setReady(true);
    return () => {
      pointer.removeEventListener("change", updatePointer);
      preference.removeEventListener("change", updatePreference);
    };
  }, []);

  const enabled = ready && shouldAnimate(Boolean(reduced), paused);
  const toggle = () => {
    const next = !paused;
    setPaused(next);
    try {
      localStorage.setItem("ys-motion-paused", String(next));
    } catch {
      // The preference still applies for this visit.
    }
  };

  return (
    <MotionContext.Provider
      value={{
        enabled,
        pointerEffects: enabled && finePointer && !lowEnd,
        reduced: ready && Boolean(reduced),
        paused,
        toggle,
      }}
    >
      <MotionConfig reducedMotion="user">
        <LazyMotion features={domAnimation} strict>
          <div data-motion={enabled ? "on" : "off"}>{children}</div>
        </LazyMotion>
      </MotionConfig>
    </MotionContext.Provider>
  );
}

export const useMotionSettings = () => useContext(MotionContext);

export function MotionPreference() {
  const { paused, reduced, toggle } = useMotionSettings();
  return (
    <button
      className="motion-preference"
      onClick={toggle}
      aria-pressed={!paused && !reduced}
      disabled={reduced}
      title={reduced ? "Préférence de votre appareil respectée" : undefined}
    >
      {paused || reduced ? <Play size={12} /> : <Pause size={12} />}
      {reduced
        ? "Animations réduites"
        : paused
          ? "Animations en pause"
          : "Animations activées"}
    </button>
  );
}
