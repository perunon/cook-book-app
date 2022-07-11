import React from 'react';
import NextStep from '../../components/NextStep';
import ScreenContainer from '../../components/ScreenContainer';
import ScreenTitle from '../../components/ScreenTitle';
import SingleLineInput from '../../components/SingleLineInput';
import TagsGrid from '../../components/TagsGrid';

const StepFourth = () => {
  return (
    <ScreenContainer>
      <ScreenTitle text="Next, you can add some tags for this recipe to it easily later." />
      <SingleLineInput placeholder="Search for tags..." size={30} />
      <TagsGrid />
      <NextStep />
    </ScreenContainer>
  );
};

export default StepFourth;
