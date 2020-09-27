import { useField } from '@unform/core'
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import * as S from './styles'
import { InputProps, InputRef, InputValueReference } from './types'

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, icon, ...rest },
  ref,
) => {
  const [hasFocus, setHasFocus] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const inputElementRef = useRef<any>(null)
  const { registerField, defaultValue = '', fieldName, error } = useField(name)
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue })

  const handleInputFocus = useCallback(() => {
    setHasFocus(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setHasFocus(false)
    setIsFilled(!!inputValueRef.current.value)
  }, [])

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputElementRef.current.focus()
    },
  }))

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue: (thisRef: any, value) => {
        inputValueRef.current.value = value
        inputElementRef.current.setNativeProps({ text: value })
      },
      clearValue: () => {
        inputValueRef.current.value = ''
        inputElementRef.current.clear()
      },
    })
  }, [fieldName, registerField])

  return (
    <S.Container hasFocus={hasFocus} hasError={!!error}>
      <S.Icon
        name={icon}
        size={20}
        color={hasFocus || isFilled ? '#ff9000' : '#666360'}
      />
      <S.TextInput
        {...rest}
        placeholderTextColor="#666360"
        keyboardAppearance="dark"
        onChangeText={value => {
          inputValueRef.current.value = value
        }}
        defaultValue={defaultValue}
        ref={inputElementRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </S.Container>
  )
}

export default forwardRef(Input)
