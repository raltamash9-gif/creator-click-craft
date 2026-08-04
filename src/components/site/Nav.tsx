import { useEffect, useState } from "react";
import { motion } from "motion/react";

const items = [
  { id: "work", label: "Work" },
  { id: "case-studies", label: "Case Studies" },
  { id: "process", label: "Process" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`transition-all duration-500 ${
          scrolled ? "glass shadow-soft border-b" : "border-b border-transparent"
        }`}
      >
        <nav className="shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 py-5 lg:grid-cols-[1fr_auto_1fr]">
          <a
            href="#top"
            data-cursor="link"
            className="min-w-0 truncate font-display text-lg font-extrabold tracking-[-0.04em]"
          >
            ALTAR<span className="text-accent">.</span>STUDIO
          </a>

          <div className="hidden items-center gap-9 lg:flex">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                data-cursor="link"
                className={`nav-underline text-sm transition-colors duration-300 ${
                  active === item.id ? "text-foreground" : "text-muted-foreground"
                } hover:text-foreground`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex justify-end">
            <a
              href="#contact"
              data-cursor="button"
              className="hover:shadow-glow inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.03] hover:bg-accent"
            >
              Hire Me
            </a>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
