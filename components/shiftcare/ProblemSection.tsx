"use client";

import { motion } from "framer-motion";
import { fadeUp, scaleIn, staggerContainer, viewport } from "@/lib/animations";

const problems = [
  {
    icon: "📋",
    stat: "68%",
    statLabel: "of clinical errors",
    title: "Textbooks don't simulate pressure",
    body:
      "Students memorise protocols in calm classrooms, then freeze when a real patient's obs drop at 3am. Knowledge without decision-making practice is not clinical readiness.",
    accent: "red",
    border: "border-sc-red/20",
    glow: "rgba(239,68,68,0.08)",
  },
  {
    icon: "⏱️",
    stat: "£47k",
    statLabel: "avg. cost of a sentinel event",
    title: "Simulation labs are expensive and scarce",
    body:
      "High-fidelity mannequins cost £80k+. There aren't enough to give every student enough reps. ShiftCare gives unlimited, on-demand practice at a fraction of the cost.",
    accent: "amber",
    border: "border-sc-amber/20",
    glow: "rgba(245,158,11,0.08)",
  },
  {
    icon: "🧩",
    stat: "1 in 3",
    statLabel: "new nurses lack confidence",
    title: "Feedback loops are broken",
    body:
      "After a placement, students wait weeks for feedback. ShiftCare gives immediate, evidence-linked rationale after every decision — so students learn in the moment, not in hindsight.",
    accent: "teal",
    border: "border-sc-teal/20",
    glow: "rgba(0,212,160,0.08)",
  },
];

const accentMap = {
  red: { icon: "text-sc-red", stat: "text-sc-red", bg: "bg-sc-red/10" },
  amber: { icon: "text-sc-amber", stat: "text-sc-amber", bg: "bg-sc-amber/10" },
  teal: { icon: "text-sc-teal", stat: "text-sc-teal", bg: "bg-sc-teal/10" },
};

export function ProblemSection() {
  return (
    <section id="problem" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sc-teal/15 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block text-xs font-semibold tracking-widest text-sc-red uppercase mb-4 px-3 py-1 rounded-full border border-sc-red/20 bg-sc-red/5">
              The Problem
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-sc-text mb-4 leading-tight"
          >
            Traditional nursing education
            <br />
            <span className="text-gradient-teal">has a readiness gap.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-sc-text-2 text-lg max-w-2xl mx-auto"
          >
            Students graduate knowing what to do. ShiftCare trains them on
            when to do it — and how fast.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {problems.map((p) => {
            const colors = accentMap[p.accent as keyof typeof accentMap];
            return (
              <motion.div
                key={p.title}
                variants={scaleIn}
                className={`relative surface-card rounded-2xl p-7 border ${p.border} hover:border-opacity-50 transition-all duration-300 group`}
                style={{
                  boxShadow: `0 0 40px 0 ${p.glow}`,
                }}
                whileHover={{ y: -4 }}
              >
                <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center text-2xl mb-6`}>
                  {p.icon}
                </div>
                <div className="mb-4">
                  <span className={`font-display text-4xl font-bold ${colors.stat}`}>{p.stat}</span>
                  <span className="text-sc-text-3 text-xs ml-2">{p.statLabel}</span>
                </div>
                <h3 className="font-display font-semibold text-lg text-sc-text mb-3">
                  {p.title}
                </h3>
                <p className="text-sc-text-2 text-sm leading-relaxed">{p.body}</p>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${p.glow} 0%, transparent 60%)` }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
