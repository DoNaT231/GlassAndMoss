const common = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function Sun() {
  return (
    <>
      <circle cx="12" cy="12" r="3.25" />
      <path d="M12 3.5v1.75M12 18.75V20.5M4.8 4.8l1.25 1.25M17.95 17.95l1.25 1.25M3.5 12h1.75M18.75 12H20.5M4.8 19.2l1.25-1.25M17.95 6.05l1.25-1.25" />
    </>
  );
}

function Droplet() {
  return (
    <path d="M12 3.5c.4 2.2 1.6 3.9 3.1 5.3 1.7 1.5 2.9 3.2 2.9 5.4a6 6 0 0 1-12 0c0-2.2 1.2-3.9 2.9-5.4C10.4 7.4 11.6 5.7 12 3.5Z" />
  );
}

function Cycle() {
  return (
    <>
      <path d="M4 12a8 8 0 0 1 13.2-6.1L20 8" />
      <path d="M20 4.5V8h-3.5" />
      <path d="M20 12a8 8 0 0 1-13.2 6.1L4 16" />
      <path d="M4 19.5V16h3.5" />
    </>
  );
}

function Flame() {
  return (
    <path d="M12 3s2.2 2.4 2.2 4.6c0 1.2-.6 2-1.2 2.6.9.3 2.5 1.2 2.5 3.3A3.5 3.5 0 0 1 12 17a3.5 3.5 0 0 1-3.5-3.5c0-1.4.7-2.4 1.6-3.2C8.6 9.2 8 8 8 6.8 8 5 12 3 12 3Z" />
  );
}

function Wind() {
  return (
    <>
      <path d="M4 8h9.2a2.3 2.3 0 1 0-2.1-3.2" />
      <path d="M4 12h13.2a2.5 2.5 0 1 1-2.2 3.6" />
      <path d="M4 16h7.2a2 2 0 1 1-1.8 2.8" />
    </>
  );
}

function Moon() {
  return <path d="M16.5 3.8A7.2 7.2 0 1 0 20.2 14 5.6 5.6 0 0 1 16.5 3.8Z" />;
}

const glyphs = { sun: Sun, droplet: Droplet, cycle: Cycle, flame: Flame, wind: Wind, moon: Moon };

export default function Icon({ name, className = "h-5 w-5" }) {
  const Glyph = glyphs[name] ?? Sun;
  return (
    <svg {...common} className={className} aria-hidden="true">
      <Glyph />
    </svg>
  );
}
