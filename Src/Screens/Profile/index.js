import { View, Text } from 'react-native'
import React from 'react'
import { ProfileBody, ProfileButtons } from '../../Components/ProfileBody'

const Profile = () => {
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
    </View>
  )
}
export default Profile