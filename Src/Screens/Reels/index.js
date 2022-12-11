import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { Colors } from '../../Components/Colors';
import ReelsComponent from '../../Components/ReelsComponent';
import {Video} from 'expo-av'

const Reels = () => {
  const widthWindow = Dimensions.get('window').width;
  const heightWindow = Dimensions.get('window').height;

  return (
    <View
      style={{
        width: widthWindow,
        height: heightWindow,
        backgroundColor: '#fffff',
        position: 'relative',
        backgroundColor: Colors.colorBlack
      }}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          zIndex: 1
        }}>
        <Text style={{ fontSize: 28, fontWeight: 'bold', color: Colors.colorWhite2 }}>Reels</Text>
        <TouchableOpacity>
          <Feather name='camera' style={{ fontSize: 30, color: Colors.colorWhite2 }} />
        </TouchableOpacity>
      </View>
      <ReelsComponent />
     
    </View>
  )
}

export default Reels