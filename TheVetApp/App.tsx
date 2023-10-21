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
import MenuActivity from './app/screens/MenuActivity';
import DetailActivity from './app/screens/DetailActivity';
import React, { useEffect } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';

const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name='Menu Activity' component={MenuActivity} />
      <InsideStack.Screen name='Detail' component={DetailActivity} />
    </InsideStack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = React.useState<User | null>(null); 

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user: ', user);
      setUser(user);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {user ? (
          <Stack.Screen name='Inside' component={InsideLayout} options={{ headerShown: false}}/>
        ) : (
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false}}/>
     
        )}
      </Stack.Navigator> 
    </NavigationContainer>
  );
}
