import React from 'react'
import * as S from './styles'
import { TooltipProps } from './types'

const Tooltip: React.FC<TooltipProps> = ({ title, className, children }) => {
  return (
    <S.Container className={className}>
      {children}
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}

export default Tooltip
