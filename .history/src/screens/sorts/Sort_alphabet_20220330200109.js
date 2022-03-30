import { StyleSheet, Text, View, TouchableOpacity, Pressable, Keyboard, ScrollView } from 'react-native'
import React from 'react'
import { Banner, RadioButton, TextInput } from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons'

export default function Sort_alphabet() {
    const [value, setValue] = React.useState('ascending');
    const [unsortedVal, setunsortedVal] = React.useState('');
    const [sortedVal, setsortedVal] = React.useState([]);

    const sort = async() => {
        var unsorted = unsortedVal.split('');
        console.log('unsorted', unsorted);

        if(value == 'ascending'){
            // ascending order
            for(var i = 0; i < unsorted.length; i++){
                for(var j = i ; j > 0 ;j--){
                    if(unsorted[j] < unsorted[j-1]){
                        var temp = unsorted[j];
                        unsorted[j] = unsorted[j-1];
                        unsorted[j-1] = temp;
                    }
                }
            }
        }else if(value == 'descending'){
            for(var i = 0; i < unsorted.length; i++){
                for(var j = i ; j > 0 ;j--){
                    if(unsorted[j] > unsorted[j-1]){
                        var temp = unsorted[j];
                        unsorted[j] = unsorted[j-1];
                        unsorted[j-1] = temp;
                    }
                }
            }
        }

        setsortedVal(unsorted);

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

                {/* <TouchableOpacity onPress={()=>setValue('odd_only')}>
                    <View style={styles.radio}>
                        <Text>Odd Only</Text>
                        <RadioButton value="odd_only" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>setValue('even_only')}>
                    <View style={styles.radio}>
                        <Text>Even Only</Text>
                        <RadioButton value="even_only" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>setValue('odd_descending')}>
                    <View style={styles.radio}>
                        <Text>Odd Descending Order</Text>
                        <RadioButton value="odd_descending" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>setValue('even_descending')}>
                    <View style={styles.radio}>
                        <Text>Even Descending Order</Text>
                        <RadioButton value="even_descending" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>setValue('odd_ascending')}>
                    <View style={styles.radio}>
                        <Text>Odd Ascending Order</Text>
                        <RadioButton value="odd_ascending" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>setValue('even_ascending')}>
                    <View style={styles.radio}>
                        <Text>Even Ascending Order</Text>
                        <RadioButton value="even_ascending" />
                    </View>
                </TouchableOpacity> */}
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
                right={<TextInput.Icon onPress={()=>sort()} style={{zIndex: 999}} name="send" />}
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
        zIndex: 99
    },
    sorted_output: {
        margin: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        padding: 10,
        fontSize: 18,
    }
})