import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { SettingsProvider } from './contexts/SettingsContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { lightTheme, darkTheme } from './styles/theme';
import { useColorScheme } from 'react-native';
import * as Location from 'expo-location';


export default function App() {
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(scheme === 'dark' ? darkTheme : lightTheme);

  useEffect(() => {
    setTheme(scheme === 'dark' ? darkTheme : lightTheme);
  }, [scheme]);

  return (
    <LanguageProvider>
      <SettingsProvider>
        <NavigationContainer theme={{ colors: theme.colors }}>
          <AppNavigator />
        </NavigationContainer>
      </SettingsProvider>
    </LanguageProvider>
  );
}
