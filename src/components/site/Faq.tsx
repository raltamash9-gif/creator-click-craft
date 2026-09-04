import { Reveal, SectionLabel } from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does a thumbnail take?",
    a: "Usually 24–48 hours from brief to first draft. Rush work is possible when a slot is open — just ask.",
  },
  {
    q: "Do you use AI?",
    a: "Sometimes, as one tool among many. It's used for specific plates or elements when that's the fastest route. Composition, lighting, compositing and typography are always done by hand in Photoshop.",
  },
  {
    q: "Can you match my channel style?",
    a: "Yes. If you already have a look, I'll match and refine it. If you don't, I'll build a repeatable system so future uploads stay consistent.",
  },
  {
    q: "Do you offer revisions?",
    a: "Two rounds are included with every thumbnail. In practice most projects need one small adjustment or none.",
  },
  {
    q: "Can I hire you long term?",
    a: "That's the preferred way to work. Long-term creators get priority turnaround, consistent branding and pricing based on volume.",
  },
  {
    q: "Can you work with existing assets?",
    a: "Absolutely — screenshots, footage stills, brand kits, previous thumbnails. Send what you have and I'll build around it.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="section-tone-b py-28 lg:py-40">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <Reveal>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="mt-6 text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.04] font-extrabold">
              Questions, answered.
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted-foreground">
              Anything not covered here? Send a message — replies are usually same day.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f) => (
                <AccordionItem key={f.q} value={f.q} className="border-border">
                  <AccordionTrigger
                    data-cursor="link"
                    className="text-left text-lg font-semibold tracking-[0.015em] hover:no-underline"
                  >
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
