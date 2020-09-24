import React from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import logo from '../../assets/svg/logo.svg'
import Button from '../../components/Button'
import Input from '../../components/Input'
import * as S from './styles'

const SignIn: React.FC = () => (
  <S.Container>
    <S.Content>
      <S.Logo src={logo} />
      <S.Form>
        <S.Title>Faça seu logon</S.Title>
        {/* <Input placeholder="E-mail" icon={FiMail} name="email" />
        <Input
          placeholder="Senha"
          icon={FiLock}
          type="password"
          name="password"
        /> */}

        <Button type="submit">Entrar</Button>

        <S.ForgotPassword href="#">Esqueci minha senha</S.ForgotPassword>
      </S.Form>
      <S.CreateAccount href="#">
        <FiLogIn />
        Criar conta
      </S.CreateAccount>
    </S.Content>
    <S.Background />
  </S.Container>
)

export default SignIn
