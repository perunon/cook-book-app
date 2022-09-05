import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import EditRecipeButton from '../components/EditRecipeButton';
import HeaderBar from '../components/HeaderBar';
import NextStep from '../components/NextStep';
import EditRecipe from './EditRecipe';
import Recipe from './Recipe';
import RecipeStep from './RecipeStep';

const Steps = createNativeStackNavigator();

const RecipeStack = ({ route }) => {
  const { preview, index } = route.params;
  const data = preview
    ? route.params.data
    : useSelector((state) => state.recipes.recipes)[index];

  return (
    <Steps.Navigator
      initialRouteName="Recipe"
      screenOptions={{
        header: (props) => <HeaderBar {...props} />,
      }}
    >
      <Steps.Screen
        name="Recipe"
        component={Recipe}
        initialParams={{ data: data, preview: preview }}
        options={{
          title: data.name,
          headerRight: preview ? '' : <EditRecipeButton />,
        }}
      />
      <Steps.Screen
        name="EditRecipe"
        component={EditRecipe}
        initialParams={{ data: data, index: index }}
        options={{
          headerShown: false,
        }}
      />
      {data.steps.map((step, i) => (
        <Steps.Screen
          key={i}
          name={`${i}`}
          component={RecipeStep}
          options={{
            title: data.name,
            headerRight: `Step ${i + 1}/${data.steps.length}`,
          }}
          initialParams={{
            index: i,
            step: step,
            isLast: i === data.steps.length - 1,
          }}
        />
      ))}
    </Steps.Navigator>
  );
};

export default RecipeStack;
