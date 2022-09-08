import ScreenTitle from '../../components/ScreenTitle';
import TextArea from '../../components/TextArea';
import DetailInputBlock from '../../components/DetailInputBlock';
import SingleLineInput from '../../components/SingleLineInput';
import NextStep from '../../components/NextStep';
import ScreenContainer from '../../components/ScreenContainer';
import { useSelector, useDispatch } from 'react-redux';
import {
  setDescription,
  setName,
  setCookTime,
  setPrepTime,
  setSource,
} from '../../slices/NewRecipeSlice';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const StepOne = () => {
  const [validated, setValidated] = useState(true);
  const isMounted = useRef(false);
  const { name, description, prepTime, cookTime, source } = useSelector(
    (state) => state.newRecipe
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isMounted.current) {
      if (name === '') {
        setValidated(false);
      } else {
        setValidated(true);
      }
    } else {
      isMounted.current = true;
    }
  }, [name]);

  const validate = () => {
    if (name === '') {
      setValidated(false);
      return false;
    } else {
      setValidated(true);
      return true;
    }
  };

  return (
    <ScreenContainer>
      <ScreenTitle text="Name your recipe and write something about it." />

      <SingleLineInput
        size={26}
        placeholder="Enter recipe name..."
        value={name}
        onChange={(val) => dispatch(setName(val))}
        validated={validated}
      />

      <TextArea
        label="Description:"
        placeholder="Write description..."
        numberOfLines={8}
        value={description}
        onChange={(val) => dispatch(setDescription(val))}
      />

      <DetailInputBlock
        label="Preparation time: "
        placeholder="15 min"
        value={prepTime}
        onChange={(val) => dispatch(setPrepTime(val))}
      />
      <DetailInputBlock
        label="Cooking time: "
        placeholder="30 min"
        value={cookTime}
        onChange={(val) => dispatch(setCookTime(val))}
      />

      <SingleLineInput
        size={12}
        placeholder="Enter source..."
        label={{ text: 'Source:', size: 16 }}
        value={source}
        onChange={(val) => dispatch(setSource(val))}
      />

      <NextStep target="StepTwo" validate={() => validate()} />
    </ScreenContainer>
  );
};

export default StepOne;
