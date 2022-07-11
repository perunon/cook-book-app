import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Colors, Typography } from '../styles';
import TagItem from './TagItem';

const tags = [
  {
    id: '1',
    name: 'Soup',
  },
  {
    id: '2',
    name: 'For Family',
  },
  {
    id: '3',
    name: 'Vegetarian',
  },
  {
    id: '4',
    name: 'Spinach',
  },
];

const TagsGrid = () => {
  return (
    <View style={styles.container}>
      {tags.map((item) => (
        <TagItem data={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default TagsGrid;
