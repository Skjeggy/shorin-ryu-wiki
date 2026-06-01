import nb from './nb';
import en from './en';

export const languages = {
  nb: 'Norsk bokmål',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'nb';

export const uiStrings = { nb, en } as const;

export function getUI(lang: Lang) {
  return uiStrings[lang] ?? uiStrings[defaultLang];
}

export const sectionOrder = [
  'ranks',
  'kata',
  'techniques',
  'bunkai',
  'ridori',
  'training-sessions',
  'ressurser',
] as const;

export type SectionId = (typeof sectionOrder)[number];
