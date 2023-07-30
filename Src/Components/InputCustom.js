import { View, Text, TextInput, Platform, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from './Colors'

const InputCustom = (props) => {
    return (
        <View
            style={{
                width: props.width,
                marginTop: props.marginTop,
                backgroundColor: Colors.colorWhite2,
                borderRadius: props.radius,
                flexDirection: 'row'
            }}>
            <Image
                source={props.icon}
                style={{
                    width: 30,
                    height: 30,
                    resizeMode: 'contain',
                    marginHorizontal: 5,
                    alignSelf: 'center'
                }} />
            <TextInput
                key={props.key}
                placeholder={props.placeholder}
                editable={props.disable}
                value={props.value}
                onChangeText={(text) => { props.onChangeText(text) }}
                keyboardType={props.keyboardType}
                secureTextEntry={props.secureTextEntry}
                style={[{
                    backgroundColor: Colors.colorWhite2,
                    fontSize: 15,
                    padding: Platform.OS == 'ios' ? 5 : 0,
                    color: Colors.colorBlack,
                    paddingVertical: props.height,
                    flex: 1
                },
                props.style]} />
            {
                props.password &&
                <TouchableOpacity
                    style={{
                        width: 35,
                        height: 35,
                        alignSelf:'center'
                    }}
                    onPress={() => props.setSeePassword(!props.secureTextEntry)}
                >
                    {
                        props.secureTextEntry ?
                            <Image
                                source={require('../Assets/Icons/iconEye.png')}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    resizeMode: 'contain',
                                    alignSelf:'center',
                                    marginRight:10
                                }}
                            />
                            :
                            <Image
                                source={require('../Assets/Icons/iconEyeA.png')}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    resizeMode: 'contain',
                                    alignSelf:'center',
                                    marginRight:10
                                }}
                            />
                    }
                </TouchableOpacity>
            }
        </View>
    )
}

export default InputCustom