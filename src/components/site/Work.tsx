import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { Reveal, SectionLabel } from "@/components/Reveal";
import thumbDoc from "@/assets/thumb-doc.jpg";
import thumbGaming from "@/assets/thumb-gaming.jpg";
import thumbTech from "@/assets/thumb-tech.jpg";
import thumbHistory from "@/assets/thumb-history.jpg";
import thumbEdu from "@/assets/thumb-edu.jpg";
import thumbFaceless from "@/assets/thumb-faceless.jpg";

const work = [
  { src: thumbDoc, title: "The Lost Empire", niche: "Documentary", note: "Cinematic tension, one focal subject" },
  { src: thumbGaming, title: "Final Run", niche: "Gaming", note: "High-energy contrast, readable at 120px" },
  { src: thumbHistory, title: "Rome's Last Day", niche: "History", note: "Editorial type, dramatic lighting" },
  { src: thumbTech, title: "It's Over", niche: "Technology", note: "Product clarity with a bold hook" },
  { src: thumbEdu, title: "How Memory Works", niche: "Education", note: "Concept made instantly visual" },
  { src: thumbFaceless, title: "The $1B Secret", niche: "Faceless", note: "Curiosity gap without clickbait" },
];

export function Work() {
  return (
    <section id="work" className="py-28 lg:py-40">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <Reveal>
            <SectionLabel>Selected Work</SectionLabel>
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

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:mt-20 lg:gap-10">
          {work.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 0.08} className={i % 3 === 0 ? "md:col-span-2" : ""}>
              <motion.article
                data-cursor="view"
                whileHover={{ y: -10, rotate: i % 2 === 0 ? -1.2 : 1.2 }}
                transition={{ type: "spring", stiffness: 240, damping: 22 }}
                className="shadow-soft hover:shadow-lift group overflow-hidden rounded-3xl border border-border bg-card p-3 backdrop-blur-xl transition-shadow duration-500"
              >
                <div className="overflow-hidden rounded-2xl bg-ink">
                  <img
                    src={item.src}
                    alt={`${item.niche} YouTube thumbnail — ${item.title}`}
                    loading="lazy"
                    width={1280}
                    height={720}
                    className="h-auto w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045]"
                  />
                </div>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-5">
                  <div className="min-w-0">
                    <h3 className="truncate text-lg font-bold">{item.title}</h3>
                    <p className="mt-1 truncate text-sm text-muted-foreground">{item.note}</p>
                  </div>
                  <span className="flex shrink-0 items-center gap-3">
                    <span className="rounded-full border border-border px-3 py-1 text-[11px] tracking-[0.14em] text-subtle uppercase">
                      {item.niche}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-subtle transition-all duration-300 group-hover:rotate-45 group-hover:text-accent" />
                  </span>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
