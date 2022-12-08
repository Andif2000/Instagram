import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SearchBox from '../../Components/SearchBox'
import SearchContent from '../../Components/SearchContent'

const Search = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        position: 'relative'
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}>
        <SearchBox />
        <SearchContent />
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            margin: 25
          }}>
          <AntDesign
            name='pluscircleo'
            style={{
              fontSize: 40,
              opacity: 0.5
            }} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default Search