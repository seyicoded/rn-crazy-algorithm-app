import { View, Text } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper';

export default function Header({title, onBack, navigation}) {
  return (
    <Appbar.Header>
        <Appbar.BackAction onPress={()=>navigation.goBack()} />
        <Appbar.Content title={title} />
    </Appbar.Header>
  )
}