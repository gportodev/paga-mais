import React from 'react'

import { Background, Container, Logo, Button, Text } from './styles'

import { AppLoading } from 'expo'

import { useFonts, Roboto_300Light } from '@expo-google-fonts/roboto'

import img from '../../assets/img.png'
import logo from '../../assets/logo.png'

export default function Home ({ navigation }) {
  const [fontsLoaded] = useFonts({
    Roboto_300Light
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Background source={img}>
      <Container>
        <Logo source={logo} />
        <Button onPress={() => navigation.navigate('Main')}>
          <Text style={{ fontFamily: 'Roboto_300Light' }}>Entrar</Text>
        </Button>
      </Container>

    </Background>
  )
}
