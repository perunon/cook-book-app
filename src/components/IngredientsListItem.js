import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from '../styles';
import { View, TextInput } from 'react-native';

const IngredientsListItem = ({ data, onChange, index }) => {
  return (
    <View style={styles.item}>
      <TextInput
        value={data.name}
        onChangeText={(text) => onChange(index, 'name', text)}
      />
      <View style={styles.itemRight}>
        <TextInput
          value={data.quantity}
          onChangeText={(text) => onChange(index, 'quantity', text)}
        />
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
