import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import FitImage from 'react-native-fit-image';
import { Typography } from '../styles';

const RecipesListItem = ({ data }) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate('Recipe', { preview: false, recipe: data })
      }
    >
      <View style={styles.listItem}>
        <FitImage source={{ uri: data.pictures[0] }} style={styles.image} />
        <LinearGradient
          colors={['black', 'transparent']}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.5, y: 0.0 }}
          style={{
            position: 'absolute',
            width: '100%',
            height: 0,
            paddingBottom: '110%',
          }}
        />
        <Text style={styles.itemText}>{data.name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    width: '48%',
    height: 0,
    paddingBottom: '48%',
    overflow: 'hidden',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 150,
  },
  itemText: {
    position: 'absolute',
    bottom: 0,
    left: 2,
    color: 'white',
    ...Typography.bold,
    fontSize: 12,
  },
});

export default RecipesListItem;
