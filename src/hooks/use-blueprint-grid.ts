import { useEffect, useRef } from "react";

/** Decorative pointer lighting: one scheduled update, no React scroll/mouse state. */
export function useBlueprintGrid() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;
    const sections = Array.from(main.children).filter(
      (node): node is HTMLElement => node instanceof HTMLElement && node.tagName === "SECTION",
    ).slice(1);
    const enabled = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    let active: HTMLElement | undefined;
    let x = 0;
    let y = 0;

    const clear = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      active?.removeAttribute("data-grid-active");
      active = undefined;
    };
    const move = (event: MouseEvent) => {
      if (!enabled.matches) return;
      const section = event.target instanceof Element ? event.target.closest("section") : null;
      if (!(section instanceof HTMLElement) || !sections.includes(section)) {
        clear();
        return;
      }
      if (active !== section) {
        active?.removeAttribute("data-grid-active");
        active = section;
      }
      x = event.clientX;
      y = event.clientY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (!active || !enabled.matches) return;
        const bounds = active.getBoundingClientRect();
        active.style.setProperty("--mx", `${x - bounds.left}px`);
        active.style.setProperty("--my", `${y - bounds.top}px`);
        active.setAttribute("data-grid-active", "");
      });
    };
    main.addEventListener("mousemove", move, { passive: true });
    main.addEventListener("mouseleave", clear);
    enabled.addEventListener("change", clear);
    window.addEventListener("scroll", clear, { passive: true });
    return () => {
      clear();
      main.removeEventListener("mousemove", move);
      main.removeEventListener("mouseleave", clear);
      enabled.removeEventListener("change", clear);
      window.removeEventListener("scroll", clear);
    };
  }, []);

  return mainRef;
}