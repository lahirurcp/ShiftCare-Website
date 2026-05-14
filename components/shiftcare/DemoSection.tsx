"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  atmosphericFade,
  blurIn,
  cinematicReveal,
  scaleReveal,
  staggerCinematic,
  viewport,
} from "@/lib/animations";

const callouts = [
  {
    title: "Adaptive difficulty",
    desc: "Scenarios scale to student competency level automatically",
  },
  {
    title: "Decision audit trail",
    desc: "Every choice timestamped and linked to clinical rationale",
  },
  {
    title: "Maya explains why",
    desc: "AI mentor debriefs each outcome with evidence-based reasoning",
  },
];

export function DemoSection() {
  return (
    <section id="demo" className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-sc-indigo/[0.03] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          variants={staggerCinematic}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-14"
        >
          <motion.span variants={atmosphericFade} className="cinematic-label mb-6">
            Live Simulator
          </motion.span>
          <motion.h2
            variants={cinematicReveal}
            className="font-display font-bold text-sc-text mt-6 mb-4"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
          >
            Your ward, right now.
          </motion.h2>
          <motion.p variants={blurIn} className="text-sc-text-2 text-lg max-w-2xl mx-auto leading-relaxed">
            Six patients. Limited time. Every decision carries clinical weight.
            No tutorial required.
          </motion.p>
          <motion.div variants={blurIn} className="mt-8 max-w-2xl mx-auto">
            <div className="rounded-xl border border-sc-teal/12 bg-sc-surface/40 px-5 py-3.5 text-left text-sm text-sc-text-2 leading-relaxed">
              <span className="font-semibold text-sc-text">Two ways to evaluate.</span>{" "}
              This embed is a{" "}
              <strong className="text-sc-text">public marketing preview</strong> — instant,
              no login. For{" "}
              <strong className="text-sc-text">cohort pilots</strong>{" "}
              (time-boxed access, seats, educator views),{" "}
              <Link href="/book" className="text-sc-teal font-medium hover:underline">
                book a conversation
              </Link>
              .
            </div>
          </motion.div>
        </motion.div>

        {/* Browser chrome + iframe */}
        <motion.div
          variants={scaleReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative mx-auto rounded-2xl overflow-hidden ring-1 ring-sc-teal/15"
        >
          {/* Browser bar */}
          <div className="flex items-center gap-3 px-4 py-3 bg-sc-surface2 border-b border-sc-teal/10">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-amber-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-sc-bg/60 rounded-md px-3 py-1.5 flex items-center gap-2 max-w-sm mx-auto">
                <svg
                  className="w-3 h-3 text-sc-text-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span className="text-xs text-sc-text-3 font-mono">
                  app.shiftcare.io/ward/simulation
                </span>
              </div>
            </div>
            <motion.span
              className="text-xs text-sc-teal font-semibold px-2 py-0.5 rounded bg-sc-teal/8 border border-sc-teal/18 font-mono"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
            >
              LIVE
            </motion.span>
          </div>

          {/* Iframe */}
          <div className="relative w-full" style={{ paddingTop: "62.5%" }}>
            <iframe
              src="/ShiftCare_v11.html"
              className="absolute inset-0 w-full h-full border-0"
              title="ShiftCare Clinical Simulation — Educational Environment"
              allow="fullscreen"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Callouts — minimal, no emoji */}
        <motion.div
          variants={staggerCinematic}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-3 gap-0 mt-12"
        >
          {callouts.map((item, i) => (
            <motion.div
              key={item.title}
              variants={blurIn}
              className={`py-6 px-8 flex flex-col gap-1.5 ${
                i < callouts.length - 1
                  ? "sm:border-r border-sc-teal/10 border-b sm:border-b-0"
                  : ""
              }`}
            >
              <div className="flex items-center gap-2.5 mb-1">
                <div className="w-1 h-4 rounded-full bg-sc-teal/50" />
                <span className="font-semibold text-sc-text text-sm">{item.title}</span>
              </div>
              <p className="text-sc-text-3 text-xs leading-relaxed pl-3.5">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
