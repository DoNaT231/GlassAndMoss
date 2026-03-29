import GlassCard from "../components/GlassCard";

const inputBase =
  "w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-white placeholder:text-white/35 " +
  "backdrop-blur-md transition-all duration-300 resize-none " +
  "focus:outline-none focus:ring-2 focus:ring-[#8FAE3C]/40 focus:border-[#8FAE3C]/40";

export default function Contact() {
  return (
    <section
      id="elerhetoseg"
      className="
        relative z-10 w-full overflow-hidden
        scroll-mt-[78px]
        bg-gradient-to-b from-[#0b0f0a] via-[#10150f] to-[#0b0f0a]
        px-4 py-20 pb-32 md:px-10 lg:px-[132px] lg:py-28
      "
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[20%] h-[300px] w-[500px] -translate-x-1/2 bg-[#7F7F01]/10 blur-[120px]" />
        <div className="absolute right-[15%] bottom-[10%] h-[300px] w-[300px] bg-[#5d7c34]/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1920px]">
        <div className="mx-auto mb-10 max-w-[1666px] lg:mb-12">
          <h2 className="mb-8 text-left text-[clamp(2.5rem,4.4vw,64px)] font-bold text-white lg:mb-12">
            Elérhetőség
          </h2>

          <p className="mt-4 max-w-[700px] text-left text-[clamp(1rem,1.2vw,18px)] leading-[1.8] text-white/70">
            Kérdésed van, egyedi elképzelésed van, vagy csak érdeklődnél? Írj
            nekünk, és felvesszük veled a kapcsolatot.
          </p>
        </div>

        <div className="mx-auto grid max-w-[1666px] grid-cols-1 items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Bal oldal */}
          <GlassCard className="flex min-h-[320px] flex-col justify-between p-8 md:p-10 lg:p-12">
            <div>
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.18em] text-[#A3B86C]">
                Glass & Moss
              </span>

              <h3 className="mb-5 text-[clamp(1.4rem,2vw,28px)] font-bold text-white">
                Lépj velünk kapcsolatba
              </h3>

              <p className="mb-8 max-w-[500px] text-[clamp(1rem,1.2vw,17px)] leading-8 text-white/75">
                Beépített és dekor terráriumokkal kapcsolatban is kereshetsz
                minket. Szívesen segítünk ötletelésben, tervezésben és egyedi
                megoldásokban is.
              </p>

              <div className="space-y-5">
                <div>
                  <p className="mb-1 text-sm uppercase tracking-[0.14em] text-white/50">
                    E-mail
                  </p>
                  <a
                    href="mailto:hello@glassandmoss.hu"
                    className="text-lg font-medium text-white/90 transition-colors duration-300 hover:text-[#C7DD8A]"
                  >
                    hello@glassandmoss.hu
                  </a>
                </div>

                <div>
                  <p className="mb-1 text-sm uppercase tracking-[0.14em] text-white/50">
                    Telefon
                  </p>
                  <a
                    href="tel:+36306517934"
                    className="text-lg font-medium text-white/90 transition-colors duration-300 hover:text-[#C7DD8A]"
                  >
                    +36 30 651 7934
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="text-sm leading-6 text-white/55">
                Egyedi munkák, lakásdekor terráriumok és bútorba épített
                megoldások esetén is írj bátran.
              </p>
            </div>
          </GlassCard>

          {/* Jobb oldal */}
          <GlassCard className="p-8 md:p-10 lg:p-12">
            <h3 className="mb-2 text-[clamp(1.4rem,2vw,28px)] font-bold text-white">
              Írj nekünk
            </h3>

            <p className="mb-8 text-[clamp(0.95rem,1.1vw,16px)] text-white/65">
              Küldd el az elképzelésedet, és rövid időn belül válaszolunk.
            </p>

            <form
              action="https://formspree.io/f/xreyvlgq"
              method="POST"
              className="flex flex-col gap-5"
            >
              <input
                type="hidden"
                name="_subject"
                value="Új üzenet a Glass & Moss weboldalról"
              />

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-name"
                  className="text-sm font-medium text-white/75"
                >
                  Név
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Add meg a neved"
                  required
                  className={inputBase}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-email"
                  className="text-sm font-medium text-white/75"
                >
                  E-mail
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="valami@pelda.hu"
                  required
                  className={inputBase}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-white/75"
                >
                  Üzenet
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Írd le, miben segíthetünk…"
                  required
                  rows={6}
                  className={`${inputBase} min-h-[140px] resize-y`}
                />
              </div>

              <button
                type="submit"
                className="
                  mt-3 inline-flex self-start items-center justify-center gap-2
                  rounded-full border border-[#93b44c]/70 bg-[#4f6f2f]/55
                  px-8 py-4 font-semibold text-white
                  backdrop-blur-md transition-all duration-300
                  hover:scale-[1.02]
                  hover:border-[#b8d96b]
                  hover:bg-[#5d8136]/70
                  hover:shadow-[0_0_30px_rgba(147,180,76,0.28)]
                  active:scale-[0.98]
                "
              >
                Küldés
                <span className="text-lg">→</span>
              </button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}