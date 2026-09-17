import { useLang } from "../i18n.jsx";

export default function Footer() {
  const { t, lang, toggle } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="logo-text">
            BEAST<span className="logo-accent">BURGER</span>
          </span>
          <p>{t("footer.tagline")}</p>
        </div>

        <div className="footer-lang">
          <span className="footer-lang-label">{t("footer.langLabel")}</span>
          <button
            type="button"
            className="lang-toggle"
            onClick={toggle}
            aria-label={`Switch language to ${lang === "en" ? "Swedish" : "English"}`}
          >
            <span className={lang === "en" ? "on" : ""}>EN</span>
            <span className="lang-sep">/</span>
            <span className={lang === "sv" ? "on" : ""}>SV</span>
          </button>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {year} Beast Burger. {t("footer.rights")}
        </span>
        <span className="footer-fun">{t("footer.fun")}</span>
      </div>
    </footer>
  );
}
