import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowUpRight, Wand2, Check } from "lucide-react";

import { CustomCursor } from "@/components/CustomCursor";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Contact";
import { Reveal, SectionLabel } from "@/components/Reveal";
import { getProject, projects } from "@/lib/projects";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Case study unavailable — Altar Studio" }, { name: "robots", content: "noindex" }],
      };
    }
    const t = `${loaderData.project.title} — Thumbnail Case Study | Altar Studio`;
    const d = loaderData.project.overview.slice(0, 155);
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: CaseNotFound,
  component: CaseStudyPage,
});

function CaseNotFound() {
  return (
    <div className="shell flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-extrabold">Case study not found</h1>
      <Link to="/" className="mt-6 text-accent underline">
        Back to Altar Studio
      </Link>
    </div>
  );
}

function CaseStudyPage() {
  const { project } = Route.useLoaderData();
  const [revealed, setRevealed] = useState(false);
  const related = project.related
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Nav />
      <main className="pt-32 lg:pt-40">
        <div className="shell">
          <Reveal>
            <Link
              to="/"
              hash="work"
              data-cursor="link"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              All work
            </Link>

            <div className="shadow-lift mt-8 overflow-hidden rounded-[2rem] border border-border bg-ink">
              <img
                src={project.src}
                alt={`${project.category} thumbnail — ${project.title}`}
                width={1280}
                height={720}
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <h1 className="max-w-3xl text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.02] font-extrabold">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                {[project.category, project.channel, project.year].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-4 py-2 text-[11px] tracking-[0.14em] text-subtle uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Overview + challenge */}
        <section className="py-20 lg:py-28">
          <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <SectionLabel>Project Overview</SectionLabel>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{project.overview}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <SectionLabel>Creative Challenge</SectionLabel>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{project.challenge}</p>
              <ul className="mt-8 space-y-3">
                {project.challengePoints.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Design thinking */}
        <section className="bg-surface py-24 lg:py-32">
          <div className="shell">
            <Reveal>
              <SectionLabel>Design Thinking</SectionLabel>
              <h2 className="mt-6 max-w-2xl text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.05] font-extrabold">
                Why every decision was made.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {project.thinking.map((t, i) => (
                <Reveal key={t.heading} delay={(i % 2) * 0.07}>
                  <div className="shadow-soft h-full rounded-3xl border border-border bg-card p-8 backdrop-blur-xl">
                    <h3 className="text-lg font-bold">{t.heading}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Visual breakdown / PSD layer reveal */}
        <section className="py-24 lg:py-32">
          <div className="shell">
            <Reveal>
              <SectionLabel>Visual Breakdown</SectionLabel>
              <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
                <h2 className="max-w-2xl text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.05] font-extrabold">
                  How the composite was built.
                </h2>
                <button
                  type="button"
                  data-cursor="button"
                  onClick={() => setRevealed((v) => !v)}
                  className="hover:shadow-glow inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.03] hover:bg-accent"
                >
                  <Wand2 className="h-4 w-4" />
                  {revealed ? "Hide Design Process" : "Reveal Design Process"}
                </button>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
              <div className="shadow-lift relative aspect-[16/9] overflow-hidden rounded-3xl border border-border bg-ink">
                <img
                  src={project.src}
                  alt={`${project.title} final composite`}
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <AnimatePresence>
                  {revealed &&
                    project.layers.map((layer, i) => (
                      <motion.span
                        key={layer.name}
                        aria-hidden
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.75, 0] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.6, delay: i * 0.75, ease: "easeInOut" }}
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(${140 + i * 24}deg, oklch(0.16 0.005 260 / 0.85), transparent 65%)`,
                        }}
                      />
                    ))}
                </AnimatePresence>
              </div>

              <ol className="space-y-3">
                {project.layers.map((layer, i) => (
                  <motion.li
                    key={layer.name}
                    initial={false}
                    animate={
                      revealed
                        ? { opacity: 1, x: 0, filter: "blur(0px)" }
                        : { opacity: 0.35, x: -8, filter: "blur(1.5px)" }
                    }
                    transition={{ duration: 0.7, delay: revealed ? i * 0.75 : 0, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-2xl border border-border bg-card p-5 backdrop-blur-xl"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="text-[11px] tracking-[0.2em] text-subtle">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-base font-bold">{layer.name}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{layer.body}</p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="bg-surface py-24 lg:py-32">
          <div className="shell">
            <Reveal>
              <SectionLabel>Tools Used</SectionLabel>
              <h2 className="mt-6 text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.05] font-extrabold">
                The toolkit behind the frame.
              </h2>
            </Reveal>
            <div className="mt-10 flex flex-wrap gap-3">
              {project.tools.map((tool, i) => (
                <Reveal key={tool} delay={Math.min(i * 0.05, 0.3)}>
                  <span className="shadow-soft inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm backdrop-blur-xl">
                    <Check className="h-4 w-4 text-accent" />
                    {tool}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Final thumbnail */}
        <section className="py-24 lg:py-32">
          <div className="shell">
            <Reveal>
              <SectionLabel>Final Thumbnail</SectionLabel>
              <div className="shadow-lift mt-8 overflow-hidden rounded-[2rem] border border-border bg-ink">
                <img
                  src={project.src}
                  alt={`${project.title} final thumbnail`}
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Related */}
        <section className="border-t border-border py-24 lg:py-32">
          <div className="shell">
            <Reveal>
              <SectionLabel>Related Projects</SectionLabel>
              <h2 className="mt-6 text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.05] font-extrabold">
                Keep exploring.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 0.07}>
                  <Link
                    to="/work/$slug"
                    params={{ slug: r.slug }}
                    data-cursor="view"
                    className="group block"
                  >
                    <motion.div
                      whileHover={{ y: -10 }}
                      transition={{ type: "spring", stiffness: 240, damping: 22 }}
                      className="shadow-soft group-hover:shadow-lift overflow-hidden rounded-3xl border border-border bg-card p-3 backdrop-blur-xl transition-shadow duration-500"
                    >
                      <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-ink">
                        <img
                          src={r.src}
                          alt={`${r.category} thumbnail — ${r.title}`}
                          loading="lazy"
                          width={1280}
                          height={720}
                          className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                        />
                      </div>
                      <div className="flex items-center justify-between gap-4 px-3 pt-5 pb-2">
                        <div className="min-w-0">
                          <h3 className="truncate text-base font-bold">{r.title}</h3>
                          <p className="mt-1 truncate text-sm text-muted-foreground">
                            {r.category} · {r.year}
                          </p>
                        </div>
                        <ArrowUpRight className="h-5 w-5 shrink-0 text-subtle transition-all duration-300 group-hover:rotate-45 group-hover:text-accent" />
                      </div>
                    </motion.div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
