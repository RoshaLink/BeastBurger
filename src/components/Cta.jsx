import { motion } from "framer-motion";
import { useLang } from "../i18n.jsx";
import Reveal from "./Reveal.jsx";

const CTA_IMAGE =
  "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=1000&q=88";

export default function Cta() {
  const { t } = useLang();

  return (
    <section className="section cta-section" id="cta">
      <div className="container">
        <Reveal className="cta-box">
          <div className="cta-copy">
            <p className="tagline">Beast Burger</p>
            <h2>{t("cta.heading")}</h2>
            <p>{t("cta.sub")}</p>
            <a href="#menu" className="btn btn-primary">
              {t("cta.button")}
            </a>
          </div>
          <motion.div
            className="cta-photo"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
          >
            <img
              src={CTA_IMAGE}
              alt="Burger with onion rings and sauce"
              loading="lazy"
            />
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
