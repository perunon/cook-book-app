import DetailInputBlock from '../../components/DetailInputBlock';
import NextStep from '../../components/NextStep';
import ScreenContainer from '../../components/ScreenContainer';
import ScreenTitle from '../../components/ScreenTitle';
import { useDispatch, useSelector } from 'react-redux';
import {
  setRecipeFor,
  addIngredient,
  removeEmptyIngredients,
  updateIngredient,
} from '../../slices/StepTwoSlice';
import IngredientsList from '../../components/IngredientsList';
import Button from '../../components/Button';
import { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Colors, Typography } from '../../styles';

const StepTwo = ({ navigation }) => {
  const { recipeFor, ingredients } = useSelector((state) => state.stepTwo);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      dispatch(removeEmptyIngredients());
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <ScreenContainer>
      <ScreenTitle text="Fill required information and list ingredients for your recipe." />
      <DetailInputBlock
        label="This is a recipe for:"
        placeholder="400g / 2 people"
        value={recipeFor}
        onChange={(val) => dispatch(setRecipeFor(val))}
      />
      <Text style={styles.listTitle}>Ingredients:</Text>
      <IngredientsList
        data={ingredients}
        onChange={(index, field, val) =>
          dispatch(updateIngredient({ index, field, val }))
        }
      />
      <Button title="ADD" onClick={() => dispatch(addIngredient())} />
      <NextStep target="StepThree" />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  listTitle: {
    ...Typography.semibold,
    fontSize: 16,
    color: Colors.pepper,
  },
});

export default StepTwo;
