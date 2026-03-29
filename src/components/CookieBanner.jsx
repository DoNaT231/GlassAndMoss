import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const COOKIE_CONSENT_KEY = "glassmoss_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({
      accepted: true,
      date: new Date().toISOString(),
    }));
    window.location.reload();
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({
      accepted: false,
      date: new Date().toISOString(),
    }));
    window.location.reload();
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
      role="dialog"
      aria-label="Cookie tájékoztató"
    >
      <div className="max-w-[1200px] mx-auto bg-[#1a1f18] border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 backdrop-blur-xl">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <div className="flex-1">
            <p className="text-white/90 text-[clamp(0.95rem,1.1vw,16px)] leading-relaxed">
              A weboldal cookie-kat (sütiket) használ a megfelelő működés és a felhasználói élmény javítása érdekében.
              További információ:{" "}
              <Link
                to="/cookie-tajekoztato"
                className="text-[#A3B86C] hover:text-[#b8d96b] underline transition-colors"
              >
                Cookie-tájékoztató
              </Link>
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              type="button"
              onClick={handleAccept}
              className="px-5 py-2.5 rounded-full bg-[#4f6f2f] text-white font-medium hover:bg-[#5d7c34] transition-colors"
            >
              Elfogadom
            </button>
            <button
              type="button"
              onClick={handleDecline}
              className="px-5 py-2.5 rounded-full border border-white/20 text-white/80 font-medium hover:bg-white/5 hover:text-white transition-colors"
            >
              Elutasítom
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
