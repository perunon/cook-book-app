import { ScrollView, StyleSheet, Text, View } from 'react-native';
import RecipesList from '../components/RecipesList';
import ScreenContainer from '../components/ScreenContainer';
import SingleLineInput from '../components/SingleLineInput';
import TagsGrid from '../components/TagsGrid';
import { Typography } from '../styles';

const BrowseRecipes = () => {
  return (
    <ScreenContainer>
      {/* <View>
        <SingleLineInput size={26} placeholder="Search for a recipe..." />
        <View style={styles.inline}>
          <Text style={styles.option}>Select tags</Text>
          <Text style={styles.option}>Sort by: Recently</Text>
        </View>
        <TagsGrid />
      </View> */}
      <ScrollView style={{ marginTop: 30 }}>
        <RecipesList />
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  inline: {
    marginTop: -20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  option: {
    paddingVertical: 3,
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 1,
    ...Typography.regular,
    fontSize: 12,
  },
});

export default BrowseRecipes;
