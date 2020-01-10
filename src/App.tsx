import React from 'react'
import styled from 'styled-components/native'
import Counter from './Screens/Counter'

const Container = styled.View`
  flex: 1;
  background-color: #eee;
`

const App = () => {
  return (
    <Container>
      <Counter title="카운터 예제" initValue={5} />
    </Container>
  )
}
export default App
