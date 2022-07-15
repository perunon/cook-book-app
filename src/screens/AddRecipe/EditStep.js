import React, { useState } from 'react';
import { View } from 'react-native';
import Button from '../../components/Button';
import ScreenContainer from '../../components/ScreenContainer';
import TextArea from '../../components/TextArea';
import TitleImage from '../../components/TitleImage';

const EditStep = ({ route, navigation }) => {
  const { data, index, prevScreen } = route.params;

  const [editedStep, setEditedStep] = useState(data);

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
            navigation.navigate(prevScreen, {
              editedStep: { data: editedStep, index: index },
            });
          }}
        />
      </ScreenContainer>
    </View>
  );
};

export default EditStep;
