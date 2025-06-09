import React from 'react';
import { View, Text, FlatList } from 'react-native';

const HistoryList = ({ history }) => {
  return (
    <FlatList
      data={history}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <Text>{item.route}</Text>}
    />
  );
};

export default HistoryList;
