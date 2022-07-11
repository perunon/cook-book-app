import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import FitImage from 'react-native-fit-image';
import { Colors } from '../styles';

const image = require('../../assets/zupa_szpinakowa.jpg');

const TitleImage = () => {
  return (
    <View style={styles.imageView}>
      <FitImage source={image} style={styles.image} />

      {/* <FontAwesomeIcon icon={faPlus} size={100} color="white" />  */}
    </View>
  );
};

const styles = StyleSheet.create({
  imageView: {
    width: '100%',
    height: 200,
    marginTop: 20,
    backgroundColor: Colors.salt,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default TitleImage;
