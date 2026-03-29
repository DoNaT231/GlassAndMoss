import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function ASZF() {
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
          Általános Szerződési Feltételek (ÁSZF)
        </h1>
        <p className="text-white/60 text-sm mb-12">
          Utolsó frissítés: {new Date().toLocaleDateString("hu-HU")}
        </p>

        <div className="space-y-8 text-white/85 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Előírások alanya</h2>
            <p>
              Jelen Általános Szerződési Feltételek (a továbbiakban: ÁSZF) a <strong>Komoróczy Donát EV</strong> (a továbbiakban: Eladó) egyéni vállalkozása által a Glass & Moss márkanév alatt működtetett weboldal használatára és az ott kötött vásárlásokra vonatkoznak.
            </p>
            <p className="mt-4">
              <strong>Eladó adatai:</strong><br />
              Cégnév: Komoróczy Donát EV<br />
              Székhely: 2660 Balassagyarmat, Óváros tér 23.<br />
              Adószám: 91894137-1-32<br />
              E-mail: glassmoss@gmail.com<br />
              Telefon: +36 30 651 7934
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. Szolgáltatások / Termékek</h2>
            <p>
              Az Eladó beépített és dekor terráriumok készítését, értékesítését és szállítását végzi. A konkrét termékek leírása, árai és elérhetősége a weboldalon, illetve személyes egyeztetés során kerülnek megállapításra.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. Megrendelés és szerződéskötés</h2>
            <p>
              A megrendelés leadása a weboldal kapcsolatfelvételi űrlapján, e-mailben vagy telefonon történhet. A szerződés akkor jön létre, amikor az Eladó írásban (e-mailben) elfogadja a megrendelést és visszaigazolja a Vásárlónak.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Árak és fizetés</h2>
            <p>
              Az árak forintban (HUF) értendők, ÁFA-val együtt, amennyiben az Eladó ÁFA-köteles. A fizetés módja (előreutalás, kézpénz, bankkártya stb.) egyedi megállapodás alapján történik.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Szállítás / Átvétel</h2>
            <p>
              A szállítási feltételek, határidők és költségek a megrendelés egyeztetése során kerülnek megállapításra. Egyedi, nagy méretű terráriumok esetén személyes átvétel vagy speciális szállítás egyeztethető.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">6. Szavatosság és reklamáció</h2>
            <p>
              A vásárlott termékekre a Ptk. és a fogyasztóvédelemről szóló törvények szerinti szavatosság vonatkozik. Reklamációt személyesen, e-mailben vagy postai úton lehet benyújtani. Az Eladó a reklamációt 30 napon belül elbírálja és írásban válaszol.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">7. Elállás (fogyasztói vásárlás esetén)</h2>
            <p>
              Ha a Vásárló fogyasztó, 14 napon belül indoklás nélkül elállhat a szerződéstől. Az elállásról szóló nyilatkozatot írásban (e-mailben) kell közölni. A fogyasztót az elállás jogáról külön tájékoztatni kell a megrendelés előtt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">8. Panaszkezelés és békéltető testület</h2>
            <p>
              Panasz esetén a Vásárló az Eladónál, vagy a Békéltető Testületnél folyamathoz juttathatja ügyét.
            </p>
            <p className="mt-4">
              <strong>Pest megyei Békéltető Testület</strong><br />
              Cím: 1119 Budapest, Etele út 59-61.<br />
              Web:{" "}
              <a href="https://www.pestbekelteto.hu" target="_blank" rel="noopener noreferrer" className="text-[#A3B86C] hover:underline">
                www.pestbekelteto.hu
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">9. Online vitarendezés</h2>
            <p>
              Az EU online vitarendezési platformja:{" "}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[#A3B86C] hover:underline">
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">10. Egyéb rendelkezések</h2>
            <p>
              A szerződésre a magyar jog az irányadó. Az Eladó fenntartja a jogot az ÁSZF módosítására; a módosítás a közzététellel lép hatályba. A megrendelés leadásakor érvényes ÁSZF tartalmazza a Vásárlót és az Eladót kötelező feltételeket.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">11. Kapcsolat</h2>
            <p>
              Kérdés esetén:{" "}
              <a href="mailto:glassmoss@gmail.com" className="text-[#A3B86C] hover:underline">
                glassmoss@gmail.com
              </a>
              , +36 30 651 7934
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
