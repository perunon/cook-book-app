import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../../components/Button';
import ScreenContainer from '../../components/ScreenContainer';
import TextArea from '../../components/TextArea';
import { Colors } from '../../styles';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import FitImage from 'react-native-fit-image';
import TitleImage from '../../components/TitleImage';

const image = require('../../../assets/zupa_szpinakowa.jpg');

const AddNewStep = () => {
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
        <Button title="SAVE" />
      </ScreenContainer>
    </View>
  );
};

export default AddNewStep;
