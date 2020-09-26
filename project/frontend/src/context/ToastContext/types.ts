export interface ToastMessage {
  id: string
  type?: 'success' | 'error' | 'info'
  title: string
  description?: string
}

export interface ToastContextState {
  addToast: (message: Omit<ToastMessage, 'id'>) => void
  removeToast: (id: string) => void
}
