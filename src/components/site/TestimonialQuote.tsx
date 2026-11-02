import { SectionLabel } from "@/components/Reveal";

export function TestimonialQuote() {
  return (
    <section id="testimonial" className="section-tone-a">
      <div className="shell">
        <SectionLabel>Testimonial</SectionLabel>
        <figure className="mt-6 max-w-3xl rounded-lg border border-border bg-card p-6 lg:p-8">
          <blockquote className="text-lg leading-relaxed">“Awesome! Well done.”</blockquote>
          <figcaption className="mt-5 text-sm text-muted-foreground">JayJay · Diablo Immortal thumbnails</figcaption>
        </figure>
      </div>
    </section>
  );
}