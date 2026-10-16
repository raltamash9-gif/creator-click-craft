import { SectionLabel } from "@/components/Reveal";

export function TestimonialQuote() {
  return (
    <section id="testimonial" className="section-tone-a">
      <div className="shell">
        <SectionLabel>Testimonial</SectionLabel>
        <figure className="mt-6 max-w-3xl rounded-lg border border-border bg-card p-6 lg:p-8">
          <p className="text-xs text-subtle">Placeholder — not a client endorsement</p>
          <blockquote className="mt-4 text-lg leading-relaxed">“[Your client’s testimonial quote goes here.]”</blockquote>
          <figcaption className="mt-5 text-sm text-muted-foreground">[Client name] · [YouTube channel]</figcaption>
        </figure>
      </div>
    </section>
  );
}