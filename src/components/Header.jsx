import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Rólunk", slug: "rolunk", id: "13:6" },
    { name: "Miért mi?", slug: "miert-mi", id: "13:7" },
    { name: "Katalógus", slug: "katalogus", id: "13:8" },
    { name: "Elérhetőség", slug: "elerhetoseg", id: "13:9" },
    { name: "Mit csinálunk?", slug: "mit-csinalunk", id: "13:12" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full"
      data-figma-id="13:3"
    >
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-[80px]">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.18)] min-h-[60px] px-4 md:px-6 lg:px-8">
          {/* Logo */}
          <a
            href="#top"
            className="flex items-center shrink-0 transition-transform duration-300 hover:scale-[1.02]"
            aria-label="Glass & Moss főoldal"
          >
            <div
              className="w-[90px] h-[36px] md:w-[150px] md:h-[46px] lg:w-[220px] lg:h-[56px] bg-contain bg-no-repeat bg-left"
              style={{
                backgroundImage:
                  "url('https://static.wixstatic.com/media/3fde4b_cc57b6fab8454cb5a3e95a8515eed26a~mv2.png?originWidth=711&originHeight=142')",
              }}
              data-figma-id="12:28"
            />
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-10 xl:gap-14"
            data-figma-id="13:5"
          >
            {navLinks.map((link) => (
              <a
                key={link.slug}
                href={`#${link.slug}`}
                className="relative font-semibold text-[clamp(0.95rem,1.1vw,1.1rem)] text-primary/90 hover:text-white transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#A3B86C] after:transition-all after:duration-300 hover:after:w-full"
                data-figma-id={link.id}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="lg:hidden relative">
            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-label="Menü megnyitása"
              onClick={() => setMobileOpen((o) => !o)}
              className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/10 bg-white/5 text-primary hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>

            {mobileOpen && (
              <div className="fixed inset-0 z-[60] lg:hidden">
                <button
                  type="button"
                  aria-label="Menü bezárása"
                  className="absolute inset-0 bg-black/65 backdrop-blur-sm"
                  onClick={() => setMobileOpen(false)}
                />

                <nav className="absolute right-0 top-0 bottom-0 w-[min(100%,340px)] border-l border-white/10 bg-[#0d0d0d]/95 backdrop-blur-2xl flex flex-col pt-24 px-8 shadow-2xl">
                  <button
                    type="button"
                    aria-label="Menü bezárása"
                    onClick={() => setMobileOpen(false)}
                    className="absolute top-5 right-5 flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-primary hover:bg-white/10"
                  >
                    ✕
                  </button>

                  <div className="flex flex-col gap-7 items-start">
                    {navLinks.map((link) => (
                      <a
                        key={link.slug}
                        href={`#${link.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="text-[1.35rem] font-semibold text-primary/90 hover:text-[#D6D601] transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}