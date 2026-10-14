type BrandProps = {
  /** "nav" is the full-size lockup, "compact" is the footer size. */
  variant?: "nav" | "compact";
};

/**
 * Two-line brand lockup: ALTAMASH over DESIGN PORTFOLIO.
 * Both lines use leading-none so the block stays shorter than the nav's
 * "Hire Me" button — the navbar height is set by the button, not by the brand.
 */
export function Brand({ variant = "nav" }: BrandProps) {
  const primarySize = variant === "nav" ? "text-lg lg:text-xl" : "text-base";
  const secondarySize = variant === "nav" ? "text-[9px] lg:text-[10px]" : "text-[9px]";

  return (
    <span className="inline-flex flex-col leading-none">
      <span
        className={`font-display font-extrabold uppercase leading-none tracking-[0.08em] text-foreground ${primarySize}`}
      >
        Altamash
      </span>
      <span
        className={`mt-1.5 font-medium uppercase leading-none tracking-[0.28em] text-muted-foreground ${secondarySize}`}
      >
        Design Portfolio
      </span>
    </span>
  );
}
