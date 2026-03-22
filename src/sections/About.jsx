export default function About() {
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
      {/* Felső elválasztó (hero után) */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/40 to-transparent" />

      {/* Finom textúra / glow */}
      <div className="
        absolute inset-0 
        bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_40%)]
        opacity-40
      " />
      <div className="max-w-[1100px] mx-auto">

        {/* 2 column layout */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 text-white">

          {/* Kik vagyunk */}
          <div>
            {/* Rólunk title */}
            <h2 className="
              text-left 
              font-bold 
              text-[clamp(2rem,3.5vw,48px)] 
              text-white 
              mb-12
            ">
              Rólunk
            </h2>
            <p className="text-white/90 leading-[1.9] text-[clamp(1rem,1.2vw,17px)]">
              A Glass & Moss egy baráti alapokra épülő vállalkozás, amelyet a természet és a terráriumok iránti közös szenvedély hívott életre. 
              Már a kezdetektől az volt a célunk, hogy ne csak alkossunk, hanem megmutassuk másoknak is azt a nyugalmat és szépséget, amit mi látunk a természetben.
            </p>

            <p className="text-white/80 leading-[1.9] mt-4 text-[clamp(1rem,1.2vw,17px)]">
              Hiszünk abban, hogy a természet közelsége nem luxus, hanem egy olyan élmény, amely mindenki számára elérhetővé tehető — akár a saját otthonán belül is.
            </p>
          </div>

          {/* Kép */}
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img
              src="./public/desktop_terrarium.png"
              alt="Desktop terrárium – Glass & Moss"
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
