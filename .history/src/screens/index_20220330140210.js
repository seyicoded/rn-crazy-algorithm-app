import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../layout/header'

export default function Index({route, navigation}) {

    const _goBack = async() => {

    }

    return (
        <View>
            <Header title="Home" onBack={onBack} navigation={navigation} />
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
  