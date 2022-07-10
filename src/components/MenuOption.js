import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Colors, Typography } from '../styles';

const MenuOption = ({ text, icon }) => {
  return (
    <View style={styles.button}>
      <FontAwesomeIcon icon={icon} size={30} style={{ color: '#2f2f2f' }} />
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.salt,
    borderWidth: 1,
    borderColor: Colors.darkGarlic,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    ...Typography.semibold,
    fontSize: 18,
    color: Colors.pepper,
    marginLeft: 15,
  },
});

export default MenuOption;
