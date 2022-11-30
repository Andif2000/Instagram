import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'

import TopBar from '../../Components/TopBar'
import { Colors } from '../../Components/Colors'

const Login = () => {
    return (
        <SafeAreaView
            style={styles.screen}>
            <ScrollView>
                <TopBar
                    onPress={() => { }} />
                <View
                    style={styles.container}>
                    <View
                        style={{
                            marginTop:80
                        }}>
                        <Image
                            source={require('../../Assets/Images/Instagram.png')}
                            style={{
                                width: 200,
                                height: 100,
                                resizeMode: 'stretch',
                            }} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    screen: {
        flex: 1,
        backgroundColor: Colors.colorWhite
    },
    top: {
        padding: 20
    },
    down: {
        paddingHorizontal: 20,
        flex: 1,
    }
})