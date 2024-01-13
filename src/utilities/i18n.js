import { en, kh } from '@locales';

export const tran = (locale) => {
  switch (locale) {
    case 'en':
      return { locale: en, cx: `en` };
    case 'kh':
      return { locale: kh, cx: `kh` };
    default:
      return { locale: en, cx: `en` };
  }
};
