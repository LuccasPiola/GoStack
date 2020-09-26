import React from 'react'
import * as S from './styles'
import { ButtonProps } from './types'

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <S.Container {...rest}>
      <S.ButtonText>{children}</S.ButtonText>
    </S.Container>
  )
}

export default Button
