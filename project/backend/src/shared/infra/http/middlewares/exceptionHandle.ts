import AppError from '@shared/errors/AppError'
import { NextFunction, Request, Response } from 'express'

const exceptionHandle = (
  error: Error,
  request: Request,
  response: Response,
  _: NextFunction,
): Response => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    })
  }

  // eslint-disable-next-line no-console
  console.error(error)

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  })
}

export default exceptionHandle
