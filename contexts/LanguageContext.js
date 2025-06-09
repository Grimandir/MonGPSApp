import React, { createContext, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SettingsContext } from './SettingsContext';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const { settings } = useContext(SettingsContext);

  useEffect(() => {
    if (settings.language) {
      i18n.changeLanguage(settings.language);
    }
  }, [settings.language]);

  return (
    <LanguageContext.Provider value={{ language: settings.language }}>
      {children}
    </LanguageContext.Provider>
  );
};
