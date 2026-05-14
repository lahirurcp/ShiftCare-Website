"use client";

import { motion } from "framer-motion";
import {
  atmosphericFade,
  blurIn,
  cinematicReveal,
  drawIn,
  staggerCinematic,
  viewport,
  viewportOnce,
} from "@/lib/animations";

const frameworks = [
  {
    id: "news2",
    abbr: "NEWS2",
    fullName: "National Early Warning Score 2",
    source: "NHS England — mandatory across all UK acute trusts since 2017",
    body: "Standardised vital sign scoring system tracking respiratory rate, SpO₂, temperature, systolic BP, heart rate, and level of consciousness. ShiftCare's patient deterioration curves are calibrated directly to NEWS2 thresholds — students score in real time as vitals shift during a shift.",
    accentColor: "text-sc-teal",
    lineVia: "via-sc-teal/15",
    showChart: true,
  },
  {
    id: "nice",
    abbr: "NICE NG51",
    fullName: "Sepsis: Recognition, Diagnosis and Early Management",
    source: "National Institute for Health and Care Excellence — NICE Guideline NG51",
    body: "Sepsis recognition and red flag criteria underpin ShiftCare's critical triage patients. Students must identify the NICE NG51 red flag threshold and escalate before irreversible deterioration — the exact decision window that determines patient survival on ward.",
    accentColor: "text-sc-red",
    lineVia: "via-sc-red/15",
    showChart: false,
  },
  {
    id: "nanda",
    abbr: "NANDA-I",
    fullName: "North American Nursing Diagnosis Association International",
    source: "NANDA-I Taxonomy III — international nursing diagnosis standard",
    body: "The structured nursing diagnosis taxonomy Maya uses when debriefing student decisions. Students learn to frame clinical findings in NANDA-I language — accurately documenting assessment, building care plans, and communicating diagnosis — a core NMC competency that placements expect from day one.",
    accentColor: "text-sc-indigo",
    lineVia: "via-sc-indigo/15",
    showChart: false,
  },
  {
    id: "sbar",
    abbr: "SBAR",
    fullName: "Situation · Background · Assessment · Recommendation",
    source: "NHS England patient safety communication framework",
    body: "The structured escalation framework built into every ShiftCare patient interaction. When a patient deteriorates, students must formulate a complete SBAR handover to escalate — graded by Maya against the specific criteria that ward nurses and registrars actually use to act on the call.",
    accentColor: "text-sc-text",
    lineVia: "via-sc-teal/10",
    showChart: false,
  },
  {
    id: "jbds",
    abbr: "JBDS-IP",
    fullName: "Joint British Diabetes Societies Inpatient Guidelines",
    source: "JBDS-IP — specialist inpatient diabetes management guidance",
    body: "Hypoglycaemia recognition and DKA management protocols underpin ShiftCare's amber triage diabetic scenarios. Clinical thresholds, intervention sequences, and monitoring frequencies are drawn directly from current JBDS-IP guidance — not simplified for teaching, but used as written.",
    accentColor: "text-sc-amber",
    lineVia: "via-sc-amber/15",
    showChart: false,
  },
  {
    id: "nmc",
    abbr: "NMC 2018",
    fullName: "Future Nurse: Standards of Proficiency for Registered Nurses",
    source: "Nursing and Midwifery Council — pre-registration competency standard",
    body: "ShiftCare's scenario library maps to all seven NMC platforms — from promoting health to leading and managing care. Every completed shift generates an evidence portfolio entry mapped to specific NMC proficiencies, giving educators the documented readiness evidence they need for placement approval.",
    accentColor: "text-sc-text-2",
    lineVia: "via-sc-teal/10",
    showChart: false,
  },
];

const news2Rows = [
  { param: "RR", score: 3, label: "≥25/min" },
  { param: "SpO₂", score: 3, label: "≤91%" },
  { param: "BP sys", score: 3, label: "≤90 mmHg" },
  { param: "HR", score: 1, label: "91–110" },
  { param: "Temp", score: 1, label: "≥39.1°C" },
  { param: "AVPU", score: 3, label: "Confusion" },
];

export function FrameworkSection() {
  return (
    <section id="framework" className="relative py-40 md:py-52 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[600px] h-[500px] bg-sc-indigo/[0.025] rounded-full blur-[150px] translate-x-1/4" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          variants={staggerCinematic}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-28 md:mb-36"
        >
          <motion.span variants={atmosphericFade} className="cinematic-label mb-6">
            Clinical Standards
          </motion.span>
          <motion.h2
            variants={cinematicReveal}
            className="font-display font-bold text-sc-text leading-[1.05] mt-6"
            style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)" }}
          >
            Built on the standards
            <br />
            <span className="text-gradient-teal">your accreditors require.</span>
          </motion.h2>
          <motion.p
            variants={blurIn}
            className="text-sc-text-2 text-lg max-w-2xl leading-relaxed mt-6"
          >
            Every scenario, decision, and rationale maps to a named clinical standard.
            No invented criteria — only frameworks your NMC assessors and NICE auditors already recognise.
          </motion.p>
        </motion.div>

        {/* Frameworks — editorial rows, no cards */}
        <div>
          {frameworks.map((f) => (
            <div key={f.id}>
              <motion.div
                variants={drawIn}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className={`h-px bg-gradient-to-r from-transparent ${f.lineVia} to-transparent`}
              />

              <motion.div
                variants={staggerCinematic}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-20 py-14 md:py-16"
              >
                {/* Left: Abbreviation + full name */}
                <motion.div variants={blurIn} className="flex flex-col justify-start md:justify-center">
                  <span
                    className={`font-display font-bold ${f.accentColor} leading-none block`}
                    style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)" }}
                  >
                    {f.abbr}
                  </span>
                  <span className="text-sc-text-3 text-xs font-mono leading-snug mt-3 max-w-[180px]">
                    {f.fullName}
                  </span>
                </motion.div>

                {/* Right: Source citation + body + optional chart */}
                <motion.div variants={blurIn} className="flex flex-col justify-center">
                  <p className="text-sc-text-3 text-xs font-mono mb-5 leading-relaxed">
                    {f.source}
                  </p>
                  <p
                    className="text-sc-text-2 leading-relaxed max-w-2xl"
                    style={{ fontSize: "clamp(0.9rem, 1.5vw, 1rem)" }}
                  >
                    {f.body}
                  </p>

                  {/* NEWS2 score chart — inline under the NEWS2 framework entry */}
                  {f.showChart && (
                    <div className="mt-8 max-w-sm">
                      <span
                        className="cinematic-label block mb-4"
                        style={{ opacity: 0.45 }}
                      >
                        Critical presentation — score components
                      </span>
                      <div className="space-y-2.5">
                        {news2Rows.map((row, i) => (
                          <div key={row.param} className="flex items-center gap-3">
                            <span className="text-sc-text-3 text-xs font-mono w-12 flex-shrink-0">
                              {row.param}
                            </span>
                            <div className="flex-1 h-1 bg-sc-surface2 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-sc-teal rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${(row.score / 3) * 100}%` }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{
                                  duration: 0.7,
                                  delay: i * 0.09,
                                  ease: [0.22, 1, 0.36, 1],
                                }}
                              />
                            </div>
                            <span className="text-sc-text-3 text-xs font-mono w-16 text-right flex-shrink-0">
                              {row.label}
                            </span>
                            <span className="text-xs font-bold font-mono text-sc-teal w-4 text-right flex-shrink-0">
                              {row.score}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-sc-surface2">
                        <span className="text-sc-text-3 text-xs font-mono">Total score</span>
                        <span className="text-sc-teal font-bold font-mono text-sm">
                          14 → Urgent escalation
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            </div>
          ))}

          {/* Closing separator */}
          <motion.div
            variants={drawIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="h-px bg-gradient-to-r from-transparent via-sc-teal/12 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
