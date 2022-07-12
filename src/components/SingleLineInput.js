import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import { Typography, Colors } from '../styles';

const SingleLineInput = ({ size, placeholder, label, onChange, value }) => {
  return (
    <View>
      {label && <Text style={[styles.label, label.size]}>{label.text}</Text>}
      <TextInput
        style={[styles.input, { fontSize: size }]}
        placeholder={placeholder}
        onChangeText={(value) => onChange(value)}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: Colors.pepper,
    ...Typography.semibold,
    fontSize: 16,
  },
  input: {
    color: Colors.darkGarlic,
    ...Typography.semibold,
    borderBottomColor: Colors.olive,
    fontSize: 26,
    borderBottomWidth: 2,
    padding: 0,
    marginBottom: 30,
  },
});

export default SingleLineInput;
