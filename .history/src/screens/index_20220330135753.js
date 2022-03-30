import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../layout/header'

export default function Index({title, onBack, navigator}) {

    const _goBack = async() => {

    }

    return (
        <Appbar.Header>
        <Appbar.BackAction onPress={()=>_goBack} />
        <Appbar.Content title={title} />
        </Appbar.Header>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });
  