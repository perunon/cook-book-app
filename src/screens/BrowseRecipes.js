import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import FitImage from 'react-native-fit-image';
import ScreenContainer from '../components/ScreenContainer';
import SingleLineInput from '../components/SingleLineInput';
import TagsGrid from '../components/TagsGrid';
import { Typography } from '../styles';

const recipes = [
  {
    id: '1',
    name: 'Zupa krem szpinakowa',
    img: require('../../assets/zupa_szpinakowa.jpg'),
  },
  {
    id: '2',
    name: 'Zupa krem szpinakowa',
    img: require('../../assets/zupa_szpinakowa.jpg'),
  },
  {
    id: '3',
    name: 'Zupa krem szpinakowa',
    img: require('../../assets/zupa_szpinakowa.jpg'),
  },
  {
    id: '4',
    name: 'Zupa krem szpinakowa',
    img: require('../../assets/zupa_szpinakowa.jpg'),
  },
  {
    id: '5',
    name: 'Zupa krem szpinakowa',
    img: require('../../assets/zupa_szpinakowa.jpg'),
  },
  {
    id: '6',
    name: 'Zupa krem szpinakowa',
    img: require('../../assets/zupa_szpinakowa.jpg'),
  },
  {
    id: '7',
    name: 'Zupa krem szpinakowa',
    img: require('../../assets/zupa_szpinakowa.jpg'),
  },
  {
    id: '8',
    name: 'Zupa krem szpinakowa',
    img: require('../../assets/zupa_szpinakowa.jpg'),
  },
  {
    id: '9',
    name: 'Zupa krem szpinakowa',
    img: require('../../assets/zupa_szpinakowa.jpg'),
  },
  {
    id: '10',
    name: 'Zupa krem szpinakowa',
    img: require('../../assets/zupa_szpinakowa.jpg'),
  },
];

const BrowseRecipes = () => {
  const navigation = useNavigation();
  return (
    <ScreenContainer>
      <View>
        <SingleLineInput size={26} placeholder="Search for a recipe..." />
        <View style={styles.inline}>
          <Text style={styles.option}>Select tags</Text>
          <Text style={styles.option}>Sort by: Recently</Text>
        </View>
        <TagsGrid />
      </View>
      <ScrollView style={{ marginTop: 30 }}>
        <View style={styles.recipesList}>
          {recipes.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.listItem}
              onPress={() => navigation.navigate('Recipe', { preview: false })}
            >
              <FitImage source={item.img} style={styles.image} />
              <LinearGradient
                colors={['black', 'transparent']}
                start={{ x: 0.5, y: 1 }}
                end={{ x: 0.5, y: 0.0 }}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: 0,
                  paddingBottom: '110%',
                }}
              />
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  inline: {
    marginTop: -20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  option: {
    paddingVertical: 3,
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 1,
    ...Typography.regular,
    fontSize: 12,
  },
  recipesList: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 20,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  listItem: {
    borderWidth: 1,
    width: '48%',
    height: 0,
    paddingBottom: '48%',
    overflow: 'hidden',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 150,
  },
  itemText: {
    position: 'absolute',
    bottom: 0,
    left: 2,
    color: 'white',
    ...Typography.bold,
    fontSize: 12,
  },
});

export default BrowseRecipes;
