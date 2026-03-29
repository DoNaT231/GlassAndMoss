const GALLERY_IMAGES = [
  {
    src: "/ChatGPT Image Mar 21, 2026, 09_45_55 PM.png",
    title: "Erdőfal installáció",
    category: "Dekor",
  },
  {
    src: "/ChatGPT Image Mar 21, 2026, 09_48_46 PM.png",
    title: "Lebegő kompozíció",
    category: "Asztali",
  },
  {
    src: "/ChatGPT Image Mar 21, 2026, 09_48_53 PM.png",
    title: "Mikroökoszisztéma",
    category: "Asztali",
  },
  {
    src: "/ChatGPT Image Mar 21, 2026, 10_03_25 PM.png",
    title: "Erdei kompozíció",
    category: "Asztali",
  },
  {
    src: "/szivecskés.png",
    title: "Üveg harmónia",
    category: "Ajándék",
  },
  {
    src: "/ChatGPT Image Mar 21, 2026, 10_15_13 PM.png",
    title: "Természet installáció",
    category: "Dekor",
  },
];

export default function Catalog() {
  return (
    <section
      id="katalogus"
      className="
        relative z-10 w-full overflow-hidden
        scroll-mt-[78px]
        bg-gradient-to-b from-[#0b0f0a] via-[#10150f] to-[#0b0f0a]
        px-4 py-20 md:px-10 lg:px-[132px] lg:py-28
      "
    >
      <div className="mx-auto max-w-[1920px]">
        <h2 className="mb-8 text-left text-[clamp(2.5rem,4.4vw,64px)] font-bold text-white lg:mb-12">
          Katalógus
        </h2>

        <div className="mx-auto max-w-[1666px]">
          <p className="mb-12 max-w-2xl text-left text-[clamp(1rem,1.2vw,18px)] leading-[1.8] text-white/90">
            Válogatás a kész és megrendelhető munkáinkból, természetes formákra
            és egyedi kompozíciókra építve.
          </p>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
            {GALLERY_IMAGES.map((item, index) => (
              <article
                key={index}
                className="
                  group overflow-hidden rounded-[24px]
                  border border-white/10 bg-white/[0.04]
                  shadow-[0_8px_30px_rgba(0,0,0,0.18)]
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#A3B86C]/25
                  hover:bg-white/[0.05]
                  hover:shadow-[0_14px_40px_rgba(0,0,0,0.24)]
                "
              >
                <div className="relative aspect-[4/4.6] overflow-hidden bg-black/20">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A3B86C] md:text-[11px]">
                      {item.category}
                    </span>

                    <h3 className="mt-2 text-[1rem] font-semibold leading-tight text-white md:text-[1.15rem]">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}