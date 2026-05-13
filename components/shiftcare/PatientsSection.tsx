"use client";

import { motion } from "framer-motion";
import { fadeUp, scaleIn, staggerContainer, viewport } from "@/lib/animations";

const patients = [
  {
    triage: "RED",
    name: "Margaret, 78",
    condition: "Post-op hip replacement",
    news2: 7,
    vitals: [
      { label: "SpO₂", value: "87%", alert: true },
      { label: "RR", value: "24/min", alert: true },
      { label: "BP", value: "88/54", alert: true },
      { label: "HR", value: "118 bpm", alert: false },
      { label: "Temp", value: "38.9°C", alert: false },
    ],
    alert: "Escalate immediately — possible sepsis",
    alertLevel: "CRITICAL",
    border: "border-sc-red/30",
    glow: "rgba(239,68,68,0.12)",
    badge: "bg-sc-red/15 text-sc-red border-sc-red/30",
    dotColor: "bg-sc-red",
    news2Color: "text-sc-red",
  },
  {
    triage: "AMBER",
    name: "James, 54",
    condition: "Type 2 DM — hypoglycaemia",
    news2: 4,
    vitals: [
      { label: "BM", value: "2.8 mmol/L", alert: true },
      { label: "HR", value: "102 bpm", alert: true },
      { label: "BP", value: "112/72", alert: false },
      { label: "SpO₂", value: "96%", alert: false },
      { label: "GCS", value: "13/15", alert: true },
    ],
    alert: "Administer oral glucose — monitor closely",
    alertLevel: "MONITOR",
    border: "border-sc-amber/30",
    glow: "rgba(245,158,11,0.1)",
    badge: "bg-sc-amber/15 text-sc-amber border-sc-amber/30",
    dotColor: "bg-sc-amber",
    news2Color: "text-sc-amber",
  },
  {
    triage: "GREEN",
    name: "Priya, 31",
    condition: "Elective appendectomy recovery",
    news2: 1,
    vitals: [
      { label: "SpO₂", value: "98%", alert: false },
      { label: "RR", value: "16/min", alert: false },
      { label: "BP", value: "118/76", alert: false },
      { label: "HR", value: "72 bpm", alert: false },
      { label: "Temp", value: "36.8°C", alert: false },
    ],
    alert: "Routine 4-hourly obs — pain score 3/10",
    alertLevel: "STABLE",
    border: "border-sc-green/30",
    glow: "rgba(16,185,129,0.08)",
    badge: "bg-sc-green/15 text-sc-green border-sc-green/30",
    dotColor: "bg-sc-green",
    news2Color: "text-sc-green",
  },
];

export function PatientsSection() {
  return (
    <section id="patients" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sc-red/20 to-transparent" />
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
            <span className="inline-block text-xs font-semibold tracking-widest text-sc-amber uppercase mb-4 px-3 py-1 rounded-full border border-sc-amber/20 bg-sc-amber/5">
              Patient Acuity
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-sc-text mb-4 leading-tight"
          >
            Three triage levels.
            <br />
            <span className="text-gradient-teal">One chance to get it right.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-sc-text-2 text-lg max-w-2xl mx-auto"
          >
            Real patients with real deterioration curves. ShiftCare uses
            clinically validated obs data — not simplified teaching examples.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {patients.map((p) => (
            <motion.div
              key={p.name}
              variants={scaleIn}
              className={`relative rounded-2xl border ${p.border} overflow-hidden group`}
              style={{
                background: "linear-gradient(135deg, rgba(13,27,46,0.9) 0%, rgba(6,13,26,0.8) 100%)",
                boxShadow: `0 0 40px 0 ${p.glow}`,
              }}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              {/* Triage header */}
              <div className={`px-5 py-3 border-b ${p.border} flex items-center justify-between`}>
                <div className="flex items-center gap-2">
                  <motion.div
                    className={`w-2.5 h-2.5 rounded-full ${p.dotColor}`}
                    animate={{
                      opacity: p.triage === "RED" ? [1, 0.3, 1] : 1,
                    }}
                    transition={{ duration: 1, repeat: p.triage === "RED" ? Infinity : 0 }}
                  />
                  <span className={`text-xs font-bold tracking-widest px-2 py-0.5 rounded border ${p.badge}`}>
                    {p.triage}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-sc-text-3">NEWS2 Score</span>
                  <div className={`font-display text-2xl font-bold ${p.news2Color}`}>{p.news2}</div>
                </div>
              </div>

              {/* Patient info */}
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-sc-text mb-0.5">{p.name}</h3>
                <p className="text-sc-text-3 text-xs mb-5">{p.condition}</p>

                {/* Vitals grid */}
                <div className="space-y-2 mb-5">
                  {p.vitals.map((v) => (
                    <div key={v.label} className="flex items-center justify-between py-1.5 border-b border-white/5">
                      <span className="text-sc-text-3 text-xs">{v.label}</span>
                      <span
                        className={`text-xs font-mono font-semibold ${
                          v.alert ? (p.triage === "RED" ? "text-sc-red" : p.triage === "AMBER" ? "text-sc-amber" : "text-sc-green") : "text-sc-text-2"
                        }`}
                      >
                        {v.value}
                        {v.alert && " ⚠"}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Alert banner */}
                <div className={`rounded-lg px-3 py-2 border ${p.border} flex items-start gap-2`}
                  style={{ background: `${p.glow}` }}
                >
                  <span className="text-xs">📋</span>
                  <div>
                    <span className={`text-xs font-bold block mb-0.5 ${p.badge.split(" ")[1]}`}>
                      {p.alertLevel}
                    </span>
                    <span className="text-xs text-sc-text-2">{p.alert}</span>
                  </div>
                </div>

                {/* Scan line effect on red */}
                {p.triage === "RED" && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                    <motion.div
                      className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-sc-red/30 to-transparent"
                      animate={{ y: ["-100%", "400%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
