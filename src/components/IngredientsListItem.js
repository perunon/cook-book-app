import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from '../styles';
import { View, TextInput } from 'react-native';

const IngredientsListItem = ({ data }) => {
  return (
    <View style={styles.item}>
      <TextInput placeholder={data.name} />
      <View style={styles.itemRight}>
        <TextInput placeholder={data.quantity} />
        <TextInput placeholder={data.unit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: Colors.olive,
    borderBottomWidth: 2,
  },
  itemRight: {
    flexDirection: 'row',
  },
});

export default IngredientsListItem;
