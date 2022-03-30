import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Appbar } from 'react-native-paper';

export default function Header({title, visible, navigation}) {
    // const [visible, setVisible] = useState(false);

    if(visible){
        return (
            <Appbar.Header style={{backgroundColor: 'darkblue'}}>
                {
                    (visible) ? 
                    <Appbar.BackAction onPress={()=>navigation.goBack()} />
                    :<></>
                }
                <Appbar.Content title={title} />
            </Appbar.Header>
          )
    }else{
        return (
            <Appbar.Header style={{backgroundColor: 'darkblue'}}>
                <Appbar.Content title={title} />
            </Appbar.Header>
          )
    }
  
}