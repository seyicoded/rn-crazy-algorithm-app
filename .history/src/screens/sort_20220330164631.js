import { View, Text, Image } from 'react-native'
import React from 'react'
import { List, Banner } from 'react-native-paper';
import Header from '../layout/header'

export default function Sort({route, navigation}) {
    const title = route.params.title;
    const [visible, setVisible] = React.useState(true);
    
  return (
    <View>
        <Header title={title} visible={true} navigation={navigation} />
        <Banner
            visible={visible}
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
            There was a problem processing a transaction on your credit card.
        </Banner>
      <Text>main</Text>
    </View>
  )
}