import { FormHandles } from '@unform/core'
import { RefObject } from 'react'
import { ObjectSchemaDefinition } from 'yup'

export interface ValidateFormProps {
  formRef: RefObject<FormHandles>
  formData: Record<string, unknown>
  shape: ObjectSchemaDefinition<Record<string, unknown>>
}
