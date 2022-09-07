import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getSortStatus } from '../slices/SortingSlice';
import RecipesListItem from './RecipesListItem';

const RecipesList = ({ selectedTags, inputValue }) => {
  const sortOptions = useSelector((state) => state.sorting);
  let activeOption = '';

  Object.keys(sortOptions).forEach((key) => {
    if (sortOptions[key].isActive) {
      activeOption = sortOptions[key];
    }
  });

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
    if (activeOption.isAsc) {
      recipes = recipes.sort((a, b) => {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    } else {
      recipes = recipes.sort((a, b) => {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();

        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      });
    }
  } else if (activeOption.name === 'By Creation Date') {
    if (activeOption.isAsc) {
      recipes = recipes.sort((a, b) => {
        let dateA = a.createdAt.getTime();
        let dateB = b.createdAt.getTime();

        return dateA - dateB;
      });
    } else {
      recipes = recipes.sort((a, b) => {
        let dateA = a.createdAt.getTime();
        let dateB = b.createdAt.getTime();

        return dateB - dateA;
      });
    }
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
