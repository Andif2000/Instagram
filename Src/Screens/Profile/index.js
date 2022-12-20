import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { ProfileBody, ProfileButtons } from '../../Components/ProfileBody'
import Entypo from 'react-native-vector-icons/Entypo'
import BottomTabView from '../../Components/BottomTabView'

const Profile = () => {
  const circuls = [];
  const numberOfCircels = 10;

  for (let index = 0; index < numberOfCircels; index++) {
    circuls.push(
      <View key={index}>
        {index === 0 ?
          (
            <TouchableOpacity
              style={{
                width: 60,
                height: 60,
                borderRadius: 100,
                borderWidth: 1,
                opacity: 0.7,
                marginHorizontal: 5,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <View>
                <Entypo name='plus' style={{ fontSize: 40, color: '#000000' }} />
              </View>
            </TouchableOpacity>
          ) :
          (
            <TouchableOpacity
              style={{
                width: 60,
                height: 60,
                borderRadius: 100,
                backgroundColor: '#000000',
                opacity: 0.1,
                marginHorizontal: 5
              }}>
              <View>

              </View>
            </TouchableOpacity>
          )}
      </View>
    )

  }
  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: '#ffffff' }}>
      <View style={{ width: '100%', padding: 10 }}>
        <ProfileBody
          name='Andi Fahmi'
          accountName='Andif20'
          profileImage={require('../../../assets/Images/ImagesProfile/foto3.jpg')}
          followers='2.5M'
          following='538'
          post='20' />
        <ProfileButtons
          id={0}
          name='Andi Fahmi'
          accountName='Andif20'
          profileImage={require('../../../assets/Images/ImagesProfile/foto3.jpg')}
        />
      </View>
      <View>
        <Text
          style={{ padding: 10, letterSpacing: 1, fontSize: 14 }}>
          Story  Highlights
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
          {circuls}
        </ScrollView>
      </View>
      <BottomTabView />
    </View>
  )
}
export default Profile