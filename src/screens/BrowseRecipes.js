import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import BrowseRecipesTagsList from '../components/BrowseRecipesTagList';
import RecipesList from '../components/RecipesList';
import ScreenContainer from '../components/ScreenContainer';
import SingleLineInput from '../components/SingleLineInput';
import SortList from '../components/SortList';
import Tabs from '../components/Tabs';
import { Typography } from '../styles';

const BrowseRecipes = () => {
  const [areTagsShown, setAreTagsShown] = useState(false);
  const [isSortClicked, setIsSortClicked] = useState(false);
  const [input, setInput] = useState('');
  const { tags } = useSelector((state) => state.tags);
  const [activeTags, setActiveTags] = useState([]);

  const toggleTags = () => {
    setIsSortClicked(false);
    setAreTagsShown(!areTagsShown);
  };

  const toggleSort = () => {
    setAreTagsShown(false);
    setIsSortClicked(!isSortClicked);
  };

  const filterList = (tagName) => {
    if (!activeTags.includes(tagName)) {
      setActiveTags([...activeTags, tagName]);
    } else {
      setActiveTags(
        activeTags.filter((item) => {
          return item !== tagName;
        })
      );
    }
  };

  return (
    <>
      <ScreenContainer>
        <View style={{ marginTop: 30, marginBottom: 10 }}>
          <SingleLineInput
            size={26}
            placeholder="Search for a recipe..."
            value={input}
            onChange={(val) => {
              setInput(val);
            }}
          />
          <View style={styles.inline}>
            <TouchableOpacity
              style={styles.option}
              onPress={() => toggleTags()}
            >
              <Text style={styles.optionText}>Select tags</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.option}
              onPress={() => toggleSort()}
            >
              <Text style={styles.optionText}>Sort by: Recently</Text>
            </TouchableOpacity>
          </View>
          {areTagsShown && (
            <View style={styles.tagList}>
              <BrowseRecipesTagsList
                tags={tags}
                selectedTags={activeTags}
                onTagSelect={(tagName) => filterList(tagName)}
              />
            </View>
          )}
          {isSortClicked && (
            <View style={styles.tagList}>
              <SortList />
            </View>
          )}
        </View>
        <ScrollView>
          <RecipesList selectedTags={activeTags} inputValue={input} />
        </ScrollView>
      </ScreenContainer>
      <Tabs />
    </>
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
    flex: 1,
  },
  optionText: {
    ...Typography.regular,
    fontSize: 12,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  tagList: {
    height: '100%',
  },
});

export default BrowseRecipes;
