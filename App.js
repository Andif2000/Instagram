import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Home from './Src/Screens/Home';

export default function App() {
  return (
    <Home/>
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
