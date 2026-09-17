import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "./translations.js";

const LanguageContext = createContext(null);

const STORAGE_KEY = "beastburger-lang";

function detectInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "sv") return saved;
  } catch {
    /* storage unavailable — fall through */
  }
  return navigator.language?.toLowerCase().startsWith("sv") ? "sv" : "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title =
      lang === "sv"
        ? "Beast Burger — Gourmet Smashburgare"
        : "Beast Burger — Gourmet Smash Burgers";
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const toggle = () => setLang((l) => (l === "en" ? "sv" : "en"));

  const t = (path) => {
    const keys = path.split(".");
    let node = translations[lang];
    for (const key of keys) node = node?.[key];
    return node ?? path;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
