import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFolderOpen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors } from '../styles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { resetRecipe } from '../slices/NewRecipeSlice';

const Tabs = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('BrowseRecipes')}
      >
        <FontAwesomeIcon icon={faFolderOpen} />
        <Text>Browse Recipes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          dispatch(resetRecipe());
          navigation.push('StepOne');
        }}
      >
        <FontAwesomeIcon icon={faPlus} />
        <Text>Add new recipe</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    borderTopWidth: 2,
    backgroundColor: Colors.salt,
    borderTopColor: Colors.olive,
  },
  menuItem: {
    alignItems: 'center',
  },
});

export default Tabs;
