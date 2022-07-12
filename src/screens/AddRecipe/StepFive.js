import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Button from '../../components/Button';
import ImagesGrid from '../../components/ImagesGrid';
import ScreenContainer from '../../components/ScreenContainer';
import ScreenTitle from '../../components/ScreenTitle';
import { Colors, Typography } from '../../styles';

const StepFive = () => {
  const navigation = useNavigation();
  return (
    <ScreenContainer>
      <ScreenTitle text="You're almost there! Let's add some pictures of your dish and we are ready to serve!" />
      <ImagesGrid />
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
