import styled from 'styled-components'
import Tooltip from '../Tooltip'
import { ContainerProps } from './types'

export const Container = styled.div<ContainerProps>`
  color: ${({ isFocused, isFilled }) =>
    isFocused || isFilled ? '#ff9000' : '#666360'};
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  border-color: ${({ hasError }) => hasError && '#c53030'};
  border-color: ${({ isFocused }) => isFocused && '#ff9000'};
  padding: 16px;
  width: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  transition: color 0.5s ease, border-color 0.5s ease;

  svg {
    margin-right: 16px;
  }

  & + div {
    margin-top: 8px;
  }
`

export const Input = styled.input`
  background: transparent;
  border: 0;
  color: #f4ede8;
  width: 100%;

  ::placeholder {
    color: #666360;
  }
`
export const Error = styled(Tooltip)`
  width: 20px;
  height: 20px;
  margin-left: 16px;
  svg {
    margin-left: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`
