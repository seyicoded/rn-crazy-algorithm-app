import { StyleSheet, Text, View, TouchableOpacity, Pressable, Keyboard, ScrollView } from 'react-native'
import React from 'react'
import { Banner, RadioButton, TextInput } from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons'

export default function Multiplier_number() {
    const [value, setValue] = React.useState('ascending');
    const [byWhat, setbyWhat] = React.useState('letter');
    const [unsortedVal, setunsortedVal] = React.useState('');
    const [sortedVal, setsortedVal] = React.useState('');

    const calculate = (numbers, count) => {
        var number = unsortedVal;
        // check if length is one
        // if(number.length <= 1){
        //     setsortedVal(`final number is: ${number}, number of calculation: ${count}`);
        //     return ;
        // }

        // const num_array = (number).toString().split('');
        // var new_num = 1;
        // for (let i = 0; i < num_array.length; i++) {
        //     const element = parseInt(num_array[i]);
        //     new_num *= element;
        // }

        // count++;
        // console.log(new_num)
        do{
            if(number.length <= 1){
                setsortedVal(`final number is: ${number}, number of calculation: ${count}`);
                return ;
            }
            
            var num_array = (number).toString().split('');
            var new_num = 1;
            for (let i = 0; i < num_array.length; i++) {
                const element = parseInt(num_array[i]);
                new_num *= element;
            }
    
            count++;
            number = new_num;
            console.log(number.length)
        }while(number.length <= 1)
        // return calculate(new_num, count);
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
                            A number figure multiplier which multiple itself until it can't anymore.
                            <Text> e.g 39 as input, then this happens 3x9 = 27, 2 x 7 = 14, 1 x 4 = 4, so 4 is returned </Text>
                        </Text>
                    </View>
            </Banner>
            
            <Text />
            
            <Text style={styles.title_element}>Enter Input to Calculate</Text>
            <Text style={{fontSize: 10, marginLeft: 8}}>......</Text>

            <TextInput
                label='Enter Input'
                mode='outlined'                
                style={styles.input}
                value={unsortedVal}
                multiline={true}
                keyboardType='numeric'
                right={<TextInput.Icon forceTextInputFocus={false} onPress={()=>calculate(unsortedVal, 0)} style={{zIndex: 999}} name="send" />}
                onChangeText={text => setunsortedVal(text)}
            />

            <Text />

            {
                sortedVal.length > 0 ?
                <View>
                    <Text style={[styles.title_element, {marginTop: 14}]}>Sorted Output</Text>
                    <Text style={styles.sorted_output}>
                        {sortedVal}
                    </Text>
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