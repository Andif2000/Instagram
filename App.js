import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionic from 'react-native-vector-icons/Ionicons'
import Home from './Src/Screens/Home';
import Search from './Src/Screens/Search';
import Reels from './Src/Screens/Reels';
import Activity from './Src/Screens/Activity';
import Profile from './Src/Screens/Profile';
import Route from './Src/Route';

export default function App() {
    return (
      <Route/>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
