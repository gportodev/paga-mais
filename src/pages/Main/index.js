import React from 'react'

import { List, Cover, Name, Button, Icon } from './styles'

import { AppLoading } from 'expo'

import { useFonts, Roboto_300Light, Roboto_100Thin } from '@expo-google-fonts/roboto'

import { Background, Logo, Container, Header, Title } from '../../components/Layout/styles'

import img from '../../assets/img.png'
import logo from '../../assets/logo.png'
import phone from '../../assets/phone.png'

export default function Main ({ navigation }) {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_100Thin
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <Background source={img}>
      <Container>
        <Logo source={logo} />
        <Header>
          <Title style={{ fontFamily: 'Roboto_100Thin' }}>Selecione seu Plano</Title>
        </Header>
        <List>
          <Button onPress={() => navigation.navigate('Plano', { choice: 30 })}>
            <Cover>
              <Icon source={phone}/>
            </Cover>
            <Name style={{ fontFamily: 'Roboto_300Light' }}>30 minutos</Name>
          </Button>

          <Button onPress={() => navigation.navigate('Plano', { choice: 60 })}>
            <Cover>
              <Icon source={phone}/>
            </Cover>
            <Name style={{ fontFamily: 'Roboto_300Light' }}>60 minutos</Name>
          </Button>

          <Button onPress={() => navigation.navigate('Plano', { choice: 120 })}>
            <Cover>
              <Icon source={phone}/>
            </Cover>
            <Name style={{ fontFamily: 'Roboto_300Light' }}>120 minutos</Name>
          </Button>
        </List>
      </Container>

    </Background>
  )
}
