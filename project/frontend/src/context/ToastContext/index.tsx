import React, { createContext, useCallback, useContext, useState } from 'react'
import { v4 } from 'uuid'
import ToastContainer from '../../components/ToastContainer'
import { ToastMessage, ToastContextState } from './types'

const ToastContext = createContext<ToastContextState>({} as ToastContextState)

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([])

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      const id = v4()
      const toast = {
        id,
        type,
        title,
        description,
      }

      setMessages(oldMessages => [...oldMessages, toast])
    },
    [],
  )
  const removeToast = useCallback((id: string) => {
    setMessages(oldMessages => oldMessages.filter(message => message.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
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
