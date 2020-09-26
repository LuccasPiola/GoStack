import React, { useCallback, useRef } from 'react'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import logo from '../../assets/svg/logo.svg'
import Button from '../../components/Button'
import Input from '../../components/Input'
import useForm from '../../hooks/useForm'
import * as S from './styles'
import { SignInFormData } from './types'
import { useAuthContext } from '../../context/AuthContext'

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const { signIn } = useAuthContext()
  const [formIsValid] = useForm()

  const validateForm = useCallback(
    async formData => {
      const shape = {
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
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
    async (formData: SignInFormData) => {
      const isValid = await validateForm(formData)

      if (isValid) {
        signIn({
          email: formData.email,
          password: formData.password,
        })
      }
    },
    [validateForm, signIn],
  )

  return (
    <S.Container>
      <S.Content>
        <S.AnimationContainer>
          <S.Logo src={logo} />
          <S.StyledForm ref={formRef} onSubmit={handleSubmit}>
            <S.Title>Faça seu logon</S.Title>
            <Input placeholder="E-mail" icon={FiMail} name="email" />
            <Input
              placeholder="Senha"
              icon={FiLock}
              type="password"
              name="password"
            />

            <Button type="submit">Entrar</Button>

            <S.ForgotPassword href="#">Esqueci minha senha</S.ForgotPassword>
          </S.StyledForm>
          <S.CreateAccount to="/signup">
            <FiLogIn />
            Criar conta
          </S.CreateAccount>
        </S.AnimationContainer>
      </S.Content>
      <S.Background />
    </S.Container>
  )
}

export default SignIn
