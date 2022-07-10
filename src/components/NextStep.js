import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../styles';

const NextStep = () => {
  return (
    <View style={styles.wrapper}>
      <FontAwesomeIcon style={styles.icon} icon={faChevronRight} size={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 'auto',
    marginLeft: 'auto',
  },
  icon: {
    marginTop: 30,
    color: Colors.darkGarlic,
  },
});
export default NextStep;
