import { StyleSheet, Text, View, TouchableOpacity, Pressable, Keyboard, ScrollView } from 'react-native'
import React from 'react'
import { Banner, RadioButton, TextInput } from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons'

export default function Multiplier_number() {
    const [value, setValue] = React.useState('ascending');
    const [byWhat, setbyWhat] = React.useState('letter');
    const [unsortedVal, setunsortedVal] = React.useState('');
    const [sortedVal, setsortedVal] = React.useState([]);

    const sort = async() => {
        if(byWhat == 'letter'){
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

        }else{
            // sort by words
            var unsorted = unsortedVal.split(' ');
            console.log('unsorted', unsorted);

            if(value == 'ascending'){
                // ascending order
                for(var i = 0; i < unsorted.length; i++){
                    for(var j = i ; j > 0 ;j--){
                        if(unsorted[j].substring(0, 1) < unsorted[j-1].substring(0, 1)){
                            var temp = unsorted[j];
                            unsorted[j] = unsorted[j-1];
                            unsorted[j-1] = temp;
                        }
                    }
                }
            }else if(value == 'descending'){
                for(var i = 0; i < unsorted.length; i++){
                    for(var j = i ; j > 0 ;j--){
                        if(unsorted[j].substring(0, 1) > unsorted[j-1].substring(0, 1)){
                            var temp = unsorted[j];
                            unsorted[j] = unsorted[j-1];
                            unsorted[j-1] = temp;
                        }
                    }
                }
            }

            setsortedVal(unsorted);

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
                keyboardType='ascii-capable'
                returnKeyType='done'
                right={<TextInput.Icon forceTextInputFocus={false} onPress={()=>sort()} style={{zIndex: 999}} name="send" />}
                onChangeText={text => setunsortedVal(text)}
            />

            <Text />

            {
                sortedVal.length > 0 ?
                <View>
                    <Text style={[styles.title_element, {marginTop: 14}]}>Sorted Output</Text>
                    <Text style={styles.sorted_output}>{
                        (byWhat == 'letter') ? sortedVal.join('') : sortedVal.join(' ')
                        
                    }</Text>
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