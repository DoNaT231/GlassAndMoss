export function WaterCycle() {
  return (
    <figure className="mt-10 border-t border-white/10 pt-8">
      <svg
        viewBox="0 0 640 660"
        role="img"
        aria-labelledby="wc-title wc-desc"
        className="mx-auto h-auto w-full max-w-[520px] text-[#A3B86C]"
      >
        <title id="wc-title">A zárt terrárium vízkörforgása</title>
        <desc id="wc-desc">
          A talajból víz párolog, a növények párologtatnak, a pára a hűvösebb üvegen lecsapódik, majd a víz visszacsorog a talajba. A fény kívülről adja az energiát.
        </desc>
        <defs>
          <marker id="wc-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0 0 L7 3 L0 6 Z" fill="#A3B86C" />
          </marker>
          <linearGradient id="wc-soil" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#6d5a40" />
            <stop offset="1" stopColor="#2a241c" />
          </linearGradient>
        </defs>

        <path
          d="M214 78h132c10 0 16 8 16 16v18c28 10 48 48 48 92v250c0 46-42 78-130 78s-130-32-130-78V204c0-44 20-82 48-92V94c0-8 6-16 16-16Z"
          fill="rgba(255,255,255,0.03)"
          stroke="rgba(244,240,230,0.55)"
          strokeWidth="1.5"
        />
        <path d="M230 58h100c8 0 12 6 12 12v16H218V70c0-6 4-12 12-12Z" fill="#8d6a45" stroke="rgba(244,240,230,0.35)" />
        <path d="M168 470c28 18 70 28 112 28s84-10 112-28v78c0 28-46 48-112 48s-112-20-112-48V470Z" fill="url(#wc-soil)" />
        <path d="M186 468c22-16 52-26 94-26s72 10 94 26" fill="none" stroke="#7d9a4a" strokeWidth="10" strokeLinecap="round" />

        <path d="M250 450c8-70 6-120 18-168" fill="none" stroke="#6f8f3e" strokeWidth="1.6" />
        <path d="M268 300c18-8 34-6 48 4 10 8 14 20 8 34" fill="none" stroke="#A3B86C" strokeWidth="1.4" />
        <ellipse cx="300" cy="292" rx="16" ry="8" fill="none" stroke="#C7DD8A" strokeWidth="1.3" />
        <path d="M286 450c-20-48-46-78-52-132" fill="none" stroke="#5d7c34" strokeWidth="1.5" />
        <ellipse cx="232" cy="312" rx="18" ry="9" transform="rotate(-28 232 312)" fill="none" stroke="#8FAE3C" strokeWidth="1.3" />

        <path d="M300 430c8-36 8-36 8-70" fill="none" stroke="#A3B86C" strokeWidth="1.4" markerEnd="url(#wc-arrow)" />
        <path d="M286 300c-6-28-4-48 6-74" fill="none" stroke="#C7DD8A" strokeWidth="1.4" markerEnd="url(#wc-arrow)" />
        <path d="M214 150c46 16 92 16 138 0" fill="none" stroke="rgba(199,221,138,0.8)" strokeWidth="1.2" />
        <path d="M206 210c8 46 10 90 6 150" fill="none" stroke="#A3B86C" strokeWidth="1.4" markerEnd="url(#wc-arrow)" />
        <circle cx="210" cy="168" r="2.2" fill="#E7F0C8" />
        <circle cx="198" cy="214" r="2" fill="#E7F0C8" />
        <circle cx="204" cy="268" r="1.8" fill="#E7F0C8" />

        <path d="M392 120h78" stroke="#C7DD8A" strokeWidth="1.2" markerEnd="url(#wc-arrow)" />
        <text x="404" y="108" fill="#f4f0e6" fontSize="15" fontFamily="DM Sans, sans-serif">
          Fény
        </text>

        <text x="430" y="168" fill="#f4f0e6" fontSize="16" fontFamily="DM Sans, sans-serif">
          Páralecsapódás
        </text>
        <text x="430" y="300" fill="#f4f0e6" fontSize="16" fontFamily="DM Sans, sans-serif">
          Növényi
        </text>
        <text x="430" y="322" fill="#f4f0e6" fontSize="16" fontFamily="DM Sans, sans-serif">
          párologtatás
        </text>
        <text x="430" y="430" fill="#f4f0e6" fontSize="16" fontFamily="DM Sans, sans-serif">
          Párolgás
        </text>
        <text x="430" y="600" fill="#f4f0e6" fontSize="16" fontFamily="DM Sans, sans-serif">
          Víz visszajutása
        </text>
        <text x="430" y="622" fill="#f4f0e6" fontSize="16" fontFamily="DM Sans, sans-serif">
          a talajba
        </text>
      </svg>
      <figcaption className="type-small mx-auto mt-4 max-w-xl text-center">
        A fény kívülről érkezik. Belül a párolgás, a növényi párologtatás, a páralecsapódás és a talajba visszatérő víz tartja a körforgást.
      </figcaption>
    </figure>
  );
}

function Jar({ variant }) {
  const droplets = {
    light: [
      [78, 78],
      [70, 120],
      [132, 96],
    ],
    wet: [
      [74, 70],
      [68, 108],
      [64, 150],
      [132, 78],
      [138, 118],
      [142, 162],
      [100, 64],
      [118, 86],
    ],
    dry: [],
  }[variant];

  return (
    <svg viewBox="0 0 200 220" className="h-auto w-full" aria-hidden="true">
      <path
        d="M62 28h76c6 0 10 5 10 10v10c18 8 30 30 30 58v70c0 28-26 42-78 42S22 204 22 176V106c0-28 12-50 30-58V38c0-5 4-10 10-10Z"
        fill="rgba(255,255,255,0.03)"
        stroke="rgba(244,240,230,0.45)"
      />
      <path d="M70 16h60c5 0 8 4 8 8v10H62V24c0-4 3-8 8-8Z" fill="#8d6a45" />
      <path d="M36 150c16 12 40 18 64 18s48-6 64-18v28c0 16-28 28-64 28s-64-12-64-28v-28Z" fill="#3a3126" />
      <path
        d="M48 148c14-10 32-16 52-16s38 6 52 16"
        fill="none"
        stroke={variant === "dry" ? "#8a7048" : "#7d9a4a"}
        strokeWidth="7"
        strokeLinecap="round"
      />
      {variant === "dry" && (
        <path d="M70 146l10 14M100 142l6 16M126 148l-8 12" stroke="#c4b39a" strokeWidth="1" />
      )}
      {droplets.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={variant === "wet" ? 2.4 : 1.7} fill="#d5e7a4" />
      ))}
      {variant === "wet" && (
        <path d="M40 150c30 8 90 8 122 0" fill="none" stroke="rgba(213,231,164,0.45)" strokeWidth="3" />
      )}
    </svg>
  );
}

export function MoistureFigures({ states }) {
  return (
    <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-3 md:gap-6">
      {states.map((state) => (
        <figure key={state.id} className="min-w-0">
          <div className="mx-auto aspect-[10/11] max-w-[220px]">
            <Jar variant={state.id} />
          </div>
          <figcaption className="mt-3">
            <h3 className="type-title">{state.title}</h3>
            <p className="type-small mt-2 text-[#C7DD8A]">{state.summary}</p>
            <p className="type-body mt-3">{state.text}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function LightFigure() {
  return (
    <figure className="mt-10 border-t border-white/10 pt-8 lg:grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.1fr)] lg:items-center lg:gap-12">
      <svg viewBox="0 0 320 260" role="img" aria-labelledby="light-title" className="h-auto w-full text-[#A3B86C]">
        <title id="light-title">Szórt fény az ablak és a terrárium között</title>
        <rect x="24" y="28" width="78" height="150" rx="2" fill="none" stroke="rgba(244,240,230,0.45)" />
        <path d="M24 78h78M24 128h78M63 28v150" stroke="rgba(244,240,230,0.28)" />
        <path d="M108 46c36 10 70 28 96 62" fill="none" stroke="#C7DD8A" strokeWidth="1.2" />
        <path d="M108 70c40 8 78 24 112 58" fill="none" stroke="#A3B86C" strokeWidth="1.2" />
        <path d="M108 96c46 4 86 18 122 48" fill="none" stroke="rgba(199,221,138,0.55)" strokeWidth="1.2" />
        <path d="M214 168h62v62h-62z" fill="rgba(255,255,255,0.03)" stroke="rgba(244,240,230,0.5)" />
        <path d="M226 214c8-8 16-12 24-12s16 4 22 12" fill="none" stroke="#8FAE3C" strokeWidth="3" strokeLinecap="round" />
        <path d="M236 150l18-16M250 146l10-18" stroke="#e7d7a1" strokeWidth="1" />
        <path d="M232 132l22 18" stroke="#c4b39a" strokeWidth="1.2" />
      </svg>
      <figcaption className="type-body mt-6 lg:mt-0">
        A függönyön vagy a szoba levegőjén átszűrt fény elég a fotoszintézishez. A közvetlen sugár, amely az üvegen pontszerűen éri a lombot, már hővé gyűlik össze odabent.
      </figcaption>
    </figure>
  );
}
