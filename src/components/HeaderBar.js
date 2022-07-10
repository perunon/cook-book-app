import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Typography } from '../styles';

const HeaderBar = () => {
  return (
    <SafeAreaView style={styles.headerBar}>
      <FontAwesomeIcon icon={faAngleLeft} />
      <Text style={styles.headerBarText}>HeaderBar</Text>
      <Text style={[styles.headerBarText, styles.right]}>1/5</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 0,
  },
  headerBarText: {
    fontSize: 12,
    ...Typography.boldItalic,
  },
  right: {
    marginLeft: 'auto',
  },
});

export default HeaderBar;
