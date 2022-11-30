import { View, Text, Platform, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from './Colors'
import ContainerImage from './ContainerImage'


const TopBar = (props) => {
    if (props.center) {
        return (
            <View style={{ flexDirection: 'row', zIndex: 99, justifyContent: 'center', paddingVertical: 10 }}>
                <Text style={{ fontSize: 18, color: Colors.colorBlack }}>{props.title}</Text>
            </View>
        )
    }
    return (
        <View style={{ flexDirection: 'row', zIndex: 99, alignItems: Platform.OS == 'ios' ? 'center' : 'flex-end', paddingVertical: 10 }}>
            <TouchableOpacity onPress={props.onPress} style={{ position: 'relative', alignItems: 'center', justifyContent: 'center', marginHorizontal: 10, paddingVertical: 5 }}>
                <ContainerImage size={25} source={require('../Assets/Icons/iconBackB.png')} />
            </TouchableOpacity>
            <Text style={{ color: Colors.colorBlack, fontSize: 18, bottom:5 }}>{props.title}</Text>
        </View>
    )
}

export default TopBar