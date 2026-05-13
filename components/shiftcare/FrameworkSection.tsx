"use client";

import { motion } from "framer-motion";
import { fadeUp, scaleIn, staggerContainer, viewport } from "@/lib/animations";

const frameworks = [
  {
    id: "news2",
    name: "NEWS2",
    fullName: "National Early Warning Score 2",
    description: "Standardised vital sign scoring used across NHS acute care. Tracks RR, SpO₂, temperature, BP, pulse and consciousness.",
    tags: ["Sepsis", "Deterioration", "Escalation"],
    score: "0–20",
    scoreLabel: "Risk score range",
    color: "teal",
    size: "large",
    icon: "📊",
  },
  {
    id: "nanda",
    name: "NANDA-I",
    fullName: "North American Nursing Diagnosis Association",
    description: "Standardised nursing diagnosis taxonomy. Gives students the language to document clinical findings and care plans.",
    tags: ["Documentation", "Care Planning"],
    color: "indigo",
    size: "medium",
    icon: "📝",
  },
  {
    id: "sbar",
    name: "SBAR",
    fullName: "Situation, Background, Assessment, Recommendation",
    description: "The structured communication framework used for handovers and escalations. Built into every ShiftCare patient interaction.",
    tags: ["Handover", "Communication", "Escalation"],
    color: "teal",
    size: "medium",
    icon: "📞",
  },
  {
    id: "nice",
    name: "NICE NG51",
    fullName: "NICE Guideline NG51 — Sepsis",
    description: "Sepsis recognition and management. ShiftCare's red triage patients are built directly from NICE NG51 criteria.",
    tags: ["Sepsis", "NICE"],
    color: "red",
    size: "small",
    icon: "🏥",
  },
  {
    id: "jbds",
    name: "JBDS-IP",
    fullName: "Joint British Diabetes Societies",
    description: "Hypoglycaemia and DKA management guidelines. Used in ShiftCare's diabetic patient scenarios.",
    tags: ["Diabetes", "DKA"],
    color: "amber",
    size: "small",
    icon: "💉",
  },
  {
    id: "nhs",
    name: "NHS Long Term Plan",
    fullName: "NHS Workforce & Education Framework",
    description: "ShiftCare's competency mapping aligns to NHS workforce development standards for pre-registration nursing.",
    tags: ["Education", "Workforce"],
    color: "indigo",
    size: "small",
    icon: "📋",
  },
];

const colorMap = {
  teal: {
    border: "border-sc-teal/20",
    tag: "bg-sc-teal/10 text-sc-teal border-sc-teal/20",
    title: "text-sc-teal",
    bg: "bg-sc-teal/5",
    glow: "rgba(0,212,160,0.08)",
  },
  indigo: {
    border: "border-sc-indigo/20",
    tag: "bg-sc-indigo/10 text-sc-indigo border-sc-indigo/20",
    title: "text-sc-indigo",
    bg: "bg-sc-indigo/5",
    glow: "rgba(99,102,241,0.08)",
  },
  red: {
    border: "border-sc-red/20",
    tag: "bg-sc-red/10 text-sc-red border-sc-red/20",
    title: "text-sc-red",
    bg: "bg-sc-red/5",
    glow: "rgba(239,68,68,0.08)",
  },
  amber: {
    border: "border-sc-amber/20",
    tag: "bg-sc-amber/10 text-sc-amber border-sc-amber/20",
    title: "text-sc-amber",
    bg: "bg-sc-amber/5",
    glow: "rgba(245,158,11,0.08)",
  },
};

export function FrameworkSection() {
  return (
    <section id="framework" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sc-teal/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sc-indigo/15 to-transparent" />
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
            <span className="inline-block text-xs font-semibold tracking-widest text-sc-teal uppercase mb-4 px-3 py-1 rounded-full border border-sc-teal/20 bg-sc-teal/5">
              Clinical Framework
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-sc-text mb-4 leading-tight"
          >
            Built on the standards
            <br />
            <span className="text-gradient-teal">your accreditors require.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-sc-text-2 text-lg max-w-2xl mx-auto"
          >
            ShiftCare doesn&apos;t invent its own frameworks. Every scenario,
            every decision, every rationale maps to a clinical standard your
            students need to graduate with.
          </motion.p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {/* Large card — NEWS2 */}
          {frameworks.filter((f) => f.size === "large").map((f) => {
            const c = colorMap[f.color as keyof typeof colorMap];
            return (
              <motion.div
                key={f.id}
                variants={scaleIn}
                className={`lg:col-span-2 relative surface-card rounded-2xl p-7 border ${c.border} group hover:border-opacity-50 transition-all duration-300`}
                style={{ boxShadow: `0 0 40px 0 ${c.glow}` }}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className={`font-display text-4xl font-bold ${c.title} mb-1`}>{f.name}</div>
                    <div className="text-sc-text-3 text-xs">{f.fullName}</div>
                  </div>
                  <span className="text-3xl">{f.icon}</span>
                </div>
                <p className="text-sc-text-2 text-sm leading-relaxed mb-6">{f.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {f.tags.map((tag) => (
                      <span key={tag} className={`text-xs px-2 py-0.5 rounded border ${c.tag}`}>{tag}</span>
                    ))}
                  </div>
                  {f.score && (
                    <div className="text-right">
                      <div className={`font-display text-2xl font-bold ${c.title}`}>{f.score}</div>
                      <div className="text-xs text-sc-text-3">{f.scoreLabel}</div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}

          {/* Medium cards */}
          {frameworks.filter((f) => f.size === "medium").map((f) => {
            const c = colorMap[f.color as keyof typeof colorMap];
            return (
              <motion.div
                key={f.id}
                variants={scaleIn}
                className={`relative surface-card rounded-2xl p-6 border ${c.border} group hover:border-opacity-50 transition-all duration-300`}
                style={{ boxShadow: `0 0 30px 0 ${c.glow}` }}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className={`font-display text-2xl font-bold ${c.title} mb-1`}>{f.name}</div>
                    <div className="text-sc-text-3 text-xs">{f.fullName}</div>
                  </div>
                  <span className="text-2xl">{f.icon}</span>
                </div>
                <p className="text-sc-text-2 text-xs leading-relaxed mb-4">{f.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {f.tags.map((tag) => (
                    <span key={tag} className={`text-xs px-2 py-0.5 rounded border ${c.tag}`}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* Small cards */}
          {frameworks.filter((f) => f.size === "small").map((f) => {
            const c = colorMap[f.color as keyof typeof colorMap];
            return (
              <motion.div
                key={f.id}
                variants={scaleIn}
                className={`relative surface-card rounded-2xl p-5 border ${c.border} group hover:border-opacity-50 transition-all duration-300`}
                style={{ boxShadow: `0 0 20px 0 ${c.glow}` }}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{f.icon}</span>
                  <div className={`font-display text-xl font-bold ${c.title}`}>{f.name}</div>
                </div>
                <p className="text-sc-text-3 text-xs leading-relaxed mb-3">{f.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {f.tags.map((tag) => (
                    <span key={tag} className={`text-xs px-2 py-0.5 rounded border ${c.tag}`}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
