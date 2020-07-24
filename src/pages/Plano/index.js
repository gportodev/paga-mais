import React, { useState } from 'react'

import { Background, Logo, Container, Header, Title } from '../../components/Layout/styles'

import { useFonts, Roboto_300Light, Roboto_100Thin } from '@expo-google-fonts/roboto'

import { AppLoading } from 'expo'

import img from '../../assets/img.png'
import logo from '../../assets/logo.png'
import phone from '../../assets/phone.png'
import home from '../../assets/home.png'
import compass from '../../assets/compass.png'
import clock from '../../assets/clock.png'

import {
  Flat,
  Input,
  List,
  Cover,
  Icon,
  Button,
  Name,
  Calculo
} from './styles'

export default function Plano ({ route, navigation }) {
  const [origin, setOrigin] = useState()

  const [destiny, setDestiny] = useState()

  const [time, setTime] = useState()

  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_100Thin
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const { choice } = route.params

  return (
    <Flat>
      <Background source={img}>
        <Container>
          <Logo source={logo} />
          <Header>
            <Title style={{ fontFamily: 'Roboto_100Thin' }}>
            Plano {choice}
            </Title>
          </Header>

          <List>

          </List>

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

            <Calculo onPress={() => navigation.navigate(
              'FaleMais',
              { origin: origin, destiny: destiny, time: time, choice: choice })
            }>
              {console.log(origin, destiny, time)}
              <Name style={{ fontFamily: 'Roboto_300Light' }}>Calcular</Name>
            </Calculo>

          </List>

        </Container>

      </Background>
    </Flat>

  )
}
