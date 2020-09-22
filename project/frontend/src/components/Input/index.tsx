import React from 'react'
import { InputProps } from '../../interfaces/Elements'
import * as S from './styles'

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  <S.Container>
    {Icon && <Icon size={20} />}
    <S.Input {...rest} />
  </S.Container>
)

export default Input
