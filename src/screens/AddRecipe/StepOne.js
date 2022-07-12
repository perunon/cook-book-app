import ScreenTitle from '../../components/ScreenTitle';
import TextArea from '../../components/TextArea';
import DetailInputBlock from '../../components/DetailInputBlock';
import SingleLineInput from '../../components/SingleLineInput';
import NextStep from '../../components/NextStep';
import ScreenContainer from '../../components/ScreenContainer';

const StepOne = () => {
  return (
    <ScreenContainer>
      <ScreenTitle text="Name your recipe and write something about it." />

      <SingleLineInput size={26} placeholder="Enter recipe name..." />

      <TextArea
        label="Description:"
        placeholder="Write description..."
        numberOfLines={8}
      />

      <DetailInputBlock label="Preparation time: " placeholder="15 min" />
      <DetailInputBlock label="Cooking time: " placeholder="30 min" />

      <SingleLineInput
        size={12}
        placeholder="Enter source..."
        label={{ text: 'Source:', size: 16 }}
      />

      <NextStep target="StepTwo" />
    </ScreenContainer>
  );
};

export default StepOne;
