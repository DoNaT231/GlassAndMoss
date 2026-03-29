import GlassCard from "../components/GlassCard";

export default function WhyUs() {
  const points = [
    "Egyedi tervezés és személyre szabott méretek.",
    "Minőségi anyagok és tartós kivitelezés.",
    "Tanácsadás a növény- és élővilág összehangolásához.",
  ];

  return (
    <section
      id="miert-mi"
      className="
        w-full relative z-10 
        py-20 lg:py-28 
        px-4 md:px-10 lg:px-[132px] 
        scroll-mt-[78px]
        bg-[url('..\public\pngtree-nice-green-forest-landscape-city-hd-background-wallpaper-desktop-image_16327548.jpg')]
        bg-cover bg-center
        overflow-hidden
      "
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Zöld glow */}
      <div className="
        absolute top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2 
        w-[800px] h-[800px] 
        bg-[#5f7f2f] 
        opacity-20 
        blur-[160px]
      " />

      <div className="max-w-[1666px] mx-auto relative z-10">
        <h2 className="font-bold text-[clamp(2.5rem,4.4vw,64px)] text-white mb-8 lg:mb-12 text-left">
          Miért minket válassz?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {points.map((text, index) => (
            <GlassCard
              key={index}
              className="
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
              <p className="font-medium text-[clamp(1rem,1.2vw,18px)] text-white leading-[1.8]">
                {text}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}