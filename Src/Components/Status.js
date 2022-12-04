import { View, Text, StatusBar, Image, TouchableOpacity, TextInput, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from './Colors';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

const Status = ({ route, navigation }) => {
    const { name } = route.params;
    const { profile } = route.params;
    const { story } = route.params;

    const [progres, setProgres] = useState(new Animated.Value(0))

    const progresAnimation = progres.interpolate({
        inputRange: [0, 5],
        outputRange: ['0%', '100%']
    })

    useEffect(() => {
        let timer = setTimeout(() => {
            navigation.goBack();
        }, 5000);

        Animated.timing(progres, {
            toValue: 5,
            duration: 5000,
            useNativeDriver: false,
        }).start()
        return () => { clearTimeout(timer) }
    }, [])

    return (
        <View
            style={{
                backgroundColor: '#000000',
                position: 'relative',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            }}>

            <StatusBar
                backgroundColor={'#000000'}
                barStyle='light-content' />

            <View
                style={{
                    height: 3,
                    width: '95%',
                    borderWidth: 1,
                    backgroundColor: Colors.colorGray,
                    position: 'absolute',
                    top: 18
                }}>
                <Animated.View
                    style={{
                        height: '100%',
                        width: progresAnimation,
                        backgroundColor: Colors.colorWhite2
                    }}>
                </Animated.View>
            </View>
            <View
                style={{
                    padding: 15,
                    width: '90%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 12,
                    left: 0,
                }}>
                <View
                    style={{
                        borderRadius: 100,
                        width: 30,
                        height: 30,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Image
                        source={profile}
                        style={{
                            borderRadius: 100,
                            backgroundColor: 'orange',
                            resizeMode: 'cover',
                            width: '92%',
                            height: '92%'
                        }} />
                </View>
                <View
                    style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        width: '100%'
                    }}>
                    <Text
                        style={{
                            color: Colors.colorWhite2,
                            fontSize: 15,
                            paddingLeft: 10
                        }}>{name}</Text>
                    <TouchableOpacity
                        onPress={() => { navigation.goBack() }}>
                        <Ionicons
                            name='close'
                            style={{
                                fontSize: 20,
                                color: '#ffffff',
                                opacity: 0.8
                            }} />
                    </TouchableOpacity>
                </View>
            </View>
            <Image
                source={story}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: 600
                }} />
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    marginVertical: 10,
                    width: '100%'
                }}>
                <TextInput
                    placeholder='Send Message'
                    placeholderTextColor={Colors.colorWhite2}
                    style={{
                        borderColor: Colors.colorWhite2,
                        borderRadius: 25,
                        width: '85%',
                        height: 50,
                        paddingLeft: 18,
                        borderWidth: 1,
                        fontSize: 20,
                        color: Colors.colorWhite2
                    }} />
                <TouchableOpacity
                    onPress={() => { navigation.goBack() }}>
                    <Feather
                        name='navigation'
                        style={{
                            fontSize: 30,
                            color: Colors.colorWhite2
                        }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Status