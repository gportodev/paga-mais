import React, { useMemo } from 'react'

import { Background, Logo, Container, Header, Title } from '../../components/Layout/styles'

import { useFonts, Roboto_300Light, Roboto_100Thin } from '@expo-google-fonts/roboto'
import { AppLoading } from 'expo'

import img from '../../assets/img.png'
import logo from '../../assets/logo.png'

import {
  List,
  Output,
  Name
} from './styles'

export default function FaleMais ({ route }) {
  const { origin, destiny, time, prices, choice } = route.params

  const planCost = useMemo(() => {
    const excedingMinutes = time - choice

    if (excedingMinutes <= 0) return 0

    const result = (prices[origin][destiny] * excedingMinutes * 1.1).toFixed(2)

    return result
  }, [origin, destiny, time, prices])

  const noPlanCost = useMemo(() => {
    const result = (prices[origin][destiny] * time).toFixed(2)

    return result
  }, [origin, destiny, time, prices])

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
          <Title style={{ fontFamily: 'Roboto_100Thin' }}>Valor</Title>
        </Header>

        <List>
          <Output style={{
            backgroundColor: '#04D000'
          }}>
            <Name style={{ fontFamily: 'Roboto_300Light' }}>
              Com o Plano:  R$ {planCost}

            </Name>
          </Output>

          <Output style={{
            backgroundColor: '#8D5C09'
          }}>
            <Name style={{ fontFamily: 'Roboto_300Light' }}>
              Sem o Plano:  R$ {noPlanCost}

            </Name>
          </Output>

        </List>

      </Container>

    </Background>

  )
}
