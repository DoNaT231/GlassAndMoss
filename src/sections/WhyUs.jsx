import GlassCard from "../components/GlassCard";
import Reveal from "../components/Reveal";
import useSectionReveal from "../hooks/useSectionReveal";

export default function WhyUs() {
  const [sectionRef, visible] = useSectionReveal();
  const points = [
    "Egyedi tervezés és személyre szabott méretek.",
    "Minőségi anyagok és tartós kivitelezés.",
    "Tanácsadás a növény- és élővilág összehangolásához.",
  ];

  return (
    <section
      id="miert-mi"
      ref={sectionRef}
      className="
        w-full relative z-10 
        py-20 lg:py-28 
        px-4 md:px-10 lg:px-[132px] 
        scroll-mt-[78px]
        bg-[url('/pngtree-nice-green-forest-landscape-city-hd-background-wallpaper-desktop-image_16327548.jpg')]
        bg-cover bg-center
        overflow-hidden
      "
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="
        absolute top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2 
        w-[800px] h-[800px] 
        bg-[#5f7f2f] 
        opacity-20 
        blur-[160px]
      " />

      <div className="max-w-[1666px] mx-auto relative z-10">
        <Reveal show={visible} delay={0} from="left">
          <h2 className="type-display mb-8 text-left lg:mb-12">
            Miért minket válassz?
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {points.map((text, index) => (
            <Reveal
              key={index}
              show={visible}
              delay={380 + index * 180}
              from="up"
              className="h-full"
            >
              <GlassCard
                className="
                  h-full
                  p-8 
                  flex flex-col items-start 
                  bg-white/[0.06] 
                  border border-white/10 
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:bg-white/[0.1]
                  hover:scale-[1.03]
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                "
              >
                <p className="type-body text-white/88">
                  {text}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
