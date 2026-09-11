import GlassCard from "../components/GlassCard";
import Reveal from "../components/Reveal";
import useSectionReveal from "../hooks/useSectionReveal";

export default function WhatWeDo() {
  const [sectionRef, visible] = useSectionReveal();
  const cards = [
    { id: "40:27", title: "Paludáriumok" },
    { id: "40:44", title: "Terráriumok" },
    { id: "40:46", title: "Bútorba épített ökoszisztémák" },
    { id: "40:48", title: "Személyre szabott munkák" },
  ];

  return (
    <section
      id="mit-csinalunk"
      ref={sectionRef}
      className="w-full relative z-10 py-20 lg:py-28 px-4 md:px-10 lg:px-[132px] scroll-mt-[78px] bg-gradient-to-b from-[#0b0f0a] via-[#10150f] to-[#0b0f0a]"
      data-figma-id="40:2"
    >
      <div className="max-w-[1920px] mx-auto">
        <Reveal show={visible} delay={0} from="left">
          <h2
            className="type-display mb-8 text-left lg:mb-12"
            data-figma-id="40:40"
          >
            Mit készítünk?
          </h2>
        </Reveal>

        <div className="flex flex-col gap-8 lg:gap-y-[39px] w-full max-w-[1666px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-y-[39px] lg:gap-x-[54px] w-full">
            {cards.map((card, index) => (
              <Reveal
                key={card.id}
                show={visible}
                delay={280 + index * 140}
                from="up"
              >
                <GlassCard
                  hover
                  className="w-full aspect-[806/402] flex items-start justify-start p-6"
                  data-figma-id={card.id}
                >
                  <h3 className="type-heading px-6 text-left">
                    {card.title}
                  </h3>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
