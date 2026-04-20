import GlassCard from "../components/GlassCard";
import PrimaryCtaButton from "../components/PrimaryCtaButton";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="
        relative z-10 flex min-h-screen w-full items-center justify-center overflow-hidden
        px-4 pt-24 pb-10
        sm:px-6 sm:pt-28 sm:pb-12
        md:px-8 md:pt-32
        lg:px-10 lg:pt-36 lg:pb-16
        bg-[url('/desktop-wallpapers-mossy-forest-wallpaper-for_9599288.jpg!w700wp')]
        bg-cover bg-center
      "
    >
      {/* dark cinematic overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,10,6,0.72),rgba(7,14,8,0.48),rgba(4,8,5,0.78))]" />

      {/* central atmosphere glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(145,184,72,0.22),transparent_42%)]" />

      {/* subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.34)_100%)]" />

      {/* hero bottom ambient light */}
      <div className="absolute left-1/2 top-[58%] h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[#b7d46e]/10 blur-3xl sm:h-[420px] sm:w-[420px]" />

      <GlassCard
        rounded="large"
        className="
          relative z-10 w-full max-w-[1120px]
          px-5 py-10
          sm:px-8 sm:py-12
          md:px-12 md:py-14
          lg:px-16 lg:py-16
        "
      >
        <div className="mx-auto flex max-w-[860px] flex-col items-center text-center">
          <img
            src="https://static.wixstatic.com/media/3fde4b_4f78e0efd5524d329ba6e25ae3336bfd~mv2.png"
            alt="Glass & Moss"
            className="
              mb-5 h-auto w-full
              max-w-[240px]
              sm:max-w-[340px]
              md:max-w-[520px]
              lg:max-w-[760px]
              drop-shadow-[0_14px_34px_rgba(0,0,0,0.38)]
            "
          />

          <p
            className="
              max-w-[720px]
              text-[1rem] leading-tight
              sm:text-[1.12rem]
              md:text-[1.35rem]
              lg:text-[1.7rem]
              font-medium tracking-[-0.01em] text-white/90
            "
          >
            Természet üvegbe foglalva.
          </p>

          <p
            className="
              mt-3 max-w-[640px]
              text-[0.9rem] leading-relaxed
              sm:text-[1rem]
              md:text-[1.05rem]
              text-white/70
            "
          >
            Egyedi terráriumok, floráriumok és természetközeli kompozíciók,
            kézzel készítve, letisztult megjelenéssel.
          </p>

          <div className="mt-7 sm:mt-9">
            <Link to="/#katalogus">
              <PrimaryCtaButton>Katalógus megtekintése</PrimaryCtaButton>
            </Link>
          </div>
        </div>
      </GlassCard>
    </section>
  );
}