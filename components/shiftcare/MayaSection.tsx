"use client";

import { motion } from "framer-motion";
import { fadeUp, slideInLeft, slideInRight, staggerContainer, viewport } from "@/lib/animations";

const messages = [
  {
    role: "student",
    text: "I've given Mrs Thompson the PRN paracetamol. Her BP was low so I didn't escalate — I didn't want to disturb the registrar.",
    time: "14:23",
  },
  {
    role: "maya",
    text: "I understand the hesitation, but let's look at the full picture. Her BP of 88/54 combined with a temperature of 38.9°C and RR of 24 gives her a NEWS2 of 7 — that's a Category 3 response. The NICE NG51 guideline requires you to escalate within 15 minutes. The registrar needs to know.",
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
    text: "Respiratory rate is often the earliest sign of deterioration — and the most overlooked. In sepsis, RR rises before BP drops. That's why NEWS2 weights it so heavily. You spotted the low BP. Next time, also check: is the RR above 20? That's your early warning. Want me to show you the full NEWS2 chart?",
    time: "14:24",
    highlight: "RR > 20 = early sepsis indicator. Always check alongside BP.",
  },
];

export function MayaSection() {
  return (
    <section id="maya" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sc-indigo/20 to-transparent" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-sc-indigo/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block text-xs font-semibold tracking-widest text-sc-indigo uppercase mb-4 px-3 py-1 rounded-full border border-sc-indigo/20 bg-sc-indigo/5">
                AI Mentor
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-sc-text mb-6 leading-tight"
            >
              Meet Maya.
              <br />
              <span className="text-gradient-teal">Your AI clinical mentor.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-sc-text-2 text-lg leading-relaxed mb-8"
            >
              Maya doesn&apos;t just tell you the answer — she explains the
              clinical reasoning behind it. She references NICE guidelines,
              NEWS2 scoring, and NANDA-I nursing diagnoses. She remembers your
              previous decisions and adapts her coaching to your learning gaps.
            </motion.p>

            <motion.div variants={staggerContainer} className="space-y-4">
              {[
                { icon: "📚", text: "References NICE, NHS, and NANDA-I guidelines in real time" },
                { icon: "🧠", text: "Identifies knowledge gaps across 6 clinical domains" },
                { icon: "💙", text: "Non-judgemental — explains mistakes as learning moments" },
                { icon: "📊", text: "Tracks progress and adapts coaching to each student" },
              ].map((item) => (
                <motion.div
                  key={item.text}
                  variants={fadeUp}
                  className="flex items-start gap-3"
                >
                  <span className="text-lg flex-shrink-0 mt-0.5">{item.icon}</span>
                  <span className="text-sc-text-2 text-sm">{item.text}</span>
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
            <div className="relative rounded-2xl overflow-hidden border border-sc-indigo/20 shadow-2xl shadow-sc-indigo/10"
              style={{ background: "linear-gradient(135deg, #0d1b2e 0%, #060d1a 100%)" }}
            >
              {/* Chat header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-sc-indigo/15">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sc-indigo to-sc-teal flex items-center justify-center text-white text-sm font-bold">
                    M
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-sc-teal border-2 border-sc-bg" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-sc-text">Maya</div>
                  <div className="text-xs text-sc-teal">Clinical AI Mentor · Online</div>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-sc-teal animate-pulse" />
                  <span className="text-xs text-sc-text-3">Live session</span>
                </div>
              </div>

              {/* Messages */}
              <div className="p-5 space-y-4 max-h-96 overflow-y-auto">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ delay: i * 0.15, duration: 0.4 }}
                    className={`flex ${msg.role === "student" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.role === "maya" && (
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sc-indigo to-sc-teal flex items-center justify-center text-white text-xs font-bold mr-2 flex-shrink-0 mt-1">
                        M
                      </div>
                    )}
                    <div className={`max-w-[85%] ${msg.role === "student" ? "items-end" : "items-start"} flex flex-col gap-1.5`}>
                      <div
                        className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                          msg.role === "student"
                            ? "bg-sc-surface2 text-sc-text-2 rounded-tr-sm"
                            : "bg-sc-indigo/15 border border-sc-indigo/20 text-sc-text rounded-tl-sm"
                        }`}
                      >
                        {msg.text}
                      </div>
                      {msg.highlight && (
                        <div className="bg-sc-teal/10 border border-sc-teal/20 rounded-lg px-3 py-2 text-xs text-sc-teal font-medium">
                          💡 {msg.highlight}
                        </div>
                      )}
                      <span className="text-xs text-sc-text-3 px-1">{msg.time}</span>
                    </div>
                  </motion.div>
                ))}

                {/* Typing indicator */}
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sc-indigo to-sc-teal flex items-center justify-center text-white text-xs font-bold">
                    M
                  </div>
                  <div className="bg-sc-indigo/15 border border-sc-indigo/20 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5">
                    {[0, 1, 2].map((j) => (
                      <motion.div
                        key={j}
                        className="w-1.5 h-1.5 rounded-full bg-sc-indigo/60"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: j * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="px-4 py-3 border-t border-sc-indigo/10">
                <div className="flex items-center gap-2 bg-sc-bg/60 rounded-xl px-4 py-2.5 border border-white/5">
                  <span className="text-sc-text-3 text-sm flex-1">Ask Maya about this patient...</span>
                  <div className="w-7 h-7 rounded-lg bg-sc-teal/20 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-sc-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
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
