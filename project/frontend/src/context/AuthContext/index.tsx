import React, { createContext, useCallback, useContext, useState } from 'react'
import api from '../../services/api'
import { useToastContext } from '../ToastContext'
import { AuthContextState, AuthState, SignInKeys } from './types'

const AuthContext = createContext<AuthContextState>({} as AuthContextState)

const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoBarber:token')
    const user = localStorage.getItem('@Gobarber:user')

    if (token && user) return { token, user: JSON.parse(user) }

    return {} as AuthState
  })
  const { addToast } = useToastContext()

  const signIn = useCallback(
    async ({ email, password }: SignInKeys): Promise<void> => {
      try {
        const response = await api.post('sessions', {
          email,
          password,
        })

        const { user, token } = response.data

        localStorage.setItem('@GoBarber:token', token)
        localStorage.setItem('@Gobarber:user', JSON.stringify(user))

        setAuthData({ token, user })
      } catch (error) {
        console.error(error)
        addToast()
      }
    },
    [addToast],
  )

  const signOut = useCallback(() => {
    localStorage.removeItem('@GoBarber:token')
    localStorage.removeItem('@Gobarber:user')

    setAuthData({} as AuthState)
  }, [])

  return (
    <AuthContext.Provider value={{ user: authData.user, signIn, signOut }}>
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
