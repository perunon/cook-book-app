import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_400Regular_Italic,
  NotoSans_700Bold,
  NotoSans_700Bold_Italic,
} from '@expo-google-fonts/noto-sans';
import Welcome from './src/screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderBar from './src/components/HeaderBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StepOne from './src/screens/AddRecipe/StepOne';
import StepTwo from './src/screens/AddRecipe/StepTwo';
import StepThree from './src/screens/AddRecipe/StepThree';
import StepFour from './src/screens/AddRecipe/StepFour';
import StepFive from './src/screens/AddRecipe/StepFive';
import AddNewStep from './src/screens/AddRecipe/AddNewStep';
import BrowseRecipes from './src/screens/BrowseRecipes';
import Recipe from './src/screens/Recipe';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    NotoSans_400Regular,
    NotoSans_400Regular_Italic,
    NotoSans_700Bold,
    NotoSans_700Bold_Italic,
    NotoSans_600Semibold: require('./assets/fonts/NotoSans-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            header: (props) => <HeaderBar {...props} />,
          }}
        >
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Group>
            <Stack.Screen
              name="StepOne"
              component={StepOne}
              options={{ title: 'Add New Recipe', headerRight: '1/5' }}
            />
            <Stack.Screen
              name="StepTwo"
              component={StepTwo}
              options={{ title: 'Add New Recipe', headerRight: '2/5' }}
            />
            <Stack.Screen
              name="StepThree"
              component={StepThree}
              options={{ title: 'Add New Recipe', headerRight: '3/5' }}
            />
            <Stack.Screen
              name="StepFour"
              component={StepFour}
              options={{ title: 'Add New Recipe', headerRight: '4/5' }}
            />
            <Stack.Screen
              name="StepFive"
              component={StepFive}
              options={{ title: 'Add New Recipe', headerRight: '5/5' }}
            />
            <Stack.Screen
              name="AddNewStep"
              component={AddNewStep}
              options={{ title: 'Add New Step' }}
            />
            <Stack.Screen
              name="BrowseRecipes"
              component={BrowseRecipes}
              options={{ title: 'Browse Recipes' }}
            />
            <Stack.Screen
              name="Recipe"
              component={Recipe}
              options={{ title: 'Recipe' }}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
