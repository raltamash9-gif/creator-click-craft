import { Mail, ArrowUpRight, MessageCircle, Globe, ArrowUp, Briefcase } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Reveal, SectionLabel } from "@/components/Reveal";

const EMAIL = "raltamash9@gmail.com";
const DISCORD = "altamashraza_123";
const BEHANCE = "https://www.behance.net/altamashraza8";
const UPWORK = "https://www.upwork.com/freelancers/~01117f9a8b0c60d946";

const cards = [
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: MessageCircle, label: "Discord", value: DISCORD, href: undefined },
  { icon: Globe, label: "Behance", value: "behance.net/altamashraza8", href: BEHANCE },
  { icon: Briefcase, label: "Upwork", value: "Hire Me on Upwork", href: UPWORK },
];


export function Contact() {
  return (
    <section id="contact" className="grain relative overflow-hidden py-28 lg:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 60% at 50% 10%, rgba(44,83,100,0.22), transparent 70%), radial-gradient(45% 50% at 85% 90%, rgba(44,83,100,0.14), transparent 72%)",
        }}
      />
      <div className="shell relative">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex justify-center">
              <SectionLabel>Contact</SectionLabel>
            </div>
            <h2 className="mt-8 text-[clamp(2.4rem,5.2vw,4.6rem)] leading-[1] font-extrabold">
              Let's create thumbnails your
              <br className="hidden sm:block" /> audience can't ignore.
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Whether you need one thumbnail or a long-term creative partner, let's build visuals
              that help your videos stand out.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => {
            const inner = (
              <>
                <c.icon className="h-5 w-5 text-accent transition-all duration-300 group-hover:drop-shadow-[0_0_10px_oklch(0.623_0.214_259.8_/_0.75)]" />
                <p className="mt-5 text-[11px] tracking-[0.24em] text-subtle uppercase">{c.label}</p>
                <p className="mt-2 truncate text-sm font-medium">{c.value}</p>
              </>
            );
            const isExternal = Boolean(c.href?.startsWith("http"));
            return (
              <Reveal key={c.label} delay={i * 0.06}>
                {c.href ? (
                  <a
                    href={c.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    aria-label={`${c.label} — ${c.value}`}
                    data-cursor="link"
                    className="group   block h-full glass-card rounded-3xl p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="group  h-full glass-card rounded-3xl p-7 backdrop-blur-xl">
                    {inner}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${EMAIL}`}
              data-cursor="button"
              className="hover:shadow-glow inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.03] hover:bg-accent"
            >
              <Mail className="h-4 w-4" />
              Hire Me
            </a>
            <a
              href={BEHANCE}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="button"
              className="hover:shadow-ember inline-flex items-center gap-2 glass-card rounded-full px-8 py-4 text-sm font-medium backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:border-ember/40"
            >
              View Behance
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={UPWORK}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="button"
              className="hover:shadow-glow inline-flex items-center gap-2 glass-card rounded-full px-8 py-4 text-sm font-medium backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:border-accent/40"
            >
              View Upwork
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <p className="mt-8 text-center text-sm text-subtle">
            Limited slots each month so every channel gets real creative direction.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const footerLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#why", label: "Why It Works" },
  { href: "/#process", label: "Process" },
  { href: "/#services", label: "Services" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
          <div>
            <Link to="/" data-cursor="link" className="font-display text-base font-extrabold tracking-[-0.04em]">
              ALTAR<span className="text-accent">.</span>STUDIO
            </Link>
            <p className="mt-3 max-w-xs text-sm text-subtle">
              Cinematic thumbnail design & creative direction.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                data-cursor="link"
                className="nav-underline text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
          <p className="text-xs text-subtle">© {new Date().getFullYear()} Altar Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href={BEHANCE} target="_blank" rel="noopener noreferrer" data-cursor="link" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Behance
            </a>
            <a href={UPWORK} target="_blank" rel="noopener noreferrer" data-cursor="link" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Upwork
            </a>

            <a href={`mailto:${EMAIL}`} data-cursor="link" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Email
            </a>
            <button
              type="button"
              data-cursor="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
