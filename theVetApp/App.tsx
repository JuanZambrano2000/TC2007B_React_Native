/**
 * to create expo project
 * npx create-expo-app TheVetApp -t expo-template-blank-typescript
 * to install firebase
 * npx expo install firebase     
 */
//to run app 
//npm run android/npm run web/npm run ios
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
