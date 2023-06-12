import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import AppButton from './app/components/AppButton';
import WelcomeScreen from './app/screens/WelcomeScreen';


export default function App() {
  return (
  <WelcomeScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
