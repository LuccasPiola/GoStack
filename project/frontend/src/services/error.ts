import { ValidationError } from 'yup'
import { DefaultError } from '../interfaces/Errors'

export const getValidationErrors = (errors: ValidationError): DefaultError => {
  const defaultErrors: DefaultError = {}

  errors.inner.forEach(error => {
    defaultErrors[error.path] = error.message
  })

  return defaultErrors
}
