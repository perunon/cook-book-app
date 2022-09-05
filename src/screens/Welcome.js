import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MenuOption from '../components/MenuOption';
import {
  faPencil,
  faFolderOpen,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';
import { Colors, Typography } from '../styles';
import { resetRecipe } from '../slices/NewRecipeSlice';
import { useDispatch } from 'react-redux';

const Welcome = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <>
      <View style={styles.background}>
        <View style={styles.card}>
          <Text style={styles.title}>Cook Book App</Text>
          <Text style={styles.subtitle}>All your recipes in one place!</Text>
          <Text style={styles.question}>What do you want to do?</Text>
          <MenuOption
            text="Add new recipe"
            icon={faPencil}
            onPress={(target) => {
              dispatch(resetRecipe());
              navigation.push(target);
            }}
            target="StepOne"
          />
          <MenuOption
            text="Browse saved recipes"
            icon={faFolderOpen}
            onPress={navigation.navigate}
            target="BrowseRecipes"
          />
          <MenuOption
            text="What should i cook today?"
            icon={faQuestionCircle}
            onPress={navigation.navigate}
            target="DrawRecipe"
          />
          <Footer />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.olive,
  },
  card: {
    backgroundColor: Colors.salt,
    padding: 15,
    borderColor: Colors.darkGarlic,
    borderWidth: 1,
    borderRadius: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    color: Colors.pepper,
    marginTop: 15,
    ...Typography.boldItalic,
  },
  subtitle: {
    textAlign: 'center',
    color: Colors.darkGarlic,
    fontSize: 14,
    ...Typography.regular,
  },
  question: {
    ...Typography.semibold,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});

export default Welcome;
