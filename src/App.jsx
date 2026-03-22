import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import WhyUs from "./sections/WhyUs";
import Catalog from "./sections/Catalog";
import Contact from "./sections/Contact";
import Devider from "./components/Devider";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <Hero />
      <About />
      <WhyUs />
      <Catalog />
      <Devider />
      <Contact />
    </div>
  );
}
