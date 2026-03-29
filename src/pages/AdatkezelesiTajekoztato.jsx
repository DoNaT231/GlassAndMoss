import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function AdatkezelesiTajekoztato() {
  return (
    <div className="min-h-screen bg-[#0b0f0a] text-white">
      <Header />
      <div className="max-w-[800px] mx-auto px-4 md:px-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#A3B86C] hover:text-white transition-colors mb-10"
        >
          ← Vissza a főoldalra
        </Link>

        <h1 className="text-[clamp(2rem,4vw,40px)] font-bold mb-2">
          Adatkezelési tájékoztató
        </h1>
        <p className="text-white/60 text-sm mb-12">
          Utolsó frissítés: {new Date().toLocaleDateString("hu-HU")}
        </p>

        <div className="prose prose-invert prose-green max-w-none space-y-8 text-white/85 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Az adatkezelő</h2>
            <p>
              Az adatkezelő: <strong>Komoróczy Donát EV</strong> (Glass & Moss)
            </p>
            <p>Székhely: 2660 Balassagyarmat, Óváros tér 23.</p>
            <p>
              E-mail:{" "}
              <a href="mailto:glassmoss@gmail.com" className="text-[#A3B86C] hover:underline">
                glassmoss@gmail.com
              </a>
            </p>
            <p>Telefon: +36 30 651 7934</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              2. Kezelt személyes adatok és céljaik
            </h2>
            <p>
              A weboldal kapcsolatfelvételi űrlapja révén a következő adatokat kezeljük:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Név</strong> – a megkeresés személyes címzése céljából</li>
              <li><strong>E-mail cím</strong> – a válasz megküldéséhez</li>
              <li><strong>Üzenet</strong> – a megkeresés tartalma</li>
            </ul>
            <p className="mt-4">
              Jogalap: az érintett önkéntes, hozzájárulásán alapuló adatkezelés (GDPR 6. cikk (1) bek. a) pont).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              3. Az adatok megőrzési ideje
            </h2>
            <p>
              A kapcsolatfelvételi űrlapból érkező adatokat a megkeresés teljes körű megválaszolásától számított 2 évig tároljuk, ha törvény nem ír elő mást.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              4. Az érintett jogai
            </h2>
            <p>Az érintett a következő jogokat gyakorolhatja:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Hozzáférés joga</strong> – tájékoztatást kérhet kezelt adatairól</li>
              <li><strong>Helyesbítés joga</strong> – pontatlan adatok javíttathatók</li>
              <li><strong>Törlés joga</strong> – adatai törölhetők bizonyos feltételek mellett</li>
              <li><strong>Korlátozás joga</strong> – az adatkezelés korlátozhatató</li>
              <li><strong>Tiltakozás joga</strong> – tiltakozhat az adatkezelés ellen</li>
              <li><strong>Adathordozhatóság joga</strong> – adatait máshova átviheti</li>
            </ul>
            <p className="mt-4">
              Jogorvoslat: panasz bejelenthető a Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH), 1125 Budapest, Szilágyi Erzsébet fasor 22/c.,{" "}
              <a href="https://www.naih.hu" target="_blank" rel="noopener noreferrer" className="text-[#A3B86C] hover:underline">
                www.naih.hu
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              5. Adatbiztonság
            </h2>
            <p>
              Személyes adatokat megfelelő technikai és szervezeti intézkedésekkel védjük, hogy azok véletlen vagy jogellenes megsemmisülés, elvesztés, megváltoztatás vagy jogosulatlan hozzáférhetőség ellen védettek legyenek.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              6. Cookie-k (sütik)
            </h2>
            <p>
              A weboldal cookie-kezeléséről külön tájékoztatást készítettünk, amely{" "}
              <Link to="/cookie-tajekoztato" className="text-[#A3B86C] hover:underline">
                itt érhető el
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              7. Kapcsolat
            </h2>
            <p>
              Kérdés esetén keressen minket e-mailben:{" "}
              <a href="mailto:glassmoss@gmail.com" className="text-[#A3B86C] hover:underline">
                glassmoss@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
