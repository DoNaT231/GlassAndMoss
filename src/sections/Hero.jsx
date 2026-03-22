import GlassCard from "../components/GlassCard";

export default function Hero() {
  return (
    <section
      className="
        flex-1 flex items-center justify-center 
        lg:py-[160px]
        w-full max-w-[1920px] mx-auto relative z-10 min-h-screen
        overflow-hidden
        bg-[url(../public/desktop-wallpapers-mossy-forest-wallpaper-for_9599288.jpg!w700wp)]
        bg-cover bg-center
      "
    >
      {/* Dark overlay a jobb kontraszthoz */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      <GlassCard
        rounded="large"
        className="
          relative z-10 
          flex flex-col items-center justify-center 
          w-full max-w-[850px] 
          min-h-[360px] 
          px-6 py-10 md:px-10 md:py-12 
          overflow-hidden group
          bg-white/[0.05] 
          border border-white/10
          shadow-[0_20px_80px_rgba(0,0,0,0.45)]
          backdrop-blur-xl
        "
      >
        {/* Glow háttér */}
        <div
          className="
            absolute inset-0 
            opacity-40 
            blur-3xl 
            bg-gradient-to-r 
            from-[#3f5d2a] via-[#6b8f3c] to-[#3f5d2a]
            group-hover:opacity-60 
            transition duration-700
          "
        />

        {/* Logo */}
        <img
          src="https://static.wixstatic.com/media/3fde4b_4f78e0efd5524d329ba6e25ae3336bfd~mv2.png"
          className="
            relative z-10 
            w-full max-w-[650px] 
            h-auto 
            mb-6 
            drop-shadow-[0_10px_40px_rgba(0,0,0,0.6)]
          "
        />

        {/* Subtitle */}
        <h2
          className="
            relative z-10 
            text-primary text-center 
            text-[clamp(1.1rem,1.6vw,20px)] 
            tracking-wide 
            mb-8
            opacity-90
          "
        >
          Természet üvegbe foglalva.
        </h2>

        {/* CTA */}
        <button
          className="
            relative z-10 
            px-8 py-3 
            rounded-full 
            border border-[#8FAE3C] 
            bg-[#4f6f2f]/50 
            text-primary 
            text-[clamp(0.9rem,1.2vw,18px)] 
            backdrop-blur-md

            shadow-[0_0_20px_rgba(143,174,60,0.3)]
            hover:shadow-[0_0_40px_rgba(143,174,60,0.6)]
            hover:bg-[#4f6f2f]

            transition-all duration-300
          "
        >
          Katalógus megtekintése
        </button>
      </GlassCard>
    </section>
  );
}