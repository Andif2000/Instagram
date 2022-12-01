import React from 'react'
import { Image, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native'
import { Colors } from '../assets/Colors'
import { Poppins_400Regular } from '@expo-google-fonts/poppins'

const InputLogin = (props) => (
  <View style={Styles.ContainerInput}>
    <View style={{ width: 40, height: props.iconSize || 40, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={props.icon} style={{ height: '100%', width: '100%', resizeMode: 'contain', marginHorizontal: 15 }} />
    </View>
    <TextInput value={props.value} style={{ flex: 1, fontFamily: 'Poppins_400Regular', color: Colors.colorBlack }} placeholderTextColor='gray' placeholder={props.placeholder} keyboardType={props.keyboardType} onChangeText={(text) => props.onChangeText(text)} secureTextEntry={props.secureTextEntry} />
    {props.password &&
      <TouchableOpacity style={{ width: 40, height: 40 }} onPress={() => props.setSeePassword(!props.secureTextEntry)}>
        {!props.secureTextEntry ?
          <Image source={require('../assets/icon/iconEye.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain', marginHorizontal: 10 }} /> :
          <Image source={require('../assets/icon/iconEyeA.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain', marginHorizontal: 10 }} />
        }
      </TouchableOpacity>
    }
  </View>
)

export default InputLogin

const Styles = StyleSheet.create({
  ContainerInput: {
    backgroundColor: Colors.colorWhite,
    height: 50,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.colorLight,
    borderRadius: 5,
    elevation: 1.5,
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10
  }
})