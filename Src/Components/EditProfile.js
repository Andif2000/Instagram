import { View, Text, TouchableOpacity, ToastAndroid, Image, TextInput } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Colors } from './Colors'

const EditProfile = ({ route, navigation }) => {
    const { name, accountName, profileImage } = route.params
    const ToastMessege = () => {
        ToastAndroid.show('Edited Successfully !', ToastAndroid.SHORT)
    }
    return (
        <View
            style={{ width: '100%', height: '100%', backgroundColor: '#ffffff' }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 10
                }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Ionicons name='close-outline' style={{ fontSize: 35 }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Edit Profile</Text>
                <TouchableOpacity
                    onPress={() => {
                        ToastMessege()
                        navigation.goBack()
                    }}>
                    <Ionicons name='checkmark' style={{ fontSize: 35, color: '#3493d9' }} />
                </TouchableOpacity>
            </View>
            <View
                style={{ padding: 20, alignItems: 'center' }}>
                <Image
                    source={profileImage}
                    style={{ width: 80, height: 80, borderRadius: 100 }} />
                <TouchableOpacity>
                    <Text
                        style={{ color: '#3493d9', paddingVertical: 5 }}>Change Profile Image</Text>
                </TouchableOpacity>
            </View>
            <View
                style={{ padding: 10 }}>
                <View>
                    <Text style={{ opacity: 0.5 }}>Name</Text>
                    <TextInput
                        placeholder='name'
                        defaultValue={name}
                        style={{
                            fontSize: 16,
                            borderBottomWidth: 1,
                            borderColor: '#cdcdcd',
                            paddingVertical: 10
                        }} />
                </View>
                <View
                    style={{ paddingVertical: 10 }}>
                    <Text style={{ opacity: 0.5 }}>Username</Text>
                    <TextInput
                        placeholder='name'
                        defaultValue={accountName}
                        style={{
                            fontSize: 16,
                            borderBottomWidth: 1,
                            borderColor: '#cdcdcd',
                            paddingVertical: 10
                        }} />
                </View>
                <View
                    style={{ paddingVertical: 10 }}>
                    <TextInput
                        placeholder='Website'
                        style={{
                            fontSize: 16,
                            borderBottomWidth: 1,
                            borderColor: '#cdcdcd',
                            paddingVertical: 10
                        }} />
                </View>
                <View
                    style={{ paddingVertical: 10 }}>
                    <TextInput
                        placeholder='Bio'
                        style={{
                            fontSize: 16,
                            borderBottomWidth: 1,
                            borderColor: '#cdcdcd',
                            paddingVertical: 10
                        }} />
                </View>
            </View>
            <TouchableOpacity>
                <Text
                    style={{
                        color: '#3493d9',
                        marginVertical: 10,
                        padding: 10,
                        borderTopWidth: 1,
                        borderBottomWidth: 1,
                        borderColor: '#cdcdcd'
                    }}>
                    Switch to Professional Account
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text
                    style={{
                        color: '#3493d9',
                        marginVertical: 10,
                        padding: 10,
                        borderTopWidth: 1,
                        borderBottomWidth: 1,
                        borderColor: '#cdcdcd'
                    }}>
                    Personal Information Setting
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default EditProfile