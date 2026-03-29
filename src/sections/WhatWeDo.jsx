import GlassCard from "../components/GlassCard";

export default function WhatWeDo() {
  return (
    <>
      <section
        id="mit-csinalunk"
        className="w-full relative z-10 py-20 lg:py-28 px-4 md:px-10 lg:px-[132px] scroll-mt-[78px] bg-gradient-to-b from-[#0b0f0a] via-[#10150f] to-[#0b0f0a]"
        data-figma-id="40:2"
      >
        <div className="max-w-[1920px] mx-auto">
          <h2
              className="font-bold text-[clamp(2.5rem,4.4vw,64px)] text-white mb-8 lg:mb-12 text-left"
              data-figma-id="40:40"
            >
              Mit készítünk?
            </h2>

          <div className="flex flex-col gap-8 lg:gap-y-[39px] w-full max-w-[1666px] mx-auto">
            {/* Four boxes grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-y-[39px] lg:gap-x-[54px] w-full">
              {[
                { id: "40:27", title: "Paludáriumok" },
                { id: "40:44", title: "Terráriumok" },
                { id: "40:46", title: "Bútorba épített ökoszisztémák" },
                { id: "40:48", title: "Személyre szabott munkák" },
              ].map((card, index) => (
                <GlassCard
                  key={index}
                  hover
                  className="w-full aspect-[806/402] flex items-start justify-start p-6"
                  data-figma-id={card.id}
                >
                  <h3 className="font-bold text-[clamp(1.5rem,2.5vw,32px)] text-white text-left px-6">
                    {card.title}
                  </h3>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}