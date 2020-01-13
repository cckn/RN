import React from 'react'
import styled from 'styled-components/native'

import Background from './Background'
import TextInput from './TextInput'

const Container = styled.KeyboardAvoidingView`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: flex-end;
`

interface Props {
  hideTodoInput: () => void
}

const TodoInput: React.FC<Props> = ({ hideTodoInput }) => {
  return (
    <>
      <Container behavior="padding">
        <Background onPress={hideTodoInput} />
        <TextInput hideTodoInput={hideTodoInput} />
      </Container>
    </>
  )
}
export default TodoInput
