import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import ImagesGrid from '../components/ImagesGrid';
import ScreenContainer from '../components/ScreenContainer';
import ScrollableList from '../components/ScrollableList';
import SingleLineInput from '../components/SingleLineInput';
import TagsGrid from '../components/TagsGrid';
import TextArea from '../components/TextArea';
import { Colors } from '../styles';

const EditRecipe = () => {
  return (
    <ScreenContainer>
      <View style={styles.inline}>
        <SingleLineInput size={16} placeholder="Zupa krem szpinakowa" />
        <Button title="SAVE" style={styles.button} />
      </View>
      <ScrollView>
        <TextArea numberOfLines={8} label="Description:" />
        <ScrollableList type="ingredients" />
        <Text>Steps:</Text>
        <ScrollableList type="steps" />
        <Text>Pictures:</Text>
        <ImagesGrid />
        <Text>Tags:</Text>
        <TagsGrid />
        <Button
          title="DELETE RECIPE"
          style={{ backgroundColor: Colors.paprika }}
        />
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  inline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 100,
  },
});

export default EditRecipe;
