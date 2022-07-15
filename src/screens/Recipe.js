import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import Button from '../components/Button';
import ScreenContainer from '../components/ScreenContainer';
import TitleImage from '../components/TitleImage';
import { Colors, Typography } from '../styles';

const Recipe = ({ route, navigation }) => {
  const recipe = route.params.data;
  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [activeQuantity, setActiveQuantity] = useState(1);

  const renderTags = () => {
    let tagList = '';
    recipe.tags.map((tag) => (tagList += `#${tag} `));
    return <Text>{tagList}</Text>;
  };

  const changeQuantity = (multiplier) => {
    const newIngredients = recipe.ingredients.map((item) => {
      return {
        name: item.name,
        quantity: `${
          parseInt(item.quantity.split(' ')[0]) * multiplier
        } ${item.quantity.substring(item.quantity.indexOf(' ') + 1)}`,
      };
    });
    setIngredients(newIngredients);
    setActiveQuantity(multiplier);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <TitleImage source={recipe.pictures[0]} />
      <ScreenContainer>
        <Text style={styles.title}>{recipe.name}</Text>
        <Text style={styles.details}>
          {recipe.prepTime} | {recipe.cookTime}
        </Text>

        <View style={styles.nextSection}>
          <Text style={styles.ingredients}>
            Ingredients for {recipe.recipeFor}
          </Text>

          <View style={styles.quantity}>
            <TouchableOpacity
              style={[
                styles.quantityButton,
                activeQuantity === 1 && styles.active,
              ]}
              onPress={() => changeQuantity(1)}
            >
              <Text style={styles.quantityButtonText}>1x</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.quantityButton,
                activeQuantity === 2 && styles.active,
              ]}
              onPress={() => changeQuantity(2)}
            >
              <Text style={styles.quantityButtonText}>2x</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.quantityButton,
                styles.last,
                activeQuantity === 3 && styles.active,
              ]}
              onPress={() => changeQuantity(3)}
            >
              <Text style={styles.quantityButtonText}>3x</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          {ingredients.map((item, i) => (
            <Text key={i} style={styles.ingredientsItem}>
              {item.name}: {item.quantity}
            </Text>
          ))}
        </ScrollView>
        <Button title="GO TO RECIPE" onClick={() => navigation.push('0')} />
        <Text style={styles.tagsTitle}>Tags:</Text>
        <Text style={styles.tagsList}>{renderTags()}</Text>
        {route.params.preview && (
          <Button
            title="RETURN TO SUMMARY"
            style={{ backgroundColor: Colors.garlic }}
            onClick={() => navigation.goBack()}
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
    textAlignVertical: 'center',
  },
  quantityButtonText: {
    textAlign: 'center',
    fontSize: 20,
    ...Typography.regular,
  },
  last: {
    borderRightWidth: 0,
  },
  active: {
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
