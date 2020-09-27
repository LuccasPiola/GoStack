export interface AuthState {
  token: string
  user: Record<string, unknown>
}

export interface SignInKeys {
  email: string
  password: string
}

export interface AuthContextState {
  user: Record<string, unknown>
  signIn: (data: SignInKeys) => Promise<void>
  signOut: () => void
  loading: boolean
}
