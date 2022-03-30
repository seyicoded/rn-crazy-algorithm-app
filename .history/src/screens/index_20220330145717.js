import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../layout/header'
import { List, Avatar, Card, Title, Paragraph, Button } from 'react-native-paper';

export default function Index({route, navigation}) {

    return (
        <View>
            <Header title="Home" visible={false} navigation={navigation} />
            <Text style={styles.header}>Let's Prep Shall We</Text>

            <Card>
                {/* <Card.Title title="Card Title"/> */}
                
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                
                <Card.Content>
                    <Title>Card title</Title>
                </Card.Content>
            </Card>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
        color: 'darkblue'
    }
  });
  