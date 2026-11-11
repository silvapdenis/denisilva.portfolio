import { en, type Dict } from './en';
import { pt } from './pt';

export type Lang = 'en' | 'pt';
export const dicts: Record<Lang, Dict> = { en, pt };
export const getT = (lang: Lang): Dict => dicts[lang];
