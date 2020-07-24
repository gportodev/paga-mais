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
  const { origin, destiny, time, choice } = route.params

  const prices = {
    '011': { '016': 1.9, '017': 1.7, '018': 1.9 },
    '016': { '011': 2.9 },
    '017': { '011': 2.7 },
    '018': { '011': 1.9 }
  }

  const planCost = useMemo(() => {
    const excedingMinutes = time - choice

    if (excedingMinutes <= 0) return 0

    if (!origin) return 0

    if (!destiny) return 0

    if (!time) return 0

    if (!prices[origin][destiny]) return 0

    const result = (prices[origin][destiny] * excedingMinutes * 1.1).toFixed(2)

    if (result === 0) return 0

    return result
  }, [origin, destiny, time, prices])

  const noPlanCost = useMemo(() => {
    if (!origin) return 0

    if (!destiny) return 0

    if (!time) return 0

    if (!prices[origin][destiny]) return 0

    return (prices[origin][destiny] * time).toFixed(2)
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
