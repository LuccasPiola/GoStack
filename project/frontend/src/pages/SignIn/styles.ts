import styled from 'styled-components'
import { shade } from 'polished'
import background from '../../assets/png/sign-in-background.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  align-items: center;
`

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center;
  background-size: cover;
`

export const Logo = styled.img``

export const Form = styled.form`
  margin: 80px 0;
  width: 340px;
  text-align: center;
`

export const Title = styled.h1`
  margin-bottom: 24px;
`

export const ForgotPassword = styled.a`
  color: #f4ede8;
  display: block;
  margin-top: 24px;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${shade(0.2, '#f4ede8')};
  }
`

export const CreateAccount = styled.a`
  color: #ff9000;
  display: flex;
  align-items: center;
  margin-top: 24px;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${shade(0.2, '#ff9000')};
  }

  svg {
    margin-right: 16px;
  }
`
