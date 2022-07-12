import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Colors, Typography } from '../styles';

const TagItem = ({ data }) => {
  return <Text style={styles.tagItem}>{data.name}</Text>;
};

const styles = StyleSheet.create({
  tagItem: {
    borderColor: Colors.darkGarlic,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 2,
    color: Colors.pepper,
    ...Typography.semibold,
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 10,
    borderRadius: 20,
  },
});

export default TagItem;
