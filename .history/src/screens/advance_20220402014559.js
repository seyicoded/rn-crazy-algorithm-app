import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { List, Banner } from 'react-native-paper';
import Header from '../layout/header'

const data = [
    {
        id: 'Advance_number',
        title: 'Numbers Arena',
        dscription: 'A filtration & sorting of numbers, capable of accepting user input and sort/filtering.',
    },
    {
        id: 'Multiplier_number',
        title: 'Multiplier To Final Number',
        dscription: 'A number figure multiplier which multiple itself until it can\'t anymore.',
    },
    {
        id: 'TuringTest1',
        title: 'Turing Test 1',
        dscription: `Given an array A of integers and integer K, return the maximum S such that there exists ¡ < ; with A] + AU)
        = S and S < K. If no such i, j exist satisfying this equation, return •1.`,
    },
    {
        id: 'TuringTest2',
        title: 'Turing Test 2',
        dscription: `Suppose you're given a set which originally contains numbers from 1 to n. Unfortunately, due to a data error,
        one of the numbers in the set got duplicated to another number in the set, which results in a repetition of one
        number and a loss of another number.
        Given an array num representing the data status of this set after the error, find and return the number that
        occurs twice and the number that is missing in the form of an array.`,
    },
]
export default function Advance({route, navigation}) {
    const title = route.params.title;
    
  return (
    <View style={styles.container}>
        <Header title={title} visible={true} navigation={navigation} />
        <Banner
            visible={true}
            actions={[
            ]}
            icon={({size}) => (
                <Image
                source={{
                    uri: 'https://sctidev.com/assets/img/favicon.png',
                }}
                style={{
                    width: size,
                    height: size,
                    borderRadius: 4,
                    elevation: 7,
                }}
                />
            )}>
                <View>
                    <Text style={{fontWeight: '600', fontSize: 18}}>Let's Start</Text>
                    <Text style={{fontSize: 12}}>Just a Prep Complexly on Other Advance stuff (randomly tho)</Text>
                </View>
        </Banner>
      
      <FlatList 
      data={data}
      renderItem={({item})=>{
          return (
                <TouchableOpacity onPress={()=>navigation.navigate(item.id, {title: item.title})}>
                    <List.Item
                    title={item.title}
                    description={item.dscription}
                    descriptionNumberOfLines={1}
                    style={styles.list}
                    // left={props => <List.Icon {...props} icon="folder" />}
                />
            </TouchableOpacity>
          )
      }}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
    },
    list: {
        borderBottomWidth: 0.41,
        borderBottomColor: '#ccc',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0.01 },
        shadowOpacity: 0.091,
        marginTop: 4.8
    }
});