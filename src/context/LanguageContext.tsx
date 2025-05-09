
import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";
import { Translations, translations, LanguageCode } from "@/translations";

type Language = {
  code: string;
  name: string;
  flag: string;
};

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  // { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  // { code: "it", name: "Italiano", flag: "🇮🇹" },
  // { code: "pt", name: "Português", flag: "🇵🇹" },
  // { code: "nl", name: "Nederlands", flag: "🇳🇱" },
];

type LanguageContextType = {
  currentLanguage: Language;
  changeLanguage: (code: string) => void;
  languages: Language[];
  t: (key: keyof Translations) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage");
    if (savedLanguage) {
      const language = languages.find(lang => lang.code === savedLanguage);
      if (language) {
        setCurrentLanguage(language);
      }
    }
  }, []);

  const changeLanguage = (code: string) => {
    const language = languages.find(lang => lang.code === code);
    if (language) {
      setCurrentLanguage(language);
      localStorage.setItem("preferredLanguage", code);
    }
  };

  const t = (key: keyof Translations): string => {
    const langCode = currentLanguage.code as LanguageCode;
    // Use the translations for the current language, fallback to English if not available
    return translations[langCode]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, languages, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
