export default function PrimaryCtaButton({ children, className = "" }) {
  const classes = [
    "group relative inline-flex min-h-9 items-center justify-center overflow-hidden sm:min-h-10 min-[1680px]:min-h-[52px]",
    "rounded-full border border-[#8BAE5A]",
    "shadow-[0_0_20px_rgba(139,174,90,0.25)]",
    "bg-[linear-gradient(180deg,rgba(62,82,30,0.58),rgba(35,50,21,0.66))]",
    "px-4 py-1.5 sm:px-6 sm:py-2 min-[1680px]:px-8 min-[1680px]:py-3.5",
    "type-button text-white/92",
    "backdrop-blur-md",
    "transition-all duration-300",
    "hover:-translate-y-0.5",
    "hover:border-[#a3b86c]/38",
    "hover:bg-[linear-gradient(180deg,rgba(76,102,38,0.62),rgba(43,62,25,0.7))]",
    "active:translate-y-0",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes}>
      <span className="absolute inset-x-6 top-0 h-px bg-white/22" />
      <span className="absolute inset-x-10 bottom-0 h-px bg-white/6" />
      <span className="relative z-10">{children}</span>
    </span>
  );
}
