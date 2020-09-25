import React from 'react'
import { FiAlertCircle, FiXCircle } from 'react-icons/fi'
import * as S from './styles'

const ToastContainer: React.FC = () => {
  return (
    <S.Container>
      <S.Toast>
        <FiAlertCircle size={20} />

        <S.ToastDescription>
          <S.Title>Aconteceu um erro</S.Title>
        </S.ToastDescription>

        <S.Button>
          <FiXCircle size={18} />
        </S.Button>
      </S.Toast>

      <S.Toast type="success" hasDescription>
        <FiAlertCircle size={20} />

        <S.ToastDescription>
          <S.Title>Aconteceu um erro</S.Title>
          <S.Description>
            Não foi possível fazer login na aplicação
          </S.Description>
        </S.ToastDescription>

        <S.Button>
          <FiXCircle size={18} />
        </S.Button>
      </S.Toast>

      <S.Toast type="error" hasDescription>
        <FiAlertCircle size={20} />

        <S.ToastDescription>
          <S.Title>Aconteceu um erro</S.Title>
          <S.Description>
            Não foi possível fazer login na aplicação
          </S.Description>
        </S.ToastDescription>

        <S.Button>
          <FiXCircle size={18} />
        </S.Button>
      </S.Toast>
    </S.Container>
  )
}

export default ToastContainer
