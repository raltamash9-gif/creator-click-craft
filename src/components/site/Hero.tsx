import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

import { Snowfall } from "@/components/site/Snowfall";
import wolvesAsset from "@/assets/attacked-by-wolves.jpg.asset.json";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] overflow-hidden pt-28 pb-14 lg:pt-28 lg:pb-20"
    >
      <img
        src={wolvesAsset.url}
        alt="Attacked By Wolves thumbnail: a man escaping wolves in snowy mountains"
        decoding="async"
        fetchPriority="high"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "center 20%" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(8,12,24,0.92) 0%, rgba(8,12,24,0.6) 45%, rgba(8,12,24,0.2))",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(8,12,24,0.95), rgba(8,12,24,0.25) 55%, transparent 80%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40"
        style={{
          background: "linear-gradient(to bottom, rgba(8,12,24,0.55), transparent)",
        }}
      />

      <Snowfall />

      <div className="shell relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 rounded-full border border-border px-4 py-2 text-xs tracking-wide text-muted-foreground"
            style={{ background: "rgba(8,12,24,0.6)" }}
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
            className="bracket-label mt-6 inline-flex items-center rounded-full border border-border px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.22em]"
            style={{ background: "rgba(8,12,24,0.6)" }}
          >
            [ YouTube Thumbnail Designer ]
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05] font-extrabold tracking-[0.01em] [text-wrap:balance]"
          >
            Designing
            <br />
            Thumbnails That
            <br />
            Make People <span className="text-interaction">Click.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-[52ch] text-lg leading-relaxed text-[rgba(255,255,255,0.88)] [text-shadow:0_2px_14px_rgba(8,12,24,0.65)] lg:text-xl"
          >
            Helping Documentary, Gaming, Tech and Education creators stand out with cinematic,
            high-converting YouTube thumbnails.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              data-cursor="button"
              className="inline-flex items-center rounded-full border border-[rgba(255,255,255,0.4)] px-7 py-3.5 text-sm font-medium tracking-wide text-foreground transition-[background-color,border-color,color] duration-300 hover:border-interaction hover:text-interaction"
            >
              View My Work
            </a>
            <a
              href="#contact"
              data-cursor="button"
              className="inline-flex items-center rounded-full bg-interaction px-7 py-3.5 text-sm font-medium tracking-wide text-[#0B0F1A] transition-[background-color] duration-300 hover:bg-[#5E99FF]"
            >
              Hire Me
            </a>
          </motion.div>

          <p className="mt-6 text-sm tracking-wide text-subtle">
            Documentary · Gaming · Tech · Animation
          </p>
        </div>
      </div>

      <div className="shell relative z-10 mt-12 flex justify-center lg:mt-14">
        <div className="flex flex-col items-center gap-3 text-[11px] font-semibold tracking-[0.24em] text-subtle uppercase">
          Scroll to Explore
          <ArrowDown className="h-4 w-4 animate-[bounce-arrow_2s_ease-in-out_infinite] text-accent" />
        </div>
      </div>
    </section>
  );
}
