import { motion } from "framer-motion";
import { useLang } from "../i18n.jsx";
import AnimatedTitle from "./AnimatedTitle.jsx";
import HeroStats from "./HeroStats.jsx";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1400&q=90";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="hero" id="hero">
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, x: -36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatedTitle />
          <p className="hero-sub">{t("hero.sub")}</p>
          <div className="hero-ctas">
            <a href="#menu" className="btn btn-primary">
              {t("hero.ctaMenu")}
            </a>
            <a href="#story" className="btn btn-ghost">
              {t("hero.ctaStory")}
            </a>
          </div>
          <HeroStats />
        </motion.div>

        <motion.div
          className="hero-art"
          initial={{ opacity: 0, scale: 0.78, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="hero-photo-frame"
            whileHover={{ scale: 1.025, rotate: -1.5 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <img
              className="hero-photo"
              src={HERO_IMAGE}
              alt="A juicy Beast Burger with melted cheese"
            />
            <span className="hero-photo-label">{t("hero.signature")}</span>
          </motion.div>
          <div className="hero-note">{t("hero.heroNote")}</div>
        </motion.div>
      </div>
    </section>
  );
}
