import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'
import { Video } from 'expo-av';

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

    return (
        <View
            style={{ width: widthWindow, height: heigthWindow, position: 'relative' }}>
            <TouchableOpacity
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
                    isMuted={false}
                    rate={1.0}
                />
            </TouchableOpacity>
        </View>
    )
}

export default SingleReels