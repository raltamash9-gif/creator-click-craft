import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type CursorMode = "default" | "button" | "view" | "link";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 700, damping: 34, mass: 0.35 });
  const ringY = useSpring(y, { stiffness: 700, damping: 34, mass: 0.35 });
  const [mode, setMode] = useState<CursorMode>("default");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-none-lg");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = (e.target as HTMLElement)?.closest?.("[data-cursor]") as HTMLElement | null;
      setMode(((el?.dataset["cursor"] as CursorMode) ?? "default") satisfies CursorMode);
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("cursor-none-lg");
    };
  }, [x, y]);

  if (!enabled) return null;

  const ringSize = mode === "view" ? 92 : mode === "button" ? 46 : mode === "link" ? 26 : 32;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden lg:block">
      <motion.div
        style={{ x, y }}
        className="absolute -mt-[3px] -ml-[3px] h-1.5 w-1.5 rounded-full bg-foreground"
        animate={{ opacity: mode === "default" ? 1 : 0 }}
      />
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="absolute grid place-items-center rounded-full"
        animate={{
          width: ringSize,
          height: ringSize,
          marginLeft: -ringSize / 2,
          marginTop: -ringSize / 2,
          backgroundColor:
            mode === "view"
              ? "#2C5364"
              : mode === "button"
                ? "oklch(0.985 0 0)"
                : "oklch(0.985 0 0 / 0)",
          borderColor: mode === "view" ? "#2C5364" : "oklch(0.985 0 0 / 0.65)",
          borderWidth: 1,
        }}
        transition={{ type: "spring", stiffness: 420, damping: 30 }}
      >
        {mode === "view" && (
          <span className="text-[10px] font-semibold tracking-[0.18em] text-accent-foreground uppercase">
            View
          </span>
        )}
      </motion.div>
    </div>
  );
}
