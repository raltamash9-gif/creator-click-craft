import { motion } from "motion/react";
import {
  Layers,
  Eye,
  Heart,
  Contrast,
  Sun,
  LayoutGrid,
  Type,
  Palette,
} from "lucide-react";

import { Reveal, SectionLabel } from "@/components/Reveal";

const principles = [
  { icon: Layers, title: "Visual Hierarchy", body: "One subject, one promise. The eye should never have to choose what to look at first." },
  { icon: Eye, title: "Curiosity", body: "Show enough to raise a question, never enough to answer it in the frame." },
  { icon: Heart, title: "Emotion", body: "A readable expression communicates stakes faster than any headline can." },
  { icon: Contrast, title: "Contrast", body: "Value separation is what survives compression, dark mode and a 120px sidebar." },
  { icon: Sun, title: "Lighting", body: "Directional light sculpts depth and tells the viewer the scene is real." },
  { icon: LayoutGrid, title: "Composition", body: "Negative space is a tool — emptiness makes the subject feel important." },
  { icon: Type, title: "Typography", body: "Two weights, three words, placed where the composition is quietest." },
  { icon: Palette, title: "Colour Psychology", body: "Warm against cool creates instant separation and a repeatable channel identity." },
];

export function WhyItWorks() {
  return (
    <section id="why" className="bg-surface py-28 lg:py-40">
      <div className="shell">
        <Reveal>
          <SectionLabel>Why These Thumbnails Work</SectionLabel>
          <h2 className="mt-6 max-w-3xl text-[clamp(2.4rem,4.2vw,3.8rem)] leading-[1.03] font-extrabold">
            Built to capture attention.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Every frame follows the same eight principles — the reason the work stays consistent
            across very different niches.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 0.06}>
              <motion.div
                data-cursor="link"
                whileHover={{ scale: 1.035, y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="  h-full glass-card rounded-3xl p-7 backdrop-blur-xl transition-shadow duration-500"
              >
                <p.icon className="h-6 w-6 text-accent" />
                <h3 className="mt-6 text-lg font-bold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
