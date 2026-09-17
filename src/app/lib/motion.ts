export const motionTokens = {
  duration: { instant: 0.08, fast: 0.18, normal: 0.35, slow: 0.6 },
  easing: { smooth: [0.22, 1, 0.36, 1] as const },
  distance: { small: 8, reveal: 20, magnetic: 4, parallax: 24 },
  stagger: 0.07,
  tilt: { card: 2.5, portrait: 7, perspective: 1100 },
  spotlightSize: 340,
};

export const springs = {
  snappy: { stiffness: 300, damping: 30 },
  gentle: { stiffness: 140, damping: 24, mass: 0.7 },
};

export function shouldAnimate(reduced: boolean, paused: boolean) {
  return !reduced && !paused;
}
