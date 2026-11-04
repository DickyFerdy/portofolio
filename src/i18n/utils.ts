import { ui, defaultLang, type Lang, type UIKey } from './ui';

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getOtherLang(currentLang: Lang): Lang {
  return currentLang === 'id' ? 'en' : 'id';
}

export function getLangPath(lang: Lang, path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${cleanPath === '/' ? '' : cleanPath}`;
}
