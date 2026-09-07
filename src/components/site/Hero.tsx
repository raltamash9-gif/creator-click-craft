import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

import { Snowfall } from "@/components/site/Snowfall";
import wolvesAsset from "@/assets/attacked-by-wolves.jpg.asset.json";

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative min-h-[92vh] overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      <img
        aria-hidden
        src={wolvesAsset.url}
        alt=""
        decoding="async"
        fetchPriority="high"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "center 20%" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(10,15,20,0.88), rgba(10,15,20,0.15))",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(10,15,20,0.9), transparent 45%)",
        }}
      />

      <Snowfall />

      <div className="shell relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs tracking-wide text-muted-foreground"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Worked with multiple YouTube channels
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-[11px] tracking-[0.3em] text-subtle uppercase"
          >
            [ Altar Studio — Thumbnail Design ]
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-[clamp(2.9rem,7vw,88px)] leading-[1] font-extrabold tracking-[0.03em]"
          >
            Designing
            <br />
            Thumbnails That
            <br />
            Make People Click.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground lg:text-xl"
          >
            Helping Documentary, Gaming, Tech and Education creators stand out with cinematic,
            high-converting YouTube thumbnails.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              data-cursor="button"
              className="hover:shadow-glow inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:scale-[1.03] hover:bg-accent"
            >
              View My Work
            </a>
            <a
              href="#contact"
              data-cursor="button"
              className="hover:shadow-ember glass-card inline-flex items-center rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 hover:scale-[1.03] hover:border-ember/40"
            >
              Hire Me
            </a>
          </motion.div>
        </div>
      </div>

      <div className="shell relative z-10 mt-20 flex justify-center lg:mt-24">
        <div className="flex flex-col items-center gap-3 text-[11px] font-semibold tracking-[0.24em] text-subtle uppercase">
          Scroll to Explore
          <ArrowDown className="h-4 w-4 animate-[bounce-arrow_2s_ease-in-out_infinite] text-accent" />
        </div>
      </div>
    </section>
  );
}
