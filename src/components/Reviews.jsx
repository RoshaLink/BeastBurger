import { motion } from "framer-motion";
import { useLang } from "../i18n.jsx";
import Reveal from "./Reveal.jsx";

const REVIEWS_IMAGE =
  "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=1200&q=88";

export default function Reviews() {
  const { t } = useLang();
  const reviews = [
    { text: t("reviews.r1"), name: t("reviews.names")[0] },
    { text: t("reviews.r2"), name: t("reviews.names")[1] },
    { text: t("reviews.r3"), name: t("reviews.names")[2] },
  ];

  return (
    <section className="section reviews-section" id="reviews">
      <div className="container">
        <Reveal className="section-head">
          <p className="tagline">{t("reviews.tag")}</p>
          <h2>{t("reviews.heading")}</h2>
        </Reveal>

        <motion.figure
          className="reviews-photo"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={REVIEWS_IMAGE}
            alt="Double cheeseburger with melted cheese"
            loading="lazy"
          />
          <figcaption>{t("reviews.photoCaption")}</figcaption>
        </motion.figure>

        <div className="reviews-grid">
          {reviews.map((review, i) => (
            <motion.figure
              className="review-card"
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
            >
              <div className="stars" aria-label="5 out of 5 stars">
                5 / 5
              </div>
              <blockquote>{review.text}</blockquote>
              <figcaption>{review.name}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
