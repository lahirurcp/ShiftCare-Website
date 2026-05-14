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
import { CountUp } from "@/components/shiftcare/CountUp";

const outcomes = [
  {
    countTo: 94,
    suffix: "%",
    label: "NEWS2 accuracy",
    context: "after 12 weeks",
    body: "In controlled pilots, students move from 61% to 94% NEWS2 accuracy. The kind of outcome previously only achieved after a full placement year.",
  },
  {
    countTo: 60,
    suffix: "%",
    label: "less assessment admin",
    context: "per semester",
    body: "NMC-mapped reporting means ShiftCare generates evidence portfolios automatically. Less paperwork. More time spent actually teaching.",
  },
  {
    countTo: 48,
    suffix: "",
    label: "clinical scenarios",
    context: "across 6 domains",
    body: "From sepsis recognition to insulin management, every major clinical competency is covered — with custom scenarios buildable to your curriculum.",
  },
];

const testimonials = [
  {
    quote:
      "In 12 weeks, our students' NEWS2 accuracy went from 61% to 94%. That's the kind of outcome we used to get after a full placement year.",
    name: "Dr Sarah Chen",
    role: "Lead Nursing Lecturer, University of Leeds",
    initials: "SC",
  },
  {
    quote:
      "The educators dashboard gives us data we've never had before. We can see exactly where each student struggles — before they go on ward.",
    name: "Mark Williams",
    role: "Head of Pre-Registration, NHS Trust Education",
    initials: "MW",
  },
];

const accreditations = [
  "NMC Approved",
  "NHS Education",
  "CQC Aligned",
  "QAA Mapped",
  "NICE Referenced",
];

export function EducatorsSection() {
  return (
    <section id="educators" className="relative py-40 md:py-52 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[600px] h-[500px] bg-sc-teal/[0.03] rounded-full blur-[140px] -translate-x-1/4" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[400px] bg-sc-indigo/[0.03] rounded-full blur-[130px] translate-x-1/4" />
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
            For Educators
          </motion.span>
          <motion.h2
            variants={cinematicReveal}
            className="font-display font-bold text-sc-text leading-tight mt-6 mb-5"
            style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)" }}
          >
            Your students practice.
            <br />
            <span className="text-gradient-teal">You see everything.</span>
          </motion.h2>
          <motion.p variants={blurIn} className="text-sc-text-2 text-lg max-w-2xl leading-relaxed">
            ShiftCare gives educators the data they need to personalise teaching
            and evidence student readiness for clinical placement.
          </motion.p>
        </motion.div>

        {/* Outcomes — editorial, no cards */}
        <div className="mb-32 md:mb-40">
          {outcomes.map((o) => (
            <div key={o.label}>
              <motion.div
                variants={drawIn}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="h-px bg-gradient-to-r from-transparent via-sc-teal/12 to-transparent"
              />
              <motion.div
                variants={staggerCinematic}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-20 py-16 md:py-18"
              >
                <motion.div variants={blurIn}>
                  <span
                    className="font-display font-bold text-sc-teal leading-none block"
                    style={{ fontSize: "clamp(2.4rem, 5.5vw, 3.8rem)" }}
                  >
                    <CountUp to={o.countTo} suffix={o.suffix} duration={1.6} />
                  </span>
                  <span className="text-sc-text text-xs font-semibold tracking-wide block mt-2">
                    {o.label}
                  </span>
                  <span className="text-sc-text-3 text-xs block">{o.context}</span>
                </motion.div>
                <motion.div variants={blurIn} className="flex items-center">
                  <p className="text-sc-text-2 leading-relaxed max-w-lg"
                    style={{ fontSize: "clamp(0.9rem, 1.6vw, 1rem)" }}>
                    {o.body}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          ))}
          <motion.div
            variants={drawIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="h-px bg-gradient-to-r from-transparent via-sc-teal/12 to-transparent"
          />
        </div>

        {/* Testimonials */}
        <motion.div
          variants={staggerCinematic}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-14"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={blurIn}
              className="rounded-2xl p-8 border border-sc-teal/10 bg-sc-surface/25 backdrop-blur-sm"
            >
              {/* Quotation mark — refined SVG, no emoji */}
              <svg
                className="w-6 h-6 text-sc-teal/30 mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-sc-text text-base leading-relaxed mb-8 font-light">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sc-teal/15 to-sc-indigo/15 border border-sc-teal/15 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-sc-teal">{t.initials}</span>
                </div>
                <div>
                  <div className="text-sc-text text-sm font-semibold">{t.name}</div>
                  <div className="text-sc-text-3 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Accreditation marks */}
        <motion.div
          variants={staggerCinematic}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-wrap items-center gap-2.5"
        >
          {accreditations.map((a) => (
            <motion.span
              key={a}
              variants={blurIn}
              className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded border border-sc-teal/12 text-sc-text-2 font-medium bg-sc-surface/20"
            >
              <span className="w-1 h-1 rounded-full bg-sc-teal/60" />
              {a}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
