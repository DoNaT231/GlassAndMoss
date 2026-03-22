export default function GlassCard({ children, className = "", rounded = "default", hover = false, as: Component = "div", ...props }) {
  const roundedClass = rounded === "large" ? "rounded-[44px]" : "rounded-[24px]";
  const classes = [
    roundedClass,
    "shadow-[inset_0px_4px_50px_300px_rgba(0,0,0,0.25)] backdrop-blur-lg",
    hover && "hover:scale-[1.02] transition-transform duration-500 cursor-pointer",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component
      className={classes}
      style={{ background: "rgba(0, 0, 0, 0.1)" }}
      {...props}
    >
      {children}
    </Component>
  );
}
