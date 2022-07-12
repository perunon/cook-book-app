import NextStep from '../../components/NextStep';
import ScreenContainer from '../../components/ScreenContainer';
import ScreenTitle from '../../components/ScreenTitle';
import SingleLineInput from '../../components/SingleLineInput';
import TagsGrid from '../../components/TagsGrid';

const StepFour = () => {
  return (
    <ScreenContainer>
      <ScreenTitle text="Next, you can add some tags for this recipe to find it easily later." />
      <SingleLineInput placeholder="Search for tags..." size={30} />
      <TagsGrid />
      <NextStep target="StepFive" />
    </ScreenContainer>
  );
};

export default StepFour;
