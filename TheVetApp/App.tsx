/**
 * To create project:
 * npx create-expo-app TheVetApp -t expo-template-blank-typescript
 * npx expo install firebase
 * //navigation
 * npm install @react-navigation/native @react-navigation/native-stack
 * npx expo install react-native-screens react-native-safe-area-context
 * npx expo customize metro.config.js
 * To run:
 * npm run android / npm run ios / npm run web
 */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screens/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false}}/>
      </Stack.Navigator> 
    </NavigationContainer>
  );
}
