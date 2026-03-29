import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdatkezelesiTajekoztato from "./pages/AdatkezelesiTajekoztato";
import ASZF from "./pages/ASZF";
import CookieTajekoztato from "./pages/CookieTajekoztato";
import CookieBanner from "./components/CookieBanner";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/adatkezelesi-tajekoztato" element={<AdatkezelesiTajekoztato />} />
        <Route path="/aszf" element={<ASZF />} />
        <Route path="/cookie-tajekoztato" element={<CookieTajekoztato />} />
      </Routes>
      <CookieBanner />
    </>
  );
}
