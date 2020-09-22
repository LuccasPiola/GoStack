export interface RequestToCreateSession {
  email: string
  password: string
}

export interface TokenPayload {
  iat: number
  exp: number
  sub: string
}
