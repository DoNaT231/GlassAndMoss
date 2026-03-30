import GlassCard from "../components/GlassCard";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="
        relative z-10 flex min-h-screen w-full mx-auto items-center justify-center overflow-hidden
        px-3 pt-24 pb-8 sm:px-5 sm:pt-28 sm:pb-10 md:px-8 md:pt-32 lg:px-10 lg:pt-36 lg:pb-16
        bg-[url('/desktop-wallpapers-mossy-forest-wallpaper-for_9599288.jpg!w700wp')]
        bg-cover bg-center
      "
    >
      {/* háttér sötétítés */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.58),rgba(0,0,0,0.42),rgba(0,0,0,0.62))]" />

      {/* glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(132,160,56,0.18),transparent_55%)]" />

      <GlassCard
        rounded="large"
        className="
          relative z-10 w-full max-w-[1120px]
          px-4 py-7
          sm:px-6 sm:py-9
          md:px-10 md:py-12
          lg:px-16 lg:py-16
        "
      >
        <div className="flex flex-col items-center text-center">
          <img
            src="https://static.wixstatic.com/media/3fde4b_4f78e0efd5524d329ba6e25ae3336bfd~mv2.png"
            alt="Glass & Moss"
            className="
              mb-4 h-auto w-full
              max-w-[220px]
              sm:max-w-[300px]
              md:max-w-[460px]
              lg:max-w-[760px]
              drop-shadow-[0_12px_36px_rgba(0,0,0,0.45)]
            "
          />

          <p
            className="
              max-w-[700px]
              text-[0.98rem] leading-snug
              sm:text-[1.05rem]
              md:text-lg
              lg:text-[22px]
              font-medium text-white/85
            "
          >
            Természet üvegbe foglalva.
          </p>

          <p
            className="
              mt-2 max-w-[620px]
              px-1
              text-[0.84rem] leading-relaxed
              sm:mt-3 sm:text-[0.95rem]
              md:text-base
              text-white/68
            "
          >
            Egyedi terráriumok, floráriumok és természetközeli kompozíciók,
            kézzel készítve, letisztult megjelenéssel.
          </p>

          <div className="mt-6 w-full sm:mt-8">
            <Link to="/#katalogus" className="block w-full sm:w-auto">
              <button
                className="
                  w-full min-h-[52px]
                  sm:w-auto
                  rounded-full border border-[#9DB85A]/55
                  bg-[#6f8f35]/25
                  px-6 py-3.5
                  sm:px-8 sm:py-4
                  text-[0.95rem] sm:text-base
                  font-medium text-white
                  backdrop-blur-md
                  transition-all duration-300
                  hover:scale-[1.02]
                  hover:border-[#B7D46E]
                  hover:bg-[#7fa33c]/40
                  active:scale-[0.98]
                "
              >
                Katalógus megtekintése
              </button>
            </Link>
          </div>
        </div>
      </GlassCard>
    </section>
  );
}