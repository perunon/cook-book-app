import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import NextStep from '../components/NextStep';
import ScreenContainer from '../components/ScreenContainer';
import ScreenTitle from '../components/ScreenTitle';
import TitleImage from '../components/TitleImage';
import { Typography } from '../styles';

const RecipeStep = ({ route, navigation }) => {
  const { imgUri, content, notes } = route.params.step;
  const isLast = route.params.isLast;
  const index = route.params.index;

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {imgUri != '' && <TitleImage source={imgUri} />}
      <ScreenContainer>
        <ScreenTitle text={content} />
        <View style={styles.bottom}>
          <Text style={styles.notesTitle}>Notes:</Text>
          <Text style={styles.notes}>{notes}</Text>
          {isLast ? (
            <Button
              title="FINISH COOKING"
              onClick={() =>
                navigation.reset({ index: 0, routes: [{ name: 'Recipe' }] })
              }
            />
          ) : (
            <NextStep target={`${index + 1}`} />
          )}
        </View>
      </ScreenContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  bottom: {
    marginTop: 'auto',
  },
  notesTitle: {
    ...Typography.semibold,
    fontSize: 14,
  },
  notes: {
    ...Typography.regular,
    fontSize: 12,
    marginBottom: 30,
  },
});

export default RecipeStep;
