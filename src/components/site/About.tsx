import { SectionLabel } from "@/components/Reveal";
import portrait from "@/assets/portrait-placeholder.webp.asset.json";

export function About() {
  return (
    <section id="about" className="section-tone-b">
      <div className="shell">
        <SectionLabel>About</SectionLabel>
        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
          <figure className="shrink-0">
            <img src={portrait.url} alt="Portrait placeholder for Altamash Raza" width={240} height={240} loading="lazy" decoding="async" className="h-24 w-24 rounded-full border border-border object-cover" />
            <figcaption className="mt-2 text-xs text-subtle">Photo placeholder</figcaption>
          </figure>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold">Altamash Raza</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              I’m a YouTube thumbnail designer focused on turning a video’s story into one clear, compelling frame.
              My work combines research, Photoshop compositing, typography and lighting, with AI-assisted assets where they support the idea.
              From documentary storytelling to game worlds and animated characters, I build each thumbnail around a strong visual hook.
            </p>
            <p className="mt-5 text-sm text-muted-foreground">Documentary · Gaming · Tech · Animation</p>
          </div>
        </div>
      </div>
    </section>
  );
}