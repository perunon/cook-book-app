import NextStep from '../../components/NextStep';
import ScreenContainer from '../../components/ScreenContainer';
import ScreenTitle from '../../components/ScreenTitle';
import StepsList from '../../components/StepsList';
import { useSelector, useDispatch } from 'react-redux';
import { deleteStep, addStep } from '../../slices/StepThreeSlice';
import Button from '../../components/Button';

const StepThree = ({ navigation }) => {
  const steps = useSelector((state) => state.stepThree.steps);
  const dispatch = useDispatch();

  return (
    <ScreenContainer>
      <ScreenTitle text="Let's add some steps to help you with cooking in the future" />
      <StepsList
        data={steps}
        onStepEdit={(index) => dispatch(editStep(index))}
        onStepDelete={(index) => dispatch(deleteStep(index))}
      />
      <Button title="ADD STEP" onClick={() => navigation.push('AddNewStep')} />
      <NextStep target="StepFour" />
    </ScreenContainer>
  );
};

export default StepThree;
