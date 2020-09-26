import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, KeyboardAvoidingView, Platform, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather'
import logoImg from '../../assets/logo.png'
import Button from '../../components/Button'
import Input from '../../components/Input'
import * as S from './styles'

const SignUp: React.FC = () => {
  const navigation = useNavigation()
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

            <Input name="name" icon="user" placeholder="Nome" />
            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />

            <Button
              onPress={() => {
                console.log('Deu')
              }}
            >
              Entrar
            </Button>
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
