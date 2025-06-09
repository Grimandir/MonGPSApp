import { useState, useEffect } from 'react';
import { Appearance } from 'react-native';

export default function useThemeMode() {
  const [theme, setTheme] = useState(Appearance.getColorScheme() || 'light');

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme || 'light');
    });
    return () => subscription.remove();
  }, []);

  return { theme };
}
