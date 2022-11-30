import { View, Text, TextInput, Platform, Dimensions } from 'react-native'
import React from 'react'
import { Colors } from './Colors'


const InputCustom = (props) => {
    return (
        <View
            style={{
                width: props.width,
                marginTop: props.marginTop
            }}>
            <TextInput
                key={props.key}
                placeholder={props.placeholder}
                editable={props.disable}
                value={props.value}
                // onChangeText={(text) => { props.onChangeText(text) }}
                keyboardType={props.keyboardType}
                style={[{
                    backgroundColor: Colors.colorWhite2,
                    fontSize: 15,
                    padding: Platform.OS == 'ios' ? 5 : 0,
                    color: Colors.colorBlack,
                    paddingVertical: props.height,
                    borderRadius: props.radius,
                    paddingLeft: 15
                },
                props.style]} />
        </View>
    )
}

export default InputCustom