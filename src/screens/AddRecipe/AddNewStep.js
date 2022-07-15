import React, { useState } from 'react';
import { View } from 'react-native';
import Button from '../../components/Button';
import ScreenContainer from '../../components/ScreenContainer';
import TextArea from '../../components/TextArea';
import TitleImage from '../../components/TitleImage';

const AddNewStep = ({ navigation, route }) => {
  const { prevScreen } = route.params;
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
            navigation.navigate(prevScreen, { newStep: newStep });
          }}
        />
      </ScreenContainer>
    </View>
  );
};

export default AddNewStep;
