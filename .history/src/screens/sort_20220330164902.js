import { View, Text, Image } from 'react-native'
import React from 'react'
import { List, Banner } from 'react-native-paper';
import Header from '../layout/header'

export default function Sort({route, navigation}) {
    const title = route.params.title;
    
  return (
    <View>
        <Header title={title} visible={true} navigation={navigation} />
        <Banner
            visible={true}
            actions={[
            ]}
            icon={({size}) => (
                <Image
                source={{
                    uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
                }}
                style={{
                    width: size,
                    height: size,
                }}
                />
            )}>
                <View>
                    <Text style={{fontWeight: '600'}}>Let's Start</Text>
                    <Text style={{sontSize: 10}}>Just a Prep Complexly on Sorting</Text>
                </View>
        </Banner>
      <Text>main</Text>
    </View>
  )
}