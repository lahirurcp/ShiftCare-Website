"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Site-wide ambient layers: slow gradient drift + soft grid.
 * Fixed behind content; respects prefers-reduced-motion.
 */
export function AmbientBackdrop() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
        <div className="absolute top-1/4 left-1/2 h-[min(80vw,720px)] w-[min(120vw,960px)] -translate-x-1/2 rounded-full bg-sc-teal/[0.05] blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-[40vmin] w-[40vmin] rounded-full bg-sc-indigo/[0.06] blur-[90px]" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -top-[20%] left-1/2 h-[min(85vw,780px)] w-[min(130vw,1100px)] -translate-x-1/2 rounded-full bg-sc-teal/[0.075] blur-[110px]"
        animate={{
          opacity: [0.45, 0.75, 0.45],
          scale: [1, 1.06, 1],
          x: ["-50%", "calc(-50% + 2%)", "-50%"],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[45%] -right-[10%] h-[min(70vw,640px)] w-[min(70vw,640px)] rounded-full bg-sc-indigo/[0.07] blur-[100px]"
        animate={{
          opacity: [0.35, 0.6, 0.35],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[-15%] h-[50vmin] w-[90vmin] rounded-full bg-sc-teal/[0.04] blur-[120px]"
        animate={{ opacity: [0.25, 0.45, 0.25], rotate: [0, 3, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Decorative arcs — inline SVG asset */}
      <svg
        className="absolute left-1/2 top-[12%] h-[min(55vh,520px)] w-[min(95vw,900px)] -translate-x-1/2 text-sc-teal/[0.12]"
        viewBox="0 0 800 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M 40 320 Q 200 80 400 120 T 760 200"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        />
        <motion.path
          d="M 80 360 Q 260 140 420 180 T 720 240"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeOpacity="0.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 2.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        />
      </svg>

      {/* Drifting grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,160,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,160,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 75% 65% at 50% 35%, black 20%, transparent 72%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 35%, black 20%, transparent 72%)",
        }}
        animate={{ backgroundPosition: ["0px 0px", "64px 64px"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
