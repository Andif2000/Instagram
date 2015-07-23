import { View, ScrollView } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

const BottomTabView = () => {
  const Tab = createMaterialTopTabNavigator();

  let squares = [];
  let numberOfSquare = 10;
  for (let index = 0; index < numberOfSquare; index++) {
    squares.push(
      <View key={index}>
        <View
          style={{
            width: 130,
            height: 150,
            marginVertical: 0.5,
            backgroundColor: '#000000',
            opacity: 0.1
          }}>

        </View>
      </View>
    )
  }

  const Posts = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: '100%', height: '100%' }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#ffffff',
            flexWrap: 'wrap',
            flexDirection: 'row',
            paddingVertical: 5,
            justifyContent: 'space-between'
          }}>
          {squares}
        </View>
      </ScrollView>
    )
  }
  const Video = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: '100%', height: '100%' }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#ffffff',
            flexWrap: 'wrap',
            flexDirection: 'row',
            paddingVertical: 5,
            justifyContent: 'space-between'
          }}>
          {squares}
        </View>
      </ScrollView>
    )
  }
  const Tags = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: '100%', height: '100%' }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#ffffff',
            flexWrap: 'wrap',
            flexDirection: 'row',
            paddingVertical: 5,
            justifyContent: 'space-between'
          }}>
          {squares}
        </View>
      </ScrollView>
    )
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIndicatorStyle: {
          backgroundColor: '#000000',
          height: 1.5
        },
        tabBarIcon: ({ focused, colour }) => {
          let iconName;
          if (route.name === "Posts") {
            iconName = focused ? 'ios-apps-sharp' : 'ios-apps-sharp';
            colour = focused ? 'black' : 'gray'
          } else if (route.name === "Video") {
            iconName = focused ? 'ios-play-circle' : 'ios-play-circle';
            colour = focused ? 'black' : 'gray'
          } else if (route.name === "Tags") {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
            colour = focused ? 'black' : 'gray'
          }

          return (
            <Ionicons name={iconName} color={colour} size={22} />
          )
        }
      })}>
      <Tab.Screen name='Posts' component={Posts} />
      <Tab.Screen name='Video' component={Video} />
      <Tab.Screen name='Tags' component={Tags} />
    </Tab.Navigator>
  )
}

export default BottomTabView