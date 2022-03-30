import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../layout/header'
import { List } from 'react-native-paper';

export default function Index({route, navigation}) {

    return (
        <View>
            <Header title="Home" visible={false} navigation={navigation} />
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
  