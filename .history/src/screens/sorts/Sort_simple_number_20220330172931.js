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
            icon={({size}) => (
                <Image
                source={{
                    uri: 'https://sctidev.com/assets/img/favicon.png',
                }}
                style={{
                    width: size,
                    height: size,
                    borderRadius: 4,
                    elevation: 7,
                }}
                />
            )}>
                <View>
                    <Text style={{fontWeight: '600', fontSize: 18}}>Objectives</Text>
                    <Text style={{fontSize: 12}}>Just a Prep Complexly on Sorting</Text>
                </View>
        </Banner>
      <Text>Sort_simple_number</Text>
    </View>
  )
}

const styles = StyleSheet.create({})