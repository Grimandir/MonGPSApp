import React, { useContext } from 'react';
import { View, Picker, Text, StyleSheet } from 'react-native';
import { SettingsContext } from '../contexts/SettingsContext';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { settings, setSettings } = useContext(SettingsContext);
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text>{t('selectLanguage')}</Text>
      <Picker
        selectedValue={settings.language}
        onValueChange={(lang) =>
          setSettings({ ...settings, language: lang })
        }>
        <Picker.Item label="Français" value="fr" />
        <Picker.Item label="English" value="en" />
        <Picker.Item label="Español" value="es" />
        <Picker.Item label="Deutsch" value="de" />
        <Picker.Item label="Italiano" value="it" />
        <Picker.Item label="Polski" value="pl" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default LanguageSelector;
