import React, { useEffect, useRef, useState, useCallback } from 'react'
import { useField } from '@unform/core'
import { FiAlertCircle } from 'react-icons/fi'
import { InputProps } from './types'
import * as S from './styles'

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue, error, registerField } = useField(name)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(!!defaultValue)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])

  const handleFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleBlur = useCallback(async () => {
    setIsFocused(false)
    setIsFilled(!!inputRef.current?.value)
  }, [])

  return (
    <S.Container hasError={!!error} isFocused={isFocused} isFilled={isFilled}>
      {Icon && <Icon size={20} />}
      <S.Input
        onFocus={handleFocus}
        onBlur={handleBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
      {error && (
        <S.Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </S.Error>
      )}
    </S.Container>
  )
}

export default Input
