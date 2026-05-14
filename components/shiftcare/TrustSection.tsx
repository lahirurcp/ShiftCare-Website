"use client";

import { useEffect } from "react";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { drawIn, viewport } from "@/lib/animations";

const credentials = [
  { label: "NMC Standards 2018" },
  { label: "NICE NG51" },
  { label: "NEWS2 Protocol" },
  { label: "JBDS-IP Guidelines" },
  { label: "NHS England" },
  { label: "RCN Framework" },
  { label: "NANDA-I Taxonomy" },
  { label: "CQC Standards" },
  { label: "QAA Benchmark" },
  { label: "SBAR Methodology" },
];

const doubled = [...credentials, ...credentials];

const tickerTransition = {
  duration: 40,
  repeat: Infinity,
  ease: "linear" as const,
};

export function TrustSection() {
  const reduce = useReducedMotion();
  const controls = useAnimationControls();

  useEffect(() => {
    if (!reduce) {
      controls.start({ x: ["0%", "-50%"], transition: tickerTransition });
    }
  }, [reduce, controls]);

  return (
    <section className="relative py-14 md:py-16 overflow-hidden">
      {/* Top separator */}
      <motion.div
        variants={drawIn}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sc-teal/10 to-transparent"
      />

      {/* Label */}
      <div className="relative z-10 flex justify-center mb-8">
        <span className="cinematic-label">Clinical evidence base</span>
      </div>

      {/* Ticker — static list for reduced-motion users */}
      {reduce ? (
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 px-8">
          {credentials.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 font-mono text-[0.68rem] tracking-[0.22em] uppercase text-sc-text-3/50"
            >
              <span className="w-1 h-1 rounded-full bg-sc-teal/30 flex-shrink-0" aria-hidden />
              {item.label}
            </span>
          ))}
        </div>
      ) : (
        <div className="relative overflow-hidden">
          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-sc-bg to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-sc-bg to-transparent" />

          <motion.div
            className="flex gap-0 whitespace-nowrap"
            animate={controls}
            style={{ willChange: "transform" }}
            onHoverStart={() => controls.stop()}
            onHoverEnd={() =>
              controls.start({ x: ["0%", "-50%"], transition: tickerTransition })
            }
          >
            {doubled.map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-6 px-6 font-mono text-[0.68rem] tracking-[0.22em] uppercase text-sc-text-3/50"
              >
                <span className="w-1 h-1 rounded-full bg-sc-teal/30 flex-shrink-0" aria-hidden />
                {item.label}
              </span>
            ))}
          </motion.div>
        </div>
      )}

      {/* Bottom separator */}
      <motion.div
        variants={drawIn}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sc-teal/10 to-transparent"
      />
    </section>
  );
}
