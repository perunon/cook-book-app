import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { Typography, Colors } from '../styles';

const DetailInputBlock = ({ label, placeholder }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}> {label} </Text>
      <TextInput
        style={[styles.text, styles.input]}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  text: {
    ...Typography.semibold,
    color: Colors.pepper,
    fontSize: 16,
  },
  input: {
    color: Colors.darkGarlic,
    width: '40%',
    textAlign: 'right',
    borderBottomWidth: 2,
    borderBottomColor: Colors.olive,
    padding: 0,
  },
});

export default DetailInputBlock;
