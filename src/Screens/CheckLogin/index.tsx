import AsyncStorage from '@react-native-community/async-storage'
import React from 'react'
import styled from 'styled-components/native'
import { ActivityIndicator } from 'react-native'
import { NavigationScreenProp, NavigationState } from 'react-navigation'

const Container = styled.View`
  flex: 1;
  background-color: #141414;
  justify-content: center;
  align-items: center;
`

interface Props {
  navigation: NavigationScreenProp<NavigationState>
}

const CheckLogin = ({ navigation }: Props) => {
  AsyncStorage.getItem('key')
    .then((value) => {
      if (value) {
        navigation.navigate('MovieNavigator')
      } else {
        navigation.navigate('LoginNavigator')
      }
    })
    .catch((error: Error) => {
      console.log(error)
    })
  return (
    <Container>
      <ActivityIndicator size="large" color="#e70915" />
    </Container>
  )
}

// CheckLogin.navigationOptions = {
//   header: null,
// }

export default CheckLogin
