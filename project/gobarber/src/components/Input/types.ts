import { TextInputProps } from 'react-native'

export interface InputProps extends TextInputProps {
  name: string
  icon: string
}

export interface InputValueReference {
  value: string
}

export interface InputRef {
  focus: () => void
}

export interface StyledContainerProps {
  hasFocus: boolean
  hasError: boolean
}
