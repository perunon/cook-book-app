import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, Typography } from '../styles';

const Button = ({ title, onClick, style }) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={[styles.button, style]}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.olive,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderWidth: 0,
    padding: 5,
  },
  buttonText: {
    ...Typography.boldItalic,
    color: 'white',
    fontSize: 16,
  },
});

export default Button;
