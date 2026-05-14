"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  useReducedMotion,
} from "framer-motion";

interface CountUpProps {
  to: number;
  prefix?: string;
  suffix?: string;
  /** Animation duration in seconds */
  duration?: number;
  className?: string;
  /** Decimal places to show */
  decimals?: number;
}

/**
 * Counts from 0 to `to` when it enters the viewport.
 * Triggers once. Respects prefers-reduced-motion.
 */
export function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 1.6,
  className,
  decimals = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const count = useMotionValue(0);
  const display = useTransform(count, (v) =>
    decimals > 0 ? v.toFixed(decimals) : Math.round(v).toString()
  );

  useEffect(() => {
    if (!isInView || reduce) return;
    const controls = animate(count, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });
    return controls.stop;
  }, [isInView, reduce, to, duration, count]);

  if (reduce) {
    return (
      <span ref={ref} className={className}>
        {prefix}
        {decimals > 0 ? to.toFixed(decimals) : to}
        {suffix}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {prefix && <span>{prefix}</span>}
      <motion.span>{display}</motion.span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
}
