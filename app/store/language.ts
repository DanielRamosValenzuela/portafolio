import { create } from 'zustand';

type LanguageStore = {
  isEnglish: boolean;
  changeLanguage: (language: boolean) => void;
};

export const useLanguageStore = create<LanguageStore>((set) => ({
  isEnglish: false,
  changeLanguage: (language) => {
    set({
      isEnglish: !language
    })
  }
}));
