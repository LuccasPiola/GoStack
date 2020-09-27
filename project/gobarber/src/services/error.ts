import { ValidationError } from 'yup'

export interface DefaultError {
  [key: string]: string
}

export const getValidationErrors = (errors: ValidationError): DefaultError => {
  const defaultErrors: DefaultError = {}

  errors.inner.forEach(error => {
    defaultErrors[error.path] = error.message
  })

  return defaultErrors
}
