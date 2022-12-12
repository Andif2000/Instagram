import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { Video } from 'expo-av';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'

const SingleReels = ({ item, index, currentIndex }) => {
    const widthWindow = Dimensions.get('window').width;
    const heigthWindow = Dimensions.get('window').height;

    const videoRef = useRef(null)
    const onBuffer = buffer => {
        console.log("Buffering", buffer);
    }
    const onError = error => {
        console.log("Buffering", error);
    }
    const [mute, setMute] = useState(false);
    const [like, setLike] = useState(item.isLike);

    return (
        <View
            style={{ width: widthWindow, height: heigthWindow, position: 'relative' }}>
            <TouchableOpacity
                onPress={() => { setMute(!mute) }}
                activeOpacity={0.9}
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute'
                }}>
                <Video
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute'
                    }}
                    ref={videoRef}
                    source={item.video}
                    onBuffer={onBuffer}
                    onError={onError}
                    useNativeControls={false}
                    resizeMode="cover"
                    isLooping
                    shouldPlay
                    isMuted={currentIndex == index ? false : true}
                    rate={1.0}
                    
                />
            </TouchableOpacity>
            <Ionicons
                name={mute ? 'volume-mute' : 'ios-volume-high'}
                style={{
                    fontSize: 25,
                    position: 'absolute',
                    color: '#ffffff',
                    top: heigthWindow / 2.3,
                    left: widthWindow / 2.3,
                    backgroundColor: 'rgba(52,52,52,0.8)',
                    borderRadius: 100,
                    padding: 15,
                    opacity: mute ? 0.9 : 0
                }} />
            <View
                style={{
                    position: 'absolute',
                    zIndex: 1,
                    width: widthWindow,
                    bottom: 80,
                    padding: 10
                }}>
                <View style={{}}>
                    <TouchableOpacity style={{ width: 150 }}>
                        <View
                            style={{
                                width: 100,
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                            <View
                                style={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: 100,
                                    backgroundColor: '#ffffff',
                                    margin: 10
                                }}>
                                <Image
                                    source={item.profile}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: 100,
                                        resizeMode: 'cover'
                                    }} />
                            </View>
                            <Text style={{ color: '#ffffff', fontSize: 16 }}>{item.person}</Text>
                        </View>
                    </TouchableOpacity>
                    <Text
                        style={{
                            color: '#ffffff',
                            fontSize: 14,
                            marginHorizontal: 10,
                        }}>{item.description}</Text>
                    <View
                        style={{ flexDirection: 'row', padding: 10 }}>
                        <Ionicons
                            name='ios-musical-note'
                            style={{
                                fontSize: 16,
                                color: '#ffffff'
                            }} />
                        <Text style={{ color: '#ffffff' }}>{item.music}</Text>
                    </View>
                </View>
            </View>
            <View
                style={{
                    position: 'absolute',
                    bottom: 100,
                    right: 0,
                }}>
                <TouchableOpacity onPress={() => { setLike(!like) }} style={{ padding: 10 }}>
                    <AntDesign name={like ? 'heart' : 'hearto'}
                        style={{ fontSize: 27, color: like ? '#ff0000' : '#ffffff' }} />
                    <Text style={{ color: '#ffffff' }}>{item.likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 10 }}>
                    <Ionicons name='ios-chatbubble-outline'
                        style={{ fontSize: 27, color: '#ffffff' }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 10 }}>
                    <Ionicons name='paper-plane-outline'
                        style={{ fontSize: 27, color: '#ffffff' }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 10 }}>
                    <Feather name='more-vertical'
                        style={{ fontSize: 27, color: '#ffffff' }} />
                </TouchableOpacity>
                <View
                    style={{
                        width: 30,
                        height: 30,
                        borderRadius: 10,
                        borderWidth: 2,
                        borderColor: '#ffffff'
                    }}>
                    <Image
                        source={item.profile}
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 10,
                            resizeMode: 'cover'
                        }}
                    />
                </View>
            </View>
        </View>
    )
}

export default SingleReels