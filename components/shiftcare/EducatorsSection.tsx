"use client";

import { motion } from "framer-motion";
import { fadeUp, slideInRight, staggerContainer, viewport } from "@/lib/animations";

const features = [
  {
    icon: "📊",
    title: "Cohort performance dashboards",
    desc: "See how your entire cohort performs across clinical domains. Identify students who are falling behind before they reach placement.",
  },
  {
    icon: "🎯",
    title: "Scenario builder",
    desc: "Build custom scenarios around your curriculum. Set the patient profile, the complexity, and the learning objectives.",
  },
  {
    icon: "📋",
    title: "Assessment-ready reporting",
    desc: "Export individual student reports that map directly to NMC Standards of Proficiency. Reduce assessment admin by 60%.",
  },
  {
    icon: "🔗",
    title: "LMS integration",
    desc: "Connect with Moodle, Canvas, and Blackboard. ShiftCare slots into your existing VLE without IT overhead.",
  },
  {
    icon: "👥",
    title: "Group simulation mode",
    desc: "Run whole-cohort simulation sessions with live leaderboards and real-time decision monitoring for classroom delivery.",
  },
  {
    icon: "📞",
    title: "Dedicated onboarding support",
    desc: "Every institution gets a ShiftCare implementation specialist for the first 90 days. No abandoned rollouts.",
  },
];

const testimonials = [
  {
    quote: "In 12 weeks, our students' NEWS2 accuracy went from 61% to 94%. That's the kind of outcome we used to get after a full placement year.",
    name: "Dr Sarah Chen",
    role: "Lead Nursing Lecturer, University of Leeds",
    avatar: "SC",
    avatarColor: "from-sc-teal to-sc-indigo",
  },
  {
    quote: "The educators dashboard gives us data we've never had before. We can see exactly where each student struggles — before they go on ward.",
    name: "Mark Williams",
    role: "Head of Pre-Registration, NHS Trust Education",
    avatar: "MW",
    avatarColor: "from-sc-indigo to-sc-teal",
  },
];

export function EducatorsSection() {
  return (
    <section id="educators" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sc-teal/15 to-transparent" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-sc-teal/4 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block text-xs font-semibold tracking-widest text-sc-teal uppercase mb-4 px-3 py-1 rounded-full border border-sc-teal/20 bg-sc-teal/5">
              For Educators
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-sc-text mb-4 leading-tight"
          >
            Your students practice.
            <br />
            <span className="text-gradient-teal">You see everything.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-sc-text-2 text-lg max-w-2xl mx-auto"
          >
            ShiftCare gives educators the data they need to personalise
            teaching and evidence student readiness for clinical placement.
          </motion.p>
        </motion.div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Features grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="surface-card rounded-xl p-5 border border-sc-teal/10 hover:border-sc-teal/25 transition-colors group"
              >
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-sc-text text-sm mb-2">{f.title}</h3>
                <p className="text-sc-text-3 text-xs leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-6 justify-center"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={slideInRight}
                className="glass rounded-2xl p-7 border border-sc-teal/12"
              >
                <svg className="w-8 h-8 text-sc-teal/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-sc-text text-base leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sc-text text-sm font-semibold">{t.name}</div>
                    <div className="text-sc-text-3 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Accreditation badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {["NMC Approved", "NHS Education", "CQC Aligned", "QAA Mapped"].map((badge) => (
                <span
                  key={badge}
                  className="text-xs px-3 py-1.5 rounded-full bg-sc-surface2 border border-sc-teal/15 text-sc-text-2 font-medium"
                >
                  ✓ {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
