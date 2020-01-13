import React from 'react'
import styled from 'styled-components/native'
import Button from '~/Components/Button/Index'

const Container = styled.SafeAreaView`
  flex: 1;
`

const TitleContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const TitleLabel = styled.Text`
  font-size: 24px;
`

const CountContainer = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`
const CountLabel = styled.Text`
  font-size: 24px;
  font-weight: bold;
`
const ButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`

interface Props {
  title?: string
  initValue: number
}

interface State {
  count: number
}

class Counter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    console.log('constructor')

    this.state = {
      count: props.initValue,
    }
  }

  render() {
    const { title } = this.props
    const { count } = this.state
    return (
      <Container>
        {title && (
          <TitleContainer>
            <TitleLabel>{title}</TitleLabel>
          </TitleContainer>
        )}
        <CountContainer>
          <CountLabel>{count}</CountLabel>
        </CountContainer>
        <ButtonContainer>
          <Button
            iconName="add_circle"
            onPress={() => this.setState({ count: count + 1 })}
          />
          <Button
            iconName="remove_circle"
            onPress={() => this.setState({ count: count - 1 })}
          />
        </ButtonContainer>
      </Container>
    )
  }
}

export default Counter
