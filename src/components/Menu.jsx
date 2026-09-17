import { motion } from "framer-motion";
import { burgers } from "../data/burgers.js";
import { useLang } from "../i18n.jsx";
import Reveal from "./Reveal.jsx";

function Heat({ level, label }) {
  if (!level) return null;
  return <span className="heat-text">{label} {level}/3</span>;
}

function BurgerCard({ burger, index, lang, heatLabel }) {
  return (
    <motion.article
      className="burger-card"
      style={{ "--accent": burger.accent }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -7 }}
    >
      <div className="burger-photo-wrap">
        <img
          className="burger-photo"
          src={burger.image}
          alt={`${burger.name[lang]} burger`}
          loading="lazy"
        />
      </div>
      <div className="burger-card-top">
        <span className="burger-name">{burger.name[lang]}</span>
        <Heat level={burger.heat} label={heatLabel} />
      </div>
      <p className="burger-tag">{burger.tag[lang]}</p>
      <p className="burger-desc">{burger.desc[lang]}</p>
      <div className="burger-card-bottom">
        <span className="burger-price">{burger.price}</span>
        <span className="burger-num">#{String(index + 1).padStart(2, "0")}</span>
      </div>
    </motion.article>
  );
}

export default function Menu() {
  const { t, lang } = useLang();
  const heatLabel = t("menu.heat");

  return (
    <section className="section menu-section" id="menu">
      <div className="container">
        <Reveal className="section-head">
          <p className="tagline">{t("menu.tag")}</p>
          <h2>{t("menu.heading")}</h2>
          <p className="section-sub">{t("menu.sub")}</p>
        </Reveal>

        <div className="burger-grid">
          {burgers.map((burger, i) => (
            <BurgerCard
              key={burger.id}
              burger={burger}
              index={i}
              lang={lang}
              heatLabel={heatLabel}
            />
          ))}
        </div>

        <Reveal className="menu-note" delay={150}>
          {t("menu.note")}
        </Reveal>
      </div>
    </section>
  );
}
