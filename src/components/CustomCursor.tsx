import { useEffect, useRef, useState } from "react";

type CursorMode = "default" | "button" | "view" | "link";

const RING_BASE = 92;
const ringScale: Record<CursorMode, number> = {
  view: 1,
  button: 46 / RING_BASE,
  link: 26 / RING_BASE,
  default: 32 / RING_BASE,
};

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<CursorMode>("default");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("cursor-none-lg");

    let targetX = -100;
    let targetY = -100;
    let ringX = -100;
    let ringY = -100;
    let raf = 0;

    const move = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      const el = (e.target as HTMLElement)?.closest?.("[data-cursor]") as HTMLElement | null;
      const next = ((el?.dataset["cursor"] as CursorMode) ?? "default") satisfies CursorMode;
      setMode((prev) => (prev === next ? prev : next));
    };

    const tick = () => {
      ringX += (targetX - ringX) * 0.2;
      ringY += (targetY - ringY) * 0.2;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", move, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("cursor-none-lg");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden lg:block">
      <div
        ref={dotRef}
        className="absolute top-0 left-0 -mt-[3px] -ml-[3px] h-1.5 w-1.5 rounded-full bg-foreground [will-change:transform]"
        style={{ opacity: mode === "default" ? 1 : 0, transition: "opacity 200ms ease" }}
      />
      <div
        ref={ringRef}
        className="absolute top-0 left-0 [will-change:transform]"
      >
        <div
          className="grid place-items-center rounded-full border"
          style={{
            width: RING_BASE,
            height: RING_BASE,
            marginLeft: -RING_BASE / 2,
            marginTop: -RING_BASE / 2,
            transform: `scale(${ringScale[mode]})`,
            transition: "transform 280ms cubic-bezier(0.22,1,0.36,1), background-color 220ms ease",
            backgroundColor:
              mode === "view"
                ? "#2C5364"
                : mode === "button"
                  ? "oklch(0.985 0 0)"
                  : "oklch(0.985 0 0 / 0)",
            borderColor: mode === "view" ? "#2C5364" : "oklch(0.985 0 0 / 0.65)",
          }}
        >
          {mode === "view" && (
            <span className="text-[10px] font-semibold tracking-[0.18em] text-accent-foreground uppercase">
              View
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
