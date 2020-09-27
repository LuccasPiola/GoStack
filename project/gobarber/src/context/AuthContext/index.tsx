import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { Alert } from 'react-native'
import api from '../../services/api'
import { AuthContextState, AuthState, SignInKeys } from './types'

const AuthContext = createContext<AuthContextState>({} as AuthContextState)

const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<AuthState>({} as AuthState)
  const [loading, setLoading] = useState(true)

  const loadStoragedData = useCallback(async (): Promise<void> => {
    const [token, user] = await AsyncStorage.multiGet([
      '@GoBarber:token',
      '@Gobarber:user',
    ])

    if (token[1] && user[1])
      setAuthData({ token: token[1], user: JSON.parse(user[1]) })

    setLoading(false)
  }, [])

  useEffect(() => {
    loadStoragedData()
  }, [loadStoragedData])

  const signIn = useCallback(async ({ email, password }: SignInKeys): Promise<
    void
  > => {
    try {
      const response = await api.post('sessions', {
        email,
        password,
      })

      const { user, token } = response.data

      await AsyncStorage.multiSet([
        ['@GoBarber:token', token],
        ['@Gobarber:user', JSON.stringify(user)],
      ])

      setAuthData({ token, user })
    } catch (error) {
      console.error(error)
      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro ao fazer login. Cheque as credenciais',
      )
    }
  }, [])

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@GoBarber:token', '@Gobarber:user'])
    setAuthData({} as AuthState)
  }, [])

  return (
    <AuthContext.Provider
      value={{ user: authData.user, signIn, signOut, loading }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuthContext = (): AuthContextState => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }

  return context
}

export { AuthContext, AuthProvider, useAuthContext }
