import React, { createContext, useCallback, useContext } from 'react'
import ToastContainer from '../../components/ToastContainer'
import { ToastContextState } from './types'

const ToastContext = createContext<ToastContextState>({} as ToastContextState)

const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('addToast')
  }, [])
  const removeToast = useCallback(() => {
    console.log('removeToast')
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  )
}

const useToastContext = (): ToastContextState => {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('useToastContext must be used within a ToastProvider')
  }

  return context
}

export { ToastProvider, useToastContext }
