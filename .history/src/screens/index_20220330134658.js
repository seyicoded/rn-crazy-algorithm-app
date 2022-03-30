import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
// import {StyleSheet} from 'react-native'
import { Header } from '../layout/header'

export default function Index() {
  return (
    <View>
        <Header />
      <Text>main</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });
  