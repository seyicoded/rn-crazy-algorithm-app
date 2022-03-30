import { View, Text } from 'react-native'
import React from 'react'
import { List } from 'react-native-paper';
import Header from '../layout/header'

export default function Sort({route, navigation}) {
  return (
    <View>
        <Header title="Home" visible={false} navigation={navigation} />
      <Text>main</Text>
    </View>
  )
}