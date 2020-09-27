import { useNavigation } from '@react-navigation/native'
import { FormHandles } from '@unform/core'
import React, { useCallback, useRef } from 'react'
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  View,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather'
import logoImg from '../../assets/logo.png'
import Button from '../../components/Button'
import Input from '../../components/Input'
import * as S from './styles'

const SignUp: React.FC = () => {
  const navigation = useNavigation()
  const formRef = useRef<FormHandles>(null)
  const emailInputRef = useRef<TextInput>(null)
  const passwordInputRef = useRef<TextInput>(null)

  const handleSignUp = useCallback((formData: Record<string, unknown>) => {
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
              <S.Title>Crie sua conta</S.Title>
            </View>

            <S.Form onSubmit={handleSignUp} ref={formRef}>
              <Input
                name="name"
                icon="user"
                placeholder="Nome"
                autoCorrect={false}
                autoCapitalize="words"
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus()
                }}
              />
              <Input
                ref={emailInputRef}
                name="email"
                icon="mail"
                placeholder="E-mail"
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus()
                }}
              />
              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Senha"
                secureTextEntry
                textContentType="newPassword"
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm()
                }}
              />

              <Button
                onPress={() => {
                  formRef.current?.submitForm()
                }}
              >
                Entrar
              </Button>
            </S.Form>
          </S.Container>
        </ScrollView>

        <S.BackToSignIn onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="#fff" />
          <S.BackToSignInText>Voltar para logon</S.BackToSignInText>
        </S.BackToSignIn>
      </KeyboardAvoidingView>
    </>
  )
}

export default SignUp
