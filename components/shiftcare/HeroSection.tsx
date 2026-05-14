"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  blurIn,
  fadeUp,
  popIn,
  staggerFast,
  staggerHero,
  viewportOnce,
} from "@/lib/animations";
import { WordReveal } from "@/components/shiftcare/WordReveal";
import { CountUp } from "@/components/shiftcare/CountUp";

const stats = [
  { value: 3200, prefix: "", suffix: "+", label: "Students trained" },
  { value: 48, prefix: "", suffix: "", label: "Clinical scenarios" },
  { value: 94, prefix: "", suffix: "%", label: "Pass rate lift after 12 weeks" },
];

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 pb-20"
    >
      {/* Local depth — blends with AmbientBackdrop */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-sc-teal/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-sc-teal/20 to-transparent" />
      </div>

      {/* Subtle grid — local to hero only */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,160,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,160,0.035) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 75% 55% at 50% 38%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 55% at 50% 38%, black 30%, transparent 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">

          {/* Top status label */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mb-10 flex items-center gap-2.5"
          >
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sc-teal opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sc-teal" />
            </span>
            <span className="cinematic-label">40+ universities and NHS Trusts</span>
          </motion.div>

          {/* Headline — word-by-word reveal */}
          <h1
            className="font-display font-extrabold leading-[0.92] tracking-tight mb-8 max-w-5xl"
            style={{ fontSize: "clamp(2.8rem, 8.5vw, 7rem)" }}
          >
            <span className="text-sc-text block">
              <WordReveal text="Train nurses to" delay={0.3} stagger={0.05} />
            </span>
            <motion.span
              className="text-gradient-teal block"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.52 }}
            >
              save lives
            </motion.span>
            <span className="text-sc-text block">
              <WordReveal text="before their first shift." delay={0.72} stagger={0.05} />
            </span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 1.1 }}
            className="text-lg md:text-xl text-sc-text-2 max-w-xl leading-relaxed mb-12"
          >
            Real patients. Real deterioration. Every decision logged — every
            outcome explained. Clinical judgment built, not memorised.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 1.3 }}
            className="flex flex-col sm:flex-row items-center gap-3 mb-20"
          >
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Link
                href="#demo"
                className="group relative inline-flex items-center gap-2.5 bg-sc-teal text-sc-bg font-bold text-base px-8 py-4 rounded-xl hover:bg-sc-teal-2 transition-colors duration-150 shadow-xl shadow-sc-teal/25 hover:shadow-sc-teal/40 overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.22) 50%, transparent 100%)",
                    x: "-100%",
                  }}
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 0.65, repeat: Infinity, repeatDelay: 4.5, ease: [0.16, 1, 0.3, 1] }}
                  aria-hidden
                />
                Try the Simulator Free
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ x: 2 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
            >
              <Link
                href="/book"
                className="inline-flex items-center gap-2 text-sc-text-2 hover:text-sc-teal transition-colors text-base font-medium px-5 py-4"
              >
                Book for your school
                <svg
                  className="w-3.5 h-3.5 opacity-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats — CountUp fires once on enter */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-0"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center">
                <div className="px-3 sm:px-8 md:px-12 text-center">
                  <div
                    className="font-display font-bold text-sc-teal leading-none mb-2"
                    style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
                  >
                    <CountUp
                      to={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      duration={1.8}
                    />
                  </div>
                  <div className="text-xs text-sc-text-3 font-medium tracking-wide">
                    {stat.label}
                  </div>
                </div>
                {i < stats.length - 1 && (
                  <div className="w-px h-10 bg-sc-teal/12 flex-shrink-0" />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        aria-hidden
      >
        <span className="text-[10px] text-sc-text-3/50 tracking-[0.2em] uppercase font-mono">
          Scroll
        </span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-sc-teal/40 to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: "top" }}
          transition={{ duration: 1.6, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden
        />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-sc-bg to-transparent pointer-events-none" />
    </section>
  );
}
