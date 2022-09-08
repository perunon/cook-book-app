import React from 'react';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';

const ScreenContainer = ({ children }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.inner}>{children}</View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    backgroundColor: 'white',
    padding: 20,
    flex: 1,
    justifyContent: 'space-around',
  },
});

export default ScreenContainer;
