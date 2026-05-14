"use client";

import { motion, useReducedMotion } from "framer-motion";

interface WordRevealProps {
  text: string;
  className?: string;
  /** Seconds before first word appears */
  delay?: number;
  /** Seconds between each word */
  stagger?: number;
}

/**
 * Splits text into words and reveals each one with a blur+fade+y animation.
 * Apple-style typography reveal — fast stagger, perceptual blur clearing.
 * Collapses to static text for prefers-reduced-motion.
 */
export function WordReveal({
  text,
  className,
  delay = 0,
  stagger = 0.038,
}: WordRevealProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className} aria-label={text}>
      <motion.span
        className="inline"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: stagger,
              delayChildren: delay,
            },
          },
        }}
        initial="hidden"
        animate="visible"
        aria-hidden
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block"
            style={{ marginRight: "0.28em" }}
            variants={{
              hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 0.52,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </span>
  );
}
