import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import ImagesGrid from '../components/ImagesGrid';
import IngredientsList from '../components/IngredientsList';
import ScreenContainer from '../components/ScreenContainer';
import ScrollableList from '../components/ScrollableList';
import SingleLineInput from '../components/SingleLineInput';
import StepsList from '../components/StepsList';
import TagsGrid from '../components/TagsGrid';
import TextArea from '../components/TextArea';
import { Colors } from '../styles';

const EditRecipe = ({ route }) => {
  const { data, index } = route.params;
  const [recipe, setRecipe] = useState(data);

  const updateRecipe = (val) => {
    const updatedValue = { ...recipe, ...val };
    setRecipe(updatedValue);
  };
  return (
    <ScreenContainer>
      <View>
        <View style={styles.inline}>
          <SingleLineInput
            size={16}
            value={recipe.name}
            onChange={(val) => updateRecipe({ name: val })}
          />
          <Button title="SAVE" style={styles.button} />
        </View>
        <ScrollView>
          <TextArea
            numberOfLines={8}
            label="Description:"
            value={recipe.description}
            onChange={(val) => updateRecipe({ description: val })}
          />

          <IngredientsList
            data={recipe.ingredients}
            onChange={(index, type, val) => {
              const update = recipe.ingredients;
              switch (type) {
                case 'name':
                  update[index].name = val;
                  break;
                case 'quantity':
                  update[index].quantity = val;
                  break;
                default:
                  break;
              }
              updateRecipe({ ingredients: update });
            }}
            onIngredientDelete={(index) =>
              updateRecipe({
                ingredients: recipe.ingredients.filter((item, i) => i != index),
              })
            }
          />
          <Button
            title="ADD"
            onClick={() =>
              updateRecipe({
                ingredients: [
                  ...recipe.ingredients,
                  { name: '', quantity: '' },
                ],
              })
            }
          />
          <Text>Steps:</Text>
          <StepsList data={recipe.steps} />
          <Text>Pictures:</Text>
          <ImagesGrid data={recipe.pictures} />
          <Text>Tags:</Text>
          <TagsGrid data={recipe.tags} />
          <Button
            title="DELETE RECIPE"
            style={{ backgroundColor: Colors.paprika }}
          />
        </ScrollView>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  inline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  button: {
    width: 100,
  },
});

export default EditRecipe;
