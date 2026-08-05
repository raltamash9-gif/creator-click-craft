import { Reveal, SectionLabel } from "@/components/Reveal";
import alexanderAsset from "@/assets/alexander-the-great.png.asset.json";
import codingAsset from "@/assets/master-coding.png.asset.json";

const studies = [
  {
    src: alexanderAsset.url,
    channel: "Documentary style",
    title: "One subject, one emotion, zero clutter",
    problem:
      "A painted battle scene has detail everywhere, which normally means the eye has nowhere to land.",
    approach: [
      "Built the composition around a single commanding gesture",
      "Kept the headline to three words",
      "Locked an oil-paint grade so the frame reads as one image, not a collage",
    ],
    outcome:
      "A cinematic frame that still reads at sidebar size, with a look that can be repeated across a whole series.",
  },
  {
    src: codingAsset.url,
    channel: "Tech & education style",
    title: "Making an abstract topic visual",
    problem:
      "Coding content usually means screenshots of an editor — unreadable once the thumbnail shrinks.",
    approach: [
      "Turned code into light and logos streaming from the subject",
      "Used a frosted glass panel to lift the headline off the artwork",
      "Set three type weights in one block for instant hierarchy",
    ],
    outcome:
      "A tech thumbnail where the topic is obvious in a glance and every word of the title stays crisp.",
  },
];


export function CaseStudies() {
  return (
    <section id="case-studies" className="bg-surface py-28 lg:py-40">
      <div className="shell">
        <Reveal>
          <SectionLabel>Case Studies</SectionLabel>
          <h2 className="mt-6 max-w-3xl text-[clamp(2.5rem,4.4vw,4rem)] leading-[1.02] font-extrabold">
            The thinking behind the click.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-10 lg:mt-24 lg:space-y-16">
          {studies.map((study, i) => (
            <Reveal key={study.title} delay={0.05}>
              <article className="shadow-soft grid gap-10 overflow-hidden rounded-3xl border border-border bg-card p-6 backdrop-blur-xl lg:grid-cols-2 lg:gap-14 lg:p-10">
                <div className={`overflow-hidden rounded-2xl bg-ink ${i % 2 ? "lg:order-2" : ""}`}>
                  <img
                    src={study.src}
                    alt={`Case study thumbnail — ${study.title}`}
                    loading="lazy"
                    width={1280}
                    height={720}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-semibold tracking-[0.22em] text-subtle uppercase">
                    {study.channel}
                  </span>
                  <h3 className="mt-4 text-3xl leading-tight font-bold lg:text-4xl">
                    {study.title}
                  </h3>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
                    {study.problem}
                  </p>
                  <ul className="mt-8 space-y-3">
                    {study.approach.map((point) => (
                      <li key={point} className="flex gap-3 text-base text-muted-foreground">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 border-t border-border pt-6 text-base leading-relaxed">
                    {study.outcome}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
