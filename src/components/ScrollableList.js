import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { Colors, Typography } from '../styles';
import Button from './Button';
import IngredientsListItem from './IngredientsListItem';
import StepsListItem from './StepsListItem';
import { useNavigation } from '@react-navigation/native';

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

const ScrollableList = ({ type, data }) => {
  const [itemsList, setItemsList] = useState(data);
  const navigation = useNavigation();

  switch (type) {
    case 'steps': {
      items = stepsList;
      renderItem = ({ item }) => <StepsListItem data={item} />;
      break;
    }
    default:
      () => <Text>No items found!</Text>;
  }

  return (
    <ScrollView style={styles.wrapper}>
      {type === 'ingredients' && (
        <Text style={styles.listTitle}>Ingredients:</Text>
      )}
      {type === 'ingredients' &&
        itemsList.map((item, index) => (
          <IngredientsListItem data={item} key={index} />
        ))}
      <Button
        title={type === 'ingredients' ? 'ADD' : 'ADD STEP'}
        onClick={type === 'steps' ? () => navigation.push('AddNewStep') : ''}
      />
    </ScrollView>
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
