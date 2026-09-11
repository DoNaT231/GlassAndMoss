import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import useSectionReveal from "../hooks/useSectionReveal";

export default function Footer() {
  const [sectionRef, visible] = useSectionReveal({ threshold: 0.2 });

  const blocks = [
    {
      label: "Név / Cégnév",
      body: <p className="type-body">Komoróczy Donát EV</p>,
    },
    {
      label: "Székhely",
      body: (
        <p className="type-body">
          2660 Balassagyarmat, Óváros tér 23.
        </p>
      ),
    },
    {
      label: "Elérhetőség",
      body: (
        <p className="type-body">
          <a href="mailto:hello@glassandmoss.hu" className="text-white hover:text-[#A3B86C] transition-colors">
            hello@glassandmoss.hu
          </a>
          <br />
          <a href="tel:+36306517934" className="text-white hover:text-[#A3B86C] transition-colors">
            +36 30 651 7934
          </a>
        </p>
      ),
    },
    {
      label: "Adószám",
      body: <p className="type-body">91894137-1-32</p>,
    },
  ];

  return (
    <footer
      ref={sectionRef}
      className="w-full relative z-10 py-12 md:py-16 px-4 md:px-10 lg:px-[132px] scroll-mt-[78px] border-t border-white/10 bg-[#0b0f0a]"
    >
      <div className="max-w-[1920px] mx-auto">
        <div className="max-w-[1666px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blocks.map((block, index) => (
              <Reveal
                key={block.label}
                show={visible}
                delay={index * 90}
                from="up"
              >
                <div className="space-y-3">
                  <p className="type-label text-white/50">{block.label}</p>
                  {block.body}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal show={visible} delay={420} from="up">
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex flex-wrap gap-x-6 gap-y-1">
                <Link
                  to="/gondozas"
                  className="type-small hover:text-[#A3B86C] transition-colors"
                >
                  Gondozás
                </Link>
                <Link
                  to="/adatkezelesi-tajekoztato"
                  className="type-small hover:text-[#A3B86C] transition-colors"
                >
                  Adatkezelési tájékoztató
                </Link>
                <Link
                  to="/aszf"
                  className="type-small hover:text-[#A3B86C] transition-colors"
                >
                  ÁSZF
                </Link>
                <Link
                  to="/cookie-tajekoztato"
                  className="type-small hover:text-[#A3B86C] transition-colors"
                >
                  Cookie-tájékoztató
                </Link>
              </div>
              <p className="type-small">
                © {new Date().getFullYear()} Glass & Moss. Minden jog fenntartva.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </footer>
  );
}
