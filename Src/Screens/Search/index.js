import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import SearchBox from '../../Components/SearchBox'

const Search = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        position: 'relative'
      }}>
      <ScrollView>
        <SearchBox />
      </ScrollView>
    </View>
  )
}

export default Search