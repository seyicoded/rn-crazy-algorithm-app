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
            // extract array
            var returns = '-1';
            const array = arrayVal.toString().split(',');
            for(var i = 0 ; i < array.length ; i++ ){

                for(var j = i ; j > 0 ; j--){
                    if( (parseFloat(array[j]) + parseFloat(array[j - 1])) < unsortedVal ){
                        var present = (parseFloat(array[j]) + parseFloat(array[j - 1]));
                        if(parseFloat(present) > parseFloat(returns)){
                            returns = present;
                        }
                        // setsortedVal( returns.toString() )
                        // return ;
                    }
                }
            }

            setsortedVal(returns)
            return ;
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
                            {`Given an array A of integers and integer K, return the maximum S such that there exists ?? < j with A[i] + A[j] = S and S < K. If no such i, j exist satisfying this equation, return ???1.`}

                            <Text style={{fontSize: 10}}>
                                {`\n \n Example 1: Input: A a (34,23,1,24,75,33,54,8), K a 60 \nOutput: 58
                                    \nExplanation:
                                    \nWe can use 34 and 24 to sum 58 which is less than 60 and there's no pair with sum of 59. Therefore, the maximum sum is 58.
                                    \n Example 2:
                                    Input: A - (18,20,301, K = 15
                                    Output: -1
                                    \nExplanation: In this case it's not possible to get a pair sum less than 15.`}
                            </Text>
                        </Text>
                    </View>
            </Banner>
            
            <Text />
            
            <Text style={styles.title_element}>Enter Inputs</Text>
            <Text style={{fontSize: 10, marginLeft: 8}}>......</Text>

            <TextInput
                label='Enter Input for Array A: 1,2,3,4,5,6,7'
                mode='outlined'                
                style={styles.input}
                value={arrayVal}
                multiline={true}
                keyboardType='numbers-and-punctuation'
                onChangeText={text => setarrayVal(text)}
            />

            <TextInput
                label='Enter Input for K'
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