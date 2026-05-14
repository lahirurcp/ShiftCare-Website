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

const problems = [
  {
    countTo: 68,
    countSuffix: "%",
    statStatic: null,
    statDetail: "of clinical\nerrors",
    title: "Textbooks don't simulate pressure",
    body: "Students memorise protocols in calm classrooms, then freeze when a real patient's obs drop at 3am. Knowledge without decision-making practice is not clinical readiness.",
    accentColor: "text-sc-red",
    lineVia: "via-sc-red/15",
  },
  {
    countTo: 47,
    countSuffix: "k",
    statStatic: null,
    statDetail: "avg. cost of a\nsentinel event",
    title: "Simulation labs are expensive and scarce",
    body: "High-fidelity mannequins cost £80k+. There aren't enough to give every student enough reps. ShiftCare gives unlimited, on-demand practice at a fraction of the cost.",
    accentColor: "text-sc-amber",
    lineVia: "via-sc-amber/15",
  },
  {
    countTo: null,
    countSuffix: "",
    statStatic: "1 in 3",
    statDetail: "new nurses lack\nconfidence (NMC, 2023)",
    title: "Feedback loops are broken",
    body: "After a placement, students wait weeks for feedback. ShiftCare gives immediate, evidence-linked rationale after every decision — so students learn in the moment, not in hindsight.",
    accentColor: "text-sc-teal",
    lineVia: "via-sc-teal/15",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="relative py-40 md:py-52 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[700px] h-[500px] bg-sc-red/[0.025] rounded-full blur-[140px] -translate-x-1/4" />
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
            The Problem
          </motion.span>
          <motion.h2
            variants={cinematicReveal}
            className="font-display font-bold text-sc-text leading-[1.05] mt-6"
            style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)" }}
          >
            Traditional nursing education
            <br />
            <span className="text-gradient-teal">has a readiness gap.</span>
          </motion.h2>
        </motion.div>

        {/* Problems — editorial, no cards */}
        <div>
          {problems.map((p) => (
            <div key={p.title}>

              {/* Animated separator */}
              <motion.div
                variants={drawIn}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className={`h-px bg-gradient-to-r from-transparent ${p.lineVia} to-transparent`}
              />

              <motion.div
                variants={staggerCinematic}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-20 py-16 md:py-20"
              >
                {/* Stat */}
                <motion.div variants={blurIn} className="flex flex-col justify-start md:justify-center">
                  <span
                    className={`font-display font-bold ${p.accentColor} leading-none block`}
                    style={{ fontSize: "clamp(2.6rem, 6vw, 4.2rem)" }}
                  >
                    {p.countTo !== null ? (
                      <CountUp
                        to={p.countTo}
                        prefix={p.accentColor === "text-sc-amber" ? "£" : ""}
                        suffix={p.countSuffix}
                        duration={1.6}
                      />
                    ) : (
                      p.statStatic
                    )}
                  </span>
                  <span className="text-sc-text-3 text-sm leading-snug mt-2 whitespace-pre-line">
                    {p.statDetail}
                  </span>
                </motion.div>

                {/* Content */}
                <motion.div variants={blurIn} className="flex flex-col justify-center">
                  <h3
                    className="font-display font-semibold text-sc-text leading-snug mb-4"
                    style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-sc-text-2 leading-relaxed max-w-2xl"
                    style={{ fontSize: "clamp(0.9rem, 1.5vw, 1rem)" }}
                  >
                    {p.body}
                  </p>
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
