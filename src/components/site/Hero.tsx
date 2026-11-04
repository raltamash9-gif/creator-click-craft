import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

import { Snowfall } from "@/components/site/Snowfall";
import wolvesAsset from "@/assets/attacked-by-wolves.jpg.asset.json";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-14 md:min-h-[92vh] lg:pt-28 lg:pb-20"
    >
      {/* Text content: on mobile this sits first, on the solid dark page background. */}
      <div className="shell relative z-10">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="bracket-label mt-6 inline-flex whitespace-nowrap items-center rounded-full border border-border px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.2em]"
            style={{ background: "rgba(8,12,24,0.6)" }}
          >
            [ Thumbnail Designer ]
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-[clamp(2.25rem,8vw,5rem)] leading-[1.05] font-extrabold tracking-[-0.02em] [text-wrap:balance]"
          >
            Thumbnails That Make People{" "}
            <span className="text-interaction-bright [text-shadow:0_0_20px_rgba(91,155,255,0.45)] md:text-interaction md:[text-shadow:none]">
              Click.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-[34ch] text-lg leading-relaxed text-[rgba(255,255,255,0.8)] [text-shadow:0_2px_14px_rgba(8,12,24,0.65)] lg:max-w-[52ch] lg:text-xl"
          >
            Cinematic, high-converting thumbnails for Documentary, Gaming, Tech and
            Animation channels.
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
        </div>
      </div>

      {/* Hero image: an in-flow block under the text on mobile, the full-bleed
          background on md and up (desktop layout unchanged). */}
      <div className="relative z-0 mt-10 h-[55svh] md:absolute md:inset-0 md:mt-0 md:h-auto">
        <img
          src={wolvesAsset.url}
          alt="Attacked By Wolves thumbnail: a man escaping wolves in snowy mountains"
          decoding="async"
          fetchPriority="high"
          className="pointer-events-none h-full w-full object-cover object-[62%_center] md:object-[62%_30%] lg:object-[50%_20%]"
        />
        {/* Mobile only: fade the top of the image into the page background. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-28 md:hidden"
          style={{
            background: "linear-gradient(to bottom, #0B0D12 0%, rgba(11,13,18,0) 100%)",
          }}
        />
        {/* Desktop only: darken the left half behind the headline */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 lg:block hidden"
          style={{
            background:
              "linear-gradient(to right, rgba(8,12,24,0.92) 0%, rgba(8,12,24,0.6) 45%, rgba(8,12,24,0.2))",
          }}
        />
        {/* Tablet only: darker floor behind the text so the subject stays visible above it */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 md:block hidden lg:hidden"
          style={{
            background:
              "linear-gradient(to top, rgba(8,12,24,0.97) 0%, rgba(8,12,24,0.72) 48%, transparent 78%)",
          }}
        />
        {/* Tablet and up: soften the top edge under the header */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-40 md:block hidden"
          style={{
            background: "linear-gradient(to bottom, rgba(8,12,24,0.55), transparent)",
          }}
        />
      </div>

      <Snowfall />

      <div className="shell relative z-10 mt-12 flex justify-center lg:mt-14">
        <div className="flex flex-col items-center gap-3 text-[11px] font-semibold tracking-[0.24em] text-foreground/75 uppercase">
          Scroll to Explore
          <ArrowDown className="h-4 w-4 animate-[bounce-arrow_2s_ease-in-out_infinite] text-accent" />
        </div>
      </div>
    </section>
  );
}
