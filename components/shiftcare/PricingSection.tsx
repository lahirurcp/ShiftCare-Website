"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  atmosphericFade,
  blurIn,
  cinematicReveal,
  drawIn,
  staggerCinematic,
  viewportOnce,
  viewport,
} from "@/lib/animations";

const tiers = [
  {
    name: "Pilot",
    price: "Free",
    period: "30 days",
    description: "Try ShiftCare with a single cohort, no commitment.",
    features: [
      "5 clinical scenarios",
      "Up to 30 students",
      "Maya AI debrief",
      "NEWS2 + SBAR coverage",
      "Basic educator view",
    ],
    cta: { label: "Start pilot", href: "/book" },
    highlight: false,
  },
  {
    name: "Institution",
    price: "£12",
    period: "per student / year",
    description: "Full library, educator dashboard, and NMC-mapped reporting.",
    features: [
      "48 clinical scenarios",
      "Up to 400 students",
      "Maya AI mentor — full debrief",
      "NMC-mapped evidence portfolios",
      "Cohort-level analytics dashboard",
      "Rollout support included",
    ],
    cta: { label: "Book a demo", href: "/book" },
    highlight: true,
  },
  {
    name: "NHS Trust",
    price: "Custom",
    period: "multi-site licensing",
    description: "Unlimited students, custom scenarios, integration support.",
    features: [
      "Unlimited students + sites",
      "Custom scenario authoring",
      "LMS / eLearning integration",
      "Trust-branded environment",
      "Dedicated account manager",
      "CQC-aligned reporting",
    ],
    cta: { label: "Talk to us", href: "/book" },
    highlight: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-40 md:py-52 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[600px] h-[500px] bg-sc-indigo/[0.025] rounded-full blur-[150px] translate-x-1/4" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          variants={staggerCinematic}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-20 md:mb-28"
        >
          <motion.span variants={atmosphericFade} className="cinematic-label mb-6">
            Pricing
          </motion.span>
          <motion.h2
            variants={cinematicReveal}
            className="font-display font-bold text-sc-text leading-tight mt-6 mb-5"
            style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)" }}
          >
            One platform.
            <br />
            <span className="text-gradient-teal">Every level of readiness.</span>
          </motion.h2>
          <motion.p variants={blurIn} className="text-sc-text-2 text-lg max-w-xl leading-relaxed">
            Start free. Scale when your programme is ready. All tiers include
            NMC-aligned scenarios and Maya AI debrief.
          </motion.p>
        </motion.div>

        {/* Top separator */}
        <motion.div
          variants={drawIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="h-px bg-gradient-to-r from-transparent via-sc-teal/15 to-transparent mb-0"
        />

        {/* Pricing tiers — editorial rows */}
        <div className="divide-y divide-sc-teal/8">
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={staggerCinematic}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid grid-cols-1 md:grid-cols-[220px_1fr_200px] gap-8 md:gap-12 py-14 md:py-16"
            >
              {/* Left — tier name + price */}
              <motion.div variants={blurIn} className="flex flex-col justify-start">
                <span className="cinematic-label mb-4">{tier.name}</span>
                <span
                  className={`font-display font-bold leading-none block ${tier.highlight ? "text-sc-teal" : "text-sc-text"}`}
                  style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
                >
                  {tier.price}
                </span>
                <span className="text-sc-text-3 text-xs mt-1.5">{tier.period}</span>
                <p className="text-sc-text-3 text-sm leading-relaxed mt-4 max-w-[180px]">
                  {tier.description}
                </p>
              </motion.div>

              {/* Middle — feature list */}
              <motion.div variants={blurIn} className="flex flex-col justify-center">
                <ul className="space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sc-text-2 text-sm leading-snug">
                      <svg
                        className="w-3.5 h-3.5 text-sc-teal/60 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Right — CTA */}
              <motion.div variants={blurIn} className="flex flex-col justify-center items-start md:items-end">
                <Link
                  href={tier.cta.href}
                  className={`inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-150 ${
                    tier.highlight
                      ? "bg-sc-teal text-sc-bg hover:brightness-110 shadow-lg shadow-sc-teal/20"
                      : "border border-sc-teal/20 text-sc-text-2 hover:text-sc-text hover:border-sc-teal/40 hover:bg-sc-teal/5"
                  }`}
                >
                  {tier.cta.label}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom separator */}
        <motion.div
          variants={drawIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="h-px bg-gradient-to-r from-transparent via-sc-teal/15 to-transparent"
        />

        {/* Footnote */}
        <motion.p
          variants={blurIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-sc-text-3 text-xs mt-8 text-center"
        >
          All pricing excludes VAT. Institution pricing applies per enrolled student, per academic year.
          NHS Trust licensing is site-based — contact us for a quote.
        </motion.p>
      </div>
    </section>
  );
}
