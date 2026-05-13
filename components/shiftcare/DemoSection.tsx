"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, staggerContainer, viewport } from "@/lib/animations";

export function DemoSection() {
  return (
    <section id="demo" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-sc-indigo/4 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-12"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block text-xs font-semibold tracking-widest text-sc-teal uppercase mb-4 px-3 py-1 rounded-full border border-sc-teal/20 bg-sc-teal/5">
              Live Simulator
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl font-bold text-sc-text mb-4"
          >
            Your ward, right now.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-sc-text-2 text-lg max-w-2xl mx-auto"
          >
            Six patients. Limited time. Every decision carries clinical weight.
            This is ShiftCare — no tutorial required.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 max-w-2xl mx-auto">
            <div className="rounded-xl border border-sc-teal/20 bg-sc-surface/60 px-4 py-3 text-left text-sm text-sc-text-2 leading-relaxed">
              <span className="font-semibold text-sc-text">Two ways to evaluate.</span> This embed is a{" "}
              <strong className="text-sc-text">public marketing preview</strong> — instant, no login. For{" "}
              <strong className="text-sc-text">cohort pilots</strong> (time-boxed access, seats, educator views,
              agreements),{" "}
              <Link href="/book" className="text-sc-teal font-medium hover:underline">
                book a conversation
              </Link>
              .
            </div>
          </motion.div>
        </motion.div>

        {/* Browser chrome */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-black/60"
          style={{ border: "1px solid rgba(0,212,160,0.15)" }}
        >
          {/* Browser top bar */}
          <div className="flex items-center gap-3 px-4 py-3 bg-sc-surface2 border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-amber-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-sc-bg/60 rounded-md px-3 py-1.5 flex items-center gap-2 max-w-sm mx-auto">
                <svg className="w-3 h-3 text-sc-text-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-xs text-sc-text-3 font-mono">app.shiftcare.io/ward/simulation</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-sc-teal font-medium px-2 py-0.5 rounded bg-sc-teal/10 border border-sc-teal/20">
                LIVE
              </span>
            </div>
          </div>

          {/* Iframe embed */}
          <div className="relative w-full" style={{ paddingTop: "62.5%" }}>
            <iframe
              src="/ShiftCare_v11.html"
              className="absolute inset-0 w-full h-full border-0"
              title="ShiftCare Clinical Simulation"
              allow="fullscreen"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Below the demo callouts */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10"
        >
          {[
            { icon: "🎯", title: "Adaptive difficulty", desc: "Scenarios scale to student competency level automatically" },
            { icon: "📝", title: "Decision audit trail", desc: "Every choice timestamped and linked to clinical rationale" },
            { icon: "💬", title: "Maya explains why", desc: "AI mentor debriefs each outcome with evidence-based reasoning" },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="glass rounded-xl p-5 flex items-start gap-4 border border-sc-teal/10 hover:border-sc-teal/25 transition-colors"
            >
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div>
                <div className="font-semibold text-sc-text text-sm mb-1">{item.title}</div>
                <div className="text-sc-text-3 text-xs leading-relaxed">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
