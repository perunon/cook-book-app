import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Colors, Typography } from '../styles';
import Button from './Button';
import IngredientsListItem from './IngredientsListItem';
import StepsListItem from './StepsListItem';

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

const stepsList = [
  {
    id: '1',
    img: require('../../assets/zupa_szpinakowa.jpg'),
    text: 'Podsmażyć cebulkę do zeszklenia Podsmażyć cebulkę do zeszkleniaPodsmażyć cebulkę do zeszkleniaPodsmażyć cebulkę do zeszkleniaPodsmażyć cebulkę do zeszkleniaPodsmażyć cebulkę do zeszkleniaPodsmażyć cebulkę do zeszklenia',
  },
  {
    id: '2',
    img: require('../../assets/zupa_szpinakowa.jpg'),
    text: 'Podsmażyć cebulkę do zeszklenia',
  },
  {
    id: '3',
    img: require('../../assets/zupa_szpinakowa.jpg'),
    text: 'Podsmażyć cebulkę do zeszklenia',
  },
];

const ScrollableList = ({ type }) => {
  let items = [];
  let renderItem = () => {};
  switch (type) {
    case 'ingredients': {
      items = ingredientsList;
      renderItem = ({ item }) => <IngredientsListItem data={item} />;
      break;
    }
    case 'steps': {
      items = stepsList;
      renderItem = ({ item }) => <StepsListItem data={item} />;
      break;
    }
    default:
      () => <Text>No items found!</Text>;
  }

  return (
    <View style={styles.wrapper}>
      {type === 'ingredients' && (
        <Text style={styles.listTitle}>Ingredients:</Text>
      )}
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      ></FlatList>
      <Button title={type === 'ingredients' ? 'ADD' : 'ADD STEP'} />
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
