import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Banner, RadioButton } from 'react-native-paper';

export default function Sort_simple_number() {
    const [value, setValue] = React.useState('first');
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
        <Text style={styles.title_element}>Select Mode</Text>

        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
            <View style={{flexDirection: 'row', backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
                <RadioButton value="first" />
                <Text>First</Text>
            </View>
            <View>
                <RadioButton value="second" />
                <Text>Second</Text>
            </View>
        </RadioButton.Group>

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