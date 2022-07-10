import React from 'react';
import { StyleSheet } from 'react-native';
import DetailInputBlock from '../../components/DetailInputBlock';
import ScrollableList from '../../components/ScrollableList';
import NextStep from '../../components/NextStep';
import ScreenContainer from '../../components/ScreenContainer';
import ScreenTitle from '../../components/ScreenTitle';

import { Colors } from '../../styles';

const StepTwo = () => {
  return (
    <ScreenContainer>
      <ScreenTitle text="Fill required information and list ingredients for your recipe." />
      <DetailInputBlock
        label="This is a recipe for:"
        placeholder="400g / 2 people"
      />
      <ScrollableList />
      <NextStep />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.olive,
  },
});

export default StepTwo;
