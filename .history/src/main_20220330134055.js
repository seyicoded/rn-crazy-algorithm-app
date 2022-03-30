import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './screens/index'
import Sort from './screens/sort'
import Filter from './screens/filter'

const StackNav = createStackNavigator()

export default function Main() {
  return (
    <NavigationContainer>
        <StackNav.Navigator>
            <StackNav.Screen name="Home" options={{header: 'none'}} component={Home} />
            <StackNav.Screen name="Filter" component={Filter} />
            <StackNav.Screen name="Sort" component={Sort} />
        </StackNav.Navigator>
    </NavigationContainer>
  )
}