import AsyncStorage from '@react-native-community/async-storage'
import React from 'react'
import styled from 'styled-components/native'
import { Linking } from 'react-native'
import {
  NavigationScreenProp,
  NavigationState,
  NavigationActions,
} from 'react-navigation'

import Button from '~/Components/Button'
import Input from '~/Components/Input'

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #141414;
  align-items: center;
  justify-content: center;
`
const FormContainer = styled.View`
  width: 100%;
  padding: 40px;
`
const PasswordReset = styled.Text`
  width: 100%;
  font-size: 12px;
  color: #ffffff;
  text-align: center;
`

interface Props {
  navigation: NavigationScreenProp<NavigationState>
}

const Login = ({ navigation }: Props) => {
  return (
    <>
      <Container>
        <FormContainer>
          <Input style={{ marginBotton: 16 }} placeholder="이메일"></Input>
          <Input
            style={{ marginBotton: 16 }}
            placeholder="비밀번호"
            secureTextEntry={true}
          ></Input>
          <Button
            style={{ marginBotton: 24 }}
            label="로그인"
            onPress={() => {
              console.log('test')
              AsyncStorage.setItem('key', 'JWT_KEY')
              navigation.navigate('MovieNavigator')
            }}
          ></Button>
          <PasswordReset
            onPress={() => {
              Linking.openURL('https://cckn.dev')
            }}
          >
            비밀번호 재설정
          </PasswordReset>
        </FormContainer>
      </Container>
    </>
  )
}

Login.navigationOptions = {
  title: 'MOVIEAPP',
  headerTransparent: true,
  headerTintColor: '#E70915',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}
export default Login
