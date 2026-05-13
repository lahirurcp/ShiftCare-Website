"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

const trustPills = [
  "Institution pilots & demos",
  "NMC-aligned scenarios",
  "Educator-ready rollout support",
  "Agreements when you need them",
];

export function CTASection() {
  return (
    <section id="cta" className="relative py-36 md:py-44 overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sc-teal/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sc-teal/[0.04] to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-sc-teal/[0.07] rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-sc-indigo/[0.05] rounded-full blur-[110px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,160,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,160,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 70% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Floating clinical cards — positioned relative to the section, not the inner container */}
      <motion.div
        className="absolute left-[max(1rem,calc(50%-38rem))] top-1/2 -translate-y-1/2 hidden lg:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-52 rounded-xl border border-sc-red/25 bg-sc-surface/80 backdrop-blur-sm px-4 py-3.5 shadow-xl shadow-sc-red/10">
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-sc-red animate-pulse" />
            <span className="text-xs text-sc-text-3 font-medium">Patient deteriorating</span>
          </div>
          <div className="text-base font-bold text-sc-red font-mono mb-1">NEWS2 → 7</div>
          <div className="text-xs text-sc-text-3">Escalate within 15 min</div>
        </div>
      </motion.div>

      <motion.div
        className="absolute right-[max(1rem,calc(50%-38rem))] top-1/2 -translate-y-1/2 hidden lg:block"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      >
        <div className="w-56 rounded-xl border border-sc-teal/20 bg-sc-surface/80 backdrop-blur-sm px-4 py-3.5 shadow-xl shadow-sc-teal/10">
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-sc-teal" />
            <span className="text-xs text-sc-text-3 font-medium">Maya&apos;s feedback</span>
          </div>
          <div className="text-sm font-semibold text-sc-text mb-1">Decision: ✓ Correct</div>
          <div className="text-xs text-sc-teal font-medium">Clinical confidence +12%</div>
        </div>
      </motion.div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-sc-teal/20 bg-sc-teal/5 text-sm text-sc-teal font-medium">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sc-teal opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sc-teal" />
              </span>
              Public simulator + institution pilots
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="font-display font-extrabold leading-[0.9] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
          >
            <span className="text-sc-text block">Your students&apos; first</span>
            <span className="text-gradient-teal block">critical decision</span>
            <span className="text-sc-text block">shouldn&apos;t be on a real ward.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-sc-text-2 max-w-xl mx-auto leading-relaxed mb-12"
          >
            Give them the reps before placement. Try the public preview on this
            site, then talk to us for cohort pilots and educator tooling.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
          >
            <Link
              href="/book"
              className="group inline-flex items-center gap-2.5 bg-sc-teal text-sc-bg font-bold text-lg px-10 py-5 rounded-xl hover:bg-sc-teal-2 transition-all duration-150 shadow-2xl shadow-sc-teal/35 hover:shadow-sc-teal/55 hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto justify-center"
            >
              Book an institution pilot
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-150"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="#demo"
              className="inline-flex items-center justify-center gap-2 text-sc-text-2 hover:text-sc-teal transition-colors text-base font-medium px-7 py-5 border border-sc-teal/20 rounded-xl hover:border-sc-teal/40 hover:bg-sc-teal/5 w-full sm:w-auto"
            >
              Try the public simulator
            </Link>
          </motion.div>

          {/* Trust pills — visible, not hidden */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          >
            {trustPills.map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center gap-1.5 text-sm text-sc-text-2 font-medium"
              >
                <svg className="w-3.5 h-3.5 text-sc-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {pill}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
