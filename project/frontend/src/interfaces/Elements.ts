import React, { ButtonHTMLAttributes, InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  icon: React.ComponentType<IconBaseProps>
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
