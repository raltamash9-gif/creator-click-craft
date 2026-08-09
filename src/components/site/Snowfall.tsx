import { useEffect, useMemo, useState } from "react";

type Flake = {
  left: number;
  size: number;
  color: string;
  fall: number;
  drift: number;
  delay: number;
};

function makeFlakes(count: number): Flake[] {
  const flakes: Flake[] = [];
  const bigCount = Math.round(count / 12);
  const midCount = Math.round(count / 4);
  for (let i = 0; i < count; i++) {
    const size = i < bigCount ? 4 : i < bigCount + midCount ? 3 : 2;
    flakes.push({
      left: Math.random() * 100,
      size,
      color: size >= 3 ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.7)",
      fall: 8 + Math.random() * 12,
      drift: 4 + Math.random() * 5,
      delay: Math.random() * 15,
    });
  }
  return flakes;
}

export function Snowfall() {
  const [count, setCount] = useState(60);

  useEffect(() => {
    const set = () => setCount(window.innerWidth < 768 ? 30 : 60);
    set();
    window.addEventListener("resize", set);
    return () => window.removeEventListener("resize", set);
  }, []);

  const flakes = useMemo(() => makeFlakes(count), [count]);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
    >
      {flakes.map((f, i) => (
        <span
          key={i}
          className="absolute top-0 rounded-full"
          style={{
            left: `${f.left}%`,
            width: f.size,
            height: f.size,
            background: f.color,
            animation: `snow-fall ${f.fall}s linear ${f.delay}s infinite`,
          }}
        >
          <span
            className="absolute inset-0 rounded-full"
            style={{
              background: f.color,
              animation: `snow-drift ${f.drift}s ease-in-out ${f.delay}s infinite`,
            }}
          />
        </span>
      ))}
    </div>
  );
}
