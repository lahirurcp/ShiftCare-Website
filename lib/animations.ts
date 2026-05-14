import type { Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const easeSlow = [0.16, 1, 0.3, 1] as [number, number, number, number];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.93 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease },
  },
};

/** Cinematic blur-in — for headline moments and major reveals */
export const cinematicReveal: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(14px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: easeSlow },
  },
};

/** Slow, atmospheric emergence — no movement, only opacity */
export const atmosphericFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Animated line draw — scaleX from left */
export const drawIn: Variants = {
  hidden: { scaleX: 0, originX: "0%" },
  visible: {
    scaleX: 1,
    transition: { duration: 0.9, ease },
  },
};

/** Softer entrance with blur */
export const blurIn: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

/** Slower stagger for cinematic narrative sections */
export const staggerCinematic: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.08,
    },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
};

export const staggerHero: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

export const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 118, damping: 22, mass: 0.85 },
  },
};

export const popIn: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
};

export const floatingLoop = {
  y: [0, -10, 0],
  transition: { duration: 4, repeat: Infinity, ease: [0.16, 1, 0.3, 1] },
};

export const floatingLoopSlow = {
  y: [0, -14, 0],
  rotate: [0, 1.5, 0],
  transition: { duration: 6, repeat: Infinity, ease: [0.16, 1, 0.3, 1] },
};

export const pulseGlow = {
  boxShadow: [
    "0 0 0 0 rgba(0,212,160,0)",
    "0 0 24px 6px rgba(0,212,160,0.2)",
    "0 0 0 0 rgba(0,212,160,0)",
  ],
  transition: { duration: 2.5, repeat: Infinity, ease: [0.16, 1, 0.3, 1] },
};

export const viewport = { once: false, amount: 0.12 } as const;
export const viewportOnce = { once: true, amount: 0.12 } as const;
export const viewportNarrow = { once: false, amount: 0.22 } as const;
