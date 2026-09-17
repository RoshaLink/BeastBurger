import { motion } from "framer-motion";
import { useLang } from "../i18n.jsx";
import Reveal from "./Reveal.jsx";

const WHY_IMAGE =
  "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=1200&q=88";

export default function Why() {
  const { t } = useLang();
  const blocks = [
    { sub: t("why.sub1"), text: t("why.p1") },
    { sub: t("why.sub2"), text: t("why.p2") },
    { sub: t("why.sub3"), text: t("why.p3") },
  ];

  return (
    <section className="section why-section" id="why">
      <div className="container">
        <Reveal className="section-head">
          <p className="tagline">{t("why.tag")}</p>
          <h2>{t("why.heading")}</h2>
        </Reveal>

        <div className="why-showcase">
          <motion.figure
            className="why-photo-card"
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={WHY_IMAGE}
              alt="Close-up of a freshly prepared burger with melted cheese"
              loading="lazy"
            />
            <figcaption>{t("why.photoCaption")}</figcaption>
          </motion.figure>

          <div className="why-feature-list">
            {blocks.map((block, i) => (
              <motion.article
                className="why-card"
                key={block.sub}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
              >
                <span className="why-index">0{i + 1}</span>
                <div>
                  <h3>{block.sub}</h3>
                  <p>{block.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="why-badges">
          {t("why.badges").map((badge, i) => (
            <motion.span
              className="badge"
              key={badge}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              {badge}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
