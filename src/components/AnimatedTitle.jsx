import { useLang } from "../i18n.jsx";

export default function AnimatedTitle() {
  const { t } = useLang();
  const lines = [t("hero.line1"), t("hero.line2")];
  let wordIndex = 0;

  return (
    <h1 className="hero-title">
      {lines.map((line, lineIdx) => (
        <span className="line" key={lineIdx}>
          {line.split(" ").map((word) => {
            const delay = 120 * wordIndex;
            wordIndex += 1;
            const isLast = lineIdx === lines.length - 1;
            return (
              <span
                key={word}
                className={`word${isLast ? " accent" : ""}`}
                style={{ "--d": delay }}
              >
                {word}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
