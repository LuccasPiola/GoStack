import React, { useCallback, useRef } from 'react'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'
import logo from '../../assets/svg/logo.svg'
import Button from '../../components/Button'
import Input from '../../components/Input'
import * as S from './styles'
import useForm from '../../hooks/useForm'
import { SignUpFormData } from './types'
import api from '../../services/api'
import { useToastContext } from '../../context/ToastContext'

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const [formIsValid] = useForm()
  const { addToast } = useToastContext()
  const history = useHistory()

  const validateForm = useCallback(
    async formData => {
      const shape = {
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 caracteres'),
      }
      const isValid = await formIsValid({
        formData,
        formRef,
        shape,
      })

      return isValid
    },
    [formIsValid],
  )

  const handleSubmit = useCallback(
    async (formData: SignUpFormData) => {
      const isValid = await validateForm(formData)

      if (isValid) {
        try {
          await api.post('/users', formData)
          addToast({
            type: 'success',
            title: 'Cadastro realizado!',
            description: 'Você já pode fazer seu logon no GoBarber!',
          })
          history.push('/')
        } catch {
          addToast({
            type: 'error',
            title: 'Erro no cadastro',
            description: 'Ocorreu um erro ao fazer o cadastro, tente novamente',
          })
        }
      }
    },
    [validateForm, addToast, history],
  )

  return (
    <S.Container>
      <S.Background />
      <S.Content>
        <S.AnimationContainer>
          <S.Logo src={logo} />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <S.Title>Faça seu cadastro</S.Title>
            <Input placeholder="Nome" icon={FiUser} name="name" />
            <Input placeholder="E-mail" icon={FiMail} name="email" />
            <Input
              placeholder="Senha"
              icon={FiLock}
              type="password"
              name="password"
            />

            <Button type="submit">Cadastrar</Button>
          </Form>
          <S.GoBack to="/">
            <FiArrowLeft />
            Voltar para logon
          </S.GoBack>
        </S.AnimationContainer>
      </S.Content>
    </S.Container>
  )
}

export default SignUp
