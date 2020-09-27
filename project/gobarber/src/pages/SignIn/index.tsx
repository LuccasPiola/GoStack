import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useRef } from 'react'
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  TextInput,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather'
import { FormHandles } from '@unform/core'
import logoImg from '../../assets/logo.png'
import Button from '../../components/Button'
import Input from '../../components/Input'
import * as S from './styles'

const SignIn: React.FC = () => {
  const navigation = useNavigation()
  const formRef = useRef<FormHandles>(null)
  const passwordInputRef = useRef<TextInput>(null)

  const handleSignIn = useCallback((formData: Record<string, unknown>) => {
    console.log(formData)
  }, [])

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <S.Container>
            <Image source={logoImg} />
            <View>
              <S.Title>Faça seu logon</S.Title>
            </View>
            <S.Form onSubmit={handleSignIn} ref={formRef}>
              <Input
                name="email"
                icon="mail"
                placeholder="E-mail"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus()
                }}
              />
              <Input
                secureTextEntry
                name="password"
                icon="lock"
                placeholder="Senha"
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm()
                }}
                ref={passwordInputRef}
              />

              <Button
                onPress={() => {
                  formRef.current?.submitForm()
                }}
              >
                Entrar
              </Button>
            </S.Form>

            <S.ForgotPassword>
              <S.ForgotPasswordText>Esqueci minha senha</S.ForgotPasswordText>
            </S.ForgotPassword>
          </S.Container>
        </ScrollView>

        <S.CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
          <Icon name="log-in" size={20} color="#ff9000" />
          <S.CreateAccountButtonText>Criar conta</S.CreateAccountButtonText>
        </S.CreateAccountButton>
      </KeyboardAvoidingView>
    </>
  )
}

export default SignIn
