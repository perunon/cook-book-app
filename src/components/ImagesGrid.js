import React from 'react';
import { StyleSheet, View } from 'react-native';
import FitImage from 'react-native-fit-image';
import { Colors } from '../styles';

const images = [
  {
    id: '1',
    source: require('../../assets/zupa_szpinakowa.jpg'),
  },
  {
    id: '2',
    source: require('../../assets/zupa_szpinakowa.jpg'),
  },
  {
    id: '3',
    source: require('../../assets/zupa_szpinakowa.jpg'),
  },
  {
    id: '4',
    source: require('../../assets/zupa_szpinakowa.jpg'),
  },
  {
    id: '5',
    source: require('../../assets/zupa_szpinakowa.jpg'),
  },
  {
    id: '6',
    source: require('../../assets/zupa_szpinakowa.jpg'),
  },
  {
    id: '7',
    source: require('../../assets/zupa_szpinakowa.jpg'),
  },
  {
    id: '8',
    source: require('../../assets/zupa_szpinakowa.jpg'),
  },
  {
    id: '9',
    source: require('../../assets/zupa_szpinakowa.jpg'),
  },
];

const ImagesGrid = () => {
  const imageSize = [];
  return (
    <View style={styles.wrapper}>
      {images.map((item) => (
        <View
          key={item.id}
          style={styles.item}
          onLayout={(event) => {
            let { width, height } = event.nativeEvent.layout;
            imageSize[0] = width;
            imageSize[1] = height;
          }}
        >
          <FitImage source={item.source} style={styles.image} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 20,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    borderWidth: 1,
    borderColor: Colors.darkGarlic,
    width: '30%',
    height: 0,
    paddingBottom: '30%',
    overflow: 'hidden',
    borderRadius: 20,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 100,
  },
});

export default ImagesGrid;
