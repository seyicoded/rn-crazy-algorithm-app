import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { List, Banner } from 'react-native-paper';
import Header from '../layout/header'

const data = [
    {
        id: 'Sort_simple_number',
        title: 'Sort Simple Numbers',
    },
    {
        id: 'Sort_aphlabet',
        title: 'Sort Aphlabet',
    },
]
export default function Sort({route, navigation}) {
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
                    <Text style={{fontSize: 12}}>Just a Prep Complexly on Sorting</Text>
                </View>
        </Banner>
      
      <FlatList 
      data={data}
      renderItem={item=>{
          return (
            <List.Item
            title="First Item"
            description="Item description"
            style={styles.list}
            // left={props => <List.Icon {...props} icon="folder" />}
          />
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
    }
});