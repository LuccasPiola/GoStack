import React from 'react'
import * as S from './styles'
import { InputProps } from './types'

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  return (
    <S.Container>
      <S.Icon name={icon} size={20} color="#666360" />
      <S.TextInput
        {...rest}
        placeholderTextColor="#666360"
        keyboardAppearance="dark"
      />
    </S.Container>
  )
}

export default Input
