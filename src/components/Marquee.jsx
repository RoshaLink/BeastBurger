import { useLang } from "../i18n.jsx";

export default function Marquee() {
  const { t } = useLang();
  const items = t("marquee");
  const row = [...items, ...items];

  return (
    <div className="marquee" aria-label={items.join(", ")}>
      <div className="marquee-track">
        {row.map((item, i) => (
          <span className="marquee-item" key={`${item}-${i}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
