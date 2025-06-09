import { useEffect, useState } from 'react';
import * as Speech from 'expo-speech';

export default function useTTS(language = 'fr-FR', voice = null, volume = 1.0) {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = (text) => {
    if (!text) return;
    setIsSpeaking(true);
    Speech.speak(text, {
      language,
      voice,
      volume,
      onDone: () => setIsSpeaking(false),
      onStopped: () => setIsSpeaking(false),
      onError: () => setIsSpeaking(false),
    });
  };

  const stop = () => {
    Speech.stop();
    setIsSpeaking(false);
  };

  useEffect(() => {
    // Optional: preload voices or handle voice changes here
  }, [language, voice]);

  return { speak, stop, isSpeaking };
}
