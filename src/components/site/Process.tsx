import { Reveal, SectionLabel } from "@/components/Reveal";

const steps = [
  {
    n: "01",
    title: "Understand the channel",
    body: "Your audience, your niche, your competitors' sidebars. Design starts with the click context, not the canvas.",
  },
  {
    n: "02",
    title: "Find the hook",
    body: "One idea, one emotion. We agree on the promise the thumbnail makes before a single pixel is placed.",
  },
  {
    n: "03",
    title: "Cinematic execution",
    body: "Lighting, composition, colour grade and typography built to read at full screen and at 120 pixels wide.",
  },
  {
    n: "04",
    title: "Refine and repeat",
    body: "Two rounds of revisions included, then a reusable visual system so every future upload stays on brand.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-28 lg:py-40">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <Reveal>
            <SectionLabel>Process</SectionLabel>
            <h2 className="mt-6 max-w-2xl text-[clamp(2.5rem,4.4vw,4rem)] leading-[1.02] font-extrabold">
              A creative partner, not a file delivery service.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground lg:text-lg">
              Clear steps, predictable turnaround, and creative direction you can keep using long
              after the project ends.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08}>
              <div className="shadow-soft hover:shadow-lift group h-full rounded-3xl border border-border bg-card p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2">
                <span className="font-display text-4xl font-extrabold text-subtle/40 transition-colors duration-500 group-hover:text-accent">
                  {step.n}
                </span>
                <h3 className="mt-8 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
