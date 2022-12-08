import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { DataSearch } from './DataSearch'

const SearchContent = () => {
    return (
        <View>
            {
                DataSearch.map((data, index) => {
                    return (
                        <>
                            {data.id === 0 ?
                                <View
                                    key={index}
                                    style={{
                                        flexDirection: 'row',
                                        flexWrap: 'wrap',
                                        justifyContent: 'space-between'
                                    }}>
                                    {data.images.map((imageData, imgIndex) => {
                                        return (
                                            <TouchableOpacity
                                                key={imgIndex}
                                                style={{
                                                    paddingBottom: 2
                                                }}>
                                                <Image
                                                    source={imageData}
                                                    style={{
                                                        width: 129,
                                                        height: 150
                                                    }} />
                                            </TouchableOpacity>
                                        )
                                    })
                                    }
                                </View>
                                :
                                null
                            }

                            {data.id === 1 ?
                                <View
                                    key={index + data.id}
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between'
                                    }}>
                                    <View style={{
                                        flexDirection: 'row',
                                        flexWrap: 'wrap',
                                        width: 261,
                                        justifyContent: 'space-between'
                                    }}>
                                        {data.images.slice(0, 4).map((imageData, imgIndex) => {
                                            return (
                                                <TouchableOpacity
                                                    key={imgIndex}
                                                    style={{ paddingBottom: 2 }}>
                                                    <Image
                                                        source={imageData}
                                                        style={{
                                                            width: 129,
                                                            height: 150
                                                        }} />
                                                </TouchableOpacity>
                                            )
                                        })}
                                    </View>
                                    <TouchableOpacity
                                        style={{ marginLeft: 2 }}>
                                        <Image
                                            source={data.images[4]}
                                            style={{
                                                width: 129,
                                                height: 300
                                            }} />
                                    </TouchableOpacity>
                                </View>
                                :
                                null
                            }

                            {data.id === 2 ? (
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between'
                                    }}>
                                    <TouchableOpacity
                                        style={{ paddingRight: 2 }}>
                                        <Image
                                            source={data.images[2]}
                                            style={{
                                                width: 260,
                                                height: 300
                                            }} />
                                    </TouchableOpacity>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            flexWrap: 'wrap',
                                            width: 130,
                                            justifyContent: 'space-between'
                                        }}>
                                        {data.images.slice(0, 2).map((imageData, imgIndex) => {
                                            return (
                                                <TouchableOpacity
                                                    style={{ paddingBottom: 2 }}>
                                                    <Image
                                                        source={imageData}
                                                        style={{
                                                            width: 129,
                                                            height: 150
                                                        }} />
                                                </TouchableOpacity>
                                            )
                                        })}
                                    </View>
                                </View>
                            ) :
                                null
                            }
                        </>
                    )
                })
            }
        </View>
    )
}

export default SearchContent