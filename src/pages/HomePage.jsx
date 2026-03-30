import Header from "../components/Header";
import Hero from "../sections/Hero";
import About from "../sections/About";
import WhyUs from "../sections/WhyUs";
import CareTeaser from "../sections/CareTeaser";
import Catalog from "../sections/Catalog";
import Contact from "../sections/Contact";
import Devider from "../components/Devider";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <Hero />
      <About />
      <WhyUs />
      <CareTeaser />
      <Catalog />
      <Devider />
      <Contact />
      <Footer />
      <CookieBanner />
    </div>
  );
}
