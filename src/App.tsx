import React from 'react'
import { StatusBar } from 'react-native'
import Navigator from '~/Screens/Navigator'

interface Props {}

const App = ({}: Props) => {
  return (
    <>
      <StatusBar barStyle="light-content"></StatusBar>
      <Navigator></Navigator>
    </>
  )
}

export default App
