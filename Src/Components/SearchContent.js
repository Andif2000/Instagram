import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { dataSearch } from './DataBase'

const SearchContent = (props) => {
    return (
        <View>
            {
                dataSearch.map((data, index) => {
                    return (
                        <View key={index}>
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
                                                onPressIn={() => { props.data(imageData) }}
                                                onPressOut={() => { props.data(null) }}
                                                style={{ paddingBottom: 2 }}>
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
                                    key={index}
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
                                                    onPressIn={() => { props.data(imageData) }}
                                                    onPressOut={() => { props.data(null) }}
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
                                        onPressIn={() => { props.data(data.images[4]) }}
                                        onPressOut={() => { props.data(null) }}
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
                                key={index}
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between'
                                    }}>
                                    <TouchableOpacity
                                        onPressIn={() => { props.data(data.images[2]) }}
                                        onPressOut={() => { props.data(null) }}
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
                                                    onPressIn={() => { props.data(imageData) }}
                                                    onPressOut={() => { props.data(null) }}
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
                                </View>
                            ) :
                                null
                            } 
                        </View>
                    );
                })
            }
        </View>
    )
}

export default SearchContent