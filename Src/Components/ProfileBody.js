import { View, Text, Image } from 'react-native'
import React from 'react'

export const ProfileBody = ({
    name, accountName, profileImage, post, followers, following
}) => {
    return (
        <View>
            {accountName ? null :
                (
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
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{following}</Text>
                            <Text>following</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{followers}</Text>
                            <Text>followers</Text>
                        </View>
                    </View>
                )

            }
        </View>
    )
}

export default ProfileBody