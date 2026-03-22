const GALLERY_IMAGES = [
  {
    src: "./public/ChatGPT Image Mar 21, 2026, 09_45_55 PM.png",
    title: "Erdőfal installáció",
    category: "Dekor",
  },
  {
    src: "./public/ChatGPT Image Mar 21, 2026, 09_48_46 PM.png",
    title: "Lebegő kompozíció",
    category: "Asztali",
  },
  {
    src: "./public/ChatGPT Image Mar 21, 2026, 09_48_53 PM.png",
    title: "Mikroökoszisztéma",
    category: "Asztali",
  },
  {
    src: "./public/ChatGPT Image Mar 21, 2026, 10_03_25 PM.png",
    title: "Erdei kompozíció",
    category: "Asztali",
  },
  {
    src: "./public/szivecskés.png",
    title: "Üveg harmónia",
    category: "Ajándék",
  },
  {
    src: "./public/ChatGPT Image Mar 21, 2026, 10_15_13 PM.png",
    title: "Természet installáció",
    category: "Dekor",
  },
];

export default function Catalog() {
  return (
    <section
      id="rolunk"
      className="
        w-full relative z-10 
        py-20 lg:py-28 
        px-4 md:px-10 lg:px-24 
        scroll-mt-[78px]
        bg-gradient-to-b from-[#0b0f0a] via-[#10150f] to-[#0b0f0a]
        overflow-hidden
      "
    >
      <div className="max-w-[1920px] mx-auto">
        <h2 className="font-bold text-[clamp(2.5rem,4.4vw,64px)] text-white mb-8 lg:mb-12 lg:ml-[78px] text-left lg:text-left">
          Katalógus
        </h2>

        <div className="max-w-[1666px] mx-auto">
          <p className="text-white/90 text-[clamp(1rem,1.2vw,18px)] text-left mb-12 max-w-2xl">
            Válogatás a kész és megrendelhető munkáinkból, természetes formákra és egyedi kompozíciókra építve.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {GALLERY_IMAGES.map((item, index) => (
              <div
                key={index}
                className="
                  rounded-[28px] overflow-hidden 
                  border border-white/10 
                  bg-black/20 backdrop-blur-sm
                  shadow-[0_14px_40px_rgba(0,0,0,0.28)]
                  group cursor-pointer
                  transition-all duration-300
                  hover:-translate-y-1.5
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                  hover:border-[#7F7F01]/30
                "
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-black/20">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <span className="text-[11px] md:text-xs font-semibold text-[#A3B86C] uppercase tracking-[0.18em]">
                      {item.category}
                    </span>
                    <h3 className="text-white font-semibold text-[1.15rem] md:text-[1.35rem] leading-tight mt-2">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}