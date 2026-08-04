import { Mail, ArrowUpRight } from "lucide-react";

import { Reveal, SectionLabel } from "@/components/Reveal";

export function Contact() {
  return (
    <section id="contact" className="grain relative overflow-hidden py-28 lg:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 60% at 50% 10%, oklch(0.623 0.214 259.8 / 0.12), transparent 70%), radial-gradient(45% 50% at 85% 90%, oklch(0.72 0.19 46 / 0.09), transparent 72%)",
        }}
      />
      <div className="shell relative">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex justify-center">
              <SectionLabel>Contact</SectionLabel>
            </div>
            <h2 className="mt-8 text-[clamp(2.6rem,5.4vw,5rem)] leading-[0.98] font-extrabold">
              Let's make your next upload
              <br />
              impossible to scroll past.
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Tell me about your channel, your niche and your next video. You'll get a reply with
              creative direction — not a template quote.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:hello@altar.studio"
                data-cursor="button"
                className="hover:shadow-glow inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.03] hover:bg-accent"
              >
                <Mail className="h-4 w-4" />
                hello@altar.studio
              </a>
              <a
                href="#work"
                data-cursor="button"
                className="hover:shadow-ember inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-sm font-medium backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:border-ember/40"
              >
                Review the work
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-8 text-sm text-subtle">
              Limited slots each month so every channel gets real creative direction.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6">
        <p className="min-w-0 truncate font-display text-base font-extrabold tracking-[-0.04em]">
          ALTAR<span className="text-accent">.</span>STUDIO
        </p>
        <p className="shrink-0 text-sm text-subtle">Cinematic thumbnail design & creative direction</p>
      </div>
    </footer>
  );
}
