"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, staggerContainer } from "@/lib/animations";

const badges = [
  { icon: "🏥", label: "NHS-aligned protocols" },
  { icon: "🧠", label: "AI mentor Maya" },
  { icon: "📊", label: "NEWS2 scoring" },
  { icon: "⚡", label: "Real-time decisions" },
];

const stats = [
  { value: "3,200+", label: "Students trained" },
  { value: "48", label: "Clinical scenarios" },
  { value: "94%", label: "Pass rate lift" },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 pb-20"
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-sc-teal/[0.06] rounded-full blur-[130px]" />
        <div className="absolute top-1/3 left-1/5 w-[350px] h-[350px] bg-sc-indigo/[0.06] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-sc-teal/20 to-transparent" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,160,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,160,0.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Top badge */}
          <motion.div variants={fadeUp} className="mb-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-sc-teal/20 bg-sc-teal/5 text-sm text-sc-teal font-medium">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sc-teal opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sc-teal" />
              </span>
              Used in 40+ UK nursing programmes
            </div>
          </motion.div>

          {/* Headline — the largest, most impactful element */}
          <motion.h1
            variants={fadeUp}
            className="font-display font-extrabold leading-[0.9] tracking-tight mb-7 max-w-5xl"
            style={{ fontSize: "clamp(2.8rem, 8vw, 6.5rem)" }}
          >
            <span className="text-sc-text block">Train nurses to</span>
            <span className="text-gradient-teal block">save lives</span>
            <span className="text-sc-text block">before their first shift.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-sc-text-2 max-w-xl leading-relaxed mb-10"
          >
            Real patients. Real deterioration. Every decision logged — every
            outcome explained. Clinical judgment built, not memorised.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-3 mb-14"
          >
            <Link
              href="#demo"
              className="group inline-flex items-center gap-2.5 bg-sc-teal text-sc-bg font-bold text-base px-8 py-4 rounded-xl hover:bg-sc-teal-2 transition-all duration-150 shadow-2xl shadow-sc-teal/30 hover:shadow-sc-teal/50 hover:-translate-y-0.5 active:translate-y-0"
            >
              Try the Simulator Free
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 text-sc-text-2 hover:text-sc-teal transition-colors text-base font-medium px-5 py-4"
            >
              Book for your school
              <svg className="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          {/* Stats row with dividers */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-0 mb-14"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center">
                <div className="px-8 text-center">
                  <div className="font-display text-3xl md:text-4xl font-bold text-sc-teal leading-none mb-1.5">
                    {stat.value}
                  </div>
                  <div className="text-xs text-sc-text-3 font-medium tracking-wide">
                    {stat.label}
                  </div>
                </div>
                {i < stats.length - 1 && (
                  <div className="w-px h-10 bg-sc-teal/15 flex-shrink-0" />
                )}
              </div>
            ))}
          </motion.div>

          {/* Floating feature badges */}
          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap items-center justify-center gap-2.5"
          >
            {badges.map((badge, i) => (
              <motion.div
                key={badge.label}
                variants={fadeUp}
                animate={{
                  y: [0, i % 2 === 0 ? -8 : -12, 0],
                  transition: {
                    duration: i % 2 === 0 ? 4 : 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.6,
                  },
                }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-sc-teal/12 bg-sc-surface/60 backdrop-blur-sm text-sm font-medium text-sc-text-2 hover:border-sc-teal/25 hover:text-sc-text transition-colors duration-200"
              >
                <span>{badge.icon}</span>
                {badge.label}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="text-xs text-sc-text-3 tracking-widest uppercase font-medium">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-sc-teal/50 to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-sc-bg to-transparent pointer-events-none" />
    </section>
  );
}
