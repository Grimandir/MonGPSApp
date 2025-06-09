import React from 'react';
import { View, StyleSheet } from 'react-native';
import HistoryList from '../components/HistoryList';

const HistoryScreen = () => {
  const history = []; // À connecter à StorageService
  return (
    <View style={styles.container}>
      <HistoryList history={history} />
    </View>
  );
};

const styles = StyleSheet.create({ container: { flex: 1, padding: 10 } });

export default HistoryScreen;
