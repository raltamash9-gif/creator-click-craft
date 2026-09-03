import { motion } from "motion/react";

import { Reveal, SectionLabel } from "@/components/Reveal";
import { channels } from "@/lib/projects";

export function TrustedBy({ onSelect }: { onSelect: (channel: string) => void }) {
  return (
    <section id="trusted-by" className="section-tone-a relative overflow-hidden py-24 lg:py-32">
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="shell relative">
        <Reveal>
          <SectionLabel>Trusted By</SectionLabel>
          <h2 className="mt-6 max-w-3xl text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.04] font-extrabold">
            Trusted by growing YouTube channels.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Select a channel to see the work made for it.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((c, i) => (
            <Reveal key={c.name} delay={(i % 3) * 0.07}>
              <div className="group relative">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-2 rounded-[2rem] bg-accent/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <motion.button
                  type="button"
                  data-cursor="button"
                  onClick={() => onSelect(c.category)}
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="gradient-border relative w-full glass-card rounded-3xl p-7 text-left backdrop-blur-xl"
                >
                  <p className="font-display text-xl font-extrabold tracking-[-0.01em]">{c.name}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{c.note}</p>
                  <span className="mt-6 inline-flex rounded-full bg-ink px-3 py-1.5 text-[11px] tracking-[0.14em] text-ink-foreground uppercase">
                    {c.category}
                  </span>
                </motion.button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
