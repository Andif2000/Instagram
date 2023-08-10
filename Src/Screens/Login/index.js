import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, Dimensions, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from "react";
import TopBar from '../../Components/TopBar'
import { Colors } from '../../Components/Colors'
import InputCustom from '../../Components/InputCustom'
import ButtonCustom from '../../Components/ButtonCustom'
import ContainerImage from '../../Components/ContainerImage'

const widthScreen = Dimensions.get("screen").width;
const Login = () => {
    const [username, setUsername] = useState('');
    const [seePassword, setSeePassword] = useState(true)
    const [password, setPassword] = useState('');
    return (
        <SafeAreaView
            style={styles.screen}>
            <StatusBar
                style="auto" />
            <ScrollView>
                <TopBar
                    onPress={() => { }} />
                <View
                    style={styles.container}>
                    <View
                        style={{
                            marginTop: 80
                        }}>
                        <Image
                            source={require('../../Assets/Images/Instagram.png')}
                            style={{
                                width: 200,
                                height: 100,
                                resizeMode: 'stretch',
                            }} />
                    </View>
                    <InputCustom
                        placeholder='Usename'
                        width={widthScreen - 50}
                        height={10}
                        radius={5}
                        icon={require('../../Assets/Icons/iconUser.png')}
                        onChangeText={setUsername} />

                    <InputCustom
                        password
                        placeholder='Password'
                        width={widthScreen - 50}
                        height={10}
                        radius={5}
                        marginTop={15}
                        icon={require('../../Assets/Icons/iconLock.png')}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={seePassword}
                        setSeePassword={setSeePassword} />
                </View>

                <View
                    style={{
                        paddingVertical: 15,
                        alignItems: 'flex-end',
                        marginRight: 35
                    }}>
                    <TouchableOpacity>
                        <Text
                            style={{
                                color: Colors.colorBlue,
                            }}>
                            Forgot Password ?
                        </Text>
                    </TouchableOpacity>
                </View>

                <View
                    style={[
                        styles.container,
                        {
                            marginTop: 15
                        }
                    ]}>
                    <ButtonCustom
                        title='Log in'
                        height={13}
                        width={widthScreen - 50}
                        backgroundColor={Colors.colorBlue}
                        color='white' fontSize={18} />

                    <View
                        style={{
                            paddingVertical: 30,
                            flexDirection: 'row'
                        }}>
                        <ContainerImage
                            source={require('../../Assets/Icons/iconFb.png')}
                            width={20}
                            height={20} />
                        <TouchableOpacity>
                            <Text
                                style={{
                                    color: Colors.colorBlue,
                                    fontWeight: 'bold'
                                }}> Log In With Facebook

                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View
                        style={{
                            alignItems: 'center',
                            flexDirection: 'row',
                            marginHorizontal: 50
                        }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: Colors.colorGray2 }}></View>
                        <View>
                            <Text
                                style={{
                                    color: Colors.colorGray,
                                    width: 40,
                                    textAlign: 'center'
                                }}>OR</Text>
                        </View>
                        <View style={{ flex: 1, height: 1, backgroundColor: Colors.colorGray2 }}></View>
                    </View>

                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'flex-end',
                            marginBottom: 30,
                            width: widthScreen
                        }}>
                        <Text
                            style={{
                                color: Colors.colorGray,
                                textAlign: 'center',
                                marginTop: 20
                            }}>
                            <Text>Don't have an account? </Text>
                            <TouchableOpacity>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        color: Colors.colorBlue,
                                        top: 2
                                    }}> Sign Up
                                </Text>
                            </TouchableOpacity>
                        </Text>
                    </View>

                </View>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        borderTopWidth: 0.5,
                        borderTopColor: Colors.colorGray,
                        width: widthScreen,
                        marginTop: 150,
                        marginBottom: 20,
                        position: 'relative',
                    }}>
                    <Text
                        style={{
                            color: Colors.colorGray,
                            textAlign: 'center',
                            fontSize: 13,
                            marginTop: 20
                        }}>
                        <Text>Instagram OT Facebook</Text>
                    </Text>
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