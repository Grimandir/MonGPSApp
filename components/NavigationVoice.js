import React, { useEffect } from 'react';
import Tts from 'react-native-tts';
import { useContext } from 'react';
import { SettingsContext } from '../contexts/SettingsContext';

const NavigationVoice = ({ instruction }) => {
  const { settings } = useContext(SettingsContext);

  useEffect(() => {
    Tts.setDefaultLanguage(settings.language);
    Tts.setDefaultRate(0.5);
    Tts.setDucking(true);
    Tts.setDefaultVoice(settings.voice);
    Tts.setDefaultPitch(1);
    Tts.setDefaultVolume(settings.volume);

    if (instruction) {
      Tts.speak(instruction);
    }
  }, [instruction]);

  return null;
};

export default NavigationVoice;
