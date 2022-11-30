import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from './Colors'


const TopBar = (props) => {
    if (props.center){
        return (
            <View style={{ flexDirection: 'row', zIndex: 99, justifyContent: 'center', paddingVertical: 10 }}>
                <Text style={{ fontSize: 18, color: Colors.colorBlack }}>{props.title}</Text>
            </View>
        )
    }
    return(
        <View>
            
        </View>
    )
}

export default TopBar