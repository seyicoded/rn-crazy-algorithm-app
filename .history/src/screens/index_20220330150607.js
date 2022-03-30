import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Header from '../layout/header'
import { List, Avatar, Card, Title, Paragraph, Button } from 'react-native-paper';

const data = [
    {
        id: 'Sort',
        image: 'https://picsum.photos/700',
        title: 'Sort',
    },
    {
        id: 'Filter',
        image: 'https://picsum.photos/700',
        title: 'Filter',
    },
]

export default function Index({route, navigation}) {

    return (
        <View style={styles.container}>
            <Header title="Home" visible={false} navigation={navigation} />
            <Text style={styles.header}>Let's Prep Shall We</Text>

            <FlatList
                data={data}
                style={styles.list}
                renderItem={({ item }) => {
                    return (
                        <Card style={styles.card}>
                            <Card.Cover source={{ uri: item.image }} />
                            <Card.Actions style={{justifyContent: 'center'}}>
                                <Button onPress={()=>navigation.navigate(item.id)}>{item.title}</Button>
                            </Card.Actions>
                        </Card>
                    )
                }}
                numColumns={1}
            />

            {/* <Card>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />

                <Card.Content>
                    <Title>Card title</Title>
                </Card.Content>
            </Card> */}

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#fff',
    },
    header: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
        color: 'darkblue'
    },
    list: {
        width: '100%',
    },
    card: {
        // backgroundColor: 'red',
    }
  });
  