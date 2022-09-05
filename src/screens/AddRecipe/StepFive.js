import { StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import ImagesGrid from '../../components/ImagesGrid';
import ScreenContainer from '../../components/ScreenContainer';
import ScreenTitle from '../../components/ScreenTitle';
import { addNewRecipe } from '../../slices/RecipesSlice';
import { Colors, Typography } from '../../styles';

const StepFive = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const recipe = useSelector((state) => state.newRecipe);

  // const stepOne = useSelector((state) => state.stepOne);
  // const stepTwo = useSelector((state) => state.stepTwo);
  // const stepThree = useSelector((state) => state.stepThree);
  // const stepFour = useSelector((state) => state.stepFour);
  // const stepFive = useSelector((state) => state.stepFive);

  // const recipe = {
  //   ...stepOne,
  //   ...stepTwo,
  //   ...stepThree,
  //   ...stepFour,
  //   ...stepFive,
  // };

  return (
    <ScreenContainer>
      <ScreenTitle text="You're almost there! Let's add some pictures of your dish and we are ready to serve!" />
      <ImagesGrid />
      <Text style={styles.bottomText}>
        Congratulations! Your recipe is ready to save. Check the{' '}
        <Text
          style={styles.greenBottomText}
          onPress={() =>
            navigation.push('RecipeStack', { preview: true, data: recipe })
          }
        >
          preview{' '}
        </Text>
        if you want.
      </Text>
      <Button
        title="FINISH"
        onClick={() => {
          dispatch(addNewRecipe(recipe));
          navigation.reset({ index: 0, routes: [{ name: 'BrowseRecipes' }] });
        }}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  previewText: {
    color: Colors.olive,
    ...Typography.boldItalic,
  },
  bottomText: {
    ...Typography.bold,
    fontSize: 22,
    marginBottom: 30,
  },
  greenBottomText: {
    ...Typography.boldItalic,
    color: Colors.olive,
  },
});

export default StepFive;
