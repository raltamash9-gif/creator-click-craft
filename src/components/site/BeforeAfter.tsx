import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

import { Reveal, SectionLabel } from "@/components/Reveal";
import wolvesBeforeAsset from "@/assets/attacked-by-wolves-before.jpg.asset.json";
import wolvesAfterAsset from "@/assets/attacked-by-wolves.jpg.asset.json";
import alexanderBeforeAsset from "@/assets/alexander-before.png.asset.json";
import alexanderAfterAsset from "@/assets/alexander-the-great.png.asset.json";

type Comparison = {
  id: string;
  label: string;
  heading: string;
  copy: string;
  points: string[];
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
};

const comparisons: Comparison[] = [
  {
    id: "wolves",
    label: "Before & After",
    heading: "See the transformation.",
    copy: "Drag the slider on the Attacked By Wolves thumbnail. The raw stage is a hand-built Photoshop collage — cut-out man, wolves, eagle and mountains with hard white outlines and mismatched light. The finished frame blends every layer into one storm, adds damage, weather and a cold cinematic grade.",
    points: [
      "Hard white cut-out edges removed and blended",
      "Snow light and colour temperature matched across every layer",
      "Falling snow and haze added for real depth",
      "Cold cinematic grade with warmth kept on the subject",
    ],
    before: wolvesBeforeAsset.url,
    after: wolvesAfterAsset.url,
    beforeAlt: "Raw Photoshop collage before compositing — Attacked By Wolves",
    afterAlt: "Final Attacked By Wolves thumbnail after compositing and grading",
  },
  {
    id: "alexander",
    label: "Second Comparison",
    heading: "From raw assets to an oil painting.",
    copy: "The Alexander the Great frame started as separate AI-generated pieces sitting on top of each other with hard white strokes and a flat map backdrop. The final version becomes one painted battle scene with directional firelight, painterly texture and a title that owns the quiet corner.",
    points: [
      "White strokes replaced with painted edge blending",
      "Firelit key light unified across subject and army",
      "Depth built with smoke, dust and falling embers",
      "Warm gold on deep shadow for post-compression contrast",
    ],
    before: alexanderBeforeAsset.url,
    after: alexanderAfterAsset.url,
    beforeAlt: "Raw asset stage of the Alexander the Great thumbnail",
    afterAlt: "Final graded oil-painting style Alexander the Great thumbnail",
  },
];

export function BeforeAfter() {
  return (
    <section id="transformation" className="section-tone-b py-24 text-ink-foreground lg:py-36">
      <div className="shell space-y-24 lg:space-y-32">
        {comparisons.map((c, i) => (
          <Comparison key={c.id} data={c} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

function Comparison({ data, flip }: { data: Comparison; flip: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  const setPos = useCallback((value: number) => {
    const el = ref.current;
    if (!el) return;
    const v = Math.min(100, Math.max(0, value));
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => el.style.setProperty("--pos", `${v}%`));
  }, []);

  const move = useCallback(
    (clientX: number) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setPos(((clientX - rect.left) / rect.width) * 100);
    },
    [setPos],
  );

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16">
      <Reveal className={flip ? "lg:order-2" : ""}>
        <SectionLabel>{data.label}</SectionLabel>
        <h2 className="mt-6 text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.04] font-extrabold">
          {data.heading}
        </h2>
        <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground lg:text-lg">
          {data.copy}
        </p>
        <ul className="mt-8 space-y-3 text-sm tracking-wide text-muted-foreground">
          {data.points.map((t, i) => (
            <motion.li
              key={t}
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 0.35, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-3"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {t}
            </motion.li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.1} className={flip ? "lg:order-1" : ""}>
        <div
          ref={ref}
          className="shadow-lift relative aspect-[16/9] w-full touch-none overflow-hidden rounded-3xl border border-border bg-ink select-none"
          style={{ "--pos": "50%" } as React.CSSProperties}
          onPointerDown={(e) => {
            e.currentTarget.setPointerCapture(e.pointerId);
            move(e.clientX);
          }}
          onPointerMove={(e) => {
            if (e.currentTarget.hasPointerCapture(e.pointerId)) move(e.clientX);
          }}
        >
          <img
            src={data.after}
            alt={data.afterAlt}
            loading="lazy"
                  decoding="async"
            width={1280}
            height={720}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: "inset(0 calc(100% - var(--pos)) 0 0)" }}
          >
            <img
              src={data.before}
              alt={data.beforeAlt}
              loading="lazy"
                  decoding="async"
              width={1280}
              height={720}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <span className="absolute top-4 left-4 rounded-full bg-foreground px-3 py-1 text-[11px] tracking-[0.14em] text-background uppercase">
            Original
          </span>
          <span className="absolute top-4 right-4 rounded-full bg-ink px-3 py-1 text-[11px] tracking-[0.14em] text-ink-foreground uppercase ring-1 ring-border">
            Redesigned
          </span>

          <div
            className="absolute inset-y-0 w-px bg-foreground/90"
            style={{ left: "var(--pos)" }}
            aria-hidden
          >
            <span className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-background">
              ⇤⇥
            </span>
          </div>

          <input
            type="range"
            min={0}
            max={100}
            defaultValue={50}
            onChange={(e) => setPos(Number(e.target.value))}
            aria-label="Compare before and after"
            className="absolute inset-x-0 bottom-0 h-10 w-full cursor-ew-resize opacity-0"
          />
        </div>
      </Reveal>
    </div>
  );
}
