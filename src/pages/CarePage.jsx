import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Icon from "../care/Icon";
import CareChecklist from "../care/CareChecklist";
import CareSeo from "../care/CareSeo";
import { LightFigure, MoistureFigures, WaterCycle } from "../care/figures";
import {
  avoidItems,
  careFacts,
  closedTerrarium,
  contents,
  faq,
  lightSection,
  moldSection,
  moistureStates,
  nutrientSection,
  problems,
  species,
  timeSection,
  ventilationSection,
  waterSection,
} from "../care/guideData";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A3B86C]";

export default function CarePage() {
  return (
    <div className="min-h-screen min-w-0 overflow-x-hidden bg-[#0b0f0a] text-white">
      <CareSeo />
      <Header />
      <Hero />
      <div className="px-4 md:px-8 lg:px-12">
        <article className="mx-auto w-full min-w-0 max-w-[1666px] pb-8">
            <nav aria-label="Tartalomjegyzék" className="border-b border-white/10 py-5">
              <p className="type-label">Tartalom</p>
              <ol className="mt-4 flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-6">
                {contents.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`type-small text-white/70 transition-colors hover:text-white ${focusRing}`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <Section id="zart-terrarium" eyebrow={closedTerrarium.eyebrow} title={closedTerrarium.title}>
              <Prose paragraphs={closedTerrarium.paragraphs} />
              <WaterCycle />
            </Section>

            <Section id="feny" eyebrow={lightSection.eyebrow} title={lightSection.title}>
              <Prose paragraphs={lightSection.paragraphs} />
              <LightFigure />
              <h3 className="type-title mt-8">Kerüld ezeket</h3>
              <ul className="mt-6 grid gap-px bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
                {avoidItems.map((item) => (
                  <li key={item.title} className="bg-[#0b0f0a] px-0 py-6 sm:px-5 sm:first:pl-0">
                    <Icon name={item.icon} className="h-5 w-5 text-[#A3B86C]" />
                    <h4 className="type-title mt-4">{item.title}</h4>
                    <p className="type-body mt-2">{item.text}</p>
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="ontozes" eyebrow={waterSection.eyebrow} title={waterSection.title}>
              <Prose paragraphs={waterSection.paragraphs} />
              <MoistureFigures states={moistureStates} />
            </Section>

            <Section id="szelloztetes" eyebrow={ventilationSection.eyebrow} title={ventilationSection.title}>
              <Prose paragraphs={ventilationSection.paragraphs} />
              <ol className="mt-8 max-w-[46rem] space-y-5">
                {ventilationSection.steps.map((step, index) => (
                  <li key={step} className="grid grid-cols-[auto_minmax(0,1fr)] gap-4">
                    <span className="type-label pt-1">{String(index + 1).padStart(2, "0")}</span>
                    <p className="type-body">{step}</p>
                  </li>
                ))}
              </ol>
            </Section>

            <Section id="novenyek" eyebrow="Növények" title="Ismerd meg a növényeidet">
              <Prose
                paragraphs={[
                  "Ugyanabban az üvegben többféle igény találkozik. A fény, a pára és a talaj közös keret, a növények mégsem cserélhetők fel egymással. Az alábbi leírások abban segítenek, hogy a mohát, a kúszó fikuszt, a korpafüvet, a szonériát, az ékszerorchideát és a tarka Callisiát a saját növekedésük szerint lásd.",
                  "A nevek a Glass & Moss összeállításaiban előforduló növényekre vonatkoznak. A rózsaszín tarka Callisia és a Ficus pumila 'Minima' pontos kertészeti azonossága ránézésre nem mindig igazolható, ezért a leírás a látható növekedést és a biztonságos tartást követi.",
                ]}
              />
              <div className="mt-8 space-y-10">
                {species.map((plant) => (
                  <article key={plant.id} className="border-t border-white/10 pt-10">
                    <p className="type-label normal-case tracking-[0.08em]">{plant.common}</p>
                    <h3 className="type-heading mt-2">{plant.botanical}</h3>
                    <p className="type-body mt-4 max-w-[46rem]">{plant.intro}</p>
                    <dl className="mt-6 grid max-w-[46rem] gap-6 sm:grid-cols-2">
                      <Fact term="Fény" text={plant.light} />
                      <Fact term="Nedvesség" text={plant.moisture} />
                      <Fact term="Növekedés" text={plant.growth} />
                      <Fact term="Gondozás" text={plant.care} />
                    </dl>
                    <p className="type-small mt-6 max-w-[46rem] border-t border-white/10 pt-4">{plant.fact}</p>
                  </article>
                ))}
              </div>
            </Section>

            <Section id="penesz" eyebrow={moldSection.eyebrow} title={moldSection.title}>
              <Prose paragraphs={moldSection.paragraphs} />
            </Section>

            <Section id="tapanyag" eyebrow={nutrientSection.eyebrow} title={nutrientSection.title}>
              <Prose paragraphs={nutrientSection.paragraphs} />
            </Section>

            <Section id="idovel" eyebrow={timeSection.eyebrow} title={timeSection.title}>
              <Prose paragraphs={timeSection.paragraphs} />
            </Section>

            <Section id="problemak" eyebrow="Ha valami eltér" title="Gyakori problémák és megoldások">
              <Prose
                paragraphs={[
                  "Egy tünet ritkán jelent egyetlen, biztos diagnózist. A sárga levél lehet öregedés vagy túlöntözés, a barna moha lehet szárazság vagy hő. Előbb nézd meg, hol és milyen állapotban jelenik meg a változás, és csak utána avatkozz be. A növények ugyanabban az üvegben sem reagálnak egyformán.",
                ]}
              />
              <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
                {problems.map((problem) => (
                  <details key={problem.id} className="group">
                    <summary
                      className={`flex cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden ${focusRing}`}
                    >
                      <span className="type-title">{problem.title}</span>
                      <span
                        aria-hidden="true"
                        className="type-title text-[#A3B86C] transition-transform duration-200 motion-reduce:transition-none group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <div className="grid gap-6 pb-6 md:grid-cols-3">
                      <ProblemNote label="Lehetséges okok" text={problem.causes} />
                      <ProblemNote label="Mit nézz meg" text={problem.investigate} />
                      <ProblemNote label="Javasolt lépés" text={problem.action} />
                    </div>
                  </details>
                ))}
              </div>
            </Section>

            <Section id="ellenorzes" eyebrow="Gyors áttekintés" title="Gondozási ellenőrzőlista">
              <Prose
                paragraphs={[
                  "Ha bizonytalan vagy, elég ezt az öt pontot végignézni. Nem helyettesíti a figyelmet, csak segít eldönteni, hogy most be kell-e avatkozni. A pipákat bármikor leveheted, a lista a böngésződben marad, amíg frissíted az oldalt.",
                ]}
              />
              <div className="mt-8">
                <CareChecklist />
              </div>
            </Section>

            <Section id="kerdesek" eyebrow="Kérdések" title="Gyakori kérdések">
              <div className="divide-y divide-white/10 border-y border-white/10">
                {faq.map((item) => (
                  <details key={item.q} className="group">
                    <summary
                      className={`flex cursor-pointer list-none items-start justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden ${focusRing}`}
                    >
                      <span className="type-title">{item.q}</span>
                      <span
                        aria-hidden="true"
                        className="type-title shrink-0 text-[#A3B86C] transition-transform duration-200 motion-reduce:transition-none group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="type-body max-w-[46rem] pb-6">{item.a}</p>
                  </details>
                ))}
              </div>
            </Section>

            <section className="scroll-mt-24 border-t border-white/10 py-10 md:py-12">
              <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-10">
                <div>
                  <p className="type-label">Glass & Moss</p>
                  <h2 className="type-display mt-4 max-w-xl">Egy kis természet az otthonodban</h2>
                  <p className="type-body mt-6 max-w-[46rem]">
                    Minden Glass &amp; Moss terrárium egyedi, kézzel összeállított élő kompozíció. A növények növekednek, alkalmazkodnak és folyamatosan alakítják saját miniatűr világukat. A legfontosabb gondozási tanácsunk egyszerű: figyeld a növényeidet, és csak akkor avatkozz be, ha valóban szükséges.
                  </p>
                  <Link
                    to="/#katalogus"
                    className={`type-small mt-8 inline-flex items-center gap-3 text-[#A3B86C] transition-colors hover:text-white ${focusRing}`}
                  >
                    A kompozíciók megtekintése
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
                <figure>
                  <img
                    src="/ChatGPT%20Image%20Mar%2021,%202026,%2009_48_53%20PM.png"
                    alt="Gömb alakú üvegedény mohával, apró zöld növényekkel és kövekkel"
                    width="1200"
                    height="1500"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover"
                  />
                  <figcaption className="type-small mt-3">
                    Kompozíciós kép a Glass &amp; Moss gyűjteményéből. A gondozási tanácsok a zárt terráriumokra vonatkoznak.
                  </figcaption>
                </figure>
              </div>
            </section>
        </article>
      </div>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative" aria-label="Nyitó">
      <div className="relative h-[62vh] min-h-[380px] max-h-[520px] min-[1680px]:h-[78vh] min-[1680px]:min-h-[520px] min-[1680px]:max-h-[860px]">
        <img
          src="/desktop_terrarium.png"
          alt="Üvegtálban elhelyezett mohás növénykompozíció szórt fényben, faasztalon"
          width="1600"
          height="1067"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[center_60%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f0a]/55 via-[#0b0f0a]/20 to-[#0b0f0a]" />
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1666px] flex-col justify-end px-4 pb-8 md:px-8 lg:px-12">
          <nav aria-label="Morzsa" className="type-small mb-6">
            <Link to="/" className={`hover:text-white ${focusRing}`}>
              Főoldal
            </Link>
            <span className="px-2 text-white/35" aria-hidden="true">
              /
            </span>
            <span className="text-white/80">Gondozási útmutató</span>
          </nav>
          <p className="type-label">Glass &amp; Moss — Gondozási útmutató</p>
          <h1 className="type-display mt-4 max-w-3xl">Egy apró világ gondozása</h1>
          <p className="type-lede mt-5 max-w-2xl">
            Ismerd meg, hogyan működik a terráriumod, mire van szükségük a növényeidnek, és hogyan őrizheted meg a miniatűr ökoszisztéma természetes egyensúlyát.
          </p>
        </div>
      </div>
      <div className="px-4 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1666px] gap-5 border-b border-white/10 py-5 sm:grid-cols-3">
          {careFacts.map((fact) => (
            <div key={fact.title} className="min-w-0">
              <Icon name={fact.icon} className="h-5 w-5 text-[#A3B86C]" />
              <p className="type-title mt-3">{fact.title}</p>
              <p className="type-small mt-2">{fact.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-white/10 py-8 last:border-b-0 md:py-10">
      <p className="type-label">{eyebrow}</p>
      <h2 className="type-heading mt-3 max-w-2xl text-balance">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Prose({ paragraphs }) {
  return (
    <div className="max-w-[46rem] space-y-4">
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 48)} className="type-body">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function Fact({ term, text }) {
  return (
    <div>
      <dt className="type-label">{term}</dt>
      <dd className="type-body mt-2">{text}</dd>
    </div>
  );
}

function ProblemNote({ label, text }) {
  return (
    <div>
      <p className="type-label">{label}</p>
      <p className="type-body mt-2">{text}</p>
    </div>
  );
}

