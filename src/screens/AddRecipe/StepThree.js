import NextStep from '../../components/NextStep';
import ScreenContainer from '../../components/ScreenContainer';
import ScreenTitle from '../../components/ScreenTitle';
import StepsList from '../../components/StepsList';
import { useSelector, useDispatch } from 'react-redux';
import { addStep, deleteStep, editStep } from '../../slices/NewRecipeSlice';
import { useEffect } from 'react';

const StepThree = ({ route }) => {
  const steps = useSelector((state) => state.newRecipe.steps);
  const dispatch = useDispatch();

  useEffect(() => {
    if (route.params !== undefined) {
      if (route.params.hasOwnProperty('newStep')) {
        dispatch(addStep(route.params.newStep));
      }
      if (route.params.hasOwnProperty('editedStep')) {
        dispatch(editStep(route.params.editedStep));
      }
    }
  }, [route.params]);

  const validate = () => {
    return steps.length != 0;
  };

  return (
    <ScreenContainer>
      <ScreenTitle text="Let's add some steps to help you with cooking in the future" />
      <StepsList
        data={steps}
        onStepDelete={(index) => dispatch(deleteStep(index))}
        screen={route.name}
      />
      <NextStep target="StepFour" validate={() => validate()} />
    </ScreenContainer>
  );
};

export default StepThree;
