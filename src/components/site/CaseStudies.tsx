import { Reveal, SectionLabel } from "@/components/Reveal";
import thumbDoc from "@/assets/thumb-doc.jpg";
import thumbFaceless from "@/assets/thumb-faceless.jpg";

const studies = [
  {
    src: thumbDoc,
    channel: "Documentary channel",
    title: "One subject, one emotion, zero clutter",
    problem:
      "The channel's uploads were visually busy — three ideas fighting for attention inside a 320px frame.",
    approach: [
      "Rebuilt the composition around a single silhouetted subject",
      "Cut the headline from seven words to three",
      "Locked a repeatable grade so the library reads as one series",
    ],
    outcome:
      "A consistent visual identity the creator can recognise on their own homepage — and viewers can recognise in a crowded sidebar.",
  },
  {
    src: thumbFaceless,
    channel: "Faceless finance channel",
    title: "Curiosity without the clickbait tax",
    problem:
      "Faceless formats lose the human face advantage, so the concept has to carry the whole click.",
    approach: [
      "Framed a back-facing figure to create presence without identity",
      "Used one gold accent as the eye anchor",
      "Kept type at two weights for instant mobile legibility",
    ],
    outcome:
      "Thumbnails that promise exactly what the video delivers, protecting retention while still earning the click.",
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
