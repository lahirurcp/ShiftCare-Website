"use client";

import { motion } from "framer-motion";
import { fadeUp, slideInLeft, slideInRight, staggerContainer, viewport } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "You're handed the ward",
    body: "Six patients. Varying acuity. Time is already running. No orientation — just like a real shift handover.",
    icon: "🏥",
    side: "left",
  },
  {
    number: "02",
    title: "Read the obs and history",
    body: "Each patient has vital signs, drug charts, nursing notes, and a deterioration timeline. Prioritise who needs you first.",
    icon: "📊",
    side: "right",
  },
  {
    number: "03",
    title: "Make clinical decisions",
    body: "Escalate? Administer PRN meds? Call for a SBAR handover? Every decision you make — or delay — changes outcomes.",
    icon: "⚡",
    side: "left",
  },
  {
    number: "04",
    title: "Watch consequences unfold",
    body: "Patients deteriorate if you don't act. NEWS2 scores update in real time. Miss a sepsis flag and the patient crashes.",
    icon: "📈",
    side: "right",
  },
  {
    number: "05",
    title: "Maya debriefs your shift",
    body: "Your AI mentor reviews every decision, explains what the evidence says, and flags knowledge gaps without judgement.",
    icon: "🤖",
    side: "left",
  },
  {
    number: "06",
    title: "Track your clinical growth",
    body: "Competency scores accumulate across sessions. Educators see cohort-level patterns and identify students at risk.",
    icon: "📈",
    side: "right",
  },
  {
    number: "07",
    title: "Repeat until it's instinct",
    body: "48 scenarios, scaling difficulty. First-year fundamentals to charge nurse preparation — one platform.",
    icon: "🎯",
    side: "left",
  },
];

export function WorkflowSection() {
  return (
    <section id="workflow" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sc-teal/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sc-teal/15 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sc-teal/[0.03] rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-20 md:mb-28"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block text-xs font-semibold tracking-widest text-sc-teal uppercase mb-5 px-3 py-1.5 rounded-full border border-sc-teal/20 bg-sc-teal/5">
              How it Works
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-sc-text mb-4 leading-tight"
          >
            A shift that teaches.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sc-text-2 text-lg max-w-xl mx-auto leading-relaxed">
            Seven steps. Unlimited repetitions. Each session rewires
            clinical decision-making at the level of reflex.
          </motion.p>
        </motion.div>

        {/* Mobile: vertical numbered list */}
        <div className="md:hidden space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="flex gap-4"
            >
              {/* Number column */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-9 h-9 rounded-full bg-sc-teal/10 border border-sc-teal/25 flex items-center justify-center">
                  <span className="font-display font-bold text-xs text-sc-teal">{step.number}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 min-h-[2rem] bg-gradient-to-b from-sc-teal/25 to-transparent mt-2" />
                )}
              </div>
              {/* Content */}
              <div className="pb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{step.icon}</span>
                  <h3 className="font-display font-bold text-base text-sc-text">{step.title}</h3>
                </div>
                <p className="text-sc-text-2 text-sm leading-relaxed">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: alternating timeline */}
        <div className="hidden md:block relative">
          {/* Centre line */}
          <div className="absolute left-1/2 -translate-x-px top-4 bottom-4 w-px bg-gradient-to-b from-sc-teal/40 via-sc-indigo/25 to-transparent" />

          <div className="space-y-6">
            {steps.map((step, i) => {
              const isLeft = step.side === "left";
              return (
                <motion.div
                  key={step.number}
                  variants={isLeft ? slideInLeft : slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  className={`relative flex items-start gap-0 ${
                    isLeft ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Content — 5/12 */}
                  <div className={`w-5/12 ${isLeft ? "pr-10 text-right" : "pl-10 text-left"}`}>
                    <div className="surface-card rounded-2xl p-6 border border-sc-teal/10 hover:border-sc-teal/22 transition-all duration-300 hover:-translate-y-1 group">
                      <div className={`flex items-center gap-2.5 mb-3 ${isLeft ? "flex-row-reverse" : "flex-row"}`}>
                        <span className="text-xl">{step.icon}</span>
                        <span className="text-xs font-bold tracking-widest text-sc-teal font-display">
                          STEP {step.number}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-base text-sc-text mb-2 leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-sc-text-2 text-sm leading-relaxed">{step.body}</p>
                    </div>
                  </div>

                  {/* Centre dot — 2/12 */}
                  <div className="w-2/12 flex justify-center items-start pt-7">
                    <motion.div
                      className="w-3.5 h-3.5 rounded-full bg-sc-teal border-2 border-sc-bg shadow-md shadow-sc-teal/50 z-10 flex-shrink-0"
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(0,212,160,0.5)",
                          "0 0 0 7px rgba(0,212,160,0)",
                          "0 0 0 0 rgba(0,212,160,0)",
                        ],
                      }}
                      transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.28 }}
                    />
                  </div>

                  {/* Spacer — 5/12 */}
                  <div className="w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
