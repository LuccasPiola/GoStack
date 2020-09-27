import { useNavigation } from '@react-navigation/native'
import { FormHandles } from '@unform/core'
import React, { useCallback, useRef } from 'react'
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  View,
} from 'react-native'
import * as Yup from 'yup'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather'
import logoImg from '../../assets/logo.png'
import Button from '../../components/Button'
import Input from '../../components/Input'
import useForm from '../../hooks/useForm'
import { SignUpFormData } from './types'
import * as S from './styles'
import api from '../../services/api'

const SignUp: React.FC = () => {
  const navigation = useNavigation()
  const formRef = useRef<FormHandles>(null)
  const emailInputRef = useRef<TextInput>(null)
  const passwordInputRef = useRef<TextInput>(null)
  const [formIsValid] = useForm()

  const validateForm = useCallback(
    async formData => {
      const shape = {
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 caracteres'),
      }
      const isValid = await formIsValid({
        formData,
        formRef,
        shape,
      })

      return isValid
    },
    [formIsValid],
  )

  const handleSubmit = useCallback(
    async (formData: SignUpFormData) => {
      const isValid = await validateForm(formData)

      if (isValid) {
        try {
          await api.post('/users', formData)
          Alert.alert(
            'Cadastro realizado!',
            'Você já pode fazer seu logon no GoBarber!',
          )
          navigation.goBack()
        } catch {
          Alert.alert(
            'Erro no cadastro',
            'Ocorreu um erro ao fazer o cadastro, tente novamente',
          )
        }
      }
    },
    [validateForm, navigation],
  )
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

            <S.Form onSubmit={handleSubmit} ref={formRef}>
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
