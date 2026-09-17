import { useEffect, useState } from "react";
import { useLang } from "../i18n.jsx";

export default function Navbar() {
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["#menu", t("nav.menu")],
    ["#story", t("nav.story")],
    ["#why", t("nav.why")],
    ["#reviews", t("nav.reviews")],
  ];

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <a href="#top" className="logo" aria-label="Beast Burger home">
          <span className="logo-mark">🍔</span>
          <span className="logo-text">
            BEAST<span className="logo-accent">BURGER</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          {links.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="lang-toggle"
          onClick={toggle}
          aria-label={`Switch language to ${lang === "en" ? "Swedish" : "English"}`}
          title="EN / SV"
        >
          <span className={lang === "en" ? "on" : ""}>EN</span>
          <span className="lang-sep">/</span>
          <span className={lang === "sv" ? "on" : ""}>SV</span>
        </button>
      </div>
    </header>
  );
}
