import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Account from './Src/Screens/Account';

export default function App() {
  return (
   <Account/>
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
