import React from 'react';
import NextStep from '../../components/NextStep';
import ScreenContainer from '../../components/ScreenContainer';
import ScreenTitle from '../../components/ScreenTitle';
import ScrollableList from '../../components/ScrollableList';

const StepThree = () => {
  return (
    <ScreenContainer>
      <ScreenTitle text="Let's add some steps to help you with cooking in the future" />
      <ScrollableList type="steps" />
      <NextStep />
    </ScreenContainer>
  );
};

export default StepThree;
