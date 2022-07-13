import React, { useState } from 'react';
import { View } from 'react-native';
import Button from '../../components/Button';
import ScreenContainer from '../../components/ScreenContainer';
import TextArea from '../../components/TextArea';
import TitleImage from '../../components/TitleImage';
import { useDispatch } from 'react-redux';
import { addStep } from '../../slices/StepThreeSlice';

const AddNewStep = ({ navigation }) => {
  const dispatch = useDispatch();
  const [newStep, setNewStep] = useState({
    imgUri: '',
    content: '',
    notes: '',
  });
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <TitleImage
        source={newStep.imgUri}
        onImageChange={(val) => setNewStep({ ...newStep, imgUri: val })}
      />
      <ScreenContainer>
        <TextArea
          label="New Step"
          placeholder="Instructions..."
          value={newStep.content}
          onChange={(val) => setNewStep({ ...newStep, content: val })}
          numberOfLines={8}
        />
        <TextArea
          label="Notes"
          placeholder="Add notes..."
          numberOfLines={6}
          value={newStep.notes}
          onChange={(val) => setNewStep({ ...newStep, notes: val })}
        />
        <Button
          title="SAVE"
          onClick={() => {
            dispatch(addStep(newStep));
            navigation.goBack();
          }}
        />
      </ScreenContainer>
    </View>
  );
};

export default AddNewStep;
