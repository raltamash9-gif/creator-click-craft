import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

export function Reveal({
  children,
  delay = 0,
  y = 30,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const entered = useInView(ref, { once: true, amount: "some" });
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: reducedMotion ? 0 : y }}
      animate={entered || reducedMotion ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: reducedMotion ? 0 : 0.7, delay: reducedMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center text-[11px] font-medium tracking-[0.3em] text-subtle uppercase">
      [&nbsp;{children}&nbsp;]
    </span>
  );
}
