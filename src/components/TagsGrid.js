import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Colors, Typography } from '../styles';
import TagItem from './TagItem';
import { useSelector } from 'react-redux';

const TagsGrid = ({ data, onTagSelect, onLongPress }) => {
  const tags = useSelector((state) => state.stepFour.tags);

  return (
    <View style={styles.container}>
      {data.map((item, i) => (
        <TagItem
          key={i}
          data={item}
          index={i}
          toggleSelected={onTagSelect}
          deleteItem={onLongPress}
          active={tags.includes(item)}
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

export default TagsGrid;
