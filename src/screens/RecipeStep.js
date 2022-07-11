import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import ScreenContainer from '../components/ScreenContainer';
import ScreenTitle from '../components/ScreenTitle';
import TitleImage from '../components/TitleImage';
import { Typography } from '../styles';

const RecipeStep = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <TitleImage />
      <ScreenContainer>
        <ScreenTitle text="Zalać bulionem, zagotować, zmniejszyć ogień i gotować przez 15 minut na małym ogniu." />
        <View style={styles.bottom}>
          <Text style={styles.notesTitle}>Notes:</Text>
          <Text style={styles.notes}>
            Zagotować na "P". Zmniejszyć ogień na poziom 5.
          </Text>
          <Button title="FINISH COOKING" />
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
