import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
const Label = styled.Text``

interface Props {}

const EmptyItem: React.FC<Props> = () => {
  return (
    <>
      <Container>
        <Label>하단에 "+" 버튼을 눌러 새로운 할 일을 등록하세요.</Label>
      </Container>{' '}
    </>
  )
}
export default EmptyItem
