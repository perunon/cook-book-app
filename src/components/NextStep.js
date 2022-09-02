import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors } from '../styles';
import { useNavigation } from '@react-navigation/native';

const NextStep = ({
  target,
  validate = () => {
    return true;
  },
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        validate() && navigation.navigate(target);
      }}
    >
      <View style={styles.wrapper}>
        <FontAwesomeIcon style={styles.icon} icon={faChevronRight} size={30} />
      </View>
    </TouchableOpacity>
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
