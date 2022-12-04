import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { dataStory } from './DataList'
import { LinearGradient } from 'expo-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Colors } from './Colors'

const FlatListStory = () => { 

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
                flex: 1,
                borderTopWidth: 0.2,
                borderBottomWidth: 0.2,
                borderColor: Colors.colorGray
            }}>
            <TouchableOpacity>
                <View
                    style={{ padding: 7 }}>
                    <Image
                        source={require('../../assets/Images/ImagesProfile/foto10.jpg')}
                        style={styles.userImage} />
                    <Text style={[styles.userName, { textTransform: 'capitalize' }]}>Your Story</Text>
                </View>
                <View style={{ position: 'absolute' }}>
                    <View style={styles.btnContainer}>
                        <Ionicons
                            name='add'
                            style={styles.addButton} />
                    </View>
                </View>
            </TouchableOpacity>
            {dataStory.map((item, index) => (
                <View
                    key={index}
                    style={{
                        width: 85,
                        padding: 5
                    }}>
                    <TouchableOpacity>
                        <LinearGradient
                            colors={['#fbad50', '#e95950', '#bc2a8d']}
                            style={{
                                padding: 2,
                                borderRadius: 50
                            }}>
                            <Image
                                source={item.profile}
                                style={[styles.userImage, { borderWidth: 2 }]} />
                        </LinearGradient>
                        <Text style={[styles.userName, { textTransform: 'lowercase' }]}>{(item.name).substring(0,9)+'...'}</Text>
                    </TouchableOpacity>
                </View>
            ))
            }
        </ScrollView>
    )
}

export default FlatListStory

const styles = StyleSheet.create({
    userImage: {
        height: 70,
        width: 70,
        borderRadius: 50,
        borderColor: '#ffffff',
    },
    userName: {
        textAlign: 'center',
        fontSize: 12,
        marginTop: 5
    },
    btnContainer: {
        marginTop: 55,
        backgroundColor: '#4c68d7',
        marginLeft: 55,
        width: 23,
        height: 23,
        borderRadius: 50,
        borderWidth: 1.5,
        borderColor: '#ffffff',
        justifyContent: 'center'
    },
    addButton: {
        color: '#ffffff',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 12,
        fontWeight: 'bold'
    }
});