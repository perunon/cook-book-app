import React from 'react';
import { View } from 'react-native';
import Button from '../../components/Button';
import ScreenContainer from '../../components/ScreenContainer';
import TextArea from '../../components/TextArea';
import TitleImage from '../../components/TitleImage';
import { useNavigation } from '@react-navigation/native';

const AddNewStep = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <TitleImage />
      <ScreenContainer>
        <TextArea
          label="New Step"
          placeholder="Instructions..."
          numberOfLines={8}
        />
        <TextArea label="Notes" placeholder="Add notes..." numberOfLines={6} />
        <Button title="SAVE" onClick={() => navigation.goBack()} />
      </ScreenContainer>
    </View>
  );
};

export default AddNewStep;
