export default function GlassCard({
  children,
  className = "",
  rounded = "default",
  hover = false,
  as: Component = "div",
  ...props
}) {
  const roundedClass =
    rounded === "large" ? "rounded-[32px]" : "rounded-2xl";

  const classes = [
    "relative isolate overflow-hidden",
    roundedClass,

    // cleaner glass base
    "bg-[linear-gradient(135deg,rgba(161, 161, 161, 0.1),rgba(255,255,255,0.06))]",
    "backdrop-blur-[8px] supports-[backdrop-filter]:backdrop-blur-[4px]",

    // premium border
    "border border-white/15",
    "shadow-[0_20px_60px_rgba(0,0,0,0.35)]",

    hover &&
      "transition-all duration-300 hover:border-white/25 hover:bg-white/[0.10]",

    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...props}>
      {/* top soft highlight */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04)_22%,transparent_48%)]" />

      {/* subtle green tint */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(158,196,76,0.12),transparent_55%)]" />

      {/* inner border */}
      <div className="pointer-events-none absolute inset-[1px] rounded-[inherit] border border-white/10" />

      {/* edge glow */}
      <div className="pointer-events-none absolute -inset-px rounded-[inherit] shadow-[inset_0_1px_0_rgba(255,255,255,0.22),inset_0_-1px_0_rgba(255,255,255,0.05)]" />

      <div className="relative z-10">{children}</div>
    </Component>
  );
}