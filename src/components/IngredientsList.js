import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { Colors, Typography } from '../styles';
import Button from './Button';
import IngredientsListItem from './IngredientsListItem';
import StepsListItem from './StepsListItem';
import { useNavigation } from '@react-navigation/native';

const IngredientsList = ({ data, onChange }) => {
  return (
    <ScrollView style={styles.wrapper}>
      {data.map((item, index) => (
        <IngredientsListItem
          data={item}
          key={index}
          onChange={onChange}
          index={index}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginBottom: 10,
  },
});

export default IngredientsList;
