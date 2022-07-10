import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_400Regular_Italic,
  NotoSans_700Bold,
  NotoSans_700Bold_Italic,
} from '@expo-google-fonts/noto-sans';
import { StyleSheet } from 'react-native';
import Welcome from './src/screens/Welcome';
import RecipeCreator from './src/screens/RecipeCreator';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderBar from './src/components/HeaderBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StepOne from './src/screens/AddRecipe/StepOne';
import StepTwo from './src/screens/AddRecipe/StepTwo';

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
          initialRouteName="CreateNewRecipe"
          screenOptions={{
            header: HeaderBar,
          }}
        >
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="CreateNewRecipe" component={StepTwo} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
