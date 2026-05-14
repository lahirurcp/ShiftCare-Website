"use client";

import { motion } from "framer-motion";
import {
  atmosphericFade,
  blurIn,
  cinematicReveal,
  slideInRight,
  staggerCinematic,
  viewport,
} from "@/lib/animations";

const messages = [
  {
    role: "student",
    text: "I've given Mrs Thompson the PRN paracetamol. Her BP was low so I didn't escalate — I didn't want to disturb the registrar.",
    time: "14:23",
  },
  {
    role: "maya",
    text: "I understand the hesitation, but let's look at the full picture. Her BP of 88/54 combined with a temperature of 38.9°C and RR of 24 gives her a NEWS2 of 7 — that's a Category 3 response. The NICE NG51 guideline requires you to escalate within 15 minutes.",
    time: "14:23",
    highlight: "NEWS2 = 7 → Urgent escalation required (NICE NG51)",
  },
  {
    role: "student",
    text: "I didn't realise the RR counted that much in the NEWS2 score.",
    time: "14:24",
  },
  {
    role: "maya",
    text: "Respiratory rate is often the earliest sign of deterioration — and the most overlooked. In sepsis, RR rises before BP drops. That's why NEWS2 weights it so heavily. RR above 20 is your early warning.",
    time: "14:24",
    highlight: "RR > 20 = early sepsis indicator. Always check alongside BP.",
  },
];

const capabilities = [
  {
    title: "References NICE, NHS, and NANDA-I guidelines in real time",
    sub: "Evidence-linked rationale for every decision",
  },
  {
    title: "Identifies knowledge gaps across 6 clinical domains",
    sub: "Personalised coaching — not one-size feedback",
  },
  {
    title: "Non-judgemental by design",
    sub: "Explains mistakes as learning moments, never as failures",
  },
  {
    title: "Adapts coaching to each student's history",
    sub: "Remembers previous sessions and builds on them",
  },
];

export function MayaSection() {
  return (
    <section id="maya" className="relative py-40 md:py-52 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-sc-indigo/[0.045] rounded-full blur-[130px] translate-x-1/3" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-sc-teal/[0.03] rounded-full blur-[120px] -translate-x-1/4" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Left — editorial copy */}
          <motion.div
            variants={staggerCinematic}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.span variants={atmosphericFade} className="cinematic-label mb-6">
              AI Mentor
            </motion.span>
            <motion.h2
              variants={cinematicReveal}
              className="font-display font-bold text-sc-text leading-tight mt-6 mb-6"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
            >
              Meet Maya.
              <br />
              <span className="text-gradient-teal">Your AI clinical mentor.</span>
            </motion.h2>
            <motion.p
              variants={blurIn}
              className="text-sc-text-2 text-lg leading-relaxed mb-12 max-w-lg"
            >
              Maya doesn&apos;t tell you the answer — she explains the clinical
              reasoning behind it. She references NICE guidelines, NEWS2 scoring,
              and NANDA-I nursing diagnoses. She adapts to your learning gaps.
            </motion.p>

            {/* Capabilities — editorial, no emoji */}
            <motion.div variants={staggerCinematic} className="space-y-7">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.title}
                  variants={blurIn}
                  className="flex items-start gap-4"
                >
                  {/* Clinical mark */}
                  <div className="mt-1.5 flex-shrink-0">
                    <div className="w-4 h-px bg-sc-teal/50" />
                  </div>
                  <div>
                    <p className="text-sc-text text-sm font-medium leading-snug mb-0.5">
                      {cap.title}
                    </p>
                    <p className="text-sc-text-3 text-xs leading-relaxed">{cap.sub}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — chat UI */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div
              className="relative rounded-2xl overflow-hidden border border-sc-indigo/20 glow-indigo"
              style={{
                background:
                  "linear-gradient(145deg, rgb(var(--sc-surface) / 0.95) 0%, rgb(var(--sc-bg) / 0.9) 100%)",
              }}
            >
              {/* Chat header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-sc-indigo/12">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sc-indigo/80 to-sc-teal/60 flex items-center justify-center">
                    <span className="text-white text-sm font-bold font-display">M</span>
                  </div>
                  <motion.div
                    className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-sc-teal border-2 border-sc-bg"
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
                    aria-hidden
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-sc-text">Maya</div>
                  <div className="text-xs text-sc-teal/80">Clinical AI Mentor · Active</div>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-sc-teal"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  />
                  <span className="text-xs text-sc-text-3">Live session</span>
                </div>
              </div>

              {/* Messages — staggered to simulate real conversation timing */}
              <div className="p-5 space-y-4">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      delay: [0.2, 1.0, 2.1, 3.0][i] ?? i * 0.6,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`flex ${msg.role === "student" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.role === "maya" && (
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sc-indigo/70 to-sc-teal/50 flex items-center justify-center text-white text-xs font-bold mr-2 flex-shrink-0 mt-1">
                        M
                      </div>
                    )}
                    <div
                      className={`max-w-[86%] flex flex-col gap-1.5 ${
                        msg.role === "student" ? "items-end" : "items-start"
                      }`}
                    >
                      <div
                        className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                          msg.role === "student"
                            ? "bg-sc-surface2/80 text-sc-text-2 rounded-tr-sm"
                            : "bg-sc-indigo/12 border border-sc-indigo/18 text-sc-text rounded-tl-sm"
                        }`}
                      >
                        {msg.text}
                      </div>
                      {msg.highlight && (
                        <div className="bg-sc-teal/8 border border-sc-teal/18 rounded-lg px-3 py-2 text-xs text-sc-teal font-medium">
                          {msg.highlight}
                        </div>
                      )}
                      <span className="text-xs text-sc-text-3/60 px-1">{msg.time}</span>
                    </div>
                  </motion.div>
                ))}

                {/* Typing indicator */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sc-indigo/70 to-sc-teal/50 flex items-center justify-center text-white text-xs font-bold">
                    M
                  </div>
                  <div className="bg-sc-indigo/12 border border-sc-indigo/18 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5">
                    {[0, 1, 2].map((j) => (
                      <motion.div
                        key={j}
                        className="w-1.5 h-1.5 rounded-full bg-sc-indigo/50"
                        animate={{ opacity: [0.25, 1, 0.25], y: [0, -2, 0] }}
                        transition={{
                          duration: 1.1,
                          repeat: Infinity,
                          delay: j * 0.18,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="px-4 py-3 border-t border-sc-indigo/10">
                <div className="flex items-center gap-2 bg-sc-bg/50 rounded-xl px-4 py-2.5 border border-sc-teal/20">
                  <span className="text-sc-text-3 text-sm flex-1 select-none">
                    Ask Maya about this patient...
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-sc-teal/15 border border-sc-teal/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3.5 h-3.5 text-sc-teal"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
