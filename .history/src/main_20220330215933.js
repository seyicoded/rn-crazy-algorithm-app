import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './screens/index'
import Sort from './screens/sort'
import Filter from './screens/filter'
import Advance from './screens/advance'
import Sort_simple_number from './screens/sorts/Sort_simple_number'
import Sort_alphabet from './screens/sorts/Sort_alphabet'
import Filter_simple_number from './screens/filters/Filter_simple_number'
import Advance_number from './screens/advance/Advance_number'

const StackNav = createStackNavigator()

export default function Main() {
  return (
    <NavigationContainer>
        <StackNav.Navigator>
            <StackNav.Screen name="Home" options={{headerMode: 'none'}} component={Home} />
            <StackNav.Screen name="Filter" options={{headerMode: 'none'}} component={Filter} />
            <StackNav.Screen name="Sort" options={{headerMode: 'none'}} component={Sort} />
            <StackNav.Screen name="Advance" options={{headerMode: 'none'}} component={Advance} />

            {/* sort aspect */}
            <StackNav.Screen name="Sort_simple_number" options={{title: 'Number Sort', headerStyle: {backgroundColor: 'darkblue', color: 'white'}, headerTitleStyle: {color: 'white'}}} component={Sort_simple_number} />
            <StackNav.Screen name="Sort_alphabet" options={{title: 'Alphabet Sort', headerStyle: {backgroundColor: 'darkblue', color: 'white'}, headerTitleStyle: {color: 'white'}}} component={Sort_alphabet} />

            {/* filter aspect */}
            <StackNav.Screen name="Filter_simple_number" options={{title: 'Number Filter', headerStyle: {backgroundColor: 'darkblue', color: 'white'}, headerTitleStyle: {color: 'white'}}} component={Filter_simple_number} />
            <StackNav.Screen name="Advance_number" options={{title: 'Advance Number Section', headerStyle: {backgroundColor: 'darkblue', color: 'white'}, headerTitleStyle: {color: 'white'}}} component={Advance_number} />
        </StackNav.Navigator>
    </NavigationContainer>
  )
}