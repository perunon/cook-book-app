import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Typography } from '../styles';

const Footer = () => {
  return (
    <View>
      <Text style={styles.footerText}>
        2022 | Created by
        <Text style={styles.strongText}> Patryk Pilarczyk </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerText: {
    ...Typography.regular,
    fontSize: 11,
    textAlign: 'center',
    color: Colors.darkGarlic,
  },
  strongText: {
    ...Typography.bold,
  },
});

export default Footer;
