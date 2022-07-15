import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Button from '../components/Button';
import ImagesGrid from '../components/ImagesGrid';
import IngredientsList from '../components/IngredientsList';
import ScreenContainer from '../components/ScreenContainer';
import SingleLineInput from '../components/SingleLineInput';
import StepsList from '../components/StepsList';
import TagsGrid from '../components/TagsGrid';
import TextArea from '../components/TextArea';
import { deleteRecipe, updateRecipeData } from '../slices/RecipesSlice';
import { Colors } from '../styles';

const EditRecipe = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { newStep, data, index, editedStep, newImages } = route.params;
  const [recipe, setRecipe] = useState(data);

  useEffect(() => {
    if (typeof newStep !== 'undefined') {
      updateRecipe({ steps: [...recipe.steps, newStep] });
    }
    if (typeof editedStep !== 'undefined') {
      const { data, index } = editedStep;
      let update = recipe.steps.map((item, i) => {
        if (i != index) return item;
        return data;
      });
      updateRecipe({ steps: update });
    }
    if (typeof newImages !== 'undefined') {
      updateRecipe({ pictures: newImages });
    }
  }, [newStep, editedStep, newImages]);

  const updateRecipe = (val) => {
    const updatedValue = { ...recipe, ...val };
    setRecipe(updatedValue);
  };

  return (
    <ScreenContainer>
      <View style={styles.inline}>
        <SingleLineInput
          size={16}
          value={recipe.name}
          onChange={(val) => updateRecipe({ name: val })}
        />
        <Button
          title="SAVE"
          style={styles.button}
          onClick={() => {
            dispatch(updateRecipeData({ index: index, updatedRecipe: recipe }));
            navigation.reset({
              index: 0,
              routes: [
                { name: 'BrowseRecipes' },
                { name: 'RecipeStack', params: { index: index } },
              ],
            });
          }}
        />
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
            let update = recipe.ingredients.map((item, i) => {
              if (i !== index) return item;
              switch (type) {
                case 'name':
                  return { ...item, name: val };
                case 'quantity':
                  return { ...item, quantity: val };
                default:
                  return item;
              }
            });
            updateRecipe({ ingredients: update });
          }}
          onIngredientDelete={(index) =>
            updateRecipe({
              ingredients: recipe.ingredients.filter((item, i) => i != index),
            })
          }
          onAddIngredient={() =>
            updateRecipe({
              ingredients: [
                ...recipe.ingredients,
                {
                  name: '',
                  quantity: '',
                },
              ],
            })
          }
        />
        <Text>Steps:</Text>
        <StepsList
          data={recipe.steps}
          onStepDelete={(index) =>
            updateRecipe({
              steps: recipe.steps.filter((item, i) => i != index),
            })
          }
          screen={route.name}
        />
        <Text>Pictures:</Text>
        <ImagesGrid data={recipe.pictures} screen={route.name} />
        <Text>Tags:</Text>
        <TagsGrid
          data={recipe.tags}
          onTagSelect={(data) => {
            let update = [...recipe.tags];
            console.log(recipe.tags.includes(data));
            if (recipe.tags.includes(data)) {
              update = update.filter((tag) => {
                console.log(tag !== data);
                return tag !== data;
              });
            } else {
              update.push(data);
            }
            updateRecipe({
              tags: update,
            });
          }}
        />
        <Button
          title="DELETE RECIPE"
          style={{ backgroundColor: Colors.paprika }}
          onClick={() => {
            dispatch(deleteRecipe(index));
            navigation.navigate('BrowseRecipes');
          }}
        />
      </ScrollView>
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
