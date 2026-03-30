import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navLinks = [
    { name: "Rólunk", slug: "rolunk", id: "13:6" },
    { name: "Miért mi?", slug: "miert-mi", id: "13:7" },
    { name: "Gondozás", path: "/gondozas", id: "care" },
    { name: "Katalógus", slug: "katalogus", id: "13:8" },
    { name: "Elérhetőség", slug: "elerhetoseg", id: "13:9" },
    { name: "Impresszum", slug: "impresszum", id: "13:13" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full"
      data-figma-id="13:3"
    >
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-[80px]">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.18)] overflow-hidden">
          
          {/* TOP BAR */}
          <div className="flex items-center justify-between min-h-[60px] px-4 md:px-6 lg:px-8">
            <a
              href="/"
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

            <nav
              className="hidden lg:flex items-center gap-10 xl:gap-14"
              data-figma-id="13:5"
            >
              {navLinks.map((link) =>
                link.path ? (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="relative font-semibold text-[clamp(0.95rem,1.1vw,1.1rem)] text-white transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#A3B86C] after:transition-all after:duration-300 hover:after:w-full"
                    data-figma-id={link.id}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.slug}
                    href={`/#${link.slug}`}
                    className="relative font-semibold text-[clamp(0.95rem,1.1vw,1.1rem)] text-white transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#A3B86C] after:transition-all after:duration-300 hover:after:w-full"
                    data-figma-id={link.id}
                  >
                    {link.name}
                  </a>
                ),
              )}
            </nav>

            {/* MOBILE BUTTON */}
            <div className="lg:hidden">
              <button
                type="button"
                aria-expanded={mobileOpen}
                aria-label="Menü megnyitása"
                onClick={() => setMobileOpen((o) => !o)}
                className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-primary hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 active:scale-95 relative"
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
                  className={`transition-all duration-300 ${
                    mobileOpen ? "opacity-0 scale-75 absolute" : "opacity-100"
                  }`}
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>

                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-all duration-300 ${
                    mobileOpen ? "opacity-100 scale-100" : "opacity-0 scale-75 absolute"
                  }`}
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>

          {/* MOBILE DROPDOWN - SAME CONTAINER */}
          <div
            className={`lg:hidden transition-all duration-300 ease-in-out ${
              mobileOpen
                ? "max-h-[700px] opacity-100"
                : "max-h-0 opacity-0"
            } overflow-hidden`}
            aria-hidden={!mobileOpen}
          >
            <div className="border-t border-white/10 bg-[linear-gradient(180deg,rgba(18,24,18,0.94)_0%,rgba(9,12,10,0.96)_100%)]">
              <div className="px-4 pt-4 pb-3">
                <p className="text-[11px] tracking-[0.24em] uppercase text-white/40">
                  Menü
                </p>
                <p className="text-white text-base font-semibold">
                  Glass & Moss
                </p>
              </div>

              <div className="px-4 pb-4 space-y-3">
                {navLinks.map((link) =>
                  link.path ? (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className="relative flex items-center justify-between gap-3 font-semibold text-[clamp(0.95rem,1.1vw,1.1rem)] text-white/82 hover:text-white transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#A3B86C] after:transition-all after:duration-300 hover:after:w-full"
                    >
                      <span className="text-[1rem] font-medium tracking-[0.01em]">
                        {link.name}
                      </span>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#A3B86C]/10 text-[#A3B86C] transition-colors duration-300">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span>
                    </Link>
                  ) : (
                    <a
                      key={link.slug}
                      href={`/#${link.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="relative flex items-center justify-between gap-3 font-semibold text-[clamp(0.95rem,1.1vw,1.1rem)] text-white/82 hover:text-white transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#A3B86C] after:transition-all after:duration-300 hover:after:w-full"
                    >
                      <span className="text-[1rem] font-medium tracking-[0.01em]">
                        {link.name}
                      </span>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#A3B86C]/10 text-[#A3B86C] transition-colors duration-300">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span>
                    </a>
                  ),
                )}
              </div>

              <div className="px-4 pb-4">
                <div className="rounded-2xl border border-[#A3B86C]/20 bg-[#A3B86C]/8 px-5 py-4">
                  <p className="text-sm text-white/55 mb-1">Kapcsolat</p>
                  <p className="text-white font-semibold">
                    Egyedi terráriumok és floráriumok
                  </p>
                  <p className="text-sm text-white/65 mt-1">
                    Természetes elegancia, kézzel készített kompozíciók.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}