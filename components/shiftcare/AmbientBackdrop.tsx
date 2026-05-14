"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Site-wide cinematic depth layers.
 * Fixed behind all content. Multiple depth planes simulate a clinical
 * environment — like monitors glowing in a dark ward at night.
 */
export function AmbientBackdrop() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
        <div className="absolute top-1/4 left-1/2 h-[min(80vw,720px)] w-[min(120vw,960px)] -translate-x-1/2 rounded-full bg-sc-teal/[0.04] blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[40vmin] w-[40vmin] rounded-full bg-sc-indigo/[0.05] blur-[90px]" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>

      {/* ── Plane 1: Primary teal crown — very slow drift ── */}
      <motion.div
        className="absolute -top-[25%] left-1/2 h-[min(90vw,900px)] w-[min(140vw,1200px)] -translate-x-1/2 rounded-full bg-sc-teal/[0.055] blur-[130px]"
        style={{ willChange: "transform, opacity" }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.05, 1],
          x: ["-50%", "calc(-50% + 1.5%)", "-50%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* ── Plane 2: Indigo mid-right — counter-drift ── */}
      <motion.div
        className="absolute top-[40%] -right-[8%] h-[min(75vw,700px)] w-[min(75vw,700px)] rounded-full bg-sc-indigo/[0.055] blur-[110px]"
        style={{ willChange: "transform, opacity" }}
        animate={{
          opacity: [0.3, 0.55, 0.3],
          scale: [1, 1.07, 1],
          y: ["0%", "-2%", "0%"],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: [0.16, 1, 0.3, 1], delay: 3 }}
      />

      {/* ── Plane 3: Deep teal — lower left, very slow rotation ── */}
      <motion.div
        className="absolute bottom-[-15%] left-[-12%] h-[55vmin] w-[95vmin] rounded-full bg-sc-teal/[0.03] blur-[140px]"
        style={{ willChange: "transform, opacity" }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 4, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
      />

      {/* ── Plane 4: Deep indigo — lower center, very subtle ── */}
      <motion.div
        className="absolute bottom-[10%] left-1/2 -translate-x-1/2 h-[30vmin] w-[60vmin] rounded-full bg-sc-indigo/[0.035] blur-[100px]"
        style={{ willChange: "transform, opacity" }}
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scaleX: [1, 1.08, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: [0.16, 1, 0.3, 1], delay: 5 }}
      />

      {/* ── Clinical arc SVG — monitor waveform feel ── */}
      <svg
        className="absolute left-1/2 top-[8%] h-[min(50vh,500px)] w-[min(100vw,1000px)] -translate-x-1/2 text-sc-teal/[0.09]"
        viewBox="0 0 900 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <motion.path
          d="M 20 320 Q 180 60 400 100 T 880 180"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        />
        <motion.path
          d="M 60 360 Q 240 120 440 160 T 840 240"
          stroke="currentColor"
          strokeWidth="0.6"
          strokeOpacity="0.4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 3.2, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
        />
        {/* ECG-style spike — far right */}
        <motion.path
          d="M 720 200 L 730 200 L 738 160 L 746 240 L 754 190 L 762 210 L 780 210"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeOpacity="0.35"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 2.4 }}
        />
      </svg>

      {/* ── Drifting grid — very slow, masked to center ── */}
      <motion.div
        className="absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(var(--sc-teal) / 0.04) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--sc-teal) / 0.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 32%, black 15%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 32%, black 15%, transparent 70%)",
        }}
        animate={{ backgroundPosition: ["0px 0px", "72px 72px"] }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
      />

      {/* ── Edge vignette — corners for depth ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, rgb(var(--sc-bg) / 0.6) 100%)",
        }}
      />
    </div>
  );
}
