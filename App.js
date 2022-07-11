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
import AddNewRecipe from './src/screens/AddRecipe';
import Recipe from './src/screens/Recipe';
import RecipeStep from './src/screens/RecipeStep';

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
          initialRouteName="Recipe"
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
              name="Recipe"
              component={RecipeStep}
              options={{ title: 'Add New Recipe' }}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
