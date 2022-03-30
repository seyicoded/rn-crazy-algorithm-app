import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Banner, RadioButton } from 'react-native-paper';

export default function Sort_simple_number() {
  return (
    <View style={styles.container}>
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
        <Text />
        <Text styles={styles.title_element}>Select Mode</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title_element: {
        fontWeight: '600',
        fontSize: 18,
        paddingLeft: 8
    }
})