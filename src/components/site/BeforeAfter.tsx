import { useCallback, useEffect, useRef, useState } from "react";

import { Reveal, SectionLabel } from "@/components/Reveal";
import beforeAsset from "@/assets/alexander-before.png.asset.json";
import afterAsset from "@/assets/alexander-the-great.png.asset.json";

const beforeImg = beforeAsset.url;
const afterImg = afterAsset.url;


export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (dragging.current) move(e.clientX);
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [move]);

  return (
    <section id="transformation" className="py-24 lg:py-36">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16">
          <Reveal>
            <SectionLabel>Before & After</SectionLabel>
            <h2 className="mt-6 text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.04] font-extrabold">
              See the transformation.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground lg:text-lg">
              The original frame was flat, evenly lit and had no focal point — three problems that
              cost clicks before a viewer reads a single word. The redesign introduces one dramatic
              light source, a clear subject, a warm-against-cool grade and typography placed where
              the eye actually lands.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
              {[
                "Directional lighting replaces flat daylight",
                "Composition rebuilt around a single focal point",
                "Contrast raised for sidebar and mobile legibility",
                "Colour graded into a repeatable series look",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              ref={ref}
              className="shadow-lift relative aspect-[16/9] w-full touch-none overflow-hidden rounded-3xl border border-border bg-ink select-none"
              onPointerDown={(e) => {
                dragging.current = true;
                move(e.clientX);
              }}
            >
              <img
                src={afterImg}
                alt="Final Alexander the Great thumbnail after redesign"

                height={720}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
              >
                <img
                  src={beforeImg}
                  alt="Original thumbnail before redesign"
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <span className="absolute top-4 left-4 rounded-full bg-background/85 px-3 py-1 text-[11px] tracking-[0.14em] uppercase">
                Original
              </span>
              <span className="absolute top-4 right-4 rounded-full bg-background/85 px-3 py-1 text-[11px] tracking-[0.14em] uppercase">
                Redesigned
              </span>

              <div
                className="absolute inset-y-0 w-px bg-background/90"
                style={{ left: `${pos}%` }}
                aria-hidden
              >
                <span className="shadow-glow absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background text-xs font-semibold">
                  ⇤⇥
                </span>
              </div>

              <input
                type="range"
                min={0}
                max={100}
                value={pos}
                onChange={(e) => setPos(Number(e.target.value))}
                aria-label="Compare before and after"
                className="absolute inset-x-0 bottom-0 h-10 w-full cursor-ew-resize opacity-0"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
