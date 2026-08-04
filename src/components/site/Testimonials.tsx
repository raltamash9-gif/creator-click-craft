import { Reveal, SectionLabel } from "@/components/Reveal";

const quotes = [
  {
    quote:
      "The first set of thumbnails changed how our whole channel looks. It finally feels like a real brand instead of a hobby.",
    name: "Documentary creator",
    meta: "Long-form history & mysteries",
  },
  {
    quote:
      "He asks about the video before he asks about the design. That alone puts him ahead of everyone else I've worked with.",
    name: "Gaming creator",
    meta: "Weekly uploads, growing channel",
  },
  {
    quote:
      "Clear communication, fast revisions, and thumbnails that actually match what the video delivers.",
    name: "Tech reviewer",
    meta: "Product reviews & explainers",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-surface py-28 lg:py-40">
      <div className="shell">
        <Reveal>
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="mt-6 max-w-3xl text-[clamp(2.5rem,4.4vw,4rem)] leading-[1.02] font-extrabold">
            Creators who stopped worrying about thumbnails.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:mt-24 lg:grid-cols-3 lg:gap-8">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 0.1}>
              <figure className="shadow-soft hover:shadow-lift flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 lg:p-10">
                <blockquote className="text-lg leading-relaxed lg:text-xl">"{q.quote}"</blockquote>
                <figcaption className="mt-10 border-t border-border pt-6">
                  <p className="font-semibold">{q.name}</p>
                  <p className="mt-1 text-sm text-subtle">{q.meta}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
