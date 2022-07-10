import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FitImage from 'react-native-fit-image';
import { Colors, Typography } from '../styles';

const StepsListItem = ({ data }) => {
  return (
    <View style={styles.wrapper}>
      <FitImage source={data.img} style={styles.image} />
      <Text style={styles.text}>{data.text}</Text>
      <View style={styles.actionIcons}>
        <FontAwesomeIcon icon={faPencil} size={20} />
        <FontAwesomeIcon
          icon={faTrash}
          style={{ marginLeft: 10, color: Colors.paprika }}
          size={20}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    height: 60,
    padding: 10,
    backgroundColor: 'white',
    borderColor: Colors.darkGarlic,
    borderWidth: 1,
    marginBottom: 20,
  },
  image: {
    width: 40,
    height: 40,
  },
  text: {
    ...Typography.regular,
    fontSize: 12,
    color: Colors.pepper,
    marginLeft: 10,
    flexWrap: 'wrap',
    flex: 1,
  },
  actionIcons: {
    marginLeft: 'auto',
    flexDirection: 'row',
  },
});

export default StepsListItem;
