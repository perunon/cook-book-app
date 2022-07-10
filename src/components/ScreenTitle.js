import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Typography } from '../styles';

const ScreenTitle = ({ text }) => {
  return <Text style={styles.screenTitle}>{text}</Text>;
};

const styles = StyleSheet.create({
  screenTitle: {
    ...Typography.bold,
    fontSize: 22,
    marginBottom: 30,
  },
});

export default ScreenTitle;
