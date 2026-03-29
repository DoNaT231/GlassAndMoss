import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function CookieTajekoztato() {
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
          Cookie-tájékoztató
        </h1>
        <p className="text-white/60 text-sm mb-12">
          Utolsó frissítés: {new Date().toLocaleDateString("hu-HU")}
        </p>

        <div className="space-y-8 text-white/85 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Mi az a cookie?</h2>
            <p>
              A cookie (süti) egy kis méretű szöveges fájl, amelyet a weboldal a látogató eszközén (számítógép, tablet, mobil) helyez el. Segíti a weboldal megfelelő működését, használatának megjegyzését és a felhasználói élmény javítását.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. Milyen cookie-kat használunk?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Szükséges (technikai) cookie-k:</strong> A weboldal alapvető működéséhez szükségesek (pl. munkamenet, biztonság). Ezek nélkül a oldal nem működhet megfelelően. Ezekhez előzetes hozzájárulás nem szükséges.
              </li>
              <li>
                <strong>Statisztikai cookie-k (opcionális):</strong> Ha az oldal elemző eszközt (pl. Google Analytics) használ, ezek segítenek megérteni, hogyan használják a látogatók az oldalt. Ezekhez előzetes hozzájárulás szükséges.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. Cookie-k kezelése</h2>
            <p>
              A weboldal első látogatásakor tájékoztatást kapsz a cookie-k használatáról, és lehetőséged van az elfogadásra vagy az elutasításra. A beállításokat bármikor módosíthatod a böngésződben.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Böngésző beállítások</h2>
            <p>
              A legtöbb böngésző alapértelmezetten engedélyezi a cookie-kat. A cookie-k letiltását a böngésző beállításaiban tudod megtenni. Figyelem: a szükséges cookie-k letiltása esetén egyes funkciók nem fognak megfelelően működni.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. További információ</h2>
            <p>
              Az adatkezelésről részletesen az{" "}
              <Link to="/adatkezelesi-tajekoztato" className="text-[#A3B86C] hover:underline">
                Adatkezelési tájékoztatóban
              </Link>
              {" "}olvashatsz.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
