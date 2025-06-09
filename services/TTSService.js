import TTS from 'react-native-tts';

export const initTTS = async () => {
  await TTS.getInitStatus();
  TTS.setDefaultRate(0.5);
};

export const speak = (text, lang = 'fr-FR') => {
  TTS.setDefaultLanguage(lang);
  TTS.speak(text);
};

export const stop = () => TTS.stop();

export const setVoice = (voiceId) => {
  TTS.setDefaultVoice(voiceId);
};
