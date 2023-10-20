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
import { StatusBar } from 'expo-status-bar';
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
