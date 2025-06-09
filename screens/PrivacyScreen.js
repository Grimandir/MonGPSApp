import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const PrivacyScreen = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.title}>Politique de confidentialité</Text>
    <Text style={styles.text}>
      Nous respectons votre vie privée. Vos données ne sont ni partagées ni vendues. La géolocalisation est utilisée uniquement pour la navigation.
    </Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16 },
});

export default PrivacyScreen;
