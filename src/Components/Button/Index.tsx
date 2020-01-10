import React from 'react'
import styled from 'styled-components/native'

const Container = styled.TouchableOpacity``
const Icon = styled.Image``

interface Props {
  iconName: 'add_circle' | 'remove_circle'
  onPress?: () => void
}

const Button = ({ iconName, onPress }: Props) => {
  return (
    <Container onPress={onPress}>
      <Icon
        source={
          iconName === 'add_circle'
            ? require('~/Assets/Images/add_circle.png')
            : require('~/Assets/Images/remove_circle.png')
        }
      />
    </Container>
  )
}

export default Button
