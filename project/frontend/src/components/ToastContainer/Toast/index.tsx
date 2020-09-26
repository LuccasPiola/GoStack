import React, { useEffect } from 'react'
import { FiAlertCircle, FiXCircle, FiCheckCircle, FiInfo } from 'react-icons/fi'
import { ToastProps } from './types'
import * as S from './styles'
import { useToastContext } from '../../../context/ToastContext'

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
}

const Toast: React.FC<ToastProps> = ({ message, style, ...rest }) => {
  const { removeToast } = useToastContext()

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [message.id, removeToast])

  return (
    <S.Toast
      type={message.type}
      hasDescription={!!message.description}
      style={style}
    >
      {icons[message.type || 'info']}

      <S.ToastDescription>
        <S.Title>{message.title}</S.Title>
        {message.description && (
          <S.Description>{message.description}</S.Description>
        )}
      </S.ToastDescription>

      <S.Button onClick={() => removeToast(message.id)}>
        <FiXCircle size={18} />
      </S.Button>
    </S.Toast>
  )
}

export default Toast
