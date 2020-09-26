import React from 'react'
import { useTransition } from 'react-spring'
import * as S from './styles'
import Toast from './Toast'
import { ToastContainerProps } from './types'

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  )
  return (
    <S.Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast message={item} key={key} style={props} />
      ))}
    </S.Container>
  )
}

export default ToastContainer
