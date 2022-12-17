import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

export const ProfileBody = ({
    name, accountName, profileImage, post, followers, following
}) => {
    return (
        <View>
            {accountName ? (<View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{accountName}</Text>
                        <Feather name='chevron-down'
                            style={{
                                fontSize: 20,
                                color: '#000000',
                                paddingHorizontal: 5,
                                opacity: 0.5
                            }} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Feather name='plus-square'
                                style={{ fontSize: 25, color: '#000000', paddingHorizontal: 15 }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Feather name='menu'
                                style={{ fontSize: 25, color: '#000000', }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            ) : null}

            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    flexDirection: 'row',
                    paddingVertical: 20
                }}>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={profileImage}
                        style={{
                            resizeMode: 'cover',
                            width: 80,
                            height: 80,
                            borderRadius: 100
                        }} />
                    <Text style={{ paddingVertical: 5, fontWeight: 'bold' }}>{name}</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{post}</Text>
                    <Text>Posts</Text>
                </View>
                <TouchableOpacity style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{followers}</Text>
                    <Text>followers</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{following}</Text>
                    <Text>following</Text>
                </TouchableOpacity>
            </View>



        </View>
    )
}

export const ProfileButtons = ({ id, name, accountName, profileImage }) => {
    const [follow, setFollow] = useState(follow);
    const navigation = useNavigation();
    return (
        <>
            {id === 0 ?
                (<View
                    style={{
                        flexDirection: 'row',
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        paddingVertical: 5
                    }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.push('EditProfile',
                                {
                                    name: name,
                                    accountName: accountName,
                                    profileImage: profileImage
                                })
                        }}
                        style={{
                            width: '100%'

                        }}>
                        <View
                            style={{
                                width: '100%',
                                height: 35,
                                borderRadius: 5,
                                borderColor: '#dedede',
                                borderWidth: 1,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontWeight: 'bold',
                                    letterSpacing: 1,
                                    opacity: 0.8
                                }}>Edit Profile</Text>
                        </View>
                    </TouchableOpacity>
                </View>) : (
                    <View
                        style={{
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            alignItems: 'center'
                        }}>
                        <TouchableOpacity
                            onPress={() => { setFollow(!follow) }}
                            style={{ width: '42%' }}>
                            <View
                                style={{
                                    width: '100%',
                                    height: 35,
                                    backgroundColor: follow ? null : '#3493d9',
                                    borderRadius: 5,
                                    borderWidth: follow ? 1 : 0,
                                    borderColor: '#dedede',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <Text style={{ color: follow ? '#000000' : '#ffffff' }}>
                                    {follow ? 'Following' : 'follow'}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '42%' }}>
                            <View
                                style={{
                                    width: '100%',
                                    height: 35,
                                    backgroundColor: '#ffffff',
                                    borderRadius: 5,
                                    borderWidth: 1,
                                    borderColor: '#dedede',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <Text style={{ color: '#000000' }}>
                                    Messege
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: '10%',
                                height: 35,
                                backgroundColor: '#ffffff',
                                borderRadius: 5,
                                borderWidth: 1,
                                borderColor: '#dedede',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <Feather name='chevron-down' style={{ fontSize: 20, color: '#000000' }} />
                        </TouchableOpacity>
                    </View>
                )

            }
        </>
    )
}