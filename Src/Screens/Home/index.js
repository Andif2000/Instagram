import { View, Text, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import ContainerImage from '../../Components/ContainerImage'
import FlatListStory from '../../Components/FlatListStory'

const Home = () => {
    return (
        <SafeAreaView
            style={
                styles.container
            }>
            <StatusBar
                style="auto" />
            <ScrollView>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                    }}>
                    <View>
                        <TouchableOpacity>
                            <ContainerImage
                                source={require('../../Assets/Icons/Camera_Icon.png')}
                                width={31}
                                height={31} />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Image
                            source={require('../../Assets/Icons/Instagram_Logo.png')}
                            style={{
                                width: 120,
                                height: 35,
                                left: 25,
                                resizeMode: 'stretch',
                            }} />
                    </View>
                    <View
                        style={{
                            flexDirection: 'row'
                        }}>
                        <TouchableOpacity
                            style={{
                                marginRight: 15
                            }}>
                            <ContainerImage
                                source={require('../../Assets/Icons/IGTV.png')}
                                width={31}
                                height={31} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <ContainerImage
                                source={require('../../Assets/Icons/Messanger.png')}
                                width={31}
                                height={31} />
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatListStory/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});