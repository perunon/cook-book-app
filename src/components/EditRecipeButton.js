import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Typography } from '../styles';
import { useNavigation } from '@react-navigation/native';

const EditRecipeButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => navigation.push('EditRecipe')}
    >
      <Text style={styles.text}>Edit Recipe</Text>
      <FontAwesomeIcon icon={faPencil} size={16} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    ...Typography.boldItalic,
    marginRight: 5,
  },
});

export default EditRecipeButton;
