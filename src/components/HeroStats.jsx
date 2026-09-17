import { useLang } from "../i18n.jsx";

const STAT_KEYS = [
  ["8", "hero.stat1"],
  ["8", "hero.stat2"],
  ["7", "hero.stat3"],
];

export default function HeroStats() {
  const { t } = useLang();

  return (
    <div className="hero-stats">
      {STAT_KEYS.map(([num, key]) => (
        <div key={key}>
          <div className="stat-num">{num}</div>
          <div className="stat-label">{t(key)}</div>
        </div>
      ))}
    </div>
  );
}
