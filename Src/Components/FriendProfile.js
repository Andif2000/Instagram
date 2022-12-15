import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

import {ProfileBody} from './ProfileBody'

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
        </View>
    )
}

export default FriendProfile