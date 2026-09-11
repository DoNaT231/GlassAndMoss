export default function Reveal({
  show,
  delay = 0,
  duration = 900,
  from = "up",
  className = "",
  children,
}) {
  return (
    <div
      className={`reveal reveal-${from} ${show ? "is-in" : ""} ${className}`.trim()}
      style={{
        transitionDelay: show ? `${delay}ms` : "0ms",
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}
