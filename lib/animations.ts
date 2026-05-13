import type { Variants, Easing } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.93 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease },
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

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
};

/** Hero headline lines — slightly slower stagger */
export const staggerHero: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.06,
    },
  },
};

/** Softer entrance with brief blur (skip via reduced motion in components if needed) */
export const blurIn: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease },
  },
};

/** Scroll / demo frame — spring instead of ease curve */
export const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 118, damping: 22, mass: 0.85 },
  },
};

/** Stat columns — light pop */
export const popIn: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
};

const easeInOut: Easing = "easeInOut";

export const floatingLoop = {
  y: [0, -10, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: easeInOut,
  },
};

export const floatingLoopSlow = {
  y: [0, -14, 0],
  rotate: [0, 1.5, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: easeInOut,
  },
};

export const pulseGlow = {
  boxShadow: [
    "0 0 0 0 rgba(0,212,160,0)",
    "0 0 24px 6px rgba(0,212,160,0.2)",
    "0 0 0 0 rgba(0,212,160,0)",
  ],
  transition: {
    duration: 2.5,
    repeat: Infinity,
    ease: easeInOut,
  },
};

// Use for scroll-triggered animations — replays every time element enters viewport
export const viewport = { once: false, amount: 0.12 } as const;

// Use only for hero / above-the-fold elements that should never re-animate
export const viewportOnce = { once: true, amount: 0.12 } as const;
