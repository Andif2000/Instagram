import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import { dataFriendsProfile } from '../../Components/DataBase'

const Activity = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff'
      }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          borderBottomWidth: 0.5,
          borderBottomColor: '#dedede',
          padding: 10
        }}>
        Activity
      </Text>
      <ScrollView style={{ margin: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>
          This Week
        </Text>
        <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
          {
            dataFriendsProfile.slice(0, 3).map((data, index) => {
              return (
                <TouchableOpacity key={index}>
                  <Text>{data.name}, </Text>
                </TouchableOpacity>
              )
            })
          }
          <Text>Started following You</Text>
        </View>
        <Text style={{ fontWeight: 'bold' }}>Earlier</Text>
        {
          dataFriendsProfile.slice(3, 6).map((data, index) => {
            return (
              <View key={index} style={{ width: '100%' }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingVertical: 20,
                    width: '100%'
                  }}>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      maxWidth: '64%'
                    }}>
                    <Image
                      source={data.profileImage}
                      style={{
                        width: 45,
                        height: 45,
                        borderRadius: 100,
                        marginRight: 10
                      }} />
                    <Text>
                      <Text style={{ fontWeight: 'bold' }}> {data.name}</Text>
                      , who you know, is on instagram
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

export default Activity