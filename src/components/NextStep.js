import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from '../styles';

const NextStep = () => {
  return (
    <FontAwesomeIcon style={styles.icon} icon={faChevronRight} size={30} />
  );
};

const styles = StyleSheet.create({
  icon: {
    marginTop: 'auto',
    marginLeft: 'auto',
    color: Colors.darkGarlic,
  },
});
export default NextStep;
