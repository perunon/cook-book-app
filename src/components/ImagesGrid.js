import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import FitImage from 'react-native-fit-image';
import * as ImagePicker from 'expo-image-picker';
import { Colors } from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { setPicture } from '../slices/NewRecipeSlice';

const ImagesGrid = ({ data = null }) => {
  if (data === null) {
    data = useSelector((state) => state.newRecipe.pictures);
  }
  const dispatch = useDispatch();

  const pickImage = async (index) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    if (!result.cancelled) {
      dispatch(setPicture({ id: index, uri: result.uri }));
    }
  };

  return (
    <View style={styles.wrapper}>
      {data.map((item, i) => (
        <TouchableWithoutFeedback key={i} onPress={() => pickImage(i)}>
          <View style={styles.item}>
            {item != '' ? (
              <FitImage source={{ uri: item }} style={styles.image} />
            ) : (
              <FontAwesomeIcon
                icon={faPlus}
                size={50}
                color="white"
                style={{ marginTop: 50 }}
              />
            )}
          </View>
        </TouchableWithoutFeedback>
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
    width: '48%',
    height: 0,
    paddingBottom: '48%',
    overflow: 'hidden',
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: Colors.salt,
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 160,
  },
});

export default ImagesGrid;
