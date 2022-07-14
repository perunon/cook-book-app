import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import FitImage from 'react-native-fit-image';
import { Colors } from '../styles';
import * as ImagePicker from 'expo-image-picker';

const TitleImage = ({ source, onImageChange }) => {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    if (!result.cancelled) {
      onImageChange(result.uri);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={pickImage}>
      <View style={styles.imageView}>
        {source === '' ? (
          <FontAwesomeIcon icon={faPlus} size={100} color="white" />
        ) : (
          <FitImage source={{ uri: source }} style={styles.image} />
        )}
      </View>
    </TouchableWithoutFeedback>
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
