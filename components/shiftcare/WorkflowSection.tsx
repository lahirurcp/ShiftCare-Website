"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import {
  atmosphericFade,
  blurIn,
  staggerCinematic,
  viewport,
} from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "You're handed the ward",
    body: "Six patients. Varying acuity. Time is already running. No orientation — just like a real shift handover.",
  },
  {
    number: "02",
    title: "Read the obs and history",
    body: "Each patient has vital signs, drug charts, nursing notes, and a deterioration timeline. Prioritise who needs you first.",
  },
  {
    number: "03",
    title: "Make clinical decisions",
    body: "Escalate? Administer PRN meds? Call for a SBAR handover? Every decision you make — or delay — changes outcomes.",
  },
  {
    number: "04",
    title: "Watch consequences unfold",
    body: "Patients deteriorate if you don't act. NEWS2 scores update in real time. Miss a sepsis flag and the patient crashes.",
  },
  {
    number: "05",
    title: "Maya debriefs your shift",
    body: "Your AI mentor reviews every decision, explains what the evidence says, and flags knowledge gaps without judgement.",
  },
  {
    number: "06",
    title: "Track your clinical growth",
    body: "Competency scores accumulate across sessions. Educators see cohort-level patterns and identify students at risk.",
  },
  {
    number: "07",
    title: "Repeat until it's instinct",
    body: "48 scenarios, scaling difficulty. First-year fundamentals to charge nurse preparation — one platform.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const stepVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    y: dir > 0 ? 56 : -56,
    filter: "blur(10px)",
    scale: 0.97,
  }),
  center: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.55, ease },
  },
  exit: (dir: number) => ({
    opacity: 0,
    y: dir > 0 ? -56 : 56,
    filter: "blur(8px)",
    scale: 0.97,
    transition: { duration: 0.3, ease },
  }),
};

/** Reduced-motion fallback — static editorial list */
function StaticWorkflow() {
  return (
    <section id="workflow" className="relative py-40 md:py-52">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sc-teal/[0.025] rounded-full blur-[150px]" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          variants={staggerCinematic}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-28"
        >
          <motion.span variants={atmosphericFade} className="cinematic-label mb-4">
            How it Works
          </motion.span>
          <motion.h2
            variants={blurIn}
            className="font-display font-bold text-sc-text leading-tight mt-4 mb-4"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
          >
            A shift that teaches.
          </motion.h2>
          <motion.p variants={blurIn} className="text-sc-text-2 text-lg max-w-xl leading-relaxed">
            Seven steps. Unlimited repetitions. Each session rewires clinical
            decision-making at the level of reflex.
          </motion.p>
        </motion.div>
        <div>
          {steps.map((step) => (
            <div key={step.number}>
              <div className="h-px bg-gradient-to-r from-transparent via-sc-teal/10 to-transparent" />
              <div className="grid grid-cols-[72px_1fr] gap-10 py-10">
                <span
                  className="font-display font-bold leading-none pt-1"
                  style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", color: "rgba(0,212,160,0.15)" }}
                  aria-hidden
                >
                  {step.number}
                </span>
                <div>
                  <h3
                    className="font-display font-semibold text-sc-text leading-snug mb-2"
                    style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sc-text-2 text-sm md:text-base leading-relaxed max-w-2xl">
                    {step.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="h-px bg-gradient-to-r from-transparent via-sc-teal/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}

export function WorkflowSection() {
  const reduce = useReducedMotion();

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [activeStep, setActiveStep] = useState(0);
  const prevStepRef = useRef(0);
  const [direction, setDirection] = useState(1);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const next = Math.min(
      Math.floor(latest * steps.length),
      steps.length - 1
    );
    if (next !== prevStepRef.current) {
      setDirection(next > prevStepRef.current ? 1 : -1);
      prevStepRef.current = next;
      setActiveStep(next);
    }
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Scroll-reactive background — all transforms at top level (no conditional hooks)
  const orb1X = useTransform(scrollYProgress, [0, 1], ["-55%", "-42%"]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], ["-10%", "18%"]);
  const orb1R = useTransform(
    scrollYProgress,
    [0, 0.18, 0.40, 0.62, 0.82, 1],
    [
      "40% 60% 70% 30% / 50% 60% 40% 50%",
      "60% 40% 30% 70% / 60% 30% 70% 40%",
      "70% 30% 40% 60% / 30% 70% 50% 50%",
      "30% 70% 60% 40% / 70% 40% 60% 30%",
      "50% 50% 30% 70% / 40% 60% 30% 70%",
      "40% 60% 70% 30% / 50% 60% 40% 50%",
    ]
  );
  const orb2X = useTransform(scrollYProgress, [0, 1], ["15%", "-8%"]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ["28%", "-8%"]);
  const orb2S = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.15, 0.9]);
  const ecgLength = useTransform(scrollYProgress, [0.05, 0.95], [0, 1]);

  const goToStep = (i: number) => {
    const el = sectionRef.current;
    if (!el) return;
    const top = el.offsetTop + (i / steps.length) * el.offsetHeight;
    window.scrollTo({ top, behavior: "smooth" });
  };

  if (reduce) return <StaticWorkflow />;

  const step = steps[activeStep];

  return (
    <section
      ref={sectionRef}
      id="workflow"
      style={{ height: "700dvh" }}
    >
      {/* Sticky viewport container */}
      <div
        className="sticky top-0 flex flex-col items-center justify-center"
        style={{ height: "100dvh", minHeight: "560px" }}
      >
        {/* Scroll-reactive ambient depth */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          {/* Orb 1 — morphing teal, drifts down-right */}
          <motion.div
            className="absolute w-[700px] h-[600px] bg-sc-teal/[0.055] blur-[160px]"
            style={{
              top: "50%",
              left: "50%",
              x: orb1X,
              y: orb1Y,
              borderRadius: orb1R,
              willChange: "transform, border-radius",
            }}
          />
          {/* Orb 2 — indigo counter-drift, bottom-right → up-left */}
          <motion.div
            className="absolute w-[500px] h-[500px] bg-sc-indigo/[0.05] blur-[130px] rounded-full"
            style={{
              bottom: "0%",
              right: "0%",
              x: orb2X,
              y: orb2Y,
              scale: orb2S,
              willChange: "transform",
            }}
          />
          {/* ECG waveform — draws across as scroll progresses */}
          <svg
            className="absolute w-full"
            style={{ top: "65%", left: 0 }}
            height="60"
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            fill="none"
          >
            <motion.path
              d="M0,30 L30,30 C35,22 45,22 50,30 L70,30 L75,35 L82,2 L90,50 L96,30 L120,30 C130,12 155,12 165,30 L240,30 L270,30 C275,22 285,22 290,30 L310,30 L315,35 L322,2 L330,50 L336,30 L360,30 C370,12 395,12 405,30 L480,30 L510,30 C515,22 525,22 530,30 L550,30 L555,35 L562,2 L570,50 L576,30 L600,30 C610,12 635,12 645,30 L720,30 L750,30 C755,22 765,22 770,30 L790,30 L795,35 L802,2 L810,50 L816,30 L840,30 C850,12 875,12 885,30 L960,30 L990,30 C995,22 1005,22 1010,30 L1030,30 L1035,35 L1042,2 L1050,50 L1056,30 L1080,30 C1090,12 1115,12 1125,30 L1200,30 L1230,30 C1235,22 1245,22 1250,30 L1270,30 L1275,35 L1282,2 L1290,50 L1296,30 L1320,30 C1330,12 1355,12 1365,30 L1440,30"
              stroke="rgba(0,212,160,0.10)"
              strokeWidth="1.5"
              style={{ pathLength: ecgLength }}
            />
          </svg>
        </div>

        {/* Top bar: label + step counter */}
        <div className="absolute top-6 md:top-8 inset-x-8 md:inset-x-16 flex items-center justify-between z-10 pointer-events-none">
          <span className="cinematic-label">How it Works</span>
          <span className="font-mono text-sc-text-3 text-xs tracking-[0.18em]">
            {String(activeStep + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
          </span>
        </div>

        {/* Step content */}
        <div
          className="relative z-10 w-full flex items-center justify-center"
          style={{ height: "clamp(400px, 62vh, 580px)" }}
          aria-live="polite"
          aria-label="Workflow step"
        >
          <AnimatePresence mode="sync" custom={direction}>
            <motion.div
              key={activeStep}
              custom={direction}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-x-0 flex flex-col items-center text-center px-6 md:px-20 lg:px-32"
            >
              {/* Ghost step number */}
              <span
                className="font-display font-bold leading-none select-none block"
                style={{
                  fontSize: "clamp(6rem, 20vw, 14rem)",
                  color: "rgba(0,212,160,0.08)",
                  letterSpacing: "-0.03em",
                  marginBottom: "-0.15em",
                }}
                aria-hidden
              >
                {step.number}
              </span>

              <h3
                className="font-display font-bold text-sc-text leading-tight mb-5"
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
              >
                {step.title}
              </h3>

              <p
                className="text-sc-text-2 leading-relaxed max-w-lg"
                style={{ fontSize: "clamp(1rem, 1.5vw, 1.1rem)" }}
              >
                {step.body}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom: dots + progress bar + hint */}
        <div className="absolute bottom-6 md:bottom-8 z-10 flex flex-col items-center gap-3">

          {/* Clickable progress dots */}
          <div
            className="flex items-center gap-2.5"
            role="tablist"
            aria-label="Step progress"
          >
            {steps.map((s, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === activeStep}
                aria-label={`Step ${i + 1}: ${s.title}`}
                onClick={() => goToStep(i)}
                className="p-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sc-teal rounded"
              >
                <motion.div
                  animate={{
                    scale: i === activeStep ? 1.5 : 0.7,
                    opacity: i === activeStep ? 1 : 0.25,
                  }}
                  transition={{ duration: 0.25, ease }}
                  className="w-1.5 h-1.5 rounded-full bg-sc-teal"
                />
              </button>
            ))}
          </div>

          {/* Continuous progress fill bar */}
          <div className="w-28 h-px bg-sc-teal/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-sc-teal to-sc-indigo rounded-full"
              style={{ width: progressWidth }}
            />
          </div>

          {/* Scroll hint */}
          <p className="text-[10px] text-sc-text-3/30 tracking-[0.22em] uppercase font-mono select-none">
            scroll to navigate
          </p>
        </div>
      </div>
    </section>
  );
}
