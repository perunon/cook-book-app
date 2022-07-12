import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Button from '../components/Button';
import ScreenContainer from '../components/ScreenContainer';
import TitleImage from '../components/TitleImage';
import { Colors, Typography } from '../styles';

const ingredients = [
  {
    id: '1',
    name: 'Milk: 400ml',
  },
  {
    id: '2',
    name: 'Milk: 400ml',
  },
  {
    id: '3',
    name: 'Milk: 400ml',
  },
  {
    id: '4',
    name: 'Milk: 400ml',
  },
  {
    id: '5',
    name: 'Milk: 400ml',
  },
  {
    id: '6',
    name: 'Milk: 400ml',
  },
];

const Recipe = ({ route }) => {
  const renderItem = ({ item }) => (
    <Text style={styles.ingredientsItem}>{item.name}</Text>
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <TitleImage />
      <ScreenContainer>
        <Text style={styles.title}>Zupa krem szpinakowa</Text>
        <Text style={styles.details}>15min | 30min</Text>

        <View style={styles.nextSection}>
          <Text style={styles.ingredients}>
            Ingredients for 400g / 2 people
          </Text>

          <View style={styles.quantity}>
            <Text style={[styles.quantityButton, styles.first]}>1x</Text>
            <Text style={styles.quantityButton}>2x</Text>
            <Text style={[styles.quantityButton, styles.last]}>3x</Text>
          </View>
        </View>
        <FlatList
          data={ingredients}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <Button title="GO TO RECIPE" />
        <Text style={styles.tagsTitle}>Tags:</Text>
        <Text style={styles.tagsList}>
          #soup #for-family #vegetarian #spinach
        </Text>
        {route.params.preview && (
          <Button
            title="RETURN TO SUMMARY"
            style={{ backgroundColor: Colors.garlic }}
          ></Button>
        )}
      </ScreenContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    ...Typography.bold,
    fontSize: 26,
    marginTop: -10,
  },
  details: {
    fontSize: 12,
    ...Typography.regular,
    color: Colors.darkGarlic,
  },
  nextSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  ingredients: {
    ...Typography.semibold,
    fontSize: 16,
    width: '50%',
  },
  quantity: {
    width: '50%',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    height: '100%',
    overflow: 'hidden',
  },
  quantityButton: {
    height: '100%',
    flex: 1,
    borderRightWidth: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    ...Typography.regular,
  },
  last: {
    borderRightWidth: 0,
  },
  first: {
    backgroundColor: Colors.olive,
  },
  ingredientsItem: {
    marginBottom: 5,
    ...Typography.regular,
    fontSize: 12,
  },
  tagsTitle: {
    ...Typography.semibold,
    fontSize: 16,
    marginTop: 10,
  },
  tagsList: {
    ...Typography.regular,
    fontSize: 12,
    marginBottom: 10,
  },
});

export default Recipe;
