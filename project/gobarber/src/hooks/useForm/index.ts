import * as Yup from 'yup'
import { ValidateFormProps } from './types'
import { getValidationErrors } from '../../services/error'

const useForm = (): [(props: ValidateFormProps) => Promise<boolean>] => {
  const formIsValid = async ({
    formRef,
    formData,
    shape,
  }: ValidateFormProps): Promise<boolean> => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape(shape)

      await schema.validate(formData, {
        abortEarly: false,
      })

      return true
    } catch (errors) {
      console.error(errors)
      formRef.current?.setErrors(getValidationErrors(errors))

      return false
    }
  }

  return [formIsValid]
}

export default useForm
