import React, { useState } from 'react'

import { Background, Logo, Container, Header, Title } from '../../components/Layout/styles'

import { useFonts, Roboto_300Light, Roboto_100Thin } from '@expo-google-fonts/roboto'

import { Alert } from 'react-native'

import { AppLoading } from 'expo'

import img from '../../assets/img.png'
import logo from '../../assets/logo.png'
import home from '../../assets/home.png'
import compass from '../../assets/compass.png'
import clock from '../../assets/clock.png'

import {
  Flat,
  List,
  Button,
  Cover,
  Input,
  Icon,
  Calculo,
  Name
} from './styles'

export default function Plano ({ route, navigation }) {
  const [origin, setOrigin] = useState()

  const [destiny, setDestiny] = useState()

  const [time, setTime] = useState()

  const { choice } = route.params

  const prices = {
    '011': { '016': 1.9, '017': 1.7, '018': 1.9 },
    '016': { '011': 2.9 },
    '017': { '011': 2.7 },
    '018': { '011': 1.9 }
  }

  function validateInput () {
    if (!origin || !prices[origin]) {
      Alert.alert('DDD de origem incorreto! Verifique novamente!')

      return 0
    }

    if (!destiny || !prices[destiny]) {
      Alert.alert('DDD de destino incorreto! Verifique novamente!')

      return 0
    }

    if (!prices[origin][destiny]) {
      Alert.alert('DDDs não existe! Verifique novamente!')

      return 0
    }

    if (!time || isNaN(time)) {
      Alert.alert('Tempo incorreto! Verifique novamente!')

      return 0
    } else {
      navigation.navigate(
        'FaleMais',
        { origin: origin, destiny: destiny, time: time, prices: prices, choice: choice })
    }
  }

  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_100Thin
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Background source={img}>
      <Flat>
        <Container>
          <Logo source={logo} />
          <Header>
            <Title style={{ fontFamily: 'Roboto_100Thin' }}>
            Plano {choice}
            </Title>
          </Header>

          <List>
            <Button>
              <Cover>
                <Icon source={home}/>
              </Cover>

              <Input
                placeholder=' Digite seu DDD'
                onChangeText={(origin) => setOrigin(origin)}
                placeholderTextColor='#8D5C09'
                style={{ fontFamily: 'Roboto_300Light' }} />
            </Button>

            <Button>
              <Cover>
                <Icon source={compass}/>
              </Cover>

              <Input
                placeholder=' Digite seu outro DDD'
                onChangeText={(destiny) => setDestiny(destiny)}
                placeholderTextColor='#8D5C09'
                style={{ fontFamily: 'Roboto_300Light' }} />
            </Button>

            <Button>
              <Cover>
                <Icon source={clock}/>
              </Cover>

              <Input
                placeholder=' Digite o tempo'
                onChangeText={(time) => setTime(time)}
                placeholderTextColor='#8D5C09'
                style={{ fontFamily: 'Roboto_300Light' }} />
            </Button>

            <Calculo onPress={() => validateInput()}>
              <Name style={{ fontFamily: 'Roboto_300Light' }}>Calcular</Name>
            </Calculo>

          </List>

        </Container>
      </Flat>

    </Background>

  )
}
