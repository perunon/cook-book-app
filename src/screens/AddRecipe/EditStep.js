import React, { useState } from 'react';
import { View } from 'react-native';
import Button from '../../components/Button';
import ScreenContainer from '../../components/ScreenContainer';
import TextArea from '../../components/TextArea';
import TitleImage from '../../components/TitleImage';
import { useDispatch, useSelector } from 'react-redux';
import { editStep } from '../../slices/StepThreeSlice';

const EditStep = ({ route, navigation }) => {
  const index = route.params.index;
  const { imgUri, content, notes } = useSelector(
    (state) => state.stepThree.steps[index]
  );
  const dispatch = useDispatch();

  const [editedStep, setEditedStep] = useState({
    imgUri: imgUri,
    content: content,
    notes: notes,
  });

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <TitleImage
        source={editedStep.imgUri}
        onImageChange={(val) => setEditedStep({ ...editedStep, imgUri: val })}
      />
      <ScreenContainer>
        <TextArea
          label="New Step"
          placeholder="Instructions..."
          value={editedStep.content}
          onChange={(val) => setEditedStep({ ...editedStep, content: val })}
          numberOfLines={8}
        />
        <TextArea
          label="Notes"
          placeholder="Add notes..."
          numberOfLines={6}
          value={editedStep.notes}
          onChange={(val) => setEditedStep({ ...editedStep, notes: val })}
        />
        <Button
          title="SAVE"
          onClick={() => {
            dispatch(editStep({ editedStep, index }));
            navigation.goBack();
          }}
        />
      </ScreenContainer>
    </View>
  );
};

export default EditStep;
