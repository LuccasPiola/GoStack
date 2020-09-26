import { animated } from 'react-spring'
import styled, { css } from 'styled-components'
import { StyledToastProps } from './types'

const toastTypeVariation = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
}

export const Toast = styled(animated.div)<StyledToastProps>`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  ${({ type }) => toastTypeVariation[type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  & + div {
    margin-top: 8px;
  }

  ${({ hasDescription }) =>
    !hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`

export const ToastDescription = styled.div`
  flex: 1;
`

export const Title = styled.strong``

export const Description = styled.p`
  margin-top: 4px;
  font-size: 14px;
  opacity: 0.8;
  line-height: 20px;
`

export const Button = styled.button`
  position: absolute;
  right: 16px;
  top: 19px;
  opacity: 0.6;
  border: 0;
  background: transparent;
  color: inherit;
`
