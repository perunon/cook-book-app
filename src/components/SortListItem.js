import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { toggleSortingOption } from '../slices/SortingSlice';
import { Colors } from '../styles';

const SortListItem = ({ name, isActive, isAsc, itemKey }) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        dispatch(toggleSortingOption(itemKey));
      }}
    >
      <Text style={isActive && styles.active}>{name}</Text>
      {isActive && (
        <FontAwesomeIcon
          icon={isAsc ? faArrowDown : faArrowUp}
          size={12}
          style={styles.icon}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: Colors.garlic,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  icon: {
    color: Colors.olive,
  },
  active: {
    color: Colors.olive,
  },
});

export default SortListItem;
