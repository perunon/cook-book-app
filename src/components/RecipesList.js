import { StyleSheet, View } from 'react-native';
import RecipesListItem from './RecipesListItem';

const recipes = [
  {
    id: '1',
    name: 'Zupa krem szpinakowa',
    img: require('../../assets/zupa_szpinakowa.jpg'),
  },
  {
    id: '2',
    name: 'Zupa krem szpinakowa',
    img: require('../../assets/zupa_szpinakowa.jpg'),
  },
  {
    id: '3',
    name: 'Zupa krem szpinakowa',
    img: require('../../assets/zupa_szpinakowa.jpg'),
  },
  {
    id: '4',
    name: 'Zupa krem szpinakowa',
    img: require('../../assets/zupa_szpinakowa.jpg'),
  },
  {
    id: '5',
    name: 'Zupa krem szpinakowa',
    img: require('../../assets/zupa_szpinakowa.jpg'),
  },
  {
    id: '6',
    name: 'Zupa krem szpinakowa',
    img: require('../../assets/zupa_szpinakowa.jpg'),
  },
  {
    id: '7',
    name: 'Zupa krem szpinakowa',
    img: require('../../assets/zupa_szpinakowa.jpg'),
  },
  {
    id: '8',
    name: 'Zupa krem szpinakowa',
    img: require('../../assets/zupa_szpinakowa.jpg'),
  },
  {
    id: '9',
    name: 'Zupa krem szpinakowa',
    img: require('../../assets/zupa_szpinakowa.jpg'),
  },
  {
    id: '10',
    name: 'Zupa krem szpinakowa',
    img: require('../../assets/zupa_szpinakowa.jpg'),
  },
];

const RecipesList = () => {
  return (
    <View style={styles.recipesList}>
      {recipes.map((item) => (
        <RecipesListItem data={item} key={item.id} />
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
