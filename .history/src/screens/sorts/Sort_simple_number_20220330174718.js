import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
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
            <TouchableOpacity onPress={()=>setValue('first')}>
                <View style={styles.radio}>
                    <Text>First</Text>
                    <RadioButton value="first" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setValue('second')}>
                <View style={styles.radio}>
                    <Text>Second</Text>
                    <RadioButton value="second" />
                </View>
            </TouchableOpacity>
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
    },
    radio: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        padding: 3,
    }
})