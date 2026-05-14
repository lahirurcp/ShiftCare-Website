"use client";

import { motion } from "framer-motion";
import {
  atmosphericFade,
  blurIn,
  cinematicReveal,
  scaleIn,
  staggerCinematic,
  viewport,
} from "@/lib/animations";

const patients = [
  {
    triage: "RED",
    name: "Margaret, 78",
    condition: "Post-op hip replacement",
    news2: 7,
    vitals: [
      { label: "SpO₂", value: "87%", alert: true },
      { label: "RR", value: "24 /min", alert: true },
      { label: "BP", value: "88 / 54", alert: true },
      { label: "HR", value: "118 bpm", alert: false },
      { label: "Temp", value: "38.9 °C", alert: false },
    ],
    alert: "Escalate immediately — possible sepsis",
    alertLevel: "CRITICAL",
    borderClass: "border-sc-red/25",
    glowColor: "rgba(239,68,68,0.1)",
    badgeClass: "bg-sc-red/12 text-sc-red border-sc-red/25",
    dotClass: "bg-sc-red",
    news2Class: "text-sc-red",
    alertTextClass: "text-sc-red",
    scanLine: true,
  },
  {
    triage: "AMBER",
    name: "James, 54",
    condition: "Type 2 DM — hypoglycaemia",
    news2: 4,
    vitals: [
      { label: "BM", value: "2.8 mmol/L", alert: true },
      { label: "HR", value: "102 bpm", alert: true },
      { label: "BP", value: "112 / 72", alert: false },
      { label: "SpO₂", value: "96%", alert: false },
      { label: "GCS", value: "13 / 15", alert: true },
    ],
    alert: "Administer oral glucose — monitor closely",
    alertLevel: "MONITOR",
    borderClass: "border-sc-amber/25",
    glowColor: "rgba(245,158,11,0.08)",
    badgeClass: "bg-sc-amber/12 text-sc-amber border-sc-amber/25",
    dotClass: "bg-sc-amber",
    news2Class: "text-sc-amber",
    alertTextClass: "text-sc-amber",
    scanLine: false,
  },
  {
    triage: "GREEN",
    name: "Priya, 31",
    condition: "Elective appendectomy recovery",
    news2: 1,
    vitals: [
      { label: "SpO₂", value: "98%", alert: false },
      { label: "RR", value: "16 /min", alert: false },
      { label: "BP", value: "118 / 76", alert: false },
      { label: "HR", value: "72 bpm", alert: false },
      { label: "Temp", value: "36.8 °C", alert: false },
    ],
    alert: "Routine 4-hourly obs — pain score 3 / 10",
    alertLevel: "STABLE",
    borderClass: "border-sc-green/25",
    glowColor: "rgba(16,185,129,0.07)",
    badgeClass: "bg-sc-green/12 text-sc-green border-sc-green/25",
    dotClass: "bg-sc-green",
    news2Class: "text-sc-green",
    alertTextClass: "text-sc-green",
    scanLine: false,
  },
];

export function PatientsSection() {
  return (
    <section id="patients" className="relative py-40 md:py-52 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-sc-red/[0.025] rounded-full blur-[130px] translate-x-1/3" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          variants={staggerCinematic}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-16 md:mb-20"
        >
          <motion.span variants={atmosphericFade} className="cinematic-label mb-6">
            Patient Acuity
          </motion.span>
          <motion.h2
            variants={cinematicReveal}
            className="font-display font-bold text-sc-text leading-tight mt-6 mb-5"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
          >
            Three triage levels.
            <br />
            <span className="text-gradient-teal">One chance to get it right.</span>
          </motion.h2>
          <motion.p variants={blurIn} className="text-sc-text-2 text-lg max-w-2xl leading-relaxed">
            Real patients with real deterioration curves. Clinically validated obs
            data — not simplified teaching examples.
          </motion.p>
        </motion.div>

        {/* Ward status bar */}
        <motion.div
          variants={blurIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-8 flex items-center gap-4 px-4 py-2.5 rounded-lg border border-sc-teal/10 bg-sc-surface/30 backdrop-blur-sm w-full overflow-x-auto"
        >
          <div className="flex items-center gap-2 flex-shrink-0">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-sc-teal"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs font-mono text-sc-teal font-medium tracking-wide">
              WARD B3
            </span>
          </div>
          <div className="w-px h-4 bg-sc-teal/15 flex-shrink-0" />
          <span className="text-xs font-mono text-sc-text-3">NIGHT SHIFT · 23:41</span>
          <div className="w-px h-4 bg-sc-teal/15 flex-shrink-0" />
          <span className="text-xs font-mono text-sc-text-3">6 PATIENTS</span>
          <div className="w-px h-4 bg-sc-teal/15 flex-shrink-0" />
          <span className="text-xs font-mono text-sc-red font-semibold">2 CRITICAL</span>
          <div className="ml-auto flex-shrink-0 hidden sm:block">
            <span className="text-xs font-mono text-sc-text-3/50">SIM · EDUCATIONAL ENVIRONMENT</span>
          </div>
        </motion.div>

        {/* Patient cards */}
        <motion.div
          variants={staggerCinematic}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5"
        >
          {patients.map((p) => (
            <motion.div
              key={p.name}
              variants={scaleIn}
              className={`relative rounded-2xl border ${p.borderClass} overflow-hidden group`}
              style={{
                background:
                  "linear-gradient(145deg, rgb(var(--sc-surface) / 0.92) 0%, rgb(var(--sc-bg) / 0.85) 100%)",
                boxShadow: `0 0 40px 0 ${p.glowColor}`,
              }}
              whileHover={{ y: -3, scale: 1.005 }}
              transition={{ duration: 0.25 }}
            >
              {/* Triage header */}
              <div
                className={`px-5 py-3 border-b ${p.borderClass} flex items-center justify-between`}
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    className={`w-2 h-2 rounded-full ${p.dotClass} flex-shrink-0`}
                    animate={
                      p.triage === "RED"
                        ? { opacity: [1, 0.2, 1] }
                        : { opacity: 1 }
                    }
                    transition={{ duration: 0.9, repeat: p.triage === "RED" ? Infinity : 0 }}
                  />
                  <span
                    className={`text-xs font-bold tracking-widest px-2 py-0.5 rounded border ${p.badgeClass}`}
                  >
                    {p.triage}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-xs text-sc-text-3 mb-0.5 font-mono">NEWS2</div>
                  <div className={`font-display font-bold text-2xl leading-none ${p.news2Class}`}>
                    {p.news2}
                  </div>
                </div>
              </div>

              {/* Patient info */}
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-sc-text mb-0.5">
                  {p.name}
                </h3>
                <p className="text-sc-text-3 text-xs mb-5 font-mono">{p.condition}</p>

                {/* Vitals — boot sequence: each row animates in with offset delay */}
                <div className="space-y-2 mb-5">
                  {p.vitals.map((v, vi) => (
                    <motion.div
                      key={v.label}
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: 0.35 + vi * 0.07, duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="flex items-center justify-between py-1.5 border-b border-sc-text-3/[0.08]"
                    >
                      <span className="text-sc-text-3 text-xs font-mono tracking-wide">{v.label}</span>
                      <div className="flex items-center gap-1.5">
                        {v.alert && (
                          <div
                            className={`w-1 h-1 rounded-full ${p.dotClass} flex-shrink-0`}
                          />
                        )}
                        <span
                          className={`text-xs font-mono font-semibold ${
                            v.alert ? p.news2Class : "text-sc-text-2"
                          }`}
                        >
                          {v.value}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Alert banner */}
                <div
                  className={`rounded-lg px-3 py-2.5 border ${p.borderClass} flex items-start gap-2.5`}
                  style={{ background: p.glowColor }}
                >
                  <div className={`w-1 h-4 rounded-full ${p.dotClass} mt-0.5 flex-shrink-0`} />
                  <div>
                    <span
                      className={`text-xs font-bold tracking-wider block mb-0.5 ${p.alertTextClass}`}
                    >
                      {p.alertLevel}
                    </span>
                    <span className="text-xs text-sc-text-2 leading-snug">{p.alert}</span>
                  </div>
                </div>

                {/* Scan line — RED only */}
                {p.scanLine && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl" aria-hidden>
                    <motion.div
                      className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sc-red/25 to-transparent"
                      animate={{ y: ["-100%", "600%"] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Simulation disclaimer */}
        <motion.p
          variants={atmosphericFade}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center text-xs text-sc-text-3/50 mt-8 font-mono"
        >
          All patient data is simulated. Educational environment only — not a medical device.
        </motion.p>
      </div>
    </section>
  );
}
