import { Link } from "react-router-dom";
import GlassCard from "../components/GlassCard";
import PrimaryCtaButton from "../components/PrimaryCtaButton";
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
        border-y border-white/[0.06]
        bg-gradient-to-b from-[#0b0f0a] via-[#10150f] to-[#0b0f0a]
        px-4 py-14 md:px-10 md:py-16 lg:px-[132px] lg:py-20
      "
    >
      <div className="mx-auto max-w-[1666px]">
        <Reveal show={visible} delay={0} duration={1000} from="up">
          <GlassCard
            className="
              flex flex-col gap-6 p-6
              sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-8
              lg:p-10
              border border-white/10 bg-white/[0.04] backdrop-blur-xl
            "
          >
            <div className="min-w-0 text-left">
              <Reveal show={visible} delay={220} from="left">
                <p className="type-label">
                  Útmutató
                </p>
              </Reveal>
              <Reveal show={visible} delay={340} from="left">
                <h2 className="type-heading mt-2">
                  Hogyan gondozd a terráriumod?
                </h2>
              </Reveal>
              <Reveal show={visible} delay={460} from="left">
                <p className="type-body mt-3 max-w-2xl">
                  Rövid, egyértelmű szabályok: locsolás, fény, szellőztetés — kezdőknek is.
                </p>
              </Reveal>
            </div>

            <Reveal show={visible} delay={620} from="right" className="shrink-0 sm:pl-4">
              <Link to="/gondozas" className="block w-full sm:w-auto">
                <PrimaryCtaButton className="mt-6 w-full px-6 py-3 sm:min-h-[52px] sm:px-8">
                  Gondozási útmutató
                </PrimaryCtaButton>
              </Link>
            </Reveal>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
