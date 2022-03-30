import { StyleSheet, Text, View, TouchableOpacity, Pressable, Keyboard, ScrollView } from 'react-native'
import React from 'react'
import { Banner, RadioButton, TextInput } from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons'

export default function Sort_simple_number() {
    const [value, setValue] = React.useState('ascending');
    const [unsortedVal, setunsortedVal] = React.useState('');
    const [sortedVal, setsortedVal] = React.useState([6,7,7]);

    const sort = async() => {
        let unsorted = unsortedVal.split('');
        console.log('unsorted', unsorted);
    }

  return (
      <Pressable onPress={()=>{Keyboard.dismiss()}} style={{flex: 1,}}>
        <ScrollView style={styles.container}>
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
                <TouchableOpacity onPress={()=>setValue('ascending')}>
                    <View style={styles.radio}>
                        <Text>Ascending Order</Text>
                        <RadioButton value="ascending" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setValue('descending')}>
                    <View style={styles.radio}>
                        <Text>Descending Order</Text>
                        <RadioButton value="descending" />
                    </View>
                </TouchableOpacity>
            </RadioButton.Group>

            <Text />
            <Text style={styles.title_element}>Enter Numeric Input to Sort</Text>
            <TextInput
                label='Enter Input'
                mode='outlined'
                style={styles.input}
                value={unsortedVal}
                multiline={true}
                keyboardType='numeric'
                returnKeyType='done'
                right={<TextInput.Icon onPress={()=>sort()} style={{zIndex: 99}} name="send" />}
                onChangeText={text => setunsortedVal(text)}
            />

            <Text />

            {
                sortedVal.length > 0 ?
                <View>
                    <Text style={[styles.title_element, {marginTop: 14}]}>Sorted Output</Text>
                    <Text style={styles.sorted_output}>{sortedVal.join('')}</Text>
                </View>
                :<></>
            }
        </ScrollView>
    </Pressable>
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
        paddingHorizontal: 8,
    },
    input: {
        marginHorizontal: 10,
        marginVertical: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        paddingHorizontal: 8,
    },
    sorted_output: {
        margin: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
    }
})