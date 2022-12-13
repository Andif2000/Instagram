import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { dataStory } from './DataBase'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'

const Story = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{
        paddingVertical: 10
      }}>
      {
        dataStory.map((data, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                navigation.push('Status', {
                  name: data.name,
                  profile: data.profile,
                  story: data.story
                })
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  paddingHorizontal: 8,
                  position: 'relative'
                }}>
                {
                  data.id == 0 ?
                    (
                      <View
                        style={{
                          position: 'absolute',
                          bottom: 18,
                          right: 12,
                          zIndex: 1
                        }}>
                        <Entypo
                          name='circle-with-plus'
                          style={{
                            fontSize: 20,
                            color: '#405de6',
                            backgroundColor: '#ffffff',
                            borderRadius: 100
                          }} />
                      </View>
                    ) :
                    null
                }
                <View
                  style={{
                    width: 68,
                    height: 68,
                    backgroundColor: '#ffffff',
                    borderWidth: 1.8,
                    borderRadius: 100,
                    borderColor: '#c13584',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                  <Image
                    source={data.profile}
                    style={{
                      resizeMode: 'cover',
                      width: '92%',
                      height: '92%',
                      borderRadius: 100,
                      backgroundColor: 'orange'
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    textAlign: 'center',
                    opacity: data.id == 0 ? 0.5 : 1,
                    paddingTop: 5,
                    textTransform: 'capitalize'
                  }}>
                  {(data.name).length > 10 ? (data.name).substring(0, 10) + '...' : data.name}
                </Text>
              </View>
            </TouchableOpacity>
          )
        })
      }
    </ScrollView>
  )
}

export default Story