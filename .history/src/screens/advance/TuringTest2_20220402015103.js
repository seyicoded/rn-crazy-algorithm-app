import { StyleSheet, Text, View, TouchableOpacity, Pressable, Keyboard, Alert, ScrollView } from 'react-native'
import React from 'react'
import { Banner, RadioButton, TextInput } from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons'

export default function TuringTest2() {
    const [value, setValue] = React.useState('ascending');
    const [byWhat, setbyWhat] = React.useState('letter');
    const [unsortedVal, setunsortedVal] = React.useState('');
    const [sortedVal, setsortedVal] = React.useState('');
    const [arrayVal, setarrayVal] = React.useState('');
    const [calDone, setcalDone] = React.useState([]);

    // console.log(calDone)

    const calculate = async() => {
        try{
            
        }catch(e){
            console.log(e)
            Alert.alert('An error occurred')
        }
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
                        <Text style={{fontSize: 12}}>
                            {`Suppose you're given a set which originally contains numbers from 1 to n. Unfortunately, due to a data error,
one of the numbers in the set got duplicated to another number in the set, which results in a repetition of one
number and a loss of another number.
Given an array num representing the data status of this set after the error, find and return the number that
occurs twice and the number that is missing in the form of an array.`}

                            <Text style={{fontSize: 10}}>
                                {`\n \nExample 1:
                                \nInput: nuns » (1,2,3,4,3)\n Output: (3,5)\nExplanation:\n3 is repeated twice and 5 is missing.\nExample 2:\nInput: nuns a (1,2,2)\nOutput: (2,3)\nExplanation:\n2 is repeated twice and 3 is missing.`}
                            </Text>
                        </Text>
                    </View>
            </Banner>
            
            <Text />
            
            <Text style={styles.title_element}>Enter Inputs</Text>
            <Text style={{fontSize: 10, marginLeft: 8}}>......</Text>

            <TextInput
                label='Enter Input for Array A: 1,2,3,4,3,6,7'
                mode='outlined'                
                style={styles.input}
                value={unsortedVal}
                multiline={true}
                keyboardType='numeric'
                right={<TextInput.Icon forceTextInputFocus={false} onPress={()=>calculate()} style={{zIndex: 999}} name="send" />}
                onChangeText={text => setunsortedVal(text)}
            />
            
            <Text />

            {
                sortedVal.length > 0 ?
                <View>
                    <Text style={[styles.title_element, {marginTop: 14}]}>Solved Output</Text>
                    <Text style={styles.sorted_output}>
                        {sortedVal}
                    </Text>

                    <Text/>
                    {/* <Text style={{marginLeft: 10}}>Belows are the calculation done:</Text>
                    <View style={{alignItems: 'center',}}>
                        {
                            calDone.map((item, index) => {
                                return <Text style={{fontSize: 23, marginTop: 3}}>{item}</Text>
                            })
                        }
                    </View> */}
                    
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
        // backgroundColor: 'rgba(0, 0, 0, 0.05)',
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