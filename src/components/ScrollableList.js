import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Colors, Typography } from '../styles';
import Button from './Button';
import IngredientsListItem from './IngredientsListItem';

const ingredientsList = [
  { id: '1', name: 'Milk', quantity: '400', unit: 'ml' },
  { id: '2', name: 'Milk', quantity: '400', unit: 'ml' },
  { id: '3', name: 'Milk', quantity: '400', unit: 'ml' },
  { id: '4', name: 'Milk', quantity: '400', unit: 'ml' },
  { id: '5', name: 'Milk', quantity: '400', unit: 'ml' },
  { id: '6', name: 'Milk', quantity: '400', unit: 'ml' },
  { id: '7', name: 'Milk', quantity: '400', unit: 'ml' },
  { id: '8', name: 'Milk', quantity: '400', unit: 'ml' },
  { id: '9', name: 'Milk', quantity: '400', unit: 'ml' },
  { id: '10', name: 'Milk', quantity: '400', unit: 'ml' },
  { id: '11', name: 'Milk', quantity: '400', unit: 'ml' },
  { id: '12', name: 'Milk', quantity: '400', unit: 'ml' },
  { id: '13', name: 'Milk', quantity: '400', unit: 'ml' },
  { id: '14', name: 'Milk', quantity: '400', unit: 'ml' },
  { id: '15', name: 'Milk', quantity: '400', unit: 'ml' },
];

const ScrollableList = () => {
  const items = ingredientsList;

  const renderItem = ({ item }) => <IngredientsListItem data={item} />;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.listTitle}>Ingredients:</Text>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      ></FlatList>
      <Button title="ADD" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  listTitle: {
    ...Typography.semibold,
    fontSize: 16,
    color: Colors.pepper,
  },
});

export default ScrollableList;
