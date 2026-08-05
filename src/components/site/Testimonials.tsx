import { Reveal, SectionLabel } from "@/components/Reveal";
import { projects } from "@/lib/projects";

const items = [...projects, ...projects];

export function Testimonials() {
  return (
    <section id="selected-work" className="overflow-hidden py-28 lg:py-40">
      <div className="shell">
        <Reveal>
          <SectionLabel>Selected Client Work</SectionLabel>
          <h2 className="mt-6 max-w-3xl text-[clamp(2.4rem,4.2vw,3.8rem)] leading-[1.03] font-extrabold">
            A closer look at the work.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Recent thumbnails across documentary, gaming and tech formats. Hover to pause.
          </p>
        </Reveal>
      </div>

      <div className="marquee group mt-14 lg:mt-20">
        <div className="marquee-track group-hover:[animation-play-state:paused]">
          {items.map((p, i) => (
            <figure
              key={`${p.slug}-${i}`}
              className="shadow-soft w-[320px] shrink-0 overflow-hidden rounded-3xl border border-border bg-card p-3 backdrop-blur-xl sm:w-[400px]"
            >
              <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-ink">
                <img
                  src={p.src}
                  alt={`${p.category} YouTube thumbnail — ${p.title}`}
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="px-3 pt-4 pb-2">
                <p className="truncate text-sm font-semibold">{p.title}</p>
                <p className="mt-1 text-xs text-subtle">{p.category}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
