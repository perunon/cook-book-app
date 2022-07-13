import { StyleSheet, ScrollView } from 'react-native';
import IngredientsListItem from './IngredientsListItem';

const IngredientsList = ({ data, onChange, onIngredientDelete }) => {
  return (
    <ScrollView style={styles.wrapper}>
      {data.map((item, index) => (
        <IngredientsListItem
          data={item}
          key={index}
          onChange={onChange}
          index={index}
          onXPress={onIngredientDelete}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginBottom: 10,
  },
});

export default IngredientsList;
