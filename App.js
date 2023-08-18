import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from "react-native";
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
