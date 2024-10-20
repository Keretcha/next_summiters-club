"use client";

import React, { createContext, useState, useContext, Dispatch, SetStateAction } from "react";

export enum Languages {
  EN = "EN",
  DE = "DE",
}

type LanguageContextType = {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
};

type languageProviderType = {
  children: any;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "EN",
  setLanguage: () => {},
});

export const LanguageProvider: React.FC<languageProviderType> = ({ children }) => {
  const [language, setLanguage] = useState<string>("EN");

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);

