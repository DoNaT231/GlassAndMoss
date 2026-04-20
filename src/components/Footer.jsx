import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="w-full relative z-10 py-12 md:py-16 px-4 md:px-10 lg:px-[132px] scroll-mt-[78px] border-t border-white/10 bg-[#0b0f0a]"
    >
      <div className="max-w-[1920px] mx-auto">
        <div className="max-w-[1666px] mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-white/80 text-[clamp(0.9rem,1.1vw,16px)]">
            <div className="space-y-3">
              <p className="text-white/50 text-xs uppercase tracking-[0.12em] font-semibold">Név / Cégnév</p>
              <p>Komoróczy Donát EV</p>
            </div>

            <div className="space-y-3">
              <p className="text-white/50 text-xs uppercase tracking-[0.12em] font-semibold">Székhely</p>
              <p>
                2660 Balassagyarmat, Óváros tér 23.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-white/50 text-xs uppercase tracking-[0.12em] font-semibold">Elérhetőség</p>
              <p>
                <a href="mailto:hello@glassandmoss.hu" className="text-white hover:text-[#A3B86C] transition-colors">
                  hello@glassandmoss.hu
                </a>
                <br />
                <a href="tel:+36306517934" className="text-white hover:text-[#A3B86C] transition-colors">
                  +36 30 651 7934
                </a>
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-white/50 text-xs uppercase tracking-[0.12em] font-semibold">Adószám</p>
              <p>91894137-1-32</p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
              <Link
                to="/gondozas"
                className="text-white/60 hover:text-[#A3B86C] transition-colors"
              >
                Gondozás
              </Link>
              <Link
                to="/adatkezelesi-tajekoztato"
                className="text-white/60 hover:text-[#A3B86C] transition-colors"
              >
                Adatkezelési tájékoztató
              </Link>
              <Link
                to="/aszf"
                className="text-white/60 hover:text-[#A3B86C] transition-colors"
              >
                ÁSZF
              </Link>
              <Link
                to="/cookie-tajekoztato"
                className="text-white/60 hover:text-[#A3B86C] transition-colors"
              >
                Cookie-tájékoztató
              </Link>
            </div>
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Glass & Moss. Minden jog fenntartva.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
