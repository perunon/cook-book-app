import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Typography } from '../styles';

const HeaderBar = ({ navigation, options }) => {
  return (
    <SafeAreaView style={styles.headerBar}>
      <TouchableOpacity
        style={styles.headerLeft}
        onPress={() => navigation.goBack()}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
        <Text style={styles.headerBarText}>{options.title}</Text>
      </TouchableOpacity>
      <Text style={[styles.headerBarText, styles.right]}>
        {options.headerRight}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 0,
    backgroundColor: 'white',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
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
