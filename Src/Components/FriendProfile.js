import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

import { ProfileBody, ProfileButtons } from './ProfileBody'
import { dataFriendsProfile } from './DataBase'

const FriendProfile = ({ route }) => {
    const navigation = useNavigation();
    const { name, profileImage, follow, post, followers, following } = route.params;
    return (
        <View
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#ffffff',
                padding: 10
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => { navigation.goBack() }}>
                    <Ionicons
                        name='arrow-back'
                        style={{ fontSize: 25, color: '#000000' }} />
                </TouchableOpacity>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '92%'
                    }}>
                    <Text style={{ fontSize: 20, marginLeft: 10, fontWeight: 'bold' }}>{name}</Text>
                    <TouchableOpacity>
                        <Feather
                            name='more-vertical'
                            style={{ fontSize: 20, color: '#000000' }} />
                    </TouchableOpacity>
                </View>
            </View>
            <ProfileBody
                name={name}
                post={post}
                profileImage={profileImage}
                follow={follow}
                followers={followers}
                following={following} />
            <ProfileButtons id={1} />
            <Text style={{ paddingVertical: 20, fontSize: 15, fontWeight: 'bold' }}>Suggestion for You</Text>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ paddingTop: 10 }}>
                {dataFriendsProfile.name === name ? null : (
                    dataFriendsProfile.map((data, index) => {
                        const [isfollow, setIsFollow] = useState(false)
                        const [close, setClose] = useState(false)
                        return (
                            <View key={index}>
                                {
                                    data.name === name || close ? null :
                                        (
                                            <TouchableOpacity>
                                                <View
                                                    style={{
                                                        width: 160,
                                                        height: 200,
                                                        margin: 3,
                                                        position: 'relative',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        borderWidth: 0.5,
                                                        borderColor: '#dedede',
                                                        borderRadius: 2
                                                    }}>
                                                    <TouchableOpacity
                                                        onPress={() => { setClose(!close) }}
                                                        style={{
                                                            position: 'absolute',
                                                            top: 10,
                                                            right: 10
                                                        }}>
                                                        <AntDesign
                                                            name='close'
                                                            style={{ fontSize: 20, color: '#000000', opacity: 0.5 }} />
                                                    </TouchableOpacity>
                                                    <Image
                                                        source={data.profileImage}
                                                        style={{
                                                            width: 80,
                                                            height: 80,
                                                            borderRadius: 100,
                                                            margin: 10
                                                        }}
                                                    />
                                                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{data.name}</Text>
                                                    <Text style={{ fontSize: 14 }}>{data.accountName}</Text>
                                                    <TouchableOpacity
                                                        onPress={() => { setIsFollow(!isfollow) }}
                                                        style={{ width: '80%', paddingVertical: 10 }}>
                                                        <View
                                                            style={{
                                                                width: '100%',
                                                                height: 30,
                                                                backgroundColor: isfollow ? null : '#3493d9',
                                                                borderRadius: 5,
                                                                borderWidth: isfollow ? 1 : 0,
                                                                borderColor: '#dedede',
                                                                justifyContent: 'center',
                                                                alignItems: 'center'
                                                            }}>
                                                            <Text style={{ color: isfollow ? '#000000' : '#ffffff' }}>
                                                                {isfollow ? 'Following' : 'Follow'}
                                                            </Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                }
                            </View>
                        )
                    })
                )

                }
            </ScrollView>
        </View>
    )
}

export default FriendProfile