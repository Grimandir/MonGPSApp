import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import fr from './fr.json';
import en from './en.json';
import de from './de.json';
import es from './es.json';
import it from './it.json';
import pl from './pl.json';

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources: {
      fr: { translation: fr },
      en: { translation: en },
      de: { translation: de },
      es: { translation: es },
      it: { translation: it },
      pl: { translation: pl },
    },
    fallbackLng: 'fr',
    lng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
