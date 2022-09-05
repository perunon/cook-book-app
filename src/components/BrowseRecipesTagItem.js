import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors, Typography } from '../styles';

const BrowseRecipesTagItem = ({ data, toggleSelected, active = false }) => {
  return (
    <TouchableOpacity onPress={() => toggleSelected(data)}>
      <Text
        style={[
          styles.tagItem,
          active && {
            backgroundColor: Colors.olive,
            color: 'white',
            borderColor: Colors.olive,
          },
        ]}
      >
        {data}
      </Text>
    </TouchableOpacity>
  );
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
    marginRight: 10,
    borderRadius: 20,
  },
});

export default BrowseRecipesTagItem;
