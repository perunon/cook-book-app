import React from 'react';
import { StyleSheet, View } from 'react-native';
import TagItem from './TagItem';
import { useSelector } from 'react-redux';

const TagsGrid = ({ data, onTagSelect, onLongPress = () => {} }) => {
  const tags = useSelector((state) => state.newRecipe.tags);

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
