import React from 'react'
import { ButtonProps } from '../../interfaces/Elements'
import * as S from './styles'

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <S.Button type="button" {...rest}>
    {children}
  </S.Button>
)

export default Button
