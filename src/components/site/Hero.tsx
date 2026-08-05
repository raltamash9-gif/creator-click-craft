import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";

import alexanderAsset from "@/assets/alexander-the-great.png.asset.json";
import bgmiAsset from "@/assets/bgmi-solo-vs-squad.png.asset.json";
import codingAsset from "@/assets/master-coding.png.asset.json";
import radiationAsset from "@/assets/radiation-leak.png.asset.json";

const cards = [
  { src: alexanderAsset.url, alt: "Cinematic oil-painting documentary thumbnail: Alexander the Great", depth: 34, rotate: -5, className: "left-0 top-6 w-[62%] z-30" },
  { src: bgmiAsset.url, alt: "Gaming thumbnail: BGMI Solo vs Squad split composition", depth: 22, rotate: 4, className: "right-0 top-0 w-[52%] z-20" },
  { src: radiationAsset.url, alt: "Cinematic reaction thumbnail: It Escaped", depth: 46, rotate: 3, className: "right-[6%] bottom-2 w-[58%] z-40" },
  { src: codingAsset.url, alt: "Tech thumbnail: Master Coding in 30 Days", depth: 14, rotate: -3, className: "left-[8%] bottom-[16%] w-[44%] z-10" },
];


export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 90, damping: 20 });
  const sy = useSpring(my, { stiffness: 90, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section id="top" className="grain relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 18% 12%, oklch(0.623 0.214 259.8 / 0.10), transparent 70%), radial-gradient(50% 45% at 88% 30%, oklch(0.72 0.19 46 / 0.08), transparent 72%), radial-gradient(70% 60% at 50% 110%, oklch(0.938 0.005 95), transparent 70%)",
        }}
      />

      <div
        ref={ref}
        onMouseMove={onMove}
        className="shell relative grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20"
      >
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs text-muted-foreground"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Worked with multiple YouTube channels
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-[clamp(2.9rem,5.6vw,5.4rem)] leading-[0.92] font-extrabold"
          >
            Designing
            <br />
            Thumbnails That
            <br />
            <span className="relative inline-block">
              Make People Click.
              <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-accent to-ember opacity-80" />
            </span>
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
              className="hover:shadow-glow inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.03] hover:bg-accent"
            >
              View My Work
            </a>
            <a
              href="#contact"
              data-cursor="button"
              className="hover:shadow-ember inline-flex items-center rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:border-ember/40"
            >
              Hire Me
            </a>
          </motion.div>
        </div>

        <div className="relative aspect-[5/4] w-full">
          {cards.map((card, i) => (
            <FloatingCard key={card.alt} card={card} sx={sx} sy={sy} index={i} />
          ))}
        </div>
      </div>

      <div className="shell relative mt-20 flex justify-center lg:mt-24">
        <div className="flex flex-col items-center gap-3 text-[11px] font-semibold tracking-[0.24em] text-subtle uppercase">
          Scroll to Explore
          <ArrowDown className="h-4 w-4 animate-[bounce-arrow_2s_ease-in-out_infinite] text-accent" />
        </div>
      </div>
    </section>
  );
}

function FloatingCard({
  card,
  sx,
  sy,
  index,
}: {
  card: (typeof cards)[number];
  sx: ReturnType<typeof useSpring>;
  sy: ReturnType<typeof useSpring>;
  index: number;
}) {
  const tx = useTransform(sx, (v) => v * card.depth);
  const ty = useTransform(sy, (v) => v * card.depth);
  const rotY = useTransform(sx, (v) => v * 9);
  const rotX = useTransform(sy, (v) => -v * 9);

  return (
    <motion.figure
      style={{ x: tx, y: ty, rotateX: rotX, rotateY: rotY, rotate: card.rotate }}
      initial={{ opacity: 0, scale: 0.92, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.25 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.04, zIndex: 50 }}
      data-cursor="view"
      className={`shadow-float absolute overflow-hidden rounded-2xl border border-border bg-ink ${card.className}`}
    >
      <img
        src={card.src}
        alt={card.alt}
        width={1280}
        height={720}
        className="h-auto w-full object-cover"
      />
    </motion.figure>
  );
}
