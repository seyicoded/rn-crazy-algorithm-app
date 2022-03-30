import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Banner } from 'react-native-paper';

export default function Sort_simple_number() {
  return (
    <View>
        <Banner
            visible={true}
            actions={[
            ]}
            >
                <View>
                    <Text style={{fontWeight: '600', fontSize: 18}}>Objectives</Text>
                    <Text />
                    <Text style={{fontSize: 12}}>Sorting Any numeric input in orders, depending on mood selected</Text>
                </View>
        </Banner>
      <Text>Sort_simple_number</Text>
    </View>
  )
}

const styles = StyleSheet.create({})