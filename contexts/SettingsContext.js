import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    language: 'fr',
    voice: 'default',
    vehicleType: 'sedan',
    darkMode: false,
    autoNightMode: true,
    volume: 1,
  });

  useEffect(() => {
    loadSettings();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('settings', JSON.stringify(settings));
  }, [settings]);

  const loadSettings = async () => {
    try {
      const savedSettings = await AsyncStorage.getItem('settings');
      if (savedSettings) {
        setSettings(JSON.parse(savedSettings));
      }
    } catch (e) {
      console.error('Failed to load settings', e);
    }
  };

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
