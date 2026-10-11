import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import useSectionReveal from "../hooks/useSectionReveal";

export default function CareTeaser() {
  const [sectionRef, visible] = useSectionReveal({ threshold: 0.35 });

  return (
    <section
      id="gondozas-bevezeto"
      ref={sectionRef}
      className="
        relative z-10 w-full overflow-hidden
        scroll-mt-[78px]
        border-y border-white/10
        bg-[#0b0f0a]
        px-4 py-8 md:px-8 md:py-10 lg:px-12
      "
    >
      <div className="mx-auto flex max-w-[1666px] flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
        <div className="min-w-0 text-left">
          <Reveal show={visible} delay={0} from="left">
            <p className="type-label">Útmutató</p>
          </Reveal>
          <Reveal show={visible} delay={120} from="left">
            <h2 className="type-display mt-2">Hogyan gondozd a terráriumod?</h2>
          </Reveal>
          <Reveal show={visible} delay={220} from="left">
            <p className="type-body mt-3 max-w-2xl">
              Fény, öntözés, páratartalom és a növények egyensúlya — részletes útmutató a zárt terráriumokhoz.
            </p>
          </Reveal>
        </div>

        <Reveal show={visible} delay={320} from="right" className="shrink-0">
          <Link
            to="/terrarium-gondozas"
            className="type-small inline-flex items-center gap-2 text-[#A3B86C] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A3B86C]"
          >
            Gondozási útmutató
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
