export default function PrimaryCtaButton({ children, className = "" }) {
  const classes = [
    "group relative inline-flex min-h-[54px] items-center justify-center overflow-hidden",
    "rounded-full border border-[#8fae3c]/22",
    "bg-[linear-gradient(180deg,rgba(62,82,30,0.58),rgba(35,50,21,0.66))]",
    "px-7 py-3.5 sm:px-8 sm:py-4",
    "text-[0.96rem] sm:text-base",
    "font-medium text-white/92",
    "shadow-[0_10px_30px_rgba(0,0,0,0.34)]",
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
