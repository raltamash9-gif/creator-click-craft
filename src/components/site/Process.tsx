import { Reveal, SectionLabel } from "@/components/Reveal";

const steps = [
 { n: "01", title: "Script Analysis", body: "I read the script or outline first. The thumbnail has to promise exactly what the video delivers." },
 { n: "02", title: "Competitor Research", body: "I study the sidebars your video will actually appear in, then design to stand apart from them." },
 { n: "03", title: "Visual Concept", body: "One idea, one emotion. We agree on the hook before a single pixel is placed." },
 { n: "04", title: "AI-Assisted Asset Creation", body: "Used only when it's the fastest route to a specific plate or element — never as the whole design." },
 { n: "05", title: "Photoshop Compositing", body: "Cutouts, plates and elements assembled into a believable scene with real depth." },
 { n: "06", title: "Lighting & Colour Grading", body: "Directional key light, rim separation and a grade that becomes your channel's signature." },
 { n: "07", title: "Typography", body: "Two weights maximum, sized and placed for full screen and 120 pixels alike." },
 { n: "08", title: "Final Polish", body: "Sharpening, contrast check, mobile preview, then delivery in every size you need." },
];

export function Process() {
 return (
  <section id="process" className="py-28 lg:py-40">
   <div className="shell">
    <Reveal>
     <SectionLabel>Creative Process</SectionLabel>
     <h2 className="mt-6 max-w-3xl text-[clamp(2.4rem,4.2vw,3.8rem)] leading-[1.03] font-extrabold">
      How a thumbnail gets made.
     </h2>
    </Reveal>

    <div className="relative mt-16 lg:mt-20">
     <span
      aria-hidden
      className="absolute top-0 bottom-0 left-[13px] w-px bg-border lg:left-[15px]"
     />
     <ol className="space-y-4">
      {steps.map((s, i) => (
       <Reveal key={s.n} delay={Math.min(i * 0.05, 0.3)}>
        <li className="group relative grid grid-cols-[auto_minmax(0,1fr)] gap-6 lg:gap-10">
         <span className="relative z-10 mt-1 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-background text-[10px] font-semibold text-subtle transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground lg:h-8 lg:w-8 lg:text-[11px]">
          {s.n}
         </span>
         <div
          data-cursor="link"
          className="min-w-0 rounded-3xl border border-transparent px-0 py-1 transition-all duration-500 group-hover:border-border group-hover:bg-card group-hover:px-6 group-hover:py-5 group-hover:backdrop-blur-xl"
         >
          <h3 className="text-[clamp(1.25rem,2vw,1.75rem)] font-bold">{s.title}</h3>
          <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
           <p className="overflow-hidden text-sm leading-relaxed text-muted-foreground opacity-0 transition-opacity duration-500 group-hover:mt-3 group-hover:opacity-100 group-focus-within:mt-3 group-focus-within:opacity-100 lg:max-w-2xl lg:text-base">
            {s.body}
           </p>
          </div>
         </div>
        </li>
       </Reveal>
      ))}
     </ol>
    </div>
   </div>
  </section>
 );
}
