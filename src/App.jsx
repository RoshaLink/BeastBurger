import { LanguageProvider } from "./i18n.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import Menu from "./components/Menu.jsx";
import Story from "./components/Story.jsx";
import Why from "./components/Why.jsx";
import Reviews from "./components/Reviews.jsx";
import Cta from "./components/Cta.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main id="top">
        <Hero />
        <Marquee />
        <Menu />
        <Story />
        <Why />
        <Reviews />
        <Cta />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
