import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import SortListItem from './SortListItem';

const SortList = () => {
  const sortOptions = useSelector((state) => state.sorting);

  return (
    <View style={styles.list}>
      {Object.keys(sortOptions).map((key) => {
        const { name, isActive, isAsc } = sortOptions[key];
        return (
          <SortListItem
            name={name}
            isActive={isActive}
            isAsc={isAsc}
            itemKey={key}
            key={key}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingVertical: 10,
  },
});

export default SortList;
