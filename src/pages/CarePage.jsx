import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function CarePage() {
  const [active, setActive] = useState(null);

  const quickRules = [
    {
      number: "01",
      title: "Ne öntözd túl",
      text: "Ha bizonytalan vagy, inkább még ne locsold meg. A túl sok víz a leggyakoribb hiba.",
    },
    {
      number: "02",
      title: "Ne tedd napra",
      text: "Világos helyre tedd, de közvetlen napsütést ne kapjon.",
    },
    {
      number: "03",
      title: "Hetente szellőztesd",
      text: "Heti 1–2 alkalommal nyisd ki 10–15 percre. Nyáron ennél többször is lehet.",
    },
  ];

  const careCards = [
    {
      icon: "🌡️",
      title: "Hőmérséklet",
      points: [
        "Ideális: 15–22°C",
        "22–25°C még rövid ideig rendben van",
        "25°C felett már könnyen károsodhat",
        "Radiátor, fűtőtest, autó és tűző ablak mellé ne tedd",
      ],
    },
    {
      icon: "💡",
      title: "Fény",
      points: [
        "Világos helyre tedd",
        "Ablak közelében jó helyen van",
        "Közvetlen napfény ne érje",
        "Ha rád süt a nap, a terráriumra se süssön",
      ],
    },
    {
      icon: "💧",
      title: "Permetezés",
      points: [
        "Általában heti 0–1 alkalom elég",
        "Nyáron heti 1–2 alkalom lehet szükséges",
        "Télen elég lehet 2–3 hetente",
        "Alkalmanként 2–4 finom pumpa víz elég",
      ],
    },
    {
      icon: "💨",
      title: "Szellőztetés",
      points: [
        "Heti 1–2 alkalommal ajánlott",
        "Egy alkalommal 10–15 perc elég",
        "Nyáron heti 2–3 alkalom is szükséges lehet",
        "Ha párás az üveg vagy dohos a levegő, szellőztess",
      ],
    },
  ];

  const seasons = [
    {
      title: "Nyáron",
      icon: "☀️",
      items: [
        "Tedd hűvösebb, árnyékosabb helyre",
        "Heti 2–3 alkalommal szellőztesd 10–15 percig",
        "Ne locsold automatikusan többet",
        "Először mindig nézd meg, hogy tényleg száraz-e",
      ],
    },
    {
      title: "Télen",
      icon: "❄️",
      items: [
        "Tartsd stabil hőmérsékleten",
        "Radiátor közelébe ne kerüljön",
        "Heti 1 szellőztetés általában elég",
        "Permetezni ritkábban kell, gyakran elég 2–3 hetente",
      ],
    },
  ];

  const observationItems = [
    {
      title: "A moha szép zöld és puha",
      status: "Minden rendben",
      meaning: "A terrárium jó környezetben van, nem kell semmit csinálni.",
      solution: "Ne változtass semmin.",
    },
    {
      title: "A moha világosodik vagy fakóbb",
      status: "Túl száraz lehet",
      meaning: "Valószínűleg kevés nedvességet kapott.",
      solution:
        "Adj neki 2–3 finom permetet, majd figyeld meg 1–2 napig.",
    },
    {
      title: "A moha barnul",
      status: "Túl sok víz vagy túl meleg",
      meaning:
        "A barnulás legtöbbször a túlöntözés vagy a túl magas hőmérséklet jele.",
      solution:
        "Ne locsold, szellőztesd heti 2–3 alkalommal, és tedd hűvösebb helyre.",
    },
    {
      title: "Penész jelenik meg",
      status: "Kevés a légmozgás",
      meaning: "A terrárium túl zárt és túl nedves lehet.",
      solution:
        "3 egymást követő napon szellőztesd 10–15 percig, és közben ne permetezd.",
    },
    {
      title: "Víz áll az alján",
      status: "Túlöntözés",
      meaning: "Túl sok vizet kapott a terrárium.",
      solution:
        "1–2 hétig ne locsold, és szellőztesd gyakrabban.",
    },
    {
      title: "A moha szétlapul",
      status: "Túl nedves közeg",
      meaning: "A környezet valószínűleg túl párás és túl nedves.",
      solution:
        "Csökkentsd a párát: szellőztess többet, és egy ideig ne permetezd.",
    },
  ];

  const faq = [
    {
      q: "Milyen gyakran kell locsolni?",
      a: "Nem kell fix naponta vagy fix hetente locsolni. Általában heti 0–1 alkalom elég, télen ennél ritkábban is. Mindig előbb nézd meg, száraz-e a moha.",
    },
    {
      q: "Mennyi vizet adjak neki?",
      a: "Egyszerre általában 2–4 finom pumpa víz bőven elég. Ne áztasd el, és ne álljon víz az alján.",
    },
    {
      q: "Hova tegyem a lakásban?",
      a: "Világos helyre, például ablak közelébe, de ne közvetlen napsütésbe.",
    },
    {
      q: "Mi a leggyakoribb hiba?",
      a: "A túlöntözés. A legtöbb terráriumnak kevesebb beavatkozás kell, nem több.",
    },
    {
      q: "Mit csináljak, ha bizonytalan vagyok?",
      a: "Nézd meg a mohát. Ha zöld és puha, ne csinálj semmit. Ha világosodik, kicsit permetezd meg. Ha barnul vagy penészes, inkább szellőztess.",
    },
  ];

  return (
    <>
      <Header />

      <div className="relative min-h-screen min-w-0 overflow-x-hidden bg-[#091008] text-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-100px] top-[80px] h-[280px] w-[280px] rounded-full bg-[#8FAE3C]/10 blur-3xl" />
          <div className="absolute right-[-120px] top-[420px] h-[320px] w-[320px] rounded-full bg-[#A3B86C]/10 blur-3xl" />
          <div className="absolute bottom-[120px] left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#8FAE3C]/5 blur-3xl" />
        </div>

        {/* HERO — minmax(0,fr) stops grid blowout on wide screens; wider xl cap so both columns fit */}
        <section className="relative px-3 pb-12 pt-24 sm:px-4 sm:pb-16 sm:pt-28 md:px-10 lg:px-[132px] lg:pb-20 lg:pt-36">
          <div className="mx-auto w-full min-w-0 max-w-6xl xl:max-w-7xl 2xl:max-w-[90rem]">
            <div className="inline-flex max-w-full flex-wrap items-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-semibold uppercase leading-snug tracking-[0.12em] text-[#A3B86C] backdrop-blur-sm sm:px-4 sm:text-xs sm:tracking-[0.18em]">
              Glass & Moss • Care Guide
            </div>

            <div className="mt-6 grid min-w-0 items-start gap-8 sm:mt-8 sm:gap-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-10 xl:gap-12">
              <div className="min-h-0 min-w-0">
                <h1 className="max-w-full break-words text-balance text-[clamp(1.65rem,4vw+0.5rem,4.875rem)] font-bold leading-[1.08] tracking-tight sm:leading-[1.02] lg:leading-[0.98]">
                  Terráriumgondozás
                  <span className="mt-1 block text-[#A3B86C] sm:mt-2">
                    a lehető legegyszerűbben
                  </span>
                </h1>

                <p className="mt-5 max-w-3xl break-words text-[clamp(0.9rem,1.1vw+0.65rem,1.125rem)] leading-[1.85] text-white/72 sm:mt-6 sm:leading-[1.9]">
                  Ez az útmutató úgy készült, hogy akkor is biztosan tudd, mit
                  kell csinálni, ha még soha nem volt terráriumod. Kevés szabály
                  van, de azokat érdemes pontosan betartani.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
                  <MiniStat title="Gondozási szint" value="Nagyon egyszerű" />
                  <MiniStat title="Szellőztetés" value="Heti 1–2x" />
                  <MiniStat title="Permetezés" value="Kevés víz" />
                </div>
              </div>

              <div className="min-h-0 min-w-0 rounded-2xl border border-[#A3B86C]/15 bg-gradient-to-br from-[#121a0f] via-[#0f160d] to-[#0b1109] p-4 shadow-[0_25px_90px_-40px_rgba(143,174,60,0.35)] sm:rounded-[2rem] sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A3B86C]">
                  Ha csak 3 dolgot jegyzel meg
                </p>

                <div className="mt-6 space-y-4">
                  {quickRules.map((item) => (
                    <div
                      key={item.number}
                      className="rounded-xl border border-white/8 bg-white/[0.04] p-3 sm:rounded-2xl sm:p-4"
                    >
                      <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#8FAE3C]/15 text-sm font-bold text-[#A3B86C]">
                          {item.number}
                        </div>

                        <div className="min-w-0">
                          <h3 className="break-words text-base font-semibold text-white sm:text-lg">
                            {item.title}
                          </h3>
                          <p className="mt-1 break-words leading-[1.7] text-white/70">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ALAP GONDOZÁS */}
        <section className="relative px-3 pb-16 sm:px-4 sm:pb-20 md:px-10 lg:px-[132px]">
          <div className="mx-auto w-full min-w-0 max-w-6xl">
          <SectionHeading
            overline="Alap gondozás"
            title="Pontosan mit kell csinálni?"
            text="Itt minden a lehető legegyszerűbben van leírva, konkrét számokkal."
          />

          <div className="mt-8 grid min-w-0 gap-4 sm:gap-6 md:grid-cols-2">
            {careCards.map((card) => (
              <InfoCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                points={card.points}
              />
            ))}
          </div>
          </div>
        </section>

        {/* GYORS MENETREND */}
        <section className="relative px-3 pb-16 sm:px-4 sm:pb-20 md:px-10 lg:px-[132px]">
          <div className="mx-auto w-full min-w-0 max-w-6xl">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-5 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.6)] backdrop-blur-sm sm:rounded-[2rem] sm:p-8 lg:p-10">
            <SectionHeading
              overline="Heti rutin"
              title="Ennyi általában elég"
              text="Ha nem tudod, mit csinálj, ezt a rutint kövesd."
            />

            <div className="mt-6 grid min-w-0 gap-3 sm:mt-8 sm:gap-4 md:grid-cols-3">
              <RoutineCard
                step="1"
                title="Nézz rá a mohára"
                text="Ha zöld és puha, minden rendben van."
              />
              <RoutineCard
                step="2"
                title="Hetente 1–2x szellőztesd"
                text="Nyisd ki 10–15 percre."
              />
              <RoutineCard
                step="3"
                title="Csak akkor permetezd"
                text="Ha láthatóan száraz vagy világosodik."
              />
            </div>
          </div>
          </div>
        </section>

        {/* NYÁR TÉL */}
        <section className="relative px-3 pb-16 sm:px-4 sm:pb-20 md:px-10 lg:px-[132px]">
          <div className="mx-auto w-full min-w-0 max-w-6xl">
          <SectionHeading
            overline="Évszakok"
            title="Mit csinálj nyáron és télen?"
            text="A terrárium igényei évszakonként kicsit változhatnak."
          />

          <div className="mt-8 grid min-w-0 gap-4 sm:gap-6 md:grid-cols-2">
            {seasons.map((season) => (
              <SeasonCard
                key={season.title}
                title={season.title}
                icon={season.icon}
                items={season.items}
              />
            ))}
          </div>
          </div>
        </section>

        {/* MEGFIGYELÉS */}
        <section className="relative px-3 pb-16 sm:px-4 sm:pb-20 md:px-10 lg:px-[132px]">
          <div className="mx-auto w-full min-w-0 max-w-6xl">
          <SectionHeading
            overline="Megfigyelés"
            title="Mit látsz? Mire utal? Mi a megoldás?"
            text="A moha mindig jelzi, ha valami nem ideális. Nézd meg, mit tapasztalsz."
          />

          <div className="mt-8 grid min-w-0 gap-4 sm:gap-5 lg:grid-cols-2">
            {observationItems.map((item) => (
              <ObservationCard
                key={item.title}
                title={item.title}
                status={item.status}
                meaning={item.meaning}
                solution={item.solution}
              />
            ))}
          </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative px-3 pb-16 sm:px-4 sm:pb-20 md:px-10 lg:px-[132px]">
          <div className="mx-auto grid w-full min-w-0 max-w-6xl gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
            <div className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm sm:rounded-[2rem] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A3B86C]">
                Oktató rész
              </p>

              <h2 className="mt-3 break-words text-[clamp(1.25rem,4.5vw,32px)] font-semibold tracking-tight">
                Hogyan gondolkodj róla?
              </h2>

              <div className="mt-6 space-y-4 break-words leading-[1.85] text-white/74">
                <p>
                  A terrárium nem olyan, mint egy hagyományos szobanövény. Nem
                  kell minden nap foglalkozni vele, és nem az a cél, hogy
                  minél több vizet kapjon.
                </p>

                <p>
                  A legtöbb hiba abból jön, hogy valaki túl sokat akar segíteni.
                  A terráriumnak általában kevesebb beavatkozás kell, nem több.
                </p>

                <p>
                  Ha a moha szép zöld, puha és egészségesnek látszik, akkor a
                  legjobb döntés gyakran az, hogy nem csinálsz semmit.
                </p>

                <p>
                  Egyszerű szabály: előbb nézz, utána dönts. Ne locsold meg
                  megszokásból, csak azért, mert eltelt pár nap.
                </p>
              </div>
            </div>

            <div className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm sm:rounded-[2rem] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A3B86C]">
                Gyakori kérdések
              </p>

              <h2 className="mt-3 break-words text-[clamp(1.25rem,4.5vw,32px)] font-semibold tracking-tight">
                Amit a legtöbben megkérdeznek
              </h2>

              <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
                {faq.map((item, index) => (
                  <div
                    key={item.q}
                    className="min-w-0 overflow-hidden rounded-xl border border-white/10 bg-black/20 sm:rounded-2xl"
                  >
                    <button
                      type="button"
                      onClick={() => setActive(active === `faq-${index}` ? null : `faq-${index}`)}
                      className="flex w-full min-w-0 items-start justify-between gap-3 p-4 text-left sm:items-center sm:gap-4 sm:p-5"
                    >
                      <span className="min-w-0 flex-1 break-words text-sm font-medium leading-snug text-white/92 sm:text-base">
                        {item.q}
                      </span>

                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#8FAE3C]/15 text-lg font-semibold text-[#A3B86C] sm:mt-0">
                        {active === `faq-${index}` ? "−" : "+"}
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        active === `faq-${index}`
                          ? "grid-rows-[1fr] border-t border-white/10"
                          : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="break-words px-4 pb-4 pt-3 text-sm leading-[1.8] text-white/72 sm:px-5 sm:pb-5 sm:pt-4 sm:text-base">
                          {item.a}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative px-3 pb-20 sm:px-4 sm:pb-28 md:px-10 lg:px-[132px]">
          <div className="mx-auto w-full min-w-0 max-w-6xl">
          <div className="overflow-hidden rounded-2xl border border-[#A3B86C]/20 bg-gradient-to-br from-[#11170f] via-[#151d12] to-[#0d120c] p-5 text-center shadow-[0_25px_90px_-45px_rgba(143,174,60,0.35)] sm:rounded-[2rem] sm:p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A3B86C]">
              Segítségre van szükséged?
            </p>

            <h2 className="mt-3 break-words text-[clamp(1.35rem,5vw,40px)] font-semibold tracking-tight sm:mt-4">
              Nem vagy biztos benne, hogy minden rendben van?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl break-words leading-[1.75] text-white/70 sm:mt-4 sm:leading-[1.8]">
              Írj nekünk, és segítünk eldönteni, hogy a terráriumodnak mire van
              szüksége. Sokszor egy fotó alapján is meg tudjuk mondani, mi a
              teendő.
            </p>

            <Link
              to="/#elerhetoseg"
              className="mt-6 inline-flex w-full max-w-sm items-center justify-center rounded-2xl bg-[#8FAE3C] px-6 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#9bbb47] sm:mt-8 sm:w-auto sm:px-7"
            >
              Kapcsolat
            </Link>
          </div>
          </div>
        </section>
      </div>
    </>
  );
}

function SectionHeading({ overline, title, text }) {
  return (
    <div className="max-w-3xl min-w-0">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A3B86C]">
        {overline}
      </p>
      <h2 className="mt-3 break-words text-[clamp(1.35rem,5vw,42px)] font-semibold tracking-tight text-white">
        {title}
      </h2>
      <p className="mt-4 break-words leading-[1.85] text-white/70">{text}</p>
    </div>
  );
}

function MiniStat({ title, value }) {
  return (
    <div className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm sm:p-5">
      <p className="text-[10px] font-semibold uppercase leading-snug tracking-[0.12em] text-white/45 sm:text-xs sm:tracking-[0.14em]">
        {title}
      </p>
      <p className="mt-1.5 break-words text-xl font-bold text-white sm:mt-2 sm:text-2xl">
        {value}
      </p>
    </div>
  );
}

function InfoCard({ icon, title, points }) {
  return (
    <div className="group min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm transition hover:border-[#A3B86C]/20 hover:bg-white/[0.05] sm:rounded-[2rem] sm:p-6 md:p-7">
      <div className="mb-4 flex min-w-0 flex-wrap items-center gap-3 sm:mb-5 sm:gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#8FAE3C]/12 text-xl sm:h-12 sm:w-12 sm:rounded-2xl sm:text-2xl">
          {icon}
        </div>

        <h3 className="min-w-0 flex-1 break-words text-[clamp(1.1rem,4vw,28px)] font-semibold tracking-tight">
          {title}
        </h3>
      </div>

      <ul className="space-y-2.5 sm:space-y-3">
        {points.map((point, index) => (
          <li key={index} className="flex min-w-0 gap-3 leading-[1.75] text-white/78 sm:leading-[1.8]">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#A3B86C]" />
            <span className="min-w-0 break-words">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RoutineCard({ step, title, text }) {
  return (
    <div className="min-w-0 rounded-2xl border border-white/10 bg-black/20 p-4 sm:rounded-[2rem] sm:p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8FAE3C]/15 text-sm font-bold text-[#A3B86C] sm:h-11 sm:w-11 sm:rounded-2xl">
        {step}
      </div>
      <h3 className="mt-3 break-words text-lg font-semibold text-white sm:mt-4 sm:text-xl">
        {title}
      </h3>
      <p className="mt-2 break-words leading-[1.75] text-white/72">{text}</p>
    </div>
  );
}

function SeasonCard({ title, icon, items }) {
  return (
    <div className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm sm:rounded-[2rem] sm:p-6 md:p-7">
      <div className="mb-4 flex min-w-0 flex-wrap items-center gap-3 sm:mb-5 sm:gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#8FAE3C]/12 text-xl sm:h-12 sm:w-12 sm:rounded-2xl sm:text-2xl">
          {icon}
        </div>
        <h3 className="min-w-0 flex-1 break-words text-[clamp(1.1rem,4vw,28px)] font-semibold tracking-tight text-white">
          {title}
        </h3>
      </div>

      <ul className="space-y-2.5 sm:space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex min-w-0 gap-3 leading-[1.75] text-white/78 sm:leading-[1.8]">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#A3B86C]" />
            <span className="min-w-0 break-words">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ObservationCard({ title, status, meaning, solution }) {
  return (
    <div className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm sm:rounded-[2rem] sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#A3B86C] sm:text-sm">
        Mit látsz?
      </p>

      <h3 className="mt-2 break-words text-lg font-semibold text-white sm:text-xl">
        {title}
      </h3>

      <div className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
        <div className="rounded-xl border border-white/8 bg-black/20 p-3 sm:rounded-2xl sm:p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/45">
            Mire utalhat?
          </p>
          <p className="mt-2 break-words font-medium text-white/92">{status}</p>
          <p className="mt-2 break-words leading-[1.75] text-white/70">{meaning}</p>
        </div>

        <div className="rounded-xl border border-[#8FAE3C]/15 bg-[#8FAE3C]/8 p-3 sm:rounded-2xl sm:p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#A3B86C]">
            Mi a megoldás?
          </p>
          <p className="mt-2 break-words leading-[1.75] text-white/82">{solution}</p>
        </div>
      </div>
    </div>
  );
}