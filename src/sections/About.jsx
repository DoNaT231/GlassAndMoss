import Reveal from "../components/Reveal";
import useSectionReveal from "../hooks/useSectionReveal";

export default function About() {
  const [sectionRef, visible] = useSectionReveal();

  return (
    <section
      id="rolunk"
      ref={sectionRef}
      className="
        w-full relative z-10 
        py-20 lg:py-28 
        px-4 md:px-10 lg:px-[132px] 
        scroll-mt-[78px]
        bg-gradient-to-b from-[#0b0f0a] via-[#10150f] to-[#0b0f0a]
        overflow-hidden
      "
    >
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/40 to-transparent" />

      <div className="
        absolute inset-0 
        bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_40%)]
        opacity-40
      " />
      <div className="max-w-[1666px] mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 text-white">
          <div className="order-2 md:order-1">
            <Reveal show={visible} delay={420} from="left">
              <h2 className="type-display mb-8 text-left lg:mb-12">
                Rólunk
              </h2>
            </Reveal>
            <Reveal show={visible} delay={560} from="left">
              <p className="type-body">
                A Glass & Moss egy baráti alapokra épülő vállalkozás, amelyet a természet és a terráriumok iránti közös szenvedély hívott életre.
                Már a kezdetektől az volt a célunk, hogy ne csak alkossunk, hanem megmutassuk másoknak is azt a nyugalmat és szépséget, amit mi látunk a természetben.
              </p>
            </Reveal>
            <Reveal show={visible} delay={700} from="left">
              <p className="type-body mt-4">
                Hiszünk abban, hogy a természet közelsége nem luxus, hanem egy olyan élmény, amely mindenki számára elérhetővé tehető — akár a saját otthonán belül is.
              </p>
            </Reveal>
          </div>

          <Reveal
            show={visible}
            delay={0}
            duration={1100}
            from="scale"
            className="order-1 md:order-2"
          >
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src="/desktop_terrarium.png"
                alt="Desktop terrárium – Glass & Moss"
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
