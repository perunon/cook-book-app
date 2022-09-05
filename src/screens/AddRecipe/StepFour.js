import NextStep from '../../components/NextStep';
import ScreenContainer from '../../components/ScreenContainer';
import ScreenTitle from '../../components/ScreenTitle';
import SingleLineInput from '../../components/SingleLineInput';
import TagsGrid from '../../components/TagsGrid';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { addTag, deleteTag } from '../../slices/TagsSlice';
import { toggleSelectedTag } from '../../slices/NewRecipeSlice';

const StepFour = () => {
  const [value, setValue] = useState('');
  const tags = useSelector((state) => state.tags.tags);

  const dispatch = useDispatch();
  let showTags = tags;
  if (value != '') {
    showTags = tags.filter((tag) => {
      return tag.includes(value.toLowerCase());
    });
  }

  const onChange = (val) => {
    setValue(val);
  };

  return (
    <ScreenContainer>
      <ScreenTitle text="Next, you can add some tags for this recipe to find it easily later." />
      <SingleLineInput
        placeholder="Search for tags..."
        size={30}
        value={value}
        onChange={(val) => onChange(val)}
      />
      {showTags.length === 0 && value != '' && (
        <TouchableOpacity
          onPress={() => {
            dispatch(addTag(value));
            setValue('');
          }}
        >
          <Text>Add "{value}" tag</Text>
        </TouchableOpacity>
      )}
      <TagsGrid
        data={showTags}
        onTagSelect={(val) => dispatch(toggleSelectedTag(val))}
        onLongPress={(val) => dispatch(deleteTag(val))}
      />
      <NextStep target="StepFive" />
    </ScreenContainer>
  );
};

export default StepFour;
