import authConfig from '@config/auth'
import { TokenPayload } from '@modules/users/interfaces/Sessions'
import AppError from '@shared/errors/AppError'
import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

const ensureAuthenticated = (
  request: Request,
  response: Response,
  next: NextFunction,
): void => {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError('JWT token is missing.', 403)
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
    throw new AppError('Invalid JWT token', 403)
  }
}

export default ensureAuthenticated
