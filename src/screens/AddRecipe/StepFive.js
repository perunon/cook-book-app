import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { setPicture } from '../../slices/StepFiveSlice';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import ImagesGrid from '../../components/ImagesGrid';
import ScreenContainer from '../../components/ScreenContainer';
import ScreenTitle from '../../components/ScreenTitle';
import { Colors, Typography } from '../../styles';

const StepFive = ({ navigation }) => {
  const pictures = useSelector((state) => state.stepFive.pictures);

  return (
    <ScreenContainer>
      <ScreenTitle text="You're almost there! Let's add some pictures of your dish and we are ready to serve!" />
      <ImagesGrid data={pictures} onImageChange={(val) => setImage(val)} />
      <Text style={styles.bottomText}>
        Congratulations! Your recipe is ready to save. Check the{' '}
        <Text
          style={styles.greenBottomText}
          onPress={() => navigation.push('Recipe', { preview: true })}
        >
          preview{' '}
        </Text>
        if you want.
      </Text>
      <Button
        title="FINISH"
        onClick={() => navigation.navigate('BrowseRecipes')}
      />
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

export default StepFive;
