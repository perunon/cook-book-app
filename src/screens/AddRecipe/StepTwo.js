import DetailInputBlock from '../../components/DetailInputBlock';
import NextStep from '../../components/NextStep';
import ScreenContainer from '../../components/ScreenContainer';
import ScreenTitle from '../../components/ScreenTitle';
import { useDispatch, useSelector } from 'react-redux';
import {
  setRecipeFor,
  removeEmptyIngredients,
  updateIngredient,
  removeIngredient,
  addIngredient,
} from '../../slices/NewRecipeSlice';
import IngredientsList from '../../components/IngredientsList';
import { useEffect } from 'react';

const StepTwo = ({ navigation }) => {
  const { recipeFor, ingredients } = useSelector((state) => state.newRecipe);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      dispatch(removeEmptyIngredients());
    });

    return unsubscribe;
  }, [navigation]);

  const validate = () => {
    return ingredients.length != 0;
  };

  return (
    <ScreenContainer>
      <ScreenTitle text="Fill required information and list ingredients for your recipe." />
      <DetailInputBlock
        label="This is a recipe for:"
        placeholder="400g / 2 people"
        value={recipeFor}
        onChange={(val) => dispatch(setRecipeFor(val))}
      />

      <IngredientsList
        data={ingredients}
        onChange={(index, field, val) =>
          dispatch(updateIngredient({ index, field, val }))
        }
        onIngredientDelete={(index) => dispatch(removeIngredient(index))}
        onAddIngredient={() => dispatch(addIngredient())}
      />

      <NextStep target="StepThree" validate={() => validate()} />
    </ScreenContainer>
  );
};

export default StepTwo;
