import { StyleSheet, ScrollView, Text } from 'react-native';
import { Colors, Typography } from '../styles';
import Button from './Button';
import IngredientsListItem from './IngredientsListItem';

const IngredientsList = ({
  data,
  onChange,
  onIngredientDelete,
  onAddIngredient,
}) => {
  return (
    <>
      <Text style={styles.listTitle}>Ingredients:</Text>
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
      <Button title="ADD" onClick={onAddIngredient} />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginBottom: 10,
  },
  listTitle: {
    ...Typography.semibold,
    fontSize: 16,
    color: Colors.pepper,
  },
});

export default IngredientsList;
