import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getSortStatus } from '../slices/SortingSlice';
import RecipesListItem from './RecipesListItem';

const RecipesList = ({ selectedTags, inputValue, activeOption }) => {
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

  if (activeOption.name === 'By Name') {
    recipes = recipes.sort((a, b) => {
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();

      if (activeOption.isAsc) {
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      } else {
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      }
    });
  } else if (activeOption.name === 'By Creation Date') {
    recipes = recipes.sort((a, b) => {
      let dateA = new Date(a.createdAt).getTime();
      let dateB = new Date(b.createdAt).getTime();

      return activeOption.isAsc ? dateA - dateB : dateB - dateA;
    });
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
