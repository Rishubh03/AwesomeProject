import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Home, Welcome, First, Login, Register, Inferface1, NearestGarden } from './src/screens/index';
import { ScaledSheet } from 'react-native-size-matters';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    'cosmicsans': require('./assets/fonts/comicsansbold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name = "Home" component={Home} /> */}
        <Stack.Screen name="First" component={First} options = {{header:() => null}} />
        <Stack.Screen name="Welcome" component={Welcome} options = {{header:() => null}}/>
        <Stack.Screen name="Login" component={Login} options = {{header:() => null}}/>
        {/* <Stack.Screen name = "" component={}/> */}
        <Stack.Screen name="Register" component={Register} options = {{header:() => null}} />
        <Stack.Screen name="Interface1" component={Inferface1} options = {{header:() => null}} />
        <Stack.Screen name="NearestGarden" component={NearestGarden} options = {{header:() => null}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}