import { motion } from "motion/react";

import { Reveal, SectionLabel } from "@/components/Reveal";
import { channels } from "@/lib/projects";

export function TrustedBy({ onSelect }: { onSelect: (channel: string) => void }) {
  return (
    <section id="trusted-by" className="bg-surface py-24 lg:py-32">
      <div className="shell">
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
              <motion.button
                type="button"
                data-cursor="button"
                onClick={() => onSelect(c.name === "Renn Media" ? "Renn Media" : c.name)}
                whileHover={{ y: -8, rotate: i % 2 === 0 ? -1 : 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="shadow-soft hover:shadow-glow group w-full rounded-3xl border border-border bg-card p-7 text-left backdrop-blur-xl transition-shadow duration-500"
              >
                <p className="font-display text-xl font-extrabold tracking-[-0.03em]">{c.name}</p>
                <p className="mt-2 text-sm text-muted-foreground">{c.note}</p>
                <span className="mt-6 inline-flex rounded-full border border-border px-3 py-1 text-[11px] tracking-[0.14em] text-subtle uppercase transition-colors duration-300 group-hover:border-accent/40 group-hover:text-accent">
                  {c.category}
                </span>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
