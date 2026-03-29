export default function GlassCard({
  children,
  className = "",
  rounded = "default",
  hover = false,
  as: Component = "div",
  ...props
}) {
  const roundedClass =
    rounded === "large" ? "rounded-2xl" : "rounded-xl";

  const classes = [
    "relative overflow-hidden",
    roundedClass,

    // HEADER STYLE GLASS
    "bg-white/[0.04]",
    "backdrop-blur-xl",

    // CLEAN BORDER
    "border border-white/10",

    // SOFT SHADOW (mint header)
    "shadow-[0_8px_30px_rgba(0,0,0,0.18)]",

    // HOVER (finom)
    hover &&
      "transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20",

    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...props}>
      {/* nagyon finom belső highlight */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06),transparent_40%)]" />

      <div className="relative z-10">{children}</div>
    </Component>
  );
}