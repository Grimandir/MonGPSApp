import React from 'react';
import { View, StyleSheet } from 'react-native';
import FavoritesList from '../components/FavoritesList';

const FavoritesScreen = () => {
  const favorites = []; // À connecter à StorageService
  return (
    <View style={styles.container}>
      <FavoritesList favorites={favorites} />
    </View>
  );
};

const styles = StyleSheet.create({ container: { flex: 1, padding: 10 } });

export default FavoritesScreen;
