import { View, Text } from 'react-native'
import React from 'react'
import { List } from 'react-native-paper';
import Header from '../layout/header'

export default function Filter({route, navigation}) {
    const title = route.params.title;
  return (
    <View>
    <Header title={title} visible={true} navigation={navigation} />
      <Text>main</Text>
    </View>
  )
}