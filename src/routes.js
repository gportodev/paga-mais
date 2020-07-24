import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './pages/Home'
import MainScreen from './pages/Main'
import PlanoScreen from './pages/Plano'
import FaleMaisScreen from './pages/FaleMais'

const Stack = createStackNavigator()

export default function Route () {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Plano" component={PlanoScreen} />
        <Stack.Screen name="FaleMais" component={FaleMaisScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
