import React from 'react'
import { AuthProvider } from './AuthContext'
import { ToastProvider } from './ToastContext'

const AppProvider: React.FC = ({ children }) => (
  <ToastProvider>
    <AuthProvider>{children}</AuthProvider>
  </ToastProvider>
)

export default AppProvider
