import React from 'react'
import styled from 'styled-components/native'

import { TodoListContextProvider } from '~/Context/TodoListContext'

import Todo from './Screens/Todo'

const Container = styled.View`
  flex: 1;
  background-color: #eee;
`

const App = () => {
  return (
    <TodoListContextProvider>
      <Container>
        <Todo />
      </Container>
    </TodoListContextProvider>
  )
}
export default App
