import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

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
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ margin: 10 }}>
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
            const [follow, setFollow] = useState(data.follow);
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
                  <TouchableOpacity
                    onPress={() => setFollow(!follow)}
                    style={{ width: follow ? 72 : 68 }}>
                    <View
                      style={{
                        width: '100%',
                        height: 30,
                        backgroundColor: follow ? null : '#3493d9',
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: follow ? 1 : 0,
                        borderColor: follow ? 'dedede' : null
                      }}>
                      <Text
                        style={{ color: follow ? '#000000' : '#ffffff' }}>
                        {follow ? 'Following' : 'Follow'}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )
          })
        }
        <Text style={{ fontWeight: 'bold', paddingVertical: 10 }}>Suggestion for You</Text>
        {
          dataFriendsProfile.slice(6, 12).map((data, index) => {
            const [follow, setFollow] = useState(data.follow);
            const [close, setClose] = useState(false);

            return (
              <View key={index}>
                {
                  close ? null :
                    (
                      <View
                        style={{
                          paddingVertical: 10,
                          flexDirection: 'row',
                          width: '100%',
                          justifyContent: 'space-between'
                        }}>
                        <View>
                          <TouchableOpacity
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              minWidth: '64%'
                            }}>
                            <Image
                              source={data.profileImage}
                              style={{
                                width: 45,
                                height: 45,
                                borderRadius: 100,
                                marginRight: 10
                              }}
                            />
                            <View style={{ width: '100%' }}>
                              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{data.name}</Text>
                              <Text style={{ fontSize: 12, opacity: 0.5 }}> {data.accountName}</Text>
                              <Text style={{ fontSize: 12, opacity: 0.5 }}> Suggestion for You</Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                        <View
                          style={{ flexDirection: 'row', alignItems: 'center' }}>
                          {
                            follow ? (
                              <TouchableOpacity
                                onPress={() => setFollow(!follow)}
                                style={{ width: follow ? 90 : 68 }}>
                                <View
                                  style={{
                                    width: '100%',
                                    height: 30,
                                    borderRadius: 5,
                                    backgroundColor: follow ? null : '#3493d9',
                                    borderWidth: follow ? 1 : 0,
                                    borderColor: 'dedede',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                  }}>
                                  <Text style={{ color: follow ? '#000000' : '#ffffff' }}>
                                    {follow ? 'Following' : 'Follow'}
                                  </Text>
                                </View>
                              </TouchableOpacity>
                            ) : (
                              <>
                                <TouchableOpacity
                                  onPress={() => setFollow(!follow)}
                                  style={{ width: follow ? 90 : 68 }}>
                                  <View
                                    style={{
                                      width: '100%',
                                      height: 30,
                                      borderRadius: 5,
                                      backgroundColor: follow ? null : '#3493d9',
                                      borderWidth: follow ? 1 : 0,
                                      borderColor: 'dedede',
                                      justifyContent: 'center',
                                      alignItems: 'center'
                                    }}>
                                    <Text style={{ color: follow ? '#000000' : '#ffffff' }}>
                                      {follow ? 'Following' : 'Follow'}
                                    </Text>
                                  </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                  onPress={() => setClose(true)}
                                  style={{ paddingHorizontal: 10 }}>
                                  <AntDesign
                                    name='close'
                                    style={{ fontSize: 14, color: '#000000', opacity: 0.8 }} />
                                </TouchableOpacity>
                              </>
                            )
                          }
                        </View>
                      </View>
                    )
                }
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

export default Activity