import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionic from 'react-native-vector-icons/Ionicons'
import Home from '../Screens/Home';
import Search from '../Screens/Search';
import Reels from '../Screens/Reels';
import Activity from '../Screens/Activity';
import Profile from '../Screens/Profile';
import Status from '../Components/Status';

const Route = () => {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    const ButtomTabScreens = () => {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarHideOnKeyboard: true,
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarStyle: {
                        height: 50
                    },
                    tabBarIcon: ({ focused, size, colour }) => {
                        let iconName;
                        if (route.name === "Home") {
                            iconName = focused ? "home-sharp" : "home-outline";
                            size = focused ? size + 8 : size + 2;
                        } else if (route.name === "Search") {
                            iconName = focused ? "search" : "ios-search-outline";
                            size = focused ? size + 8 : size + 2;
                        } else if (route.name === "Reels") {
                            iconName = focused ? "add-circle" : "add-circle-outline";
                            size = focused ? size + 8 : size + 2;
                        } else if (route.name === "Activity") {
                            iconName = focused ? "ios-heart" : "ios-heart-outline";
                            size = focused ? size + 8 : size + 2;
                        } else if (route.name === "Profile") {
                            iconName = focused ? "ios-person-circle" : "ios-person-circle-outline";
                            size = focused ? size + 8 : size + 2;
                        }

                        return <Ionic name={iconName} size={size} color={colour} />

                    }
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Search" component={Search} />
                <Tab.Screen name="Reels" component={Reels} />
                <Tab.Screen name="Activity" component={Activity} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }
                }>
                <Stack.Screen name='Bottom' component={ButtomTabScreens} />
                <Stack.Screen name='Status' component={Status} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Route
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});