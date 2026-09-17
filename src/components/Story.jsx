import { motion } from "framer-motion";
import { useLang } from "../i18n.jsx";
import Reveal from "./Reveal.jsx";

const STORY_IMAGE =
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=88";

export default function Story() {
  const { t } = useLang();
  const points = [
    t("story.point1"),
    t("story.point2"),
    t("story.point3"),
    t("story.point4"),
  ];

  return (
    <section className="section story-section" id="story">
      <div className="container story-grid">
        <Reveal className="story-copy">
          <p className="tagline">{t("story.tag")}</p>
          <h2>{t("story.heading")}</h2>
          <p className="story-p">{t("story.p1")}</p>
          <p className="story-p">{t("story.p2")}</p>

          <ul className="story-points">
            {points.map((point, i) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <span className="point-line" aria-hidden="true" />
                {point}
              </motion.li>
            ))}
          </ul>
        </Reveal>

        <motion.figure
          className="story-photo-card"
          initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ rotate: 0, scale: 1.02 }}
        >
          <img
            src={STORY_IMAGE}
            alt="Warm restaurant kitchen with a burger ready to serve"
            loading="lazy"
          />
          <figcaption>
            <strong>300°C</strong>
            <span>{t("story.photoCaption")}</span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
