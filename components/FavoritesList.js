import React from 'react';
import { View, Text, FlatList } from 'react-native';

const FavoritesList = ({ favorites }) => {
  return (
    <FlatList
      data={favorites}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  );
};

export default FavoritesList;
