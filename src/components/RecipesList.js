import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import RecipesListItem from './RecipesListItem';

const RecipesList = ({ selectedTags, inputValue }) => {
  let recipes = useSelector((state) => state.recipes.recipes).map(
    (item, index) => {
      return { ...item, id: index };
    }
  );

  if (selectedTags.length !== 0) {
    recipes = recipes.filter((item) =>
      selectedTags.every((tag) => item.tags.includes(tag))
    );
  }

  if (inputValue !== '') {
    recipes = recipes.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  }

  return (
    <View style={styles.recipesList}>
      {recipes.map((item, i) => (
        <RecipesListItem data={item} key={i} index={item.id} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  recipesList: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 20,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default RecipesList;
