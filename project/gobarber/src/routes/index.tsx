import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { useAuthContext } from '../context/AuthContext'
import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

const Routes: React.FC = () => {
  const { user, loading } = useAuthContext()

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    )
  }

  return user ? <AppRoutes /> : <AuthRoutes />
}

export default Routes
