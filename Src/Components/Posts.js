import { View, Text, Image, TouchableOpacity, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import { dataPosts } from './DataBase'
import { Colors } from './Colors'

const Posts = () => {
    return (
        <View>
            {
                dataPosts.map((data, index) => {
                    const [like, setLike] = useState(data.isLiked)
                    const [caption, setCaption] = useState(data.captions)
                    return (
                        <View
                            key={data.id}
                            style={{
                                paddingBottom: 10,
                                borderBottomColor: Colors.colorGray2,
                                borderBottomWidth: 0.5
                            }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: 10
                                }}>
                                <TouchableOpacity style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <Image
                                        source={data.profile}
                                        style={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: 100
                                        }} />
                                    <View style={{ paddingLeft: 5 }}>
                                        <Text
                                            style={{ fontSize: 15, fontWeight: 'bold' }}>
                                            {data.name}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Feather
                                        name='more-vertical'
                                        style={{ fontSize: 20 }} />
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    justifyContent: 'center',
                                    position: 'relative',
                                    alignItems: 'center'
                                }}>
                                <Image
                                    source={data.post}
                                    style={{
                                        width: '100%',
                                        height: 400
                                    }} />
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginHorizontal: 12,
                                    marginVertical: 15
                                }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>
                                    <TouchableOpacity
                                        onPress={() => { setLike(!like) }}>
                                        <AntDesign
                                            name={like ? 'heart' : 'hearto'}
                                            style={{
                                                paddingRight: 10,
                                                fontSize: 25,
                                                color: like ? '#6C2E1F' : '#000000'
                                            }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Ionicons
                                            name='ios-chatbubble-outline'
                                            style={{
                                                paddingRight: 10,
                                                fontSize: 25,
                                            }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Feather
                                            name='navigation'
                                            style={{
                                                fontSize: 25,
                                            }} />
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity>
                                    <Feather
                                        name='bookmark'
                                        style={{
                                            fontSize: 25,
                                        }} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ paddingHorizontal: 15 }}>
                                <Text>
                                    Liked by {like ? 'You and' : ''}{' '}
                                    {like ? data.like + 1 : data.like} others
                                </Text>
                                {caption.length < 90 ?
                                    <Text
                                        style={{
                                            fontWeight: '500',
                                            fontSize: 14,
                                            paddingVertical: 2
                                        }}>
                                        {caption}
                                    </Text> :
                                    <TouchableOpacity
                                        style={{
                                            fontWeight: '500',
                                            fontSize: 14,
                                            paddingVertical: 2
                                        }}>
                                        <Text>
                                            {caption.substring(0, 90)}
                                            <Text
                                                style={{
                                                    color: Colors.colorGray
                                                }}>...more</Text>
                                        </Text>

                                    </TouchableOpacity>
                                }
                                <TouchableOpacity>
                                    <Text
                                        style={{
                                            opacity: 0.4,
                                            paddingVertical: 2
                                        }}>
                                        View All Comments
                                    </Text>
                                </TouchableOpacity>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between'
                                    }}>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }}>
                                        <Image
                                            source={data.profile}
                                            style={{
                                                width: 25,
                                                height: 25,
                                                borderRadius: 100,
                                                backgroundColor: 'orange',
                                                marginRight: 10
                                            }} />
                                        <TextInput
                                            placeholder='Add a Comment'
                                            style={{
                                                opacity: 0.5,
                                            }} />
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }}>
                                        <TouchableOpacity>
                                            <Entypo
                                                name='emoji-happy'
                                                style={{
                                                    fontSize: 15,
                                                    color: '#90ee90',
                                                    marginRight: 10
                                                }} />
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Entypo
                                                name='emoji-neutral'
                                                style={{
                                                    fontSize: 15,
                                                    color: '#ff1493',
                                                    marginRight: 10
                                                }} />
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Entypo
                                                name='emoji-sad'
                                                style={{
                                                    fontSize: 15,
                                                    color: '#800000'
                                                }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <Text style={{ paddingTop: 3, fontSize: 11 }}>
                                    {data.time}
                                </Text>
                            </View>
                        </View>
                    );
                })
            }
        </View>
    )
}

export default Posts