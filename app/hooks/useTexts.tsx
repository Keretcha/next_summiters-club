"use client";
import { englishTexts, germanTexts } from "../config/texts";
import { Languages, useLanguage } from "../context/languageSwitcher";

export const useTexts = () => {
  const { language } = useLanguage();
  console.log(useLanguage, "here here");

  return language === Languages.EN ? englishTexts : germanTexts;
};
