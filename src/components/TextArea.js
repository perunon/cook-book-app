import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Typography, Colors } from '../styles';

const TextArea = ({ label, placeholder, numberOfLines }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        multiline={true}
        numberOfLines={numberOfLines}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    paddingLeft: 10,
    ...Typography.semibold,
    fontSize: 12,
  },
  input: {
    borderColor: Colors.olive,
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    textAlignVertical: 'top',
    ...Typography.regular,
    fontSize: 12,
    marginBottom: 40,
  },
});

export default TextArea;
