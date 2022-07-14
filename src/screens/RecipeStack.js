import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderBar from '../components/HeaderBar';
import Recipe from './Recipe';
import RecipeStep from './RecipeStep';

const Steps = createNativeStackNavigator();

const RecipeStack = ({ route }) => {
  const { data, preview } = route.params;

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
        options={{ title: data.name }}
      />
      {data.steps.map((step, i) => (
        <Steps.Screen
          name={`${i}`}
          component={RecipeStep}
          options={{
            title: data.name,
            headerRight: `${i + 1}/${data.steps.length}`,
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
