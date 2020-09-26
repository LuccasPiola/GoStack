import styled, { keyframes } from 'styled-components'
import { shade } from 'polished'
import { Link } from 'react-router-dom'
import background from '../../assets/png/sign-up-background.png'

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  } to {
    opacity: 1;
    transform: translateX(0);
  }
`

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

export const AnimationContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  animation: ${appearFromRight} 1s;
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

export const GoBack = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  margin-top: 24px;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${shade(0.2, '#fff')};
  }

  svg {
    margin-right: 16px;
  }
`
