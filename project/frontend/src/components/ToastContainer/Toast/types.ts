import { ToastMessage } from '../../../context/ToastContext/types'

export interface ToastProps {
  message: ToastMessage
  style: Record<string, unknown>
}

export interface StyledToastProps {
  type?: 'error' | 'success' | 'info'
  hasDescription: boolean
}
