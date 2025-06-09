import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavigationVoice from '../components/NavigationVoice';

const NavigationScreen = ({ route }) => {
  const { instruction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.instruction}>{instruction}</Text>
      <NavigationVoice instruction={instruction} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  instruction: { fontSize: 20, fontWeight: 'bold' },
});

export default NavigationScreen;
