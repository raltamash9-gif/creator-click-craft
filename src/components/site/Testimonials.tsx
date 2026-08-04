import { Reveal, SectionLabel } from "@/components/Reveal";

const quotes = [
  {
    body: "The new thumbnails made the channel look like a real studio. Our click-through went up and the videos finally match the quality of the writing.",
    name: "Documentary creator",
    meta: "Verified via Discord · name withheld",
  },
  {
    body: "Fast, clear communication and he actually reads the script before designing. That's rare.",
    name: "Gaming channel owner",
    meta: "Verified via Discord · name withheld",
  },
  {
    body: "He rebuilt our whole thumbnail system so every upload looks like part of one series.",
    name: "Renn Media",
    meta: "Ongoing collaboration",
  },
  {
    body: "I sent a rough idea and got back something better than what I pictured. Two small revisions and done.",
    name: "History channel",
    meta: "Verified via Discord · name withheld",
  },
  {
    body: "Long-term work has been smooth — priority turnaround and consistent branding every week.",
    name: "Tech creator",
    meta: "Verified via Discord · name withheld",
  },
];

function Card({ q }: { q: (typeof quotes)[number] }) {
  return (
    <figure className="shadow-soft w-[320px] shrink-0 rounded-3xl border border-border bg-card p-7 backdrop-blur-xl sm:w-[400px]">
      <blockquote className="text-base leading-relaxed">"{q.body}"</blockquote>
      <figcaption className="mt-6">
        <p className="text-sm font-semibold">{q.name}</p>
        <p className="mt-1 text-xs text-subtle">{q.meta}</p>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="overflow-hidden py-28 lg:py-40">
      <div className="shell">
        <Reveal>
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="mt-6 max-w-3xl text-[clamp(2.4rem,4.2vw,3.8rem)] leading-[1.03] font-extrabold">
            What creators say.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Real messages from client channels. Names are shown only where permission was given.
          </p>
        </Reveal>
      </div>

      <div className="marquee group mt-14 lg:mt-20">
        <div className="marquee-track group-hover:[animation-play-state:paused]">
          {[...quotes, ...quotes].map((q, i) => (
            <Card key={`${q.name}-${i}`} q={q} />
          ))}
        </div>
      </div>
    </section>
  );
}
