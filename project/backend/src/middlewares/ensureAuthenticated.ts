import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { TokenPayload } from '../interfaces/Sessions'
import authConfig from '../config/auth'

const ensureAuthenticated = (
  request: Request,
  response: Response,
  next: NextFunction,
): void => {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new Error('JWT token is missing.')
  }

  const [, token] = authHeader.split(' ')
  const { secret } = authConfig.jwt
  try {
    const decoded = verify(token, secret)
    const { sub } = decoded as TokenPayload

    request.user = {
      id: sub,
    }
    return next()
  } catch {
    throw new Error('Invalid JWT token')
  }
}

export default ensureAuthenticated
