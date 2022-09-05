import React from 'react';
import { StyleSheet, View } from 'react-native';
import BrowseRecipesTagItem from './BrowseRecipesTagItem';

const BrowseRecipesTagsList = ({ tags, selectedTags, onTagSelect }) => {
  return (
    <View style={styles.container}>
      {tags.map((item, i) => (
        <BrowseRecipesTagItem
          key={i}
          data={item}
          index={i}
          toggleSelected={(item) => onTagSelect(item)}
          active={selectedTags.includes(item)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
});

export default BrowseRecipesTagsList;
