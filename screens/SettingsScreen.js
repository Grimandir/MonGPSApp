import React, { useContext } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { SettingsContext } from '../contexts/SettingsContext';
import LanguageSelector from '../components/LanguageSelector';
import { useTranslation } from 'react-i18next';

const SettingsScreen = () => {
  const { settings, setSettings } = useContext(SettingsContext);
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('settings')}</Text>
      <LanguageSelector />

      <View style={styles.setting}>
        <Text>{t('darkMode')}</Text>
        <Switch
          value={settings.darkMode}
          onValueChange={(value) =>
            setSettings({ ...settings, darkMode: value })
          }
        />
      </View>

      <View style={styles.setting}>
        <Text>{t('autoNightMode')}</Text>
        <Switch
          value={settings.autoNight}
          onValueChange={(value) =>
            setSettings({ ...settings, autoNight: value })
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
});

export default SettingsScreen;
