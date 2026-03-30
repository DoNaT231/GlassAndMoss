import { Link } from "react-router-dom";
import GlassCard from "../components/GlassCard";

export default function CareTeaser() {
  return (
    <section
      id="gondozas-bevezeto"
      className="
        relative z-10 w-full overflow-hidden
        scroll-mt-[78px]
        border-y border-white/[0.06]
        bg-gradient-to-b from-[#0b0f0a] via-[#10150f] to-[#0b0f0a]
        px-4 py-14 md:px-10 md:py-16 lg:px-[132px] lg:py-20
      "
    >
      <div className="mx-auto max-w-[1666px]">
        <GlassCard
          className="
            flex flex-col gap-6 p-6
            sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-8
            lg:p-10
            border border-white/10 bg-white/[0.04] backdrop-blur-xl
          "
        >
          <div className="min-w-0 text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A3B86C]">
              Útmutató
            </p>
            <h2 className="mt-2 text-[clamp(1.35rem,3vw,2rem)] font-semibold tracking-tight text-white">
              Hogyan gondozd a terráriumod?
            </h2>
            <p className="mt-3 max-w-2xl text-[clamp(0.95rem,1.1vw,1.05rem)] leading-[1.75] text-white/75">
              Rövid, egyértelmű szabályok: locsolás, fény, szellőztetés — kezdőknek is.
            </p>
          </div>

          <div className="shrink-0 sm:pl-4">
            <Link to="/gondozas" className="block w-full sm:w-auto">
              <span
                className="
                  inline-flex min-h-[48px] w-full items-center justify-center
                  rounded-full border border-[#A3B86C]/45 bg-[#8FAE3C]/15
                  px-6 py-3 text-sm font-semibold text-white
                  backdrop-blur-sm transition-all duration-300
                  hover:border-[#B7D46E] hover:bg-[#8FAE3C]/25
                  active:scale-[0.98]
                  sm:min-h-[52px] sm:px-8 sm:text-base
                "
              >
                Gondozási útmutató
              </span>
            </Link>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
