import { motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";

import { Reveal, SectionLabel } from "@/components/Reveal";

const single = [
  "One custom thumbnail, concept to delivery",
  "Two rounds of revisions included",
  "Delivered in every size you need",
  "Typically 24–48 hours",
];

const retainer = [
  "Priority workflow on every upload",
  "Consistent branding across the library",
  "Dedicated creative support and concepting",
  "Volume-based pricing, agreed together",
];

export function Services() {
  return (
    <section id="services" className="section-elevated py-28 lg:py-40">
      <div className="shell">
        <Reveal>
          <SectionLabel>Services</SectionLabel>
          <h2 className="mt-6 max-w-3xl text-[clamp(2.4rem,4.2vw,3.8rem)] leading-[1.03] font-extrabold">
            One thumbnail, or a creative partner.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 240, damping: 22 }}
              className=" flex h-full flex-col glass-card rounded-3xl p-9 backdrop-blur-xl transition-shadow duration-500"
            >
              <span className="text-[11px] tracking-[0.24em] text-subtle uppercase">
                Service One
              </span>
              <h3 className="mt-5 text-2xl font-bold lg:text-3xl">Individual Thumbnail</h3>
              <p className="mt-4 text-sm text-muted-foreground">
                For creators who need a single thumbnail done properly.
              </p>
              <p className="mt-8 flex items-end gap-2">
                <span className="text-sm text-subtle">Starting from</span>
                <span className="font-display text-5xl font-extrabold tracking-[-0.04em]">$50</span>
              </p>
              <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                {single.map((s) => (
                  <li key={s} className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {s}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                data-cursor="button"
                className="hover:shadow-glow mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.03] hover:bg-accent"
              >
                Start a Project
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          </Reveal>

          <Reveal delay={0.08}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 240, damping: 22 }}
              className=" hover:shadow-glow relative flex h-full flex-col overflow-hidden rounded-3xl border border-accent/25 bg-card p-9 backdrop-blur-xl transition-shadow duration-500"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(70% 60% at 90% 0%, rgba(44,83,100,0.22), transparent 70%)",
                }}
              />
              <div className="relative flex h-full flex-col">
                <span className="text-[11px] tracking-[0.24em] text-accent uppercase">
                  Service Two
                </span>
                <h3 className="mt-5 text-2xl font-bold lg:text-3xl">Long-Term Collaboration</h3>
                <p className="mt-4 text-sm text-muted-foreground">
                  For creators uploading consistently who want one visual identity across
                  everything.
                </p>
                <p className="mt-8 font-display text-3xl font-extrabold tracking-[-0.03em]">
                  Pricing based on workload
                </p>
                <p className="mt-2 text-sm text-subtle">
                  No fixed monthly package — let's talk volume.
                </p>
                <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                  {retainer.map((s) => (
                    <li key={s} className="flex gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {s}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  data-cursor="button"
                  className="hover:shadow-ember mt-9 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-[1.03] hover:border-ember/40"
                >
                  Discuss a Partnership
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
