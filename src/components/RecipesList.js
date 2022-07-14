import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import RecipesListItem from './RecipesListItem';

const RecipesList = () => {
  const { recipes } = useSelector((state) => state.recipes);
  console.log(recipes);

  return (
    <View style={styles.recipesList}>
      {recipes.map((item, i) => (
        <RecipesListItem data={item} key={i} />
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
