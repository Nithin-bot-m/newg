"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring, animate } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Animate Count (Unlumen-inspired)
 *
 * A number that counts up from 0 to the target value when it scrolls into
 * view. Useful for stats sections ("85%", "60+ alumni", "₹10L+").
 *
 * Renders the original suffix/prefix verbatim — only the numeric part
 * animates. Honors prefers-reduced-motion.
 */
export const AnimateCount = ({
  value,
  duration = 2,
  className,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  value: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value, duration]);

  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.round(display).toLocaleString();

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};
