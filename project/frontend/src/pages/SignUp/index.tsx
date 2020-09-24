import React, { useCallback, useRef } from 'react'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import * as Yup from 'yup'
import logo from '../../assets/svg/logo.svg'
import Button from '../../components/Button'
import Input from '../../components/Input'
import * as S from './styles'
import useForm from '../../hooks/useForm'

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const [formIsValid] = useForm()

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
    async formData => {
      const isValid = await validateForm(formData)

      if (isValid) {
        console.log(formData)
      }
    },
    [validateForm],
  )

  return (
    <S.Container>
      <S.Background />
      <S.Content>
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
        <S.GoBack href="#">
          <FiArrowLeft />
          Voltar para logon
        </S.GoBack>
      </S.Content>
    </S.Container>
  )
}

export default SignUp
