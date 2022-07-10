import React from 'react';
import { StyleSheet, View } from 'react-native';

const ScreenContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    flex: 1,
  },
});

export default ScreenContainer;
