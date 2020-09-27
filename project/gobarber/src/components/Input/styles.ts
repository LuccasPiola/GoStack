import styled, { css } from 'styled-components/native'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { StyledContainerProps } from './types'

export const Container = styled.View<StyledContainerProps>`
  width: 100%;
  height: 60px;
  padding: 16px;
  background: #232129;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #232129;

  flex-direction: row;
  align-items: center;

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: #c53030;
    `}

  ${({ hasFocus }) =>
    hasFocus &&
    css`
      border-color: #ff9000;
    `}
`

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`
