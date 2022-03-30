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
                        <Text style={{fontSize: 12}}>Sorting Any alphabet input in orders, depending on mood selected</Text>
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
            <Text style={styles.title_element}>Sort By</Text>

            <RadioButton.Group onValueChange={byWhat => setbyWhat(byWhat)} value={byWhat}>
                <TouchableOpacity onPress={()=>setbyWhat('letter')}>
                    <View style={styles.radio}>
                        <Text>Letters</Text>
                        <RadioButton value="letter" />
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>setbyWhat('word')}>
                    <View style={styles.radio}>
                        <Text>Words</Text>
                        <RadioButton value="word" />
                    </View>
                </TouchableOpacity>

                
            </RadioButton.Group>

            <Text />
            <Text style={styles.title_element}>Enter Word Input to Sort</Text>
            <Text style={{fontSize: 10, marginLeft: 8}}>remember: 0-1, A-Z, a-z</Text>

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