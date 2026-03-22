import GlassCard from "../components/GlassCard";

const inputBase =
  "w-full px-4 py-4 rounded-2xl bg-black/20 border border-white/10 text-white placeholder:text-white/35 " +
  "focus:outline-none focus:ring-2 focus:ring-[#8FAE3C]/40 focus:border-[#8FAE3C]/40 transition-all duration-300 " +
  "backdrop-blur-md resize-none";

export default function Contact() {
  return (
    <section
      id="elerhetoseg"
      className="
        w-full relative z-10
        py-20 lg:py-32
        px-4 md:px-10 lg:px-[132px]
        pb-32 scroll-mt-[78px]
        overflow-hidden
        bg-gradient-to-b from-[#0b0f0a] via-[#10150f] to-[#0b0f0a]
      "
    >
      {/* háttér glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 top-[20%] w-[500px] h-[300px] bg-[#7F7F01]/10 blur-[120px]" />
        <div className="absolute right-[15%] bottom-[10%] w-[300px] h-[300px] bg-[#5d7c34]/10 blur-[140px]" />
      </div>

      <div className="max-w-[1920px] mx-auto relative z-10">
        <div className="max-w-[1666px] mx-auto mb-10 lg:mb-14">
          <h2 className="font-bold text-[clamp(2.2rem,4vw,56px)] text-white text-center lg:text-left">
            Elérhetőség
          </h2>
          <p className="text-white/70 text-[clamp(1rem,1.2vw,18px)] mt-3 text-center lg:text-left max-w-[700px]">
            Kérdésed van, egyedi elképzelésed van, vagy csak érdeklődnél? Írj
            nekünk, és felvesszük veled a kapcsolatot.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 max-w-[1666px] mx-auto items-stretch">
          {/* Bal oldal */}
          <GlassCard className="relative overflow-hidden p-8 md:p-10 lg:p-12 flex flex-col justify-between min-h-[320px]">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-block text-[#A3B86C] text-sm font-semibold tracking-[0.18em] uppercase mb-4">
                Glass & Moss
              </span>

              <h3 className="font-bold text-[clamp(1.4rem,2vw,28px)] text-white mb-5">
                Lépj velünk kapcsolatba
              </h3>

              <p className="text-white/75 text-[clamp(1rem,1.2vw,17px)] leading-8 mb-8 max-w-[500px]">
                Beépített és dekor terráriumokkal kapcsolatban is kereshetsz
                minket. Szívesen segítünk ötletelésben, tervezésben és egyedi
                megoldásokban is.
              </p>

              <div className="space-y-5">
                <div>
                  <p className="text-white/50 text-sm uppercase tracking-[0.14em] mb-1">
                    E-mail
                  </p>
                  <a
                    href="mailto:glassmoss@gmail.com"
                    className="text-white text-lg font-medium hover:text-white transition-colors"
                  >
                    glassmoss@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-white/50 text-sm uppercase tracking-[0.14em] mb-1">
                    Telefon
                  </p>
                  <a
                    href="tel:+36300000000"
                    className="text-white text-lg font-medium hover:text-white transition-colors"
                  >
                    +36 30 000 0000
                  </a>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-10 pt-6 border-t border-white/10">
              <p className="text-white/55 text-sm leading-6">
                Egyedi munkák, lakásdekor terráriumok és bútorba épített
                megoldások esetén is írj bátran.
              </p>
            </div>
          </GlassCard>

          {/* Jobb oldal */}
          <GlassCard className="relative overflow-hidden p-8 md:p-10 lg:p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6b8f3c]/10 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10">
              <h3 className="font-bold text-[clamp(1.4rem,2vw,28px)] text-white mb-2">
                Írj nekünk
              </h3>
              <p className="text-white/65 text-[clamp(0.95rem,1.1vw,16px)] mb-8">
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
                    className="text-white/75 text-sm font-medium"
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
                    className="text-white/75 text-sm font-medium"
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
                    className="text-white/75 text-sm font-medium"
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
                    mt-3 inline-flex items-center justify-center gap-2
                    px-8 py-4 rounded-full
                    border border-[#93b44c]
                    bg-[#4f6f2f]/60
                    text-white font-semibold
                    backdrop-blur-md
                    transition-all duration-300
                    hover:bg-[#4f6f2f]
                    hover:border-[#b8d96b]
                    hover:shadow-[0_0_30px_rgba(147,180,76,0.28)]
                    self-start
                  "
                >
                  Küldés
                  <span className="text-lg">→</span>
                </button>
              </form>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}