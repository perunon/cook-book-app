import React from 'react';
import { StyleSheet, Text } from 'react-native';
import ImagesGrid from '../../components/ImagesGrid';
import NextStep from '../../components/NextStep';
import ScreenContainer from '../../components/ScreenContainer';
import ScreenTitle from '../../components/ScreenTitle';
import { Colors, Typography } from '../../styles';

const StepFifth = () => {
  return (
    <ScreenContainer>
      <ScreenTitle text="You're almost there! Let's add some pictures of your dish and we are ready to serve!" />
      <ImagesGrid />
      <Text style={styles.bottomText}>
        Congratulations! Your recipe is ready to save. Check the{' '}
        <Text style={styles.greenBottomText}>preview</Text> if you want.
      </Text>
      <NextStep />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  previewText: {
    color: Colors.olive,
    ...Typography.boldItalic,
  },
  bottomText: {
    ...Typography.bold,
    fontSize: 22,
    marginBottom: 30,
  },
  greenBottomText: {
    ...Typography.boldItalic,
    color: Colors.olive,
  },
});

export default StepFifth;
