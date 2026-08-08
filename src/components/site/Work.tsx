import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Reveal, SectionLabel } from "@/components/Reveal";
import { categories, projects } from "@/lib/projects";

const spanClass: Record<string, string> = {
  wide: "md:col-span-3",
  regular: "md:col-span-2",
};

const ratioClass = "aspect-[16/9]";


export function Work({
  filter,
  onFilterChange,
}: {
  filter: string;
  onFilterChange: (value: string) => void;
}) {
  const isChannel = !(categories as readonly string[]).includes(filter);
  const visible = projects.filter((p) => {
    if (filter === "All") return true;
    if (isChannel) return p.channel === filter;
    return p.category === filter;
  });

  return (
    <section id="work" className="py-28 lg:py-40">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <Reveal>
            <SectionLabel>Featured Work</SectionLabel>
            <h2 className="mt-6 max-w-2xl text-[clamp(2.5rem,4.4vw,4rem)] leading-[1.02] font-extrabold">
              Thumbnails built to win the scroll.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground lg:text-lg">
              Every frame is designed around one question: what makes this creator's ideal viewer
              stop moving?
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <div className="mt-12 flex flex-wrap gap-2 lg:mt-16">
            {categories.map((c) => {
              const active = filter === c;
              return (
                <button
                  key={c}
                  type="button"
                  data-cursor="button"
                  onClick={() => onFilterChange(c)}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                    active ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="filter-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-primary"
                    />
                  )}
                  <span
                    className={`relative z-10 ${
                      active ? "" : "rounded-full"
                    }`}
                  >
                    {c}
                  </span>
                  {!active && (
                    <span className="pointer-events-none absolute inset-0 rounded-full border border-border" />
                  )}
                </button>
              );
            })}
            {isChannel && (
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm text-accent-foreground">
                {filter}
                <button
                  type="button"
                  data-cursor="button"
                  onClick={() => onFilterChange("All")}
                  className="opacity-80 transition-opacity hover:opacity-100"
                  aria-label="Clear channel filter"
                >
                  ✕
                </button>
              </span>
            )}
          </div>
        </Reveal>

        <motion.div layout className="mt-12 grid gap-8 md:grid-cols-6 lg:mt-16 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {visible.map((item) => (
              <motion.article
                key={item.slug}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={`group ${spanClass[item.span]}`}
              >
                <Link
                  to="/work/$slug"
                  params={{ slug: item.slug }}
                  data-cursor="view"
                  className="block [perspective:1200px]"
                >
                  <motion.div
                    whileHover={{ y: -8, scale: 1.025, rotateX: 3, rotateY: -2 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}

                    className="relative [transform-style:preserve-3d]"
                  >
                    <div className={`relative overflow-hidden rounded-2xl border border-border bg-ink shadow-soft group-hover:shadow-lift transition-shadow duration-500 ${ratioClass}`}>
                      <img
                        src={item.src}
                        alt={`${item.category} YouTube thumbnail — ${item.title}`}
                        loading="lazy"
                        width={1280}
                        height={720}
                        className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                      />
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        style={{
                          background:
                            "linear-gradient(160deg, oklch(1 0 0 / 0.22), transparent 42%), linear-gradient(to top, oklch(0 0 0 / 0.55), transparent 55%)",
                        }}
                      />
                      <span className="absolute bottom-4 left-4 translate-y-3 rounded-full bg-background/90 px-4 py-2 text-xs font-medium opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        View Case Study →
                      </span>
                    </div>
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-1 pt-5 pb-2">
                      <div className="min-w-0">
                        <h3 className="truncate text-lg font-bold transition-transform duration-500 group-hover:-translate-y-0.5">
                          {item.title}
                        </h3>
                        <p className="mt-1 truncate text-sm text-muted-foreground">
                          {item.category} · {item.year}
                        </p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-subtle transition-all duration-300 group-hover:rotate-45 group-hover:text-accent" />
                    </div>
                  </motion.div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {visible.length === 0 && (
          <p className="mt-16 text-center text-muted-foreground">
            No projects in this category yet — try another filter.
          </p>
        )}
      </div>
    </section>
  );
}
